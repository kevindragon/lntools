(ns tools.env
  (:require [selmer.parser :as parser]
            [clojure.tools.logging :as log]
            [tools.dev-middleware :refer [wrap-dev]]))

(def defaults
  {:init
   (fn []
     (parser/cache-off!)
     (log/info "\n-=[tools started successfully using the development profile]=-"))
   :stop
   (fn []
     (log/info "\n-=[tools has shut down successfully]=-"))
   :middleware wrap-dev})
