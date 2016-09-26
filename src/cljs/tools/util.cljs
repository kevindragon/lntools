(ns tools.util)

(defn indexed-vec [v]
  (map-indexed vector v))

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