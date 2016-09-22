(ns tools.route
  (:require [goog.events :as events]
            [bidi.bidi :as bidi]
            [re-frame.core :as rf])
  (:import [goog History]
           [goog.History EventType]))

(enable-console-print!)

(def routes
  ["" {#"/?"        :index
       "/settings/" {"user" {#"/?"  :settings|user
                             "/add" :settings|user|add}}}
   [true :not-found]])

(def history
  (doto (History.)
    (events/listen EventType.NAVIGATE
                   (fn [event]
                     (let [params (bidi/match-route routes (.-token event))]
                       (rf/dispatch [:update-route params]))))
    (.setEnabled true)))

