(ns tools.core
  (:require [ring.adapter.jetty :refer [run-jetty]]
            [tools.handler :refer [handles]]
            [tools.migrate :as migrate]
            [tools.help :as help])
  (:gen-class))

(def server (atom nil))

(defn start-server
  ([] (start-server false))
  ([join] (reset! server
                  (run-jetty handles
                             {:port 3000
                              :join? join}))))

(defn stop-server []
  (.stop @server))

(defn -main [& args]
  (cond
    (help/is-help? args) (help/print-help)
    (migrate/is-migrate? args) (migrate/migrate-with-args args)
    :else (start-server true)))
