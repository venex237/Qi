library app_s;

import 'dart:io';
import 'http/http_server.dart';
import '../../config/config.dart';

/*
 * DOCS:
 * https://github.com/justinfagnani/route
 * https://github.com/woven/dart-communities
 */

class App{

  App(){

    /*
     * creating and starting new http server
     * using http_server.dart
     */
    Http_Server httpserver = new Http_Server(InternetAddress.LOOPBACK_IP_V4, config['server']['port']);
    httpserver.start();
  }

  _sendNotFound(HttpResponse response){
    response.statusCode = HttpStatus.NOT_FOUND;
    response.close();
  }

}