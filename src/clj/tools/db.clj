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
