(ns tools.config
  (:require [ragtime.jdbc :as jdbc]
            [clj-http.conn-mgr :as conn-mgr]
            [tools.env :as e]))

(def migrate-config
  {:datastore  (jdbc/sql-database e/database)
   :migrations (jdbc/load-resources "migrations")})

(def proxy-setting
  (condp = e/environment
    :dev {:connection-manager
          (conn-mgr/make-socks-proxied-conn-manager "127.0.0.1" 7070)}
    nil))