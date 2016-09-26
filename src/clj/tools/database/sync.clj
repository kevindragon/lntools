(ns tools.database.sync
  (:require [tools.db :as db]
            [clojure.java.jdbc :as j]))

(defn tables [db-spec]
  (j/query db-spec ["show tables"] {:row-fn #(first (vals %))}))

(defn list-tables [id]
  (let [db-spec (db/get-db id)
        tables (tables db-spec)]
    tables))

(defn split-ids [ids]
  (clojure.string/split ids #"[\r\n, ]"))

(defn sync-data [{:keys [from to table ids]}]
  (let [from-db-spec (db/get-db from)
        to-db-spec (db/get-db to)
        id-list (split-ids ids)
        {primary-key :column_name} (first
                                     (j/query
                                       from-db-spec
                                       [(str "SHOW INDEX FROM "
                                             table
                                             " where Key_name = 'PRIMARY'")]))]
    (doseq [id id-list]
      (let [row (first
                  (j/query
                    from-db-spec
                    [(str "select * from " table " where " primary-key " = ?") id]))]
        (j/delete! to-db-spec (keyword table) [(str primary-key " = ?") id])
        (j/insert! to-db-spec (keyword table) row)))
    {:body {:status "ok"}}))
