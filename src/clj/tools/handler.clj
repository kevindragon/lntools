(ns tools.handler
  (:require [compojure.core :refer [routes GET context]]
            [compojure.route :as route]
            [ring.adapter.jetty :refer [run-jetty]]
            [ring.middleware.reload :refer [wrap-reload]]
            [ring.middleware.format :refer [wrap-restful-format]]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.middleware.session :refer [wrap-session]]
            [ring.middleware.anti-forgery :refer [wrap-anti-forgery]]
            [environ.core :refer [env]]
            [clojure.java.io :as io]
            [tools.hyperlink.route :as hyperlink-route]
            [tools.settings.route :as settings-route]
            [tools.autonomy.route :as autonomy-route]
            [tools.memcache.route :as memcache-route]))


(def app-routes
  (routes
    (GET "/" [] (slurp (io/resource "public/index.html")))
    (context "/hyperlink" [] hyperlink-route/routes)
    (context "/settings" [] settings-route/routes)
    (context "/autonomy" [] autonomy-route/routes)
    (context "/memcache" [] memcache-route/routes)
    (route/not-found "404")))

(def handles
  (-> #'app-routes
      wrap-reload
      (wrap-defaults
        (-> site-defaults
            (assoc-in [:security :anti-forgery] false)
            (dissoc :session)))
      (wrap-restful-format :formats [:json :json-kw :html])))