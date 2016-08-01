(ns tools.middleware
  (:require [ring.util.response :as response]
            [ring.util.request :refer [request-url path-info]]))

(defn wrap-auth [handle]
  (fn [request]
    (let [uri (-> request :uri)
          user (-> request :session :user)]
      (if (.startsWith uri "/login")
        (handle request)
        (if user
          (handle request)
          (response/redirect "/login"))))))