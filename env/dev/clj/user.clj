(ns user
  (:require [mount.core :as mount]
            tools.core))

(defn start []
  (mount/start-without #'tools.core/repl-server))

(defn stop []
  (mount/stop-except #'tools.core/repl-server))

(defn restart []
  (stop)
  (start))


