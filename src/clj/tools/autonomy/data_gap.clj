(ns tools.autonomy.data-gap
  (:require [tools.db :as db]
            [clojure.java.jdbc :as j]
            [tools.settings.data-gap :as data-gap-settings]))

(defn settings []
  (data-gap-settings/data-gaps))


