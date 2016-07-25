(ns tools.settings.route
  (:require [compojure.core :refer [routes GET POST DELETE]]
            [tools.settings.database :refer
             [databases database-add database-delete]]))

(def settings-routes
  (routes
    (GET "/databases" [] (databases))
    (POST "/database" request (database-add request))
    (DELETE "/database" request (database-delete request))))