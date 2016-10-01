(ns tools.settings.db-sync
  (:require [clojure.java.jdbc :as j]
            [tools.db :as db]))

(defn db-sync []
  (j/query
    db/db
    ["select * from databases_sync"]))

(defn db-sync-add
  [{:keys [name host username password dbname readonly]}]
  (let [ok? (j/insert!
              db/db
              :databases_sync
              {:name name
               :host host
               :username username
               :password password
               :dbname dbname
               :readonly readonly})]
    {:body {:status (if ok? "ok" "failed")}}))

(defn db-sync-delete [{:keys [id]}]
  (let [ok? (j/delete! db/db :databases_sync ["id = ?" id])]
    {:body {:status (if ok? "ok" "failed")}}))
