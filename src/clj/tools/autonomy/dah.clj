(ns tools.autonomy.dah
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

(defn- attr-data [e]
  (let [attr-fn #((:attrs %1) %2)]
    {:id (attr-fn e :id)
     :host (attr-fn e :host)
     :aciport (attr-fn e :aciport)
     :status (attr-fn e :status)
     :weight (attr-fn e :weight)}))

(defn- fetch-one [dah]
  (let [res (client/get
              (str "http://" (dah :host) ":" (dah :port)
                   "/action=enginemanagement&engineaction=showstatus")
              config/proxy-setting)
        engines (get-tag-in
                  (parse-xml-str (res :body))
                  [:autnresponse :responsedata :engines :engine first])]
    (map attr-data engines)))

(defn status []
  (let [dahs (j/query db/db ["select * from dah"])]
    (map (fn [dah]
           {:id (dah :id)
            :name (dah :name)
            :engines (fetch-one dah)}) dahs)))

(defn engine-management [{:keys [id engineId status]}]
  "engine down or up"
  (let [dah (first (j/query db/db ["select * from dah where id = ?" id]))
        action (if (= status "down") "PowerDown" "PowerUp")]
    (if dah
      (client/get
        (str "http://" (dah :host) ":" (dah :port)
             "/action=enginemanagement&engineaction=" action "&engineid=" engineId)
        config/proxy-setting)))
  {:body {:status "ok"}})
