(ns tools.core
  (:require [om.core :as om]
            [om.dom :as dom]
            [secretary.core :as secretary :refer-macros [defroute]]
            [goog.events :as events]
            [goog.history.EventType :as EventType]

            [tools.nav :as nav]
            [tools.page.home :as home]
            [tools.page.db :as db]
            [tools.not-found :refer [NotFound]])
  (:import goog.History))


(enable-console-print!)

(secretary/set-config! :prefix "#")

(def app-state
         (atom
           {:title "Hello World!"
            :nav   [{:name "Home" :link "/"}
                    {:name "Database Settings" :link "/db/settings"}
                    {:name "Database Sync" :link "/db/sync"}]}))

(defn layout [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div
        #js {:className "container"}
        (dom/div
          #js {:className "left-side"}
          (om/build nav/nav (:nav data)))
        (dom/div
          #js {:className "playground"}
          (om/build
            (:children data)
            (dissoc data :children)))))))

(defonce app (.getElementById js/document "app"))

(defn route [component]
  (om/root layout
           (swap! app-state merge {:children component})
           {:target app}))

(defroute "/" [] (route home/home))
(defroute "/db/sync" [] (route db/sync))
(defroute "/db/settings" [] (route db/settings))
(defroute "*" [] (om/root NotFound nil {:target app}))

(let [h (History.)]
  (events/listen h EventType/NAVIGATE #(secretary/dispatch! (.-token %)))
  (doto h (.setEnabled true)))