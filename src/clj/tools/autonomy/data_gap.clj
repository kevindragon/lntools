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
   data_gap.*,
   dah.host as dah_host,
   dah.port as dah_port
   from data_gap
   left join dah on data_gap.dah_id = dah.id
   left join databases on data_gap.database_id = databases.id
   where data_gap.id = ?")

(defn get-ids [db sql from to]
  (let [data-from-db (j/query db [sql from to])]
    (group-by
      :display
      (map
        #(assoc % :display (if (:display %) :show :hide))
        data-from-db))))

(defn string->int [s]
  (Integer/parseInt s))

(defn get-autn-xml [host port db ids]
  (client/get
    (str "http://" host ":" port
         "/action=query&databasematch=" db
         "&MaxResults=" (count ids) "&fieldtext=EQUAL{"
         (str/join "," ids)
         "}:id&anylanguage=true&printfields=id")
    config/proxy-setting))

(defn get-id-list [xml-str]
  (autn-lib/get-tag-in
    (autn-lib/parse-xml-str xml-str)
    [:autnresponse
     :responsedata
     :autn:hit
     :autn:content
     :DOCUMENT
     :ID
     text
     first
     str
     string->int]))

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

(defn calc [{:keys [dataGapId from to]}]
  (let [row (first (j/query db/db [get-sql dataGapId]))
        mysql-db (db/get-db (:database_id row))
        {:keys [show hide]} (get-ids mysql-db (:sql_statement row) from to)]
    {:status 200
     :body {:need_fetch  (query-need-fetch
                           (:dah_host row)
                           (:dah_port row)
                           (:autn_db_name row)
                           (map :id show))
            :need_delete (query-need-delete
                           (:dah_host row)
                           (:dah_port row)
                           (:autn_db_name row)
                           (map :id hide))}}))

