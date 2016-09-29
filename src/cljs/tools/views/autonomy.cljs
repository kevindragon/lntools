(ns tools.views.autonomy
  (:require [re-frame.core :as rf]
            [reagent.core :as ra]
            [tools.util :refer [table new-table]]))

(defn dih []
  (let [dih-status (rf/subscribe [:data/autonomy-dih-status])
        t (ra/atom nil)
        update (fn [] (rf/dispatch [:ajax/autonomy-get-dih]))]
    (ra/create-class
      {:component-will-mount
       (fn []
         (update)
         (reset! t (js/setInterval update 15000)))

       :component-will-unmount
       #(js/clearInterval @t)

       :reagent-render
       (fn []
         [:div.dih
          [:h2 "DIH status"]
          (for [[rid dih] (map-indexed vector @dih-status)]
            ^{:key rid}
            [new-table {:caption [:h2 (:name dih)]
                        :head ["id" "received time" "description"]
                        :body (map #(vector (:id %)
                                            (:received_time %)
                                            (:description %))
                                   (:items dih))}])])})))

(defn layout [child]
  [:div.autonomy [child]])