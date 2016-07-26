(ns tools.autonomy.route
  (:require [compojure.core :as c]
            [tools.autonomy.dih :as dih]))


(def routes
  (c/GET "/dih" [] (dih/status)))