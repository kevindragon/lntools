(ns tools.views.hyperlink
  (:require [re-frame.core :as rf]
            [reagent.core :as ra]
            [tools.util :refer [table]]))

(defn status []
  (let [data (rf/subscribe [:data/hyperlink-status])
        dbs (rf/subscribe [:data/settings-databases])
        t (ra/atom nil)
        stg (ra/atom "")
        lnc (ra/atom "")
        update (fn []
                 (when-let [_ (and (not (= stg "")) (not (= lnc "")))]
                   (rf/dispatch
                     [:ajax/hyperlink-get-status
                      {:stg @stg
                       :lnc @lnc}])))]
    (ra/create-class
      {:component-will-unmount
       #(js/clearInterval @t)

       :component-will-mount
       (fn []
         (rf/dispatch [:ajax/settings-get-database])
         (update)
         (reset! t (js/setInterval update 15000)))

       :reagent-render
       (fn []
         (let [{:keys [article oprLoadStatus parallel]} @data]
           [:div.status
            [:h2 "Hyperlink status"]
            [:div.top-10
             [:span "Staging database: "]
             [:select {:on-change #(reset! stg (-> % .-target .-value))}
              [:option {:value ""} " -- "]
              (for [{:keys [id name host dbname]} @dbs]
                ^{:key id} [:option {:value id} (str name " - " host "/" dbname)])]]
            [:div.top-5
             [:span "lnc database: "]
             [:select {:on-change #(reset! lnc (-> % .-target .-value))}
              [:option {:value ""} " -- "]
              (for [{:keys [id name host dbname]} @dbs]
                ^{:key id} [:option {:value id} (str name " - " host "/" dbname)])]]
            [:div
             [:button.top-5 {:on-click update}
              "update"]]
            [:div.status-list
             [:div.column
              [:h3 "stg.opr_load_status"]
              [table ["provider id" "status" "count"] (map vals oprLoadStatus)]]
             [:div.column
              [:h3 "lnc.article"]
              [table ["provider id" "status" "count"] (map vals article)]]
             [:div.column
              [:h3 "lnc.parallel"]
              [table ["count"] (map vals parallel)]]]])
         )})))

(defn prepare []
  (rf/dispatch [:ajax/settings-get-database])
  (let [db-list (rf/subscribe [:data/settings-databases])
        db (ra/atom "")
        provider-id (ra/atom "")
        status (ra/atom "")
        rows (ra/atom "")
        status-to (ra/atom "")]
    (fn []
      [:div.prepare
       [:h2 "Prepare data"]
       [table [["database" [:select {:on-change #(reset! db (-> % .-target .-value))}
                            [:option {:value ""} "--"]
                            (for [{:keys [id name host dbname]} @db-list]
                              ^{:key id} [:option {:value id} (str name " - " host "/" dbname)])]]
               ["provider id" [:input {:type "text"
                                       :on-change #(reset! provider-id (-> % .-target .-value))}]]
               ["status" [:input {:type "text"
                                  :on-change #(reset! status (-> % .-target .-value))}]]
               ["rows" [:input {:type "text"
                                :on-change #(reset! rows (-> % .-target .-value))}]]
               ["status to" [:input {:type "text"
                                     :on-change #(reset! status-to (-> % .-target .-value))}]]]]
       [:p
        [:button {:on-click #(rf/dispatch
                              [:ajax/hyperlink-update-status
                               {:dbId @db
                                :providerId @provider-id
                                :status @status
                                :rows @rows
                                :to @status-to}])}
         "Update"]]])))

(defn layout [child]
  [:div.hyperlink [child]])