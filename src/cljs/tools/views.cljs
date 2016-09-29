(ns tools.views
  (:require [re-frame.core :as rf]
            [tools.views.settings :as settings]
            [tools.views.database :as database]))

(enable-console-print!)

(defn navigation-child [children hide]
  [:ul.sub {:class (and hide "hide")}
   (for [[idx item] (map-indexed vector children)]
     ^{:key idx}
     [:li [:a {:href (:href item)} (:name item)]])])

(defn navigation-top [index nav]
  (let [name (:name nav)
        hide (:hide? nav)
        href (:href nav)
        children (:children nav)
        fold-fn (fn [index bool]
                  (rf/dispatch
                    [:display-nav index bool]))]
    (if (not-empty href)
      [:li [:a {:href href} name]]
      [:li
       [:span.fold {:on-click (fn [_] (fold-fn index (not hide)))}
        (if hide "+ " "- ")]
       [:span name]
       [navigation-child children hide]])))

(defn navigation []
  (let [navs (rf/subscribe [:nav])]
    [:div.nav
     [:ul
      [:li [:a {:href "/"} "Home"]]
      (for [[index nav] (map-indexed vector @navs)]
        ^{:key index} [navigation-top index nav])
      [:li [:a {:href "/logout"} "Sign out"]]]]))

(defn home-page []
  [:h1 "Home page"])

(defn not-found []
  [:h2 "Page not found"])

(defn loading []
  [:div.loading "Loading..."])

(def url-component-mapping
  {:index                 [home-page]
   :settings|user         [settings/settings settings/user]
   :settings|user|add     [settings/settings settings/add-user]
   :settings|database     [settings/settings settings/database]
   :settings|database|add [settings/settings settings/add-database]
   :database|sync         [database/layout database/sync]})

(defn url->component [k]
  (get url-component-mapping k [not-found]))

(defn layout []
  (let [{:keys [handler]} (deref (rf/subscribe [:route]))
        loading? (deref (rf/subscribe [:loading?]))]
    [:div.container
     [navigation]
     [:div.playground
      (url->component handler)]
     (when loading? [loading])]))