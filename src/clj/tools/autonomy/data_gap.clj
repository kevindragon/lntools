(ns tools.autonomy.data-gap
  (:require [clojure.java.jdbc :as j]
            [clojure.string :as str]
            [clj-http.client :as client]
            [clojure.data.zip.xml :refer [text]]
            [tools.autonomy.lib :as autn-lib]
            [tools.settings.data-gap :as data-gap-settings]
            [tools.db :as db]
            [tools.config :as config]))


(defn settings []
  (data-gap-settings/data-gaps))

(def ^:const get-sql
  "select
   data_gap.*
   from data_gap
   where data_gap.id = ?")

(defn get-ids [db sql from to]
  (let [data-from-db (j/query db [sql from to])]
    (group-by
      :display
      (map
        #(assoc % :display (if (or (= true (:display %))
                                 (= 1 (:display %)))
                             :show
                             :hide))
        data-from-db))))

(defn string->int [s]
  (Integer/parseInt s))

(defn get-autn-xml [host port db ids]
  (client/get
    (str "http://" host ":" port
         "/action=query&combine=simple&databasematch=" db
         "&MaxResults=" (count ids) "&fieldtext=EQUAL{"
         (str/join "," ids)
         "}:id&anylanguage=true&printfields=id")
    config/proxy-setting))

(defn get-id-list [xml-str]
  (map
    #(string->int %)
    (autn-lib/get-tag-in
      (autn-lib/parse-xml-str xml-str)
      [:autnresponse
       :responsedata
       :autn:hit
       :autn:content
       :DOCUMENT
       :ID
       text])))

(defn query-need-fetch [host port autn-db ids]
  (if (empty? ids)
    []
    (let [x (get-autn-xml host port autn-db ids)
          autn-ids (get-id-list (:body x))]
      (vec (clojure.set/difference
             (set ids)
             (set autn-ids))))))

(defn query-need-delete [host port autn-db ids]
  (if (empty? ids)
    []
    (let [x (get-autn-xml host port autn-db ids)
          autn-ids (get-id-list (:body x))]
      autn-ids)))

(defn calc [{:keys [gap_id db_id dah_id from to] :as params}]
  (let [gap (first (j/query db/db [get-sql gap_id]))
        mysql-db (db/get-db db_id)
        dah (db/dah-by-id dah_id)
        {:keys [show hide]} (get-ids mysql-db (:sql_statement gap) from to)]
    {:status 200
     :body {:need_fetch  (query-need-fetch
                           (:host dah)
                           (:port dah)
                           (:autn_db_name gap)
                           (map :id show))
            :need_delete (query-need-delete
                           (:host dah)
                           (:port dah)
                           (:autn_db_name gap)
                           (map :id hide))}}))

