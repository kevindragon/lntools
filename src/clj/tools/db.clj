(ns tools.db
  (:require [clojure.java.jdbc :as j]
            [tools.env :as e]))

(def db e/database)

(defn databases []
  (j/query
    db
    ["select * from databases"]))

(defn databases-by-name [name]
  (j/query
    db
    ["select * from databases where name = ?" name]))

(defn database-by-id [id]
  (j/query
    db
    ["select * from databases where id = ?" id]))

(defn memcache-by-id [id]
  (first
    (j/query
      db
      ["select * from memcache where id = ?" id])))

(defn lnc-db []
  (let [opt (first (databases-by-name "lnc"))]
    {:subprotocol "mysql"
     :subname     (str "//" (opt :host) "/" (opt :dbname))
     :user        (opt :username)
     :password    (opt :password)}))

(defn stg-db []
  (let [opt (first (databases-by-name "stg"))]
    {:subprotocol "mysql"
     :subname     (str "//" (opt :host) "/" (opt :dbname))
     :user        (opt :username)
     :password    (opt :password)}))

(defn get-db [id]
  (let [opt (first (database-by-id id))]
    {:subprotocol "mysql"
     :subname     (str "//" (opt :host) "/" (opt :dbname) "?"
                       (clojure.string/join
                         "&"
                         ["zeroDateTimeBehavior=convertToNull"
                          "characterEncoding=utf8"]))
     :user        (opt :username)
     :password    (opt :password)}))

(defn db-sync-by-id [id]
  (j/query db ["select * from databases_sync where id = ?" id]))

(defn get-db-sync-spec [id]
  (let [opt (first (db-sync-by-id id))]
    {:subprotocol "mysql"
     :subname     (str "//" (:host opt) "/" (:dbname opt))
     :user        (:username opt)
     :password    (:password opt)}))
