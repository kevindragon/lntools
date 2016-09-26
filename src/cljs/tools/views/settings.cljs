(ns tools.views.settings
  (:require [re-frame.core :as rf]
            [reagent.core :as ra]
            [tools.util :refer [indexed-vec table]]))

(defn user []
  (rf/dispatch [:ajax/settings-get-user])
  (fn []
    (let [{:keys [users canAdd]} (deref
                                   (rf/subscribe
                                     [:data/settings-users]))
          del (fn [id] (rf/dispatch [:ajax/settings-del-user id]))
          rows (map (fn [{:keys [id name passport]}]
                      (vector
                        id
                        name
                        passport
                        [:button {:on-click #(del id)} "Delete"]))
                    users)]
      [:div.user
       [:h2 "Users"]
       [table ["id" "name" "passport" ""] rows]
       (when canAdd
         [:p
          [:a {:href "#/settings/user/add"} "Add user"]])])))

(defn add-user []
  (let [name (ra/atom "")
        passport (ra/atom "")]
    (fn []
      [:div.add-user
       [:h2 "Add a user"]
       [table [["name:" [:input {:type "text"
                                 :on-change #(reset! name (-> % .-target .-value))
                                 :value @name}]]
               ["passport:" [:input {:type "text"
                                     :on-change #(reset! passport (-> % .-target .-value))
                                     :value @passport}]]]]
       [:p
        [:button {:on-click #(rf/dispatch [:ajax/settings-add-user @name @passport])}
         "Add"]]])))

(defn database []
  (rf/dispatch [:ajax/settings-get-database])
  (fn []
    (let [databases (deref (rf/subscribe [:data/settings-databases]))
          del (fn [id] (rf/dispatch [:ajax/settings-del-database id]))
          rows (map (fn [db-row]
                      (concat db-row
                              [[:button {:on-click #(del (:id db-row))}
                                "Delete"]])) databases)]
      [:div.settings-database
       [:h2 "Databases"]
       [table ["id" "name" "host" "username" "password" "dbname" ""] rows]
       [:p
        [:a {:href "#/settings/database/add"} "Add user"]]])))

#_(defn db-sync []
  (rf/dispatch [:ajax/settings-get-db-sync])
  (fn []
    (let [dbs-sync (deref
                     (rf/subscribe
                       [:data-settings-db-sync]))
          del (fn [id] (rf/dispatch [:ajax/settings-del-db-sync id]))
          rows (map (fn [{:keys [id name host username
                                 password dbname readonly]}]
                      (vector id name host username
                              password dbname (if (= readonly 1) "true" "false")
                              [:button {:on-click #(del id)} "Delete"]))
                    dbs-sync)]
      [:div.db-sync
       [:h2 "Databases sync"]
       [table ["id" "name" "host" "username" "password"
               "dbname" "readonly" ""] rows]
       [:p
        [:a {:href "#/settings/db-sync/add"} "Add"]]])))

(defn add-database []
  (let [name (ra/atom "")
        host (ra/atom "")
        username (ra/atom "")
        password (ra/atom "")
        dbname (ra/atom "")]
    (fn []
      [:div.settings-db-sync
       [:h2 "Add Database sync"]
       [table [["name" [:input {:type "text"
                                :value @name
                                :on-change #(reset! name
                                                    (-> % .-target .-value))}]]
               ["host" [:input {:value @host
                                :on-change #(reset! host
                                                    (-> % .-target .-value))}]]
               ["username" [:input {:value @username
                                    :on-change #(reset! username
                                                        (-> % .-target .-value))}]]
               ["password" [:input {:value @password
                                    :on-change #(reset! password
                                                        (-> % .-target .-value))}]]
               ["dbname" [:input {:value @dbname
                                  :on-change #(reset! dbname
                                                      (-> % .-target .-value))}]]]]
       [:p
        [:button {:on-click #(rf/dispatch
                              [:ajax/settings-add-database
                               {:name     @name
                                :host     @host
                                :username @username
                                :password @password
                                :dbname   @dbname}])}
         "Add"]
        [:a.left-10 {:href "#/settings/database"} "Back"]]])))

(defn settings [child]
  [:div.settings [child]])
