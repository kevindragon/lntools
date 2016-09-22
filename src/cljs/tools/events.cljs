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
  :update-settings-users
  (fn [db [_ v]]
    (-> db
        (assoc :loading? false)
        (assoc-in [:data :settings :users] v))))

(defn wrap-default-xhr [m]
  (merge {:format          (ajax/json-request-format)
          :response-format (ajax/json-response-format {:keywords? true})
          :on-failure      [:ajax-error]}
         m))

(rf/reg-event-fx
  :ajax-settings-add-user
  (fn [{db :db} [_ name passport]]
    {:db         (assoc db :loading? true)
     :http-xhrio (wrap-default-xhr
                   {:method     :put
                    :uri        "/settings/user"
                    :params     {:name name :passport passport}
                    :timeout    30000
                    :on-success [:ajax-settings-add-user-ok]})}))

(rf/reg-event-db
  :ajax-settings-add-user-ok
  (fn [db _]
    (set! (.-href js/location) "#/settings/user")
    db))

(rf/reg-event-fx
  :ajax-settings-del-user
  (fn [{db :db} [_ id]]
    {:db         (assoc db :loading? true)
     :http-xhrio (wrap-default-xhr
                   {:method     :delete
                    :uri        "/settings/user"
                    :params     {:id id}
                    :on-success [:ajax-settings-get-user]})}))

(rf/reg-event-fx
  :ajax-settings-get-user
  (fn [{db :db} _]
    {:db         (assoc db :loading? true)
     :http-xhrio (wrap-default-xhr
                   {:method          :get
                    :uri             "/settings/user"
                    :timeout         30000
                    :on-success      [:update-settings-users]})}))