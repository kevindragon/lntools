(defproject tools "0.1.1"

  :description "Tools"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.229"]
                 [ring "1.5.0"]
                 [compojure "1.5.1"]
                 [ring-middleware-format "0.7.0"]
                 [ring/ring-defaults "0.2.1"]
                 [ring/ring-anti-forgery "1.0.1"]
                 [environ "1.0.3"]
                 [org.clojure/java.jdbc "0.6.1"]
                 [org.xerial/sqlite-jdbc "3.8.11.2"]
                 [mysql/mysql-connector-java "5.1.35"]
                 [ragtime "0.6.1"]
                 [clj-http "2.2.0"]
                 [org.clojure/data.zip "0.1.2"]
                 [clojurewerkz/spyglass "1.1.0"]
                 [re-frame "0.8.0"]
                 [bidi "2.0.10"]]

  :plugins [[lein-cljsbuild "1.1.4"]
            [lein-figwheel "0.5.7"]
            [lein-sassi "0.1.0"]]

  :source-paths ["src/clj"]
  :target-path "target/%s/"
  :main ^:skip-aot tools.core

  :profiles
  {:uberjar {:aot          :all
             :uberjar-name "tools.jar"
             :prep-tasks   ["sassi" ["cljsbuild" "once" "min"]]}

   :dev     {:source-paths ["env/dev"]
             :dependencies [[binaryage/devtools "0.8.2"]
                            [com.cemerick/piggieback "0.2.1"]
                            [org.clojure/tools.nrepl "0.2.10"]
                            [figwheel-sidecar "0.5.7"]]
             :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}}

   :test    {:source-paths ["env/test"]}

   :prod    {:source-paths ["env/prod"]}}

  :cljsbuild
  {:builds [{:id           "dev"
             :source-paths ["src/cljs"]
             :figwheel     {:on-jsload "tools.core/main"}
             :compiler     {:main                 tools.core
                            :preloads             [devtools.preload]
                            :asset-path           "js/out"
                            :output-to            "resources/public/js/main.js"
                            :output-dir           "resources/public/js/out"
                            :optimizations        :none
                            :pretty-print         true
                            :source-map           true
                            :source-map-timestamp true}}
            {:id           "min"
             :source-paths ["src/cljs"]
             :compiler     {:main                 tools.core
                            :output-to            "resources/public/js/main.js"
                            :optimizations :advanced}}]}

  :sass {:exec "C:/Ruby23-x64/bin/sass.bat"
         :input "src/sass/style.scss"
         :output "resources/public/css/style.css"}

  :figwheel {:server-port 3449
             :css-dirs    ["resources/public/css"]})
