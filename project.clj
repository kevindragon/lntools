(defproject tools "0.1.0-SNAPSHOT"

  :description "Tools"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.8.0"]
                 [ring "1.5.0"]
                 [compojure "1.5.1"]
                 [ring-middleware-format "0.7.0"]
                 [ring/ring-defaults "0.2.1"]
                 [ring/ring-anti-forgery "1.0.1"]
                 [environ "1.0.3"]
                 [org.clojure/java.jdbc "0.6.1"]
                 [org.xerial/sqlite-jdbc "3.8.11.2"]
                 [mysql/mysql-connector-java "5.1.39"]
                 #_[org.clojure/java.jdbc "0.3.7"]
                 #_[korma "0.4.2"]
                 [ragtime "0.6.1"]]

  :plugins [[cider/cider-nrepl "0.12.0"]
            [lein-environ "1.0.3"]]

  :source-paths ["src/clj"]
  :target-path "target/%s/"
  :main ^:skip-aot tools.core

  :profiles
  {:uberjar {:aot :all
             :uberjar-name "tools.jar"}

   :dev {:env {:database-url "dev.db"}}

   :test {:env {:database-url "test.db"}}})
