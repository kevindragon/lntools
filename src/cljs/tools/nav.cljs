(ns tools.nav
  (:require [om.core :as om]
            [om.dom :as dom]))


(defn nav [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/ul #js {:className "nav"}
              (map (fn [d] (dom/li nil d)) data)))))
