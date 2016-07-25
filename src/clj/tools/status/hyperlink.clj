(ns tools.status.hyperlink
  (:require [clojure.java.jdbc :as j]
            [tools.db :as db]))

(defn- article-status []
  (j/query
    (db/lnc-db)
    ["select provider_id, status, count(*) as cnt from article group by provider_id, status"]))

(defn- parallel-status []
  (j/query
    (db/lnc-db)
    ["select count(*) as cnt from parallel"]))

(defn- opr-load-status []
  (j/query
    (db/stg-db)
    ["select provider_id, status, count(*) as cnt from opr_load_status group by provider_id, status"]))

(defn status []
  {:body {:article (article-status)
          :parallel (parallel-status)
          :oprLoadStatus (opr-load-status)}})

