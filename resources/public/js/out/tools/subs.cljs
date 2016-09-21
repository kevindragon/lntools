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