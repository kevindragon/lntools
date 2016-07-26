(ns tools.config
  (:require [environ.core :refer [env]]
            [ragtime.jdbc :as jdbc]
            [clj-http.conn-mgr :as conn-mgr]))

(def database-url
  (or
    (env :database-url)
    "database.db"))

(def migrate-config
  {:datastore  (jdbc/sql-database {:subprotocol "sqlite"
                                   :subname database-url})
   :migrations (jdbc/load-resources "migrations")})

(def proxy-setting
  (condp = (env :environment)
    "dev" {:connection-manager
           (conn-mgr/make-socks-proxied-conn-manager "127.0.0.1" 7070)}
    nil))