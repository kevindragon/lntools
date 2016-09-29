(ns tools.memcache.core
  (:require [clojurewerkz.spyglass.client :as mc]
            [tools.db :as db]))


(defn clear [{:keys [id]}]
  (println "id" id (class id))
  (let [memcache (db/memcache-by-id id)
        tmc (mc/text-connection
              (str (memcache :host) ":" (memcache :port)))
        ok? (mc/flush tmc)]
    {:status (if ok? 200 501)
     :body {:status (if ok? "ok" "failed")}}))
