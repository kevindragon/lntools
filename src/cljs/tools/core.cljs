(ns tools.core
  (:require [re-frame.core :as rf]
            [reagent.core :as ra]
            [tools.events]
            [tools.subs]
            [tools.route]
            [tools.views :as views]))

(enable-console-print!)

(defonce app-element (.getElementById js/document "app"))

(defonce _init_ (rf/dispatch-sync [:initialize]))

(defn ^:export main []
  (ra/render [views/layout] app-element))
