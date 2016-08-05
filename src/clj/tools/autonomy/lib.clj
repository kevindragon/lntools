(ns tools.autonomy.lib
  (:require [clojure.zip :as zip]
            [clojure.xml :as xml]
            [clojure.data.zip.xml :refer [text xml->]])
  (:import (java.io ByteArrayInputStream)))


(defn parse-xml-str [s]
  (xml/parse
    (ByteArrayInputStream.
      (.getBytes s "utf8"))))

(defn get-tag-in [x ks]
  (apply xml-> (zip/xml-zip x) ks))
