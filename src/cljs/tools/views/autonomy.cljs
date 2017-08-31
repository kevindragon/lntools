(ns tools.views.autonomy
  (:require [clojure.string :as str]
            [re-frame.core :as rf]
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
                                    [:button {:on-click
                                              #(change-status
                                                 id
                                                 (:id engine) "down")}
                                     "Down"]
                                    [:button {:on-click
                                              #(change-status
                                                 id
                                                 (:id engine) "up")}
                                     "Up"]]))
                               engines)}])])})))

(defn data-gap []
  (rf/dispatch [:ajax/settings-get-dah])
  (rf/dispatch [:ajax/settings-get-data-gap])
  (rf/dispatch [:ajax/settings-get-database])
  (let [dbs       (rf/subscribe [:data/settings-databases])
        data-gaps (rf/subscribe [:data/settings-data-gaps])
        autns     (rf/subscribe [:data/settings-dahs])
        gaps      (rf/subscribe [:data/autonomy-data-gaps])
        gap-id    (ra/atom "")
        db-id     (ra/atom "")
        dah-id    (ra/atom "")
        from      (ra/atom "")
        to        (ra/atom "")]
    (fn []
      [:div.data-gap
       [:h2 "Data gap"]
       [:div
        [:div "Gap"]
        [:select {:on-change #(reset! gap-id (-> % .-target .-value))}
         [:option {:value ""} " -- "]
         (for [[idx {:keys [id name autn_db_name]}]
               (map-indexed vector @data-gaps)]
           ^{:key idx} [:option {:value id} (str name "/" autn_db_name)])]]
       [:div
        [:div "Database"]
        [:select {:on-change #(reset! db-id (-> % .-target .-value))}
         [:option {:value ""} " -- "]
         (for [[idx {:keys [id name host dbname]}]
               (map-indexed vector @dbs)]
           ^{:key idx} [:option {:value id} (str name " " host "/" dbname)])]]
       [:div.top-5
        [:div "Dah"]
        [:select {:on-change #(reset! dah-id (-> % .-target .-value))}
         [:option {:value ""} " -- "]
         (for [[idx {:keys [id name host port]}] (map-indexed vector @autns)]
           ^{:key idx} [:option {:value id} (str name " " host ":" port)])]]
       [:div.top-5
        [:div "date from"]
        [:input {:on-change #(reset! from (-> % .-target .-value))}]]
       [:div.top-5
        [:div "date to"]
        [:input {:on-change #(reset! to (-> % .-target .-value))}]]
       [:p
        [:button {:on-click #(rf/dispatch
                               [:ajax/autonomy-calc-data-gap
                                {"gap_id" @gap-id
                                 "db_id"  @db-id
                                 "dah_id" @dah-id
                                 "from"   @from
                                 "to"     @to}])} "Calculate"]]
       [:div.top-10
        [:h3 "Need fetch"]
        [:div (str/join "," (:need_fetch @gaps))]
        [:hr]
        [:h3 "Need delete"]
        [:div (str/join "," (:need_delete @gaps))]]])))

(defn layout [child]
  [:div.autonomy [child]])
