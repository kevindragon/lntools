(ns tools.settings.memcache
  (:require [clojure.java.jdbc :as j]
            [tools.db :as db]))

(defn memcaches []
  (j/query
    db/db
    ["select * from memcache"]))

(defn memcache-add [{:keys [params]}]
  (let [{:keys [name host port]} params
        ok? (j/insert!
              db/db
              :memcache
              {:name name
               :host host
               :port port})]
    {:status (if ok? 200 501)
     :body {:status (if ok? "ok" "failed")}}))

(defn memcache-delete [{:keys [id]}]
  (let [ok? (j/delete! db/db :memcache ["id = ?" id])]
    {:status (if ok? 200 501)
     :body {:status (if ok? "ok" "failed")}}))