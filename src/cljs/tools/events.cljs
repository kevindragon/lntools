(ns tools.events
  (:require [re-frame.core :as rf]
            [day8.re-frame.http-fx]
            [tools.db :refer [default-db]]
            [ajax.core :as ajax]))

(enable-console-print!)

(rf/reg-event-db
  :initialize
  (fn [db _] (merge db default-db)))

(rf/reg-event-db
  :update-route
  (fn [db [_ params]]
    (assoc db :route params)))

(rf/reg-event-db
  :display-nav
  (fn [db [_ idx bool]]
    (assoc-in db [:nav idx :hide?] bool)))

(rf/reg-event-db
  :hide-loading
  (fn [db _]
    (assoc db :loading? false)))

(rf/reg-event-db
  :ajax-error
  (fn [db [_ error]]
    (-> db
        (assoc :loading? false)
        (assoc :ajax-error error))))

(defn wrap-default-xhr [m]
  (merge {:format          (ajax/json-request-format)
          :response-format (ajax/json-response-format {:keywords? true})
          :timeout         30000
          :on-failure      [:ajax-error]}
         m))

(defn ajax-get [m]
  (wrap-default-xhr (merge {:method :get} m)))

(defn ajax-put [m]
  (wrap-default-xhr (merge {:method :put} m)))

(defn ajax-post [m]
  (wrap-default-xhr (merge {:method :post} m)))

(defn ajax-delete [m]
  (wrap-default-xhr (merge {:method :delete} m)))

(rf/reg-event-fx
  :ajax/settings-add-user
  (fn [{db :db} [_ name passport]]
    {:db         (assoc db :loading? true)
     :http-xhrio (wrap-default-xhr
                   {:method     :put
                    :uri        "/settings/user"
                    :params     {:name name :passport passport}
                    :on-success [:ajax/settings-add-user-ok]})}))

(rf/reg-event-db
  :ajax/settings-add-user-ok
  (fn [db _]
    (set! (.-href js/location) "#/settings/user")
    db))

(rf/reg-event-fx
  :ajax/settings-del-user
  (fn [{db :db} [_ id]]
    {:db         (assoc db :loading? true)
     :http-xhrio (ajax-delete {:uri        "/settings/user"
                               :params     {:id id}
                               :on-success [:ajax/settings-get-user]})}))

(rf/reg-event-db
  :update-settings-users
  (fn [db [_ v]]
    (-> db
        (assoc :loading? false)
        (assoc-in [:data :settings :users] v))))

(rf/reg-event-fx
  :ajax/settings-get-user
  (fn [{db :db} _]
    {:db         (assoc db :loading? true)
     :http-xhrio (wrap-default-xhr
                   {:method          :get
                    :uri             "/settings/user"
                    :on-success      [:update-settings-users]})}))

(rf/reg-event-db
  :update-settings-databases
  (fn [db [_ v]]
    (-> db
        (assoc :loading? false)
        (assoc-in [:data :settings :databases] v))))

(rf/reg-event-fx
  :ajax/settings-get-database
  (fn [{db :db} _]
    {:db         (assoc db :loading? true)
     :http-xhrio (ajax-get {:uri             "/settings/databases"
                            :on-success      [:update-settings-databases]})}))

(rf/reg-event-fx
  :ajax/settings-del-database
  (fn [{db :db} [_ id]]
    {:db (assoc db :loading? true)
     :http-xhrio (ajax-delete {:uri "/settings/database"
                               :params {:id id}
                               :on-success [:ajax/settings-get-database]})}))

(rf/reg-event-fx
  :ajax/settings-add-database
  (fn [{db :db} [_ params]]
    (.log js/console params)
    {:db         (assoc db :loading? true)
     :http-xhrio (ajax-put {:uri        "/settings/database"
                            :params     params
                            :on-success [:ajax/settings-add-database-ok]})}))

(rf/reg-event-db
  :ajax/settings-add-database-ok
  (fn [db _]
    (set! (.-href js/location) "#/settings/database")
    db))

(rf/reg-event-fx
  :ajax/database-tables
  (fn [{db :db} [_ id]]
    {:db (assoc db :loading? true)
     :http-xhrio (ajax-get {:uri "/database/tables"
                            :params {:id id}
                            :on-success [:update-database-tables]})}))

(rf/reg-event-db
  :update-database-tables
  (fn [db [_ v]]
    (-> db
        (assoc :loading? false)
        (assoc-in [:data :database :tables] v))))

(rf/reg-event-fx
  :ajax/database-sync-data
  (fn [{db :db} [_ params]]
    {:db (assoc db :loading? true)
     :http-xhrio (ajax-post {:uri "/database/sync"
                             :params params
                             :on-success [:database-sync-data-ok]})}))

(rf/reg-event-db
  :database-sync-data-ok
  (fn [db data]
    (println "database sync data ok")
    (println data)
    db))

#_(rf/reg-event-db
  :update-settings-db-sync
  (fn [db [_ v]]
    (-> db
        (assoc :loading? false)
        (assoc-in [:data :settings :dbs-sync] v))))

#_(rf/reg-event-fx
  :ajax/settings-get-db-sync
  (fn [{db :db} _]
    {:db (assoc db :loading? true)
     :http-xhrio (wrap-default-xhr
                   {:method :get
                    :uri "/settings/db-sync"
                    :on-success [:update-settings-db-sync]})}))

#_(rf/reg-event-fx
  :ajax/settings-del-db-sync
  (fn [{db :db} [_ id]]
    {:db (assoc db :loading? true)
     :http-xhrio (wrap-default-xhr
                   {:method :delete
                    :uri "/settings/db-sync"
                    :params {:id id}
                    :on-success [:ajax/settings-get-db-sync]})}))
