(ns tools.settings.database
  (:require [clojure.java.jdbc :as j]
            [tools.db :as db]))


(defn databases []
  (j/query
    db/db
    ["select * from databases"]))

(defn database-add [{:keys [name host username password dbname]}]
  (let [ok? (j/insert!
              db/db
              :databases
              {:name name
               :host host
               :username username
               :password password
               :dbname dbname})]
    {:body {:status (if ok? "ok" "failed")}}))

(defn database-delete [{:keys [id]}]
  (let [ok? (j/delete! db/db :databases ["id = ?" id])]
    {:body {:status (if ok? "ok" "failed")}}))