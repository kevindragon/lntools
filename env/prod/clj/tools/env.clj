(ns tools.env
  (:require [clojure.tools.logging :as log]))

(def defaults
  {:init
   (fn []
     (log/info "\n-=[tools started successfully]=-"))
   :stop
   (fn []
     (log/info "\n-=[tools has shut down successfully]=-"))
   :middleware identity})
