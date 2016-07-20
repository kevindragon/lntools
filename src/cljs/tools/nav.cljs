(ns tools.nav
  (:require [om.core :as om]
            [om.dom :as dom]))


(defn menu [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/li #js {:key data}
              (dom/a #js {:href (str "#" (:link data))}
                     (:name data))))))

(defn nav [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/ul #js {:className "nav"}
              (map-indexed
                #(om/build menu %2
                           {:react-key %1})
                data)))))

