(ns tools.database.info
  (:require [tools.db :as db]
            [clojure.java.jdbc :as j]))

(defn tables [db-spec]
  (j/query db-spec ["show tables"] {:row-fn #(first (vals %))}))

(defn table-fields [{:keys [dbId name]}]
  (let [db-spec (db/get-db dbId)
        tables (tables db-spec)]
    tables)
  (println dbId name))