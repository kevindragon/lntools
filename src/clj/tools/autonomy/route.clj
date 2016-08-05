(ns tools.autonomy.route
  (:require [compojure.core :as c]
            [tools.autonomy.dih :as dih]
            [tools.autonomy.dah :as dah]
            [tools.autonomy.data-gap :as data-gap]))


(def routes
  (c/routes
    (c/GET "/dih" [] (dih/status))
    (c/GET "/dah" [] (dah/status))
    (c/POST "/dah" {:keys [params]} (dah/engine-management params))

    (c/GET "/data_gap/settings" [] (data-gap/settings))
    ))