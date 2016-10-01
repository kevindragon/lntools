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
  :data/settings-users
  (fn [db _]
    (get-in db [:data :settings :users])))

(rf/reg-sub
  :data/settings-databases
  (fn [db _]
    (get-in db [:data :settings :databases])))

(rf/reg-sub
  :data/settings-db-sync
  (fn [db _]
    (get-in db [:data :settings :dbs-sync])))

(rf/reg-sub
  :data/database-tables
  (fn [db _]
    (get-in db [:data :database :tables])))

(rf/reg-sub
  :data/settings-dihs
  (fn [db _]
    (get-in db [:data :settings :dihs])))

(rf/reg-sub
  :data/settings-dahs
  (fn [db _]
    (get-in db [:data :settings :dahs])))

(rf/reg-sub
  :data/settings-memcaches
  (fn [db _]
    (get-in db [:data :settings :memcaches])))

(rf/reg-sub
  :data/settings-data-gaps
  (fn [db _]
    (get-in db [:data :settings :data-gaps])))

(rf/reg-sub
  :data/hyperlink-status
  (fn [db _]
    (get-in db [:data :hyperlink :status])))

(rf/reg-sub
  :data/autonomy-dih-status
  (fn [db _]
    (get-in db [:data :autonomy :dih])))

(rf/reg-sub
  :data/autonomy-dah-status
  (fn [db _]
    (get-in db [:data :autonomy :dah])))

(rf/reg-sub
  :data/autonomy-data-gaps
  (fn [db _]
    (get-in db [:data :autonomy :gaps])))
