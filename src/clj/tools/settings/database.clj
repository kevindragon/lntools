(ns tools.settings.database
  (:require [clojure.java.jdbc :as j]
            [tools.db :as db]))


(defn databases []
  (j/query
    db/db
    ["select * from databases"]))

(defn database-add [{:keys [params]}]
  (let [{:keys [name host username password dbname]} params
        ok? (j/insert!
              db/db
              :databases
              {:name name
               :host host
               :username username
               :password password
               :dbname dbname})]
    {:body {:status (if ok? "ok" "failed")}}))

(defn database-delete [{:keys [params]}]
  (let [{:keys [id]} params
        ok? (j/delete! db/db :databases ["id = ?" id])]
    {:body {:status (if ok? "ok" "failed")}}))