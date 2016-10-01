(ns tools.util)

(defn indexed-vec [v]
  (map-indexed vector v))

(defn table [{:keys [caption head body]}]
  [:table.table
   (when caption
     [:caption caption])
   (when head
     [:thead
      [:tr
       (for [[idx col] (indexed-vec head)]
         ^{:key idx} [:th col])]])
   [:tbody
    (for [[row-idx row] (indexed-vec body)]
      ^{:key row-idx}
      [:tr
       (for [[idx col] (indexed-vec row)]
         ^{:key idx} [:td col])])]])
