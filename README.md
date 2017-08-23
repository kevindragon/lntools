# tools

Battle for efficiency

## Prerequisites

You will need [Leiningen][1] 2.0 or above installed.

[1]: https://github.com/technomancy/leiningen

## Develop in Emacs

Start repl

    M-X `cider-jack-in`

Start figwheel

    user=> (use 'figwheel-sidecar.repl-api)
    user=> (start-figwheel!)

In cljs repl

    user=> (cljs-repl)

## Running

To start a web server for the application, run:

    lein uberjar
    java -jar target/uberjar/tools.jar migrate
    java -jar target/uberjar/tools.jar

## License

Copyright © 2016 Kevin Jiang <kittymiky@gmail.com>
