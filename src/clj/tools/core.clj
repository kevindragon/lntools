(ns tools.core
  (:require [ring.adapter.jetty :refer [run-jetty]]
            [environ.core :refer [env]]
            [tools.handler :refer [handles]]
            [tools.migrate :as migrate]
            [tools.help :as help])
  (:gen-class))

(defn start-server
  ([] (start-server false))
  ([join] (run-jetty handles {:port 3001
                              :join? join})))

(defn -main [& args]
  (cond
    (help/is-help? args) (help/print-help)
    (migrate/is-migrate? args) (migrate/migrate-with-args args)
    :else (start-server true)))
