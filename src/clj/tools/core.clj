(ns tools.core
  (:require [ring.adapter.jetty :refer [run-jetty]]
            [ragtime.repl :as repl]
            [environ.core :refer [env]]
            [tools.handler :refer [handles]]
            [tools.config :as config])
  (:gen-class))

(defn -main [& args]
  (cond
    (= (first args) "migrate") (repl/migrate config/migrate-config)
    (= (first args) "rollback") (repl/rollback config/migrate-config)
    :else (run-jetty handles {:port 3000})))
