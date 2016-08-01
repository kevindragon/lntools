(ns tools.settings.route
  (:require [compojure.core :as c]
            [tools.settings.database :refer
             [databases database-add database-delete]]
            [tools.settings.dih :as dih-handle]
            [tools.settings.dah :as dah-handle]
            [tools.settings.memcache :as mc]))

(def routes
  (c/routes
    (c/GET "/databases" [] (databases))
    (c/POST "/database" request (database-add request))
    (c/DELETE "/database" request (database-delete request))

    (c/GET "/dih" [] (dih-handle/dihs))
    (c/POST "/dih" request (dih-handle/dih-add request))
    (c/DELETE "/dih" request (dih-handle/dih-delete request))

    (c/GET "/dah" [] (dah-handle/dahs))
    (c/POST "/dah" request (dah-handle/dah-add request))
    (c/DELETE "/dah" request (dah-handle/dah-delete request))

    (c/GET "/memcache" [] (mc/memcaches))
    (c/POST "/memcache" request (mc/memcache-add request))
    (c/DELETE "/memcache" {:keys [params]} (mc/memcache-delete params))

    ))