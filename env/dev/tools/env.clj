(ns tools.env)

(def database {:classname   "org.sqlite.JDBC"
               :subprotocol "sqlite"
               :subname "dev.db"})

(def environment :dev)
