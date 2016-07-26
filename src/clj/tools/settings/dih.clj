(ns tools.settings.dih
  (:require [clojure.java.jdbc :as j]
            [tools.db :as db]))

(defn dihs []
  (j/query
    db/db
    ["select * from dih"]))

(defn dih-add [{:keys [params]}]
  (let [{:keys [name, host, port]} params
        ok? (j/insert!
              db/db
              :dih
              {:name name
               :host host
               :port port})]
    {:status (if ok? 200 501)
     :body {:status (if ok? "ok" "failed")}}))

(defn dih-delete [{:keys [params]}]
  (let [{:keys [id]} params
        ok? (j/delete! db/db :dih ["id = ?" id])]
    {:status (if ok? 200 501)
     :body {:status (if ok? "ok" "failed")}}))