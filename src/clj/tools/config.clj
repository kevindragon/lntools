(ns tools.config
  (:require [environ.core :refer [env]]
            [ragtime.jdbc :as jdbc]))

(def database-url
  (or
    (env :database-url)
    "database.db"))

(def migrate-config
  {:datastore  (jdbc/sql-database {:subprotocol "sqlite"
                                   :subname database-url})
   :migrations (jdbc/load-resources "migrations")})
