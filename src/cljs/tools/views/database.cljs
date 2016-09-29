(ns tools.views.database
  (:require [re-frame.core :as rf]
            [reagent.core :as ra]
            [tools.util :refer [table]]))

(defn sync []
  (rf/dispatch [:ajax/settings-get-database])
  (fn []
    (let [databases (deref (rf/subscribe [:data/settings-databases]))
          get-table (fn [id] (rf/dispatch [:ajax/database-tables id]))
          tables (deref (rf/subscribe [:data/database-tables]))
          from (ra/atom "")
          to (ra/atom "")
          table (ra/atom "")
          ids (ra/atom "")]
      [:div.sync
       [:h2 "Sync data between database"]
       [:div
        [:div.row
         [:div "From: "]
         [:select {:on-change (fn [e]
                                (let [id (-> e .-target .-value)]
                                  (when (not (= id ""))
                                    (get-table id)
                                    (reset! from id))))}
          [:option " -- "]
          (for [[idx db] (map-indexed vector databases)]
            (let [{:keys [id name host dbname]} db]
              ^{:key idx} [:option {:value id} (str name " - " host "/" dbname)]))]]
        [:div.row
         [:div "To: "]
         [:select {:on-change #(reset! to (-> % .-target .-value))}
          [:option " -- "]
          (for [[idx db] (map-indexed vector databases)]
            (let [{:keys [id name host dbname]} db]
              ^{:key idx} [:option {:value id} (str name " - " host "/" dbname)]))]]
        [:div.row
         [:div "Table:"]
         [:div
          [:select {:on-change #(reset! table (-> % .-target .-value))}
           [:option " -- "]
           (for [[idx table] (map-indexed vector tables)]
             ^{:key idx} [:option {:value table} table])]]]
        [:div.row
         [:div "id list, one line one id"]
         [:textarea {:cols      30
                     :rows      10
                     :on-change #(reset! ids (-> % .-target .-value))}]]
        [:p
         [:button {:on-click #(rf/dispatch
                               [:ajax/database-sync-data
                                {:from  @from
                                 :to    @to
                                 :table @table
                                 :ids   @ids}])}
          "Sync"]]]])))

(defn layout [child]
  [:div.database [child]])

