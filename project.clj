(defproject tools "0.1.2"

  :description "Tools"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.908"]
                 [ring "1.6.2"]
                 [compojure "1.6.0"]
                 [ring-middleware-format "0.7.2"]
                 [ring/ring-defaults "0.3.1"]
                 [ring/ring-anti-forgery "1.1.0"]
                 [org.clojure/java.jdbc "0.7.0"]
                 [org.xerial/sqlite-jdbc "3.20.0"]
                 [mysql/mysql-connector-java "5.1.35"]
                 [ragtime "0.7.1"]
                 [clj-http "3.7.0"]
                 [org.clojure/data.zip "0.1.2"]
                 [clojurewerkz/spyglass "1.2.0"]
                 [re-frame "0.10.1"]
                 [bidi "2.1.2"]
                 [day8.re-frame/http-fx "0.1.4"]]

  :plugins [[lein-sassy "1.0.7"]
            [lein-cljsbuild "1.1.7"]
            [lein-figwheel "0.5.12"]
            [lein-ancient "0.6.10"]]

  :source-paths ["src/clj"]
  :target-path "target/%s/"
  :main ^:skip-aot tools.core

  :profiles
  {:uberjar {:aot          :all
             :source-paths ["env/prod"]
             :uberjar-name "tools.jar"
             :prep-tasks   [["cljsbuild" "once" "min"] ["compile"]]}

   :dev     {:source-paths ["env/dev"]
             :dependencies [[binaryage/devtools "0.9.4"]
                            [com.cemerick/piggieback "0.2.2"]
                            [com.cemerick/pomegranate "0.3.1"]
                            [org.clojure/tools.nrepl "0.2.13"]
                            [figwheel-sidecar "0.5.13"]]
             :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
             }

   :test    {:source-paths ["env/test"]}

   :prod    {:source-paths ["env/prod"]}}

  :cljsbuild
  {:builds [{:id           "dev"
             :source-paths ["src/cljs"]
             :figwheel     {:on-jsload "tools.core/main"}
             :compiler     {:main          tools.core
                            :preloads      [devtools.preload]
                            :asset-path    "js/out"
                            :output-to     "resources/public/js/main.js"
                            :output-dir    "resources/public/js/out"
                            :optimizations :none
                            :pretty-print  true
                            :source-map    true}}
            {:id           "min"
             :source-paths ["src/cljs"]
             :compiler     {:main          tools.core
                            :output-to     "resources/public/js/main.js"
                            :optimizations :advanced
                            :pretty-print  false}}]}

  :sass {:src "src/sass"
         :dst "resources/public/css/"}

  :figwheel {:server-port 3449
             :css-dirs    ["resources/public/css"]}

  :clean-targets ^{:protect false} ["resources/public/js/out"
                                    "resources/public/js/main.js"
                                    "target"])
