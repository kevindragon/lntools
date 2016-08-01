(ns tools.user.core
  (:require [ring.util.response :as response]
            [clojure.java.jdbc :as j]
            [tools.db :as db]))


(defn login [{:keys [passport]}]
  (let [user (first
               (j/query
                 db/db
                 ["select * from user where passport = ?"
                  passport]))
        exists (not (empty? user))]
    (if exists
      (->
        (response/redirect "/")
        (assoc-in [:session :user] user))
      (response/redirect "/login"))))

(defn logout []
  (->
    (response/redirect "/login")
    (assoc-in [:session :user] nil)))
