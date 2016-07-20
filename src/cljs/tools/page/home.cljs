(ns tools.page.home
  (:require [om.core :as om]
            [om.dom :as dom]))

(defn home [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div nil
               (dom/h1 nil (:title data))
               ))))
