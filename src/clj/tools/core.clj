(ns tools.core
  (:require [compojure.core :refer [routes GET context]]
            [compojure.route :as route]
            [ring.adapter.jetty :refer [run-jetty]]
            [ring.middleware.reload :refer [wrap-reload]]
            [ring.middleware.format :refer [wrap-restful-format]]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.middleware.session :refer [wrap-session]]
            [ring.middleware.anti-forgery :refer [wrap-anti-forgery]]
            [ragtime.repl :as repl]
            [environ.core :refer [env]]
            [clojure.java.io :as io]
            [tools.status.route :refer [status-routes]]
            [tools.settings.route :refer [settings-routes]]
            [tools.config :as config])
  (:gen-class))

(defn get-custom-token [request]
  (get-in
    request
    [:session :ring.middleware.anti-forgery/anti-forgery-token]))

(def app-routes
     (routes
       (GET "/" [] (slurp (io/resource "public/index.html")))
       (context "/status" [] status-routes)
       (context "/settings" [] settings-routes)
       (route/not-found "404")))

(defn -main [& args]
  (cond
    (= (first args) "migrate") (repl/migrate config/migrate-config)
    (= (first args) "rollback") (repl/rollback config/migrate-config)
    :else (run-jetty
            (-> #'app-routes
                wrap-reload
                (wrap-defaults
                  (-> site-defaults
                      (assoc-in [:security :anti-forgery] false)
                      (dissoc :session)))
                (wrap-restful-format :formats [:json :json-kw :html])
                #_(wrap-anti-forgery {:read-token get-custom-token})
                #_wrap-session)
            {:port 3000})))
