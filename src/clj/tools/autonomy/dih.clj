(ns tools.autonomy.dih
  (:require [clojure.java.jdbc :as j]
            [tools.db :as db]
            [clj-http.client :as client]
            [clojure.zip :as zip]
            [clojure.xml :as xml]
            [clojure.data.zip.xml :refer [text xml->]]
            [tools.config :as config])
  (:import (java.io ByteArrayInputStream)))


(defn parse-xml-str [s]
  (xml/parse
    (ByteArrayInputStream.
      (.getBytes s "utf8"))))

(defn get-tag-in [x ks]
  (apply xml-> (zip/xml-zip x) ks))

(defn- item-data [e]
  (let [field-fn #(first (get-tag-in %1 %2))]
    {:id (field-fn e [:item :id text])
     :description (field-fn e [:item :description text])
     :received_time (field-fn e [:item :received_time text])}))

(defn- fetch-one [dih]
  (let [res (client/get
              (str "http://" (dih :host) ":" (dih :port)
                   "/a=indexergetstatus&maxresults=20")
              config/proxy-setting)
        items (get-tag-in
                (parse-xml-str (res :body))
                [:autnresponse :responsedata :item first])]
    (map item-data items)))

(defn status []
  (let [dihs (j/query db/db ["select * from dih"])]
    (map (fn [dih]
           {:name (dih :name)
            :items (fetch-one dih)}) dihs)))