(ns tools.views
  (:require [re-frame.core :as rf]))

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
        (if hide "- " "+ ")]
       [:span name]
       [navigation-child children hide]])))

(defn navigation []
  (let [navs (rf/subscribe [:nav])]
    [:div.nav
     [:ul
      [:li [:a {:href "#/"} "Home"]]
      (for [[index nav] (map-indexed vector @navs)]
        ^{:key index} [navigation-top index nav])
      [:li [:a {:href "#/sign-out"} "Sign out"]]]]))

(defn home-page []
  [:h1 "Home page"])

(defn layout []
  (let [route (rf/subscribe [:route])]
    [:div.container
     [navigation]
     [:div.playground
      [home-page]]]))