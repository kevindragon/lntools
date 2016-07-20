(ns tools.not-found
  (:require [om.core :as om]
            [om.dom :as dom]))


(defn NotFound [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div nil "404"))))