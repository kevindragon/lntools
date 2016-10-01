(ns tools.hyperlink.route
  (:require [compojure.core :as c]
            [tools.hyperlink.core :as hl]))


(def routes
  (c/routes
    (c/GET "/status" {:keys [params]} (hl/status params))
    (c/POST "/prepare" {:keys [params]} (hl/prepare params))))

