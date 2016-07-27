# tools

Battle for efficiency

## Prerequisites

You will need [Leiningen][1] 2.0 or above installed.

[1]: https://github.com/technomancy/leiningen

## Running

To start a web server for the application, run:

    lein uberjar
    java -jar target/uberjar/tools.jar migrate
    java -jar target/uberjar/tools.jar

## License

Copyright © 2016 Kevin Jiang <kittymiky@gmail.com>
