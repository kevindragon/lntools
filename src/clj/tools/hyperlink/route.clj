(ns tools.hyperlink.route
  (:require [compojure.core :as c]
            [tools.hyperlink.core :refer [status]]))


(def routes
  (c/routes
    (c/GET "/status" {} (status))))

