(ns tools.views.memcache
  (:require [re-frame.core :as rf]
            [reagent.core :as ra]
            [tools.util :refer [table]]))

(defn clear []
  (rf/dispatch [:ajax/settings-get-memcache])
  (let [mcs (rf/subscribe [:data/settings-memcaches])
        clear (fn [id] (rf/dispatch [:ajax/memcache-clear {:id id}]))]
    (fn []
      (let [rows (map (fn [{:keys [id name host port]}]
                        (vector id name host port
                                [:button {:on-click #(clear id)} "Clear"]))
                      @mcs)]
        [:div.clear
         [:h2 "Memcache management"]
         [table {:head ["id" "name" "host" "port" ""]
                 :body  rows}]]))))

(defn layout [child]
  [:div.memcache [child]])