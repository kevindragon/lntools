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

(rf/reg-event-db
  :ajax-success
  (fn [db _]
    (assoc db :loading? false)))

(defn wrap-default-xhr [m]
  (merge {:format          (ajax/json-request-format)
          :response-format (ajax/json-response-format {:keywords? true})
          :timeout         30000
          :on-failure      [:ajax-error]
          :on-success      [:ajax-success]}
         m))

(defn ajax-get [m]
  (wrap-default-xhr (merge {:method :get} m)))

(defn ajax-put [m]
  (wrap-default-xhr (merge {:method :put} m)))

(defn ajax-post [m]
  (wrap-default-xhr (merge {:method :post} m)))

(defn ajax-delete [m]
  (wrap-default-xhr (merge {:method :delete} m)))

;;; user
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
     :http-xhrio (ajax-get {:uri             "/settings/user"
                            :on-success      [:update-settings-users]})}))

;;; dih
(rf/reg-event-fx
  :ajax/settings-get-dih
  (fn [{db :db} _]
    {:db (assoc db :loading? true)
     :http-xhrio (ajax-get {:uri "/settings/dih"
                            :on-success [:update-settings-dih]})}))

(rf/reg-event-db
  :update-settings-dih
  (fn [db [_ v]]
    (-> db
        (assoc :loading? false)
        (assoc-in [:data :settings :dihs] v))))

(rf/reg-event-fx
  :ajax/settings-del-dih
  (fn [{db :db} [_ id]]
    {:db (assoc db :loading? true)
     :http-xhrio (ajax-delete {:uri "/settings/dih"
                               :params {:id id}
                               :on-success [:ajax/settings-get-dih]})}))

(rf/reg-event-fx
  :ajax/settings-add-dih
  (fn [{db :db} [_ params]]
    {:db (assoc db :loading? true)
     :http-xhrio (ajax-put {:uri "/settings/dih"
                            :params params
                            :on-success [:ajax/settings-add-dih-ok]})}))

(rf/reg-event-db
  :ajax/settings-add-dih-ok
  (fn [db _]
    (set! (.-href js/location) "#/settings/dih")
    db))

;;; dah
(rf/reg-event-fx
  :ajax/settings-get-dah
  (fn [{db :db} _]
    {:db (assoc db :loading? true)
     :http-xhrio (ajax-get {:uri "/settings/dah"
                            :on-success [:update-settings-dah]})}))

(rf/reg-event-db
  :update-settings-dah
  (fn [db [_ v]]
    (-> db
        (assoc :loading? false)
        (assoc-in [:data :settings :dahs] v))))

(rf/reg-event-fx
  :ajax/settings-del-dah
  (fn [{db :db} [_ id]]
    {:db (assoc db :loading? true)
     :http-xhrio (ajax-delete {:uri "/settings/dah"
                               :params {:id id}
                               :on-success [:ajax/settings-get-dah]})}))

(rf/reg-event-fx
  :ajax/settings-add-dah
  (fn [{db :db} [_ params]]
    {:db (assoc db :loading? true)
     :http-xhrio (ajax-put {:uri "/settings/dah"
                            :params params
                            :on-success [:ajax/settings-add-dah-ok]})}))

(rf/reg-event-db
  :ajax/settings-add-dah-ok
  (fn [db _]
    (set! (.-href js/location) "#/settings/dah")
    db))

;;; memcache
(rf/reg-event-fx
  :ajax/settings-get-memcache
  (fn [{db :db} _]
    {:db (assoc db :loading? true)
     :http-xhrio (ajax-get {:uri "/settings/memcache"
                            :on-success [:update-settings-memcache]})}))

(rf/reg-event-db
  :update-settings-memcache
  (fn [db [_ v]]
    (-> db
        (assoc :loading? false)
        (assoc-in [:data :settings :memcaches] v))))

(rf/reg-event-fx
  :ajax/settings-del-memcache
  (fn [{db :db} [_ id]]
    {:db (assoc db :loading? true)
     :http-xhrio (ajax-delete {:uri "/settings/memcache"
                               :params {:id id}
                               :on-success [:ajax/settings-get-memcache]})}))

(rf/reg-event-fx
  :ajax/settings-add-memcache
  (fn [{db :db} [_ params]]
    {:db (assoc db :loading? true)
     :http-xhrio (ajax-put {:uri "/settings/memcache"
                            :params params
                            :on-success [:ajax/settings-add-memcache-ok]})}))

(rf/reg-event-db
  :ajax/settings-add-memcache-ok
  (fn [db _]
    (set! (.-href js/location) "#/settings/memcache")
    db))

(rf/reg-event-fx
  :ajax/memcache-clear
  (fn [{db :db} [_ params]]
    {:db (assoc db :loading? true)
     :http-xhrio (ajax-post {:uri "/memcache/clear"
                             :params params})}))

;;; data gap
(rf/reg-event-fx
  :ajax/settings-get-data-gap
  (fn [{db :db} _]
    {:db (assoc db :loading? true)
     :http-xhrio (ajax-get {:uri "/settings/data-gap"
                            :on-success [:update-settings-data-gap]})}))

(rf/reg-event-db
  :update-settings-data-gap
  (fn [db [_ v]]
    (-> db
        (assoc :loading? false)
        (assoc-in [:data :settings :data-gaps] v))))

(rf/reg-event-fx
  :ajax/settings-del-data-gap
  (fn [{db :db} [_ id]]
    {:db (assoc db :loading? true)
     :http-xhrio (ajax-delete {:uri "/settings/data-gap"
                               :params {:id id}
                               :on-success [:ajax/settings-get-data-gap]})}))

(rf/reg-event-fx
  :ajax/settings-add-data-gap
  (fn [{db :db} [_ params]]
    {:db (assoc db :loading? true)
     :http-xhrio (ajax-put {:uri "/settings/data-gap"
                            :params params
                            :on-success [:ajax/settings-add-data-gap-ok]})}))

(rf/reg-event-db
  :ajax/settings-add-data-gap-ok
  (fn [db _]
    (set! (.-href js/location) "#/settings/data-gap")
    db))

;;; database
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

;;; sync database tables
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
    (assoc db :loading? false)))

;;; Hyperlink
(rf/reg-event-fx
  :ajax/hyperlink-get-status
  (fn [{db :db} [_ params]]
    {:db (assoc db :loading? true)
     :http-xhrio (ajax-get {:uri "/hyperlink/status"
                            :params params
                            :on-success [:update-hyperlink-status]})}))

(rf/reg-event-db
  :update-hyperlink-status
  (fn [db [_ v]]
    (-> db
        (assoc :loading? false)
        (assoc-in [:data :hyperlink :status] v))))

(rf/reg-event-fx
  :ajax/hyperlink-update-status
  (fn [{db :db} [_ params]]
    {:db (assoc db :loading? true)
     :http-xhrio (ajax-post {:uri "/hyperlink/prepare"
                             :params params
                             :on-success [:ajax/hyperlink-update-status-ok]})}))

(rf/reg-event-db
  :ajax/hyperlink-update-status-ok
  (fn [db _]
    (js/alert "Update ok")
    (assoc db :loading? false)))

;;; Autonomy
(rf/reg-event-fx
  :ajax/autonomy-get-dih
  (fn [{db :db} _]
    {:db (assoc db :loading? true)
     :http-xhrio (ajax-get {:uri "/autonomy/dih"
                            :on-success [:ajax/autonomy-get-dih-ok]})}))


(rf/reg-event-db
  :ajax/autonomy-get-dih-ok
  (fn [db [_ v]]
    (-> db
        (assoc :loading? false)
        (assoc-in [:data :autonomy :dih] v))))



