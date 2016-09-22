(ns tools.views.settings
  (:require [re-frame.core :as rf]
            [reagent.core :as ra]
            [tools.util :refer [indexed-vec]]))

(defn table
  ([body] [:table.table
           [:tbody
            (for [[row-idx row] (indexed-vec body)]
              ^{:key row-idx}
              [:tr
               (for [[idx col] (indexed-vec row)]
                 ^{:key idx} [:td col])])]])
  ([head body] [:table.table
                [:thead
                 [:tr
                  (for [[idx col] (indexed-vec head)]
                    ^{:key idx} [:th col])]]
                [:tbody
                 (for [[row-idx row] (indexed-vec body)]
                   ^{:key row-idx}
                   [:tr
                    (for [[idx col] (indexed-vec row)]
                      ^{:key idx} [:td col])])]]))

(defn user []
  (rf/dispatch [:ajax-settings-get-user])
  (fn []
    (let [{:keys [users canAdd]} (deref (rf/subscribe [:data-settings-users]))
          del (fn [id] (rf/dispatch [:ajax-settings-del-user id]))
          rows (map (fn [{:keys [id name passport]}]
                      (vector
                        id
                        name
                        passport
                        [:button {:on-click #(del id)} "Delete"]))
                    users)]
      [:div.user
       [:h2 "Users"]
       [table ["id" "name" "passport" ""] rows]
       (when canAdd
         [:p
          [:a {:href "#/settings/user/add"} "Add user"]])])))

(defn add-user []
  (let [name (ra/atom "")
        passport (ra/atom "")]
    (fn []
      [:div.add-user
       [:h2 "Add a user"]
       [table [["name:" [:input {:type "text"
                                 :on-change #(reset! name (-> % .-target .-value))
                                 :value @name}]]
               ["passport:" [:input {:type "text"
                                     :on-change #(reset! passport (-> % .-target .-value))
                                     :value @passport}]]]]
       [:p
        [:button {:on-click #(rf/dispatch [:ajax-settings-add-user @name @passport])}
         "Add"]]])))

(defn settings [child]
  [:div.settings [child]])
