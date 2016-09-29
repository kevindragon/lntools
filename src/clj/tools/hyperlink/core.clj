(ns tools.hyperlink.core
  (:require [clojure.java.jdbc :as j]
            [tools.db :as db]))

(defn- article-status [db-id]
  (j/query
    (db/get-db db-id)
    ["select provider_id, status, count(*) as cnt
      from article group by provider_id, status"]))

(defn- parallel-status [db-id]
  (j/query
    (db/get-db db-id)
    ["select count(*) as cnt from parallel"]))

(defn- opr-load-status [db-id]
  (j/query
    (db/get-db db-id)
    ["select provider_id, status, count(*) as cnt
      from opr_load_status
      group by provider_id, status"]))

(defn status [{stg-id :stg lnc-id :lnc}]
  (let [have-ids (and (not (= stg-id "")) (not (= lnc-id "")))]
    (if have-ids
      {:body {:article       (article-status lnc-id)
              :parallel      (parallel-status lnc-id)
              :oprLoadStatus (opr-load-status stg-id)}}
      {:body {}})))

(defn prepare [{:keys [dbId providerId status rows to]}]
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

