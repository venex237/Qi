/* ws.dart
 *
 * Handles all websocket server requests
 *
 * Written by Michael Köppl
 */

library websocket;

import 'dart:io';
import 'dart:convert';
import 'package:route/server.dart';
import '../http/http_server.dart';

class WebSocket_Server{

  /*
   * constructor
   * creating a new route for http requests
   */
  WebSocket_Server(HttpServer server) {
    server.listen((HttpRequest request) {
      if (WebSocketTransformer.isUpgradeRequest(request)){
        WebSocketTransformer.upgrade(request).then(handleWebSocket);
      }
      else {
        print("Regular ${request.method} request for: ${request.uri.path}");
        serveRequest(request);
      }
    });
  }

  /*
   * handles connection and messages of a socket (a user)
   */
  void handleWebSocket(WebSocket socket){

    /*
     * connection message
     */
    print('Client connected!');

    /*
     * start listening for messages
     * and print incoming messages
     */
    socket.listen((String s) {
      print('Client sent: $s');
      socket.add('echo: $s');
    },
    onDone: () {
      print('Client disconnected');
    });
  }

  void serveRequest(HttpRequest request){
    request.response.statusCode = HttpStatus.FORBIDDEN;
    request.response.reasonPhrase = "WebSocket connections only";
    request.response.close();
  }
}
