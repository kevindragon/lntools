(ns tools.settings.data-gap
  (:require [clojure.java.jdbc :as j]
            [tools.db :as db]))


(defn add [{:keys [name dbId dahId autnDBName sqlStatement]}]
  (let [ok? (j/insert!
              db/db
              :data_gap
              {:name name
               :autn_db_name autnDBName
               :sql_statement sqlStatement})]
    {:status (if ok? 200 510)
     :body {:msg (if ok? "success" "failed")}}))

(defn delete [{:keys [id]}]
  (let [ok? (j/delete! db/db :data_gap ["id = ?" id])]
    {:status (if ok? 200 510)
     :body {:msg (if ok? "success" "failed")}}))

(defn data-gaps []
  (j/query
    db/db
    ["select
      data_gap.*
      from data_gap"]))

