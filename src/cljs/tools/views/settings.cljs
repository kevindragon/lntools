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
       [table {:head ["id" "name" "passport" ""]
               :body rows}]
       (when canAdd
         [:p
          [:a {:href "#/settings/user/add"} "Add user"]])])))

(defn add-user []
  (let [name (ra/atom "")
        passport (ra/atom "")]
    (fn []
      [:div.add-user
       [:h2 "Add a user"]
       [table {:body [["name:" [:input {:type "text"
                                        :on-change #(reset! name (-> % .-target .-value))
                                        :value @name}]]
                      ["passport:" [:input {:type "text"
                                            :on-change #(reset! passport (-> % .-target .-value))
                                            :value @passport}]]]}]
       [:p
        [:button {:on-click #(rf/dispatch [:ajax/settings-add-user @name @passport])}
         "Add"]
        [:a.left-10 {:href "#/settings/user"} "Back"]]])))

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
       [table {:head ["id" "name" "host" "username" "password" "dbname" ""]
               :body rows}]
       [:p
        [:a {:href "#/settings/database/add"} "Add database"]]])))

(defn add-database []
  (let [name (ra/atom "")
        host (ra/atom "")
        username (ra/atom "")
        password (ra/atom "")
        dbname (ra/atom "")]
    (fn []
      [:div.settings-db-sync
       [:h2 "Add Database sync"]
       [table {:body [["name" [:input {:type "text"
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
                                                             (-> % .-target .-value))}]]]}]
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

(defn dih []
  (rf/dispatch [:ajax/settings-get-dih])
  (fn []
    (let [dihs (deref (rf/subscribe [:data/settings-dihs]))
          del (fn [id] (rf/dispatch [:ajax/settings-del-dih id]))
          rows (map (fn [{:keys [id name host port]}]
                      (vector id name host port
                              [:button {:on-click #(del id)} "Delete"]))
                    dihs)]
      [:div.dih
       [:h2 "Dih list"]
       [table {:head ["id" "name" "host" "port" ""]
               :body rows}]
       [:p
        [:a {:href "#/settings/dih/add"} "Add dih"]]])))

(defn add-dih []
  (let [name (ra/atom "")
        host (ra/atom "")
        port (ra/atom "")]
    (fn []
      [:div.dih
       [:h2 "Add dih"]
       [table {:body [["name" [:input {:type "text"
                                       :on-change #(reset! name (-> % .-target .-value))
                                       :value @name}]]
                      ["host" [:input {:type "text"
                                       :on-change #(reset! host (-> % .-target .-value))
                                       :value @host}]]
                      ["port" [:input {:type "text"
                                       :on-change #(reset! port (-> % .-target .-value))
                                       :value @port}]]]}]
       [:p
        [:button {:on-click #(rf/dispatch
                              [:ajax/settings-add-dih
                               {:name @name
                                :host @host
                                :port @port}])}
         "Add"]
        [:a.left-10 {:href "#/settings/dih"} "Back"]]])))

(defn dah []
  (rf/dispatch [:ajax/settings-get-dah])
  (fn []
    (let [dahs (deref (rf/subscribe [:data/settings-dahs]))
          del (fn [id] (rf/dispatch [:ajax/settings-del-dah id]))
          rows (map (fn [{:keys [id name host port]}]
                      (vector id name host port
                              [:button {:on-click #(del id)} "Delete"]))
                    dahs)]
      [:div.dah
       [:h2 "Dah list"]
       [table {:head ["id" "name" "host" "port" ""]
               :body rows}]
       [:p
        [:a {:href "#/settings/dah/add"} "Add dah"]]])))

(defn add-dah []
  (let [name (ra/atom "")
        host (ra/atom "")
        port (ra/atom "")]
    (fn []
      [:div.dah
       [:h2 "Add dah"]
       [table {:body [["name" [:input {:type "text"
                                       :on-change #(reset! name (-> % .-target .-value))
                                       :value @name}]]
                      ["host" [:input {:type "text"
                                       :on-change #(reset! host (-> % .-target .-value))
                                       :value @host}]]
                      ["port" [:input {:type "text"
                                       :on-change #(reset! port (-> % .-target .-value))
                                       :value @port}]]]}]
       [:p
        [:button {:on-click #(rf/dispatch
                              [:ajax/settings-add-dah
                               {:name @name
                                :host @host
                                :port @port}])}
         "Add"]
        [:a.left-10 {:href "#/settings/dah"} "Back"]]])))

(defn memcache []
  (rf/dispatch [:ajax/settings-get-memcache])
  (fn []
    (let [memcaches (deref (rf/subscribe [:data/settings-memcaches]))
          del (fn [id] (rf/dispatch [:ajax/settings-del-memcache id]))
          rows (map (fn [{:keys [id name host port]}]
                      (vector id name host port
                              [:button {:on-click #(del id)} "Delete"]))
                    memcaches)]
      [:div.memcache
       [:h2 "Memcache list"]
       [table {:head ["id" "name" "host" "port" ""]
               :body rows}]
       [:p
        [:a {:href "#/settings/memcache/add"} "Add memcache"]]])))

(defn add-memcache []
  (let [name (ra/atom "")
        host (ra/atom "")
        port (ra/atom "")]
    (fn []
      [:div.memcache
       [:h2 "Add memcache"]
       [table {:body [["name" [:input {:type "text"
                                       :on-change #(reset! name (-> % .-target .-value))
                                       :value @name}]]
                      ["host" [:input {:type "text"
                                       :on-change #(reset! host (-> % .-target .-value))
                                       :value @host}]]
                      ["port" [:input {:type "text"
                                       :on-change #(reset! port (-> % .-target .-value))
                                       :value @port}]]]}]
       [:p
        [:button {:on-click #(rf/dispatch
                              [:ajax/settings-add-memcache
                               {:name @name
                                :host @host
                                :port @port}])}
         "Add"]
        [:a.left-10 {:href "#/settings/memcache"} "Back"]]])))

(defn data-gap []
  (rf/dispatch [:ajax/settings-get-data-gap])
  (fn []
    (let [gaps (deref (rf/subscribe [:data/settings-data-gaps]))
          del (fn [id] (rf/dispatch [:ajax/settings-del-data-gap id]))
          rows (map-indexed
                 (fn [no row]
                   (vector
                     (+ 1 no)
                     (:name row)
                     (:autn_db_name row)
                     (:sql_statement row)
                     [:button {:on-click #(del (:id row))}
                      "Delete"]))
                 gaps)] 
      [:div.data-gap
       [:h2 "Data gap"]
       [table {:head ["id" "name" "autonomy db" "sql statement" ""]
               :body rows}]
       [:p
        [:a {:href "#/settings/data-gap/add"} "Add data gap"]]])))

(defn add-data-gap []
  (rf/dispatch [:ajax/settings-get-dah])
  (rf/dispatch [:ajax/settings-get-database])
  (let [name (ra/atom "")
        database (ra/atom "")
        dah (ra/atom "")
        autn-db (ra/atom "")
        sql (ra/atom "")
        dah-list (deref (rf/subscribe [:data/settings-dahs]))
        db-list (deref (rf/subscribe [:data/settings-databases]))]
    (fn []
      [:div.data-gap
       [:h2 "Add data gap"]
       [table {:body [["name"
                       [:input {:type "text"
                                :on-change
                                #(reset! name (-> % .-target .-value))
                                :value @name}]]
                      ["autonomy db"
                       [:input {:type "text"
                                :on-change
                                #(reset! autn-db (-> % .-target .-value))
                                :value @autn-db}]]
                      ["sql" [:div
                              [:textarea
                               {:cols      60
                                :rows      10
                                :on-change #(reset! sql (-> % .-target .-value))
                                :value     @sql}]
                              [:div.tips "eg.: select id, display from table where datetime_field >= ? and datetime_field <= ?"]]]]}]
       [:p
        [:button {:on-click #(rf/dispatch
                               [:ajax/settings-add-data-gap
                                {:name         @name
                                 :autnDBName   @autn-db
                                 :sqlStatement @sql}])}
         "Add"]
        [:a.left-10 {:href "#/settings/data-gap"} "Back"]]])))

(defn settings [child]
  [:div.settings [child]])
