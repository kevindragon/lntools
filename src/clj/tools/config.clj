(ns tools.config
  (:require [ragtime.jdbc :as jdbc]
            [clj-http.conn-mgr :as conn-mgr]
            [tools.env :as e]))

(def migrate-config
  {:datastore  (jdbc/sql-database e/database)
   :migrations (jdbc/load-resources "migrations")})

(def proxy-setting
  {:throw-exceptions false})
