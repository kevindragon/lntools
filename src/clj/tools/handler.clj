(ns tools.handler
  (:require [compojure.core :refer [routes GET POST context]]
            [compojure.route :as route]
            [ring.middleware.reload :refer [wrap-reload]]
            [ring.middleware.format :refer [wrap-restful-format]]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.middleware.anti-forgery :refer [wrap-anti-forgery]]
            [clojure.java.io :as io]
            [tools.hyperlink.route :as hyperlink-route]
            [tools.settings.route :as settings-route]
            [tools.autonomy.route :as autonomy-route]
            [tools.memcache.route :as memcache-route]
            [tools.middleware :refer [wrap-auth]]
            [tools.user.core :as user]))


(def app-routes
  (routes
    (GET "/" [] (slurp (io/resource "public/index.html")))
    (GET "/login" [] (slurp (io/resource "public/login.html")))
    (POST "/login" {:keys [params]} (user/login params))
    (GET "/logout" [] (user/logout))
    (context "/hyperlink" [] hyperlink-route/routes)
    (context "/settings" [] settings-route/routes)
    (context "/autonomy" [] autonomy-route/routes)
    (context "/memcache" [] memcache-route/routes)
    (route/not-found "404")))

(def handles
  (-> #'app-routes
      wrap-reload
      wrap-auth
      (wrap-defaults
        (-> site-defaults
            (assoc-in [:security :anti-forgery] false)))
      (wrap-restful-format :formats [:json :json-kw :html])))