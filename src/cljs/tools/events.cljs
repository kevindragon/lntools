(ns tools.events
  (:require [re-frame.core :as rf]
            [tools.db :refer [default-db]]))

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