(ns tools.middleware
  (:require [clojure.string :as str]
            [ring.util.response :as response]))

(defn wrap-auth [handle]
  (fn [request]
    (let [uri (request :uri)
          user (-> request :session :user)]
      (if (str/starts-with? uri "/login")
        (handle request)
        (if user
          (handle request)
          (response/redirect "/login" 301))))))

