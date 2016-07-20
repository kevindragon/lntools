(ns tools.page.db
  (:require [om.core :as om]
            [om.dom :as dom]))


(defn sync [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div
        #js {:className "db-sync"}
        "db sync"))))

(defn settings [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div
        #js {:className "db-settings"}
        "Database settings"))))
