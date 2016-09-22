(ns tools.subs
  (:require [re-frame.core :as rf]))

(rf/reg-sub
  :route
  (fn [db _]
    (:route db)))

(rf/reg-sub
  :nav
  (fn [db _]
    (:nav db)))

(rf/reg-sub
  :loading?
  (fn [db _]
    (:loading? db)))

(rf/reg-sub
  :data-settings-users
  (fn [db _]
    (get-in db [:data :settings :users])))