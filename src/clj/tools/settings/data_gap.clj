(ns tools.settings.data-gap
  (:require [clojure.java.jdbc :as j]
            [tools.db :as db]))


(defn add [{:keys [name dbId dahId autnDBName sqlStatement]}]
  (let [ok? (j/insert!
              db/db
              :data_gap
              {:name name
               :database_id dbId
               :dah_id dahId
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
      data_gap.*,
      databases.name as database_name,
      dah.name as dah_name,
      dah.host as dah_host, dah.port as dah_port
      from data_gap
      left join dah on data_gap.dah_id = dah.id
      left join databases on data_gap.database_id = databases.id
      where data_gap.dah_id = dah.id"]))

