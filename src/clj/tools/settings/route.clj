(ns tools.settings.route
  (:require [compojure.core :as c]
            [tools.settings.database :refer
             [databases database-add database-delete]]
            [tools.settings.dih :as dih-handle]
            [tools.settings.dah :as dah-handle]
            [tools.settings.memcache :as mc]
            [tools.settings.user :as user]
            [tools.settings.data-gap :as data-gap]
            [tools.settings.db-sync :as db-sync]))

(def routes
  (c/routes
    (c/GET "/databases" [] (databases))
    (c/PUT "/database" {:keys [params]} (database-add params))
    (c/DELETE "/database" {:keys [params]} (database-delete params))

    (c/GET "/dih" [] (dih-handle/dihs))
    (c/POST "/dih" request (dih-handle/dih-add request))
    (c/DELETE "/dih" request (dih-handle/dih-delete request))

    (c/GET "/dah" [] (dah-handle/dahs))
    (c/POST "/dah" request (dah-handle/dah-add request))
    (c/DELETE "/dah" request (dah-handle/dah-delete request))

    (c/GET "/memcache" [] (mc/memcaches))
    (c/POST "/memcache" request (mc/memcache-add request))
    (c/DELETE "/memcache" {:keys [params]} (mc/memcache-delete params))

    (c/GET "/user" request (user/users request))
    (c/PUT "/user" {:keys [params]} (user/user-add params))
    (c/DELETE "/user" {:keys [params]} (user/user-delete params))

    (c/GET "/data_gap" [] (data-gap/data-gaps))
    (c/PUT "/data_gap" {:keys [params]} (data-gap/add params))
    (c/DELETE "/data_gap" {:keys [params]} (data-gap/delete params))

    (c/GET "/db-sync" [] (db-sync/db-sync))
    (c/PUT "/db-sync" {:keys [params]} (db-sync/db-sync-add params))
    (c/DELETE "/db-sync" {:keys [params]} (db-sync/db-sync-delete params))

    ))