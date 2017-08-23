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
          [:option {:values ""} " -- "]
          (for [[idx db] (map-indexed vector databases)]
            (let [{:keys [id name host dbname]} db]
              ^{:key idx} [:option
                           {:value id}
                           (str name " - " host "/" dbname)]))]]
        [:div.row
         [:div "To: "]
         [:select {:on-change #(reset! to (-> % .-target .-value))}
          [:option {:values ""} " -- "]
          (for [[idx db] (map-indexed vector databases)]
            (let [{:keys [id name host dbname]} db]
              ^{:key idx} [:option
                           {:value id}
                           (str name " - " host "/" dbname)]))]]
        [:div.row
         [:div "Table:"]
         [:div
          [:select {:on-change #(reset! table (-> % .-target .-value))}
           [:option {:values ""} " -- "]
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

(defn update-data []
  (rf/dispatch [:ajax/settings-get-database])
  (let [db-id (ra/atom "")
        dbs (rf/subscribe [:data/settings-databases])
        get-table (fn [id] (rf/dispatch [:ajax/database-tables id]))
        tables (rf/subscribe [:data/database-tables])
        get-fields (fn [name]
                     (rf/dispatch
                      [:ajax/database-table-fields @db-id name]))]
    (fn []
      [:div.update-data
       [:h2 "Update data"]
       [:div
        [:span "database: "]
        [:select {:on-change (fn [e]
                               (let [id (-> e .-target .-value)]
                                 (when (not (= id ""))
                                   (get-table id)
                                   (reset! db-id id))))}
         [:option {:value ""} " -- "]
         (for [{:keys [id name host dbname]} @dbs]
           ^{:key id} [:option
                       {:value id}
                       (str name " - " host "/" dbname)])]]
       [:div.top-5
        [:span "table: "]
        [:select {:on-change (fn [e]
                               (let [name (-> e .-target .-value)]
                                 (when (not (= name ""))
                                   (get-fields name))))}
         [:option {:values ""} " -- "]
         (for [[idx table] (map-indexed vector @tables)]
           ^{:key idx} [:option {:value table} table])]]
       [:div.top-5
        [:h3 "Where"]]])))

(defn duplicated-key []
  (rf/dispatch [:ajax/settings-get-database])
  (let [db-id (ra/atom "")
        other-db-id (ra/atom "")
        table-name (ra/atom "")
        id-range (ra/atom [0 0])
        dbs (rf/subscribe [:data/settings-databases])
        tables (rf/subscribe [:data/database-tables])
        get-table (fn [id] (rf/dispatch [:ajax/database-tables id]))
        v (fn [e] (-> e .-target .-value))]
    (fn []
      [:div.duplicated-key
       [:h2 "Duplicated key"]
       [:div
        [:span "database: "]
        [:select {:on-change (fn [e]
                               (let [id (v e)]
                                 (when (not (= id ""))
                                   (get-table id)
                                   (reset! db-id id))))}
         [:option {:value ""} " -- "]
         (for [{:keys [id name host dbname]} @dbs]
           ^{:key id} [:option
                       {:value id}
                       (str name " - " host "/" dbname)])]]
       [:div.top-10
        [:span "table: "]
        [:select {:on-change #(reset! table-name (v %))}
         [:option {:values ""} " -- "]
         (for [[idx table] (map-indexed vector @tables)]
           ^{:key idx} [:option {:value table} table])]]
       [:div.top-10
        [:span "other database: "]
        [:select {:on-change #(reset! other-db-id (v %))}
         [:option {:value ""} " -- "]
         (for [{:keys [id name host dbname]} @dbs]
           ^{:key id} [:option
                       {:value id}
                       (str name " - " host "/" dbname)])]]
       [:div.top-10
        [:span "ID range: "]
        [:label [:input {:on-change #(swap! id-range assoc 0 (v %))
                         :type "number"}]]
        [:span " ~ "]
        [:label [:input {:on-change #(swap! id-range assoc 1 (v %))
                         :type "number"}]]]
       [:div.top-10
        [:button {:on-click (fn [e]
                              (println @db-id
                                       @other-db-id
                                       @table-name
                                       @id-range))}
         "Compare"]]])))

(defn layout [child]
  [:div.database [child]])

