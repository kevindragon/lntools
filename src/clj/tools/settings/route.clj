(ns tools.settings.route
  (:require [compojure.core :as c]
            [tools.settings.database :refer
             [databases database-add database-delete]]
            [tools.settings.dih :refer
             [dihs dih-add dih-delete]]))

(def routes
  (c/routes
    (c/GET "/databases" [] (databases))
    (c/POST "/database" request (database-add request))
    (c/DELETE "/database" request (database-delete request))
    (c/GET "/dih" [] (dihs))
    (c/POST "/dih" request (dih-add request))
    (c/DELETE "/dih" request (dih-delete request))))