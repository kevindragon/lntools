(ns tools.views.autonomy
  (:require [re-frame.core :as rf]
            [reagent.core :as ra]
            [tools.util :refer [table]]))

(defn dih []
  (let [dih-status (rf/subscribe [:data/autonomy-dih-status])
        t (ra/atom nil)
        update (fn [] (rf/dispatch [:ajax/autonomy-get-dih]))]
    (ra/create-class
      {:component-will-mount
       (fn []
         (update)
         (reset! t (js/setInterval update 15000)))

       :component-will-unmount
       #(js/clearInterval @t)

       :reagent-render
       (fn []
         [:div.dih
          [:h2 "DIH status"]
          (for [[rid dih] (map-indexed vector @dih-status)]
            ^{:key rid}
            [table {:caption [:h2 (:name dih)]
                    :head    ["id" "received time" "description"]
                    :body    (map #(vector (:id %)
                                           (:received_time %)
                                           (:description %))
                                  (:items dih))}])])})))

(defn dah []
  (let [dah-status (rf/subscribe [:data/autonomy-dah-status])
        t (ra/atom nil)
        update (fn [] (rf/dispatch [:ajax/autonomy-get-dah]))
        change-status (fn [id engine-id status]
                        (rf/dispatch
                          [:ajax/autonomy-change-dah-status
                           {:id       id
                            :engineId engine-id
                            :status   status}])
                        (update))]
    (ra/create-class
      {:component-will-mount
       (fn []
         (update)
         (reset! t (js/setInterval update 15000)))

       :component-will-unmount
       #(js/clearInterval @t)

       :reagent-render
       (fn []
         [:div.dah
          [:h2 "DAH status"]
          (for [[rid {:keys [id name engines]}] (map-indexed vector @dah-status)]
            ^{:key rid}
            [table {:caption [:h2 name]
                    :head    ["id" "host" "aciport" "status" "weight" ""]
                    :body    (map-indexed
                               (fn [no engine]
                                 (vector (+ 1 no)
                                   (:host engine)
                                   (:aciport engine)
                                   (:status engine)
                                   (:weight engine)
                                   [:div
                                    [:button {:on-click #(change-status id (:id engine) "down")} "Down"]
                                    [:button {:on-click #(change-status id (:id engine) "up")} "Up"]]))
                               engines)}])])})))

(defn data-gap []
  (rf/dispatch [:ajax/settings-get-data-gap])
  (let [data-gaps (rf/subscribe [:data/settings-data-gaps])
        gaps (rf/subscribe [:data/autonomy-data-gaps])
        id (ra/atom "")
        from (ra/atom "")
        to (ra/atom "")]
    (fn []
      [:div.data-gap
       [:h2 "Data gap"]
       [:div
        [:div "Database"]
        [:select {:on-change #(reset! id (-> % .-target .-value))}
         [:option {:value ""} " -- "]
         (for [[idx {:keys [id name autn_db_name dah_host dah_port]}]
               (map-indexed vector @data-gaps)]
           ^{:key idx} [:option {:value id} (str name " - " dah_host ":" dah_port "/" autn_db_name)])]]
       [:div.top-5
        [:div "date from"]
        [:input {:on-change #(reset! from (-> % .-target .-value))}]]
       [:div.top-5
        [:div "date to"]
        [:input {:on-change #(reset! to (-> % .-target .-value))}]]
       [:p
        [:button {:on-click #(rf/dispatch
                               [:ajax/autonomy-calc-data-gap
                                {:dataGapId @id
                                 :from      @from
                                 :to        @to}])} "Calculate"]]
       [:div.top-10
        [:h3 "Need fetch"]
        [:div (clojure.string/join "," (:need_fetch @gaps))]
        [:hr]
        [:h3 "Need delete"]
        [:div (clojure.string/join "," (:need_delete @gaps))]]])))

(defn layout [child]
  [:div.autonomy [child]])
