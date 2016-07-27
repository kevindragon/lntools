(ns tools.db
  (:require [clojure.java.jdbc :as j]
            [tools.config :as config]))

(def db {:subprotocol "sqlite"
         :subname     config/database-url})

(defn databases []
  (j/query
    db
    ["select * from databases"]))

(defn databases-by-name [name]
  (j/query
    db
    ["select * from databases where name = ?" name]))

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
