(ns tools.status.route
  (:require [compojure.core :refer [routes GET]]
            [tools.status.hyperlink :refer [status]]))


(def status-routes
  (routes
    (GET "/hyperlink" {} (status))))

