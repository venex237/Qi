/* http_server.dart
 *
 * Handles all HTTP server requests
 *
 * Written by Michael Köppl
 */

library http_server;

import 'dart:io';

class Http_Server {

  /*
   * constructor
   * opens a new http server
   */
  Http_Server(int port) {

    /*
     * open new http server on selected port
     *
     * for further explanations on http server --> https://www.dartlang.org/docs/tutorials/httpserver/
     */
    HttpServer.bind(InternetAddress.LOOPBACK_IP_V4, port).then((HttpServer server /*for access to server later*/){

      /*
       * information output
       */
      print("Listening on port $port ...");


      /*
       * start listening for http requests
       */
      server.listen((HttpRequest request){

        /*
         * return a message (test)
         */
        request.response.write("Oh, hello there!");
        request.response.close();

      },onDone: () => print("Done with request, returned 'Oh, hello there!'.") /*output when finished with request*/
       ,onError: (e) => print(e.toString()));

    }).catchError((e) => print(e.toString())); /*error catching*/
  }
}
