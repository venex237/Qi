/* http_server.dart
 *
 * Handles all HTTP server requests
 *
 * Written by Michael Köppl
 */

library http_server;

import 'dart:io';
import 'package:route/server.dart';
import '../ws/ws.dart';


class Http_Server {

  /*
   * constructor
   * opens a new http server
   */
  Http_Server() {

    /*
     * open new http server on selected port
     *
     * for further explanations on http server --> https://www.dartlang.org/docs/tutorials/httpserver/
     */
    HttpServer.bind(InternetAddress.LOOPBACK_IP_V4, 4041)
    .then(listenForRequests)
    .catchError((e) => print (e.toString()));

  }


  listenForRequests(HttpServer _server) {

    /*
     * start listening for http requests
     */
    _server.listen((HttpRequest request) {

      /*
       * if the request is a GET request
       */
      if (request.method == 'GET') {

        /*
         * call GET event handler
         */
        handleGet(request);

      } else {

        /*
         * HTTP ERROR if request is not a GET request
         */
        request.response.statusCode = HttpStatus.METHOD_NOT_ALLOWED;
        request.response.write("Unsupported request: ${request.method}.");
        request.response.close();
      }
    },
    onDone: () => print('No more requests.'),
    onError: (e) => print(e.toString()) );
  }

  /*
   * GET event handler
   */
  void handleGet(HttpRequest request) {

    /*
     * get username from u parameter in URL
     *
     * e.g.: www.qi.com/?u=brunoisfgt
     */
    String username = request.uri.queryParameters['u'];

    /*
     * return HTTP status code 200 (OK)
     */
    request.response.statusCode = HttpStatus.OK;
  }
}
