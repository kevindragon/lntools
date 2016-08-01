(ns tools.settings.user
  (:require [clojure.java.jdbc :as j]
            [tools.db :as db]))

(defn users [request]
  (let [user (-> request :session :user)
        admin? (= (user :name) "admin")
        sql (if admin?
              ["select * from user"]
              ["select * from user where id = ?" (user :id)])]
    {:body {:users (j/query db/db sql)
            :canAdd (if admin? true false)}}))

(defn user-add [{:keys [name passport]}]
  (let [ok? (j/insert! db/db :user {:name name
                                    :passport passport})]
    {:body {:status (if ok? "ok" "failed")}}))

(defn user-delete [{:keys [id]}]
  (let [ok? (j/delete! db/db :user ["id = ?" id])]
    {:body {:status (if ok? "ok" "failed")}}))