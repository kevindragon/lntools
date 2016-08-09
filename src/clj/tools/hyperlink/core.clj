(ns tools.hyperlink.core
  (:require [clojure.java.jdbc :as j]
            [tools.db :as db]))

(defn- article-status []
  (j/query
    (db/lnc-db)
    ["select provider_id, status, count(*) as cnt
      from article group by provider_id, status"]))

(defn- parallel-status []
  (j/query
    (db/lnc-db)
    ["select count(*) as cnt from parallel"]))

(defn- opr-load-status []
  (j/query
    (db/stg-db)
    ["select provider_id, status, count(*) as cnt
      from opr_load_status
      group by provider_id, status"]))

(defn status []
  {:body {:article       (article-status)
          :parallel      (parallel-status)
          :oprLoadStatus (opr-load-status)}})

(defn prepare [{:keys [dbId providerId status rows to]}]
  (println dbId, providerId, status rows)
  (let [db-map (db/get-db dbId)
        sql-stmt "UPDATE opr_load_status SET status = ?
                  WHERE provider_id = ? and status = ? LIMIT ?"
        ok? (try
              (j/execute!
                db-map
                [sql-stmt to providerId status
                 (try (Integer/parseInt rows)
                      (catch Exception e 0))])
              (catch Exception e false))]
    {:status (if ok? 200 500)
     :body {:message (if ok? "success" "failed")}}))

