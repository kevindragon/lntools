(ns tools.settings.dah
  (:require [clojure.java.jdbc :as j]
            [tools.db :as db]))

(defn dahs []
  (j/query
    db/db
    ["select * from dah"]))

(defn dah-add [{:keys [params]}]
  (let [{:keys [name, host, port]} params
        ok? (j/insert!
              db/db
              :dah
              {:name name
               :host host
               :port port})]
    {:status (if ok? 200 501)
     :body {:status (if ok? "ok" "failed")}}))

(defn dah-delete [{:keys [params]}]
  (let [{:keys [id]} params
        ok? (j/delete! db/db :dah ["id = ?" id])]
    {:status (if ok? 200 501)
     :body {:status (if ok? "ok" "failed")}}))