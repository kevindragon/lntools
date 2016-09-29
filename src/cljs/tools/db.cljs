(ns tools.db)

(def default-db
  {:route      nil
   :loading?   false
   :nav        [{:name     "Settings"
                 :hide?    true
                 :children [{:name "User"
                             :href "#/settings/user"}
                            {:name "Database"
                             :href "#/settings/database"}
                            {:name "Dih"
                             :href "#/settings/dih"}
                            {:name "Dah"
                             :href "#/settings/dah"}
                            {:name "Memcache"
                             :href "#/settings/memcache"}
                            {:name "Data gap"
                             :href "#/settings/data-gap"}]}
                {:name     "Hyperlink"
                 :hide?    true
                 :children [{:name "Status"
                             :href "#/hyperlink/status"}
                            {:name "Prepare"
                             :href "#/hyperlink/prepare"}]}
                {:name     "Database"
                 :hide?    true
                 :children [{:name "Sync"
                             :href "#/database/sync"}]}
                {:name     "Autonomy"
                 :hide?    true
                 :children [{:name "Dih"
                             :href "#/autonomy/dih"}
                            {:name "Dah"
                             :href "#/autonomy/dah"}
                            {:name "Data gap"
                             :href "#/autonomy/data-gap"}]}
                {:name "Memcache"
                 :href "#/memcache"}]
   :ajax-error nil
   :data       {:settings  {:users     nil
                            :databases nil
                            :dbs-sync  nil
                            :dihs      nil
                            :dahs      nil
                            :memcaches nil
                            :data-gaps nil}
                :databases nil
                :database  {:tables nil}
                :hyperlink {:status nil}}})
