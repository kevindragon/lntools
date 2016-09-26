(ns tools.database.route
  (:require [compojure.core :refer [GET PUT POST defroutes]]
            [tools.database.sync :as db-sync]))

(defroutes
  routes
  (GET "/tables" {:keys [params]} (db-sync/list-tables (:id params)))
  (POST "/sync" {:keys [params]} (db-sync/sync-data params)))
