(ns tools.memcache.route
  (:require [compojure.core :as c]
            [tools.memcache.core :as mc]))

(def routes
  (c/routes
    (c/POST "/clear" {:keys [params]} (mc/clear params))))