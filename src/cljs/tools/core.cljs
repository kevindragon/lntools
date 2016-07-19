(ns tools.core
  (:require [om.core :as om]
            [om.dom :as dom]
            [tools.nav :as nav]))


(defonce app-state
  (atom
   {:title "Hello World!"
    :nav ["Home" "Database Sync"]}))

(defn widget [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div nil
               (dom/h1 nil (:title data))
               (om/build nav/nav (:nav data))))))

(om/root widget app-state
         {:target (.getElementById js/document "app")})

