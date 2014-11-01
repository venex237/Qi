library app_s;

import 'dart:io';
import '../../config/config.dart';
import '../shared/routing/routes.dart';
import 'package:route/server.dart';
import 'package:route/url_pattern.dart';
import 'package:route/pattern.dart';

/*
 * DOCS:
 * https://github.com/justinfagnani/route
 * https://github.com/woven/dart-communities
 */

/*
 * path to start.dart
 */
final basePath = new File(Platform.script.toFilePath()).parent.path + '/';


final homeURL = new UrlPattern(r'$(config["routes"]["homeroute"])');
final profileURL = new UrlPattern(r'$(config["routes"]["profileroute"])');
final allUrls = [homeURL, profileURL];

class App{

  App() {
    // Start the server.
    HttpServer.bind(config['server']['address'], config['server']['port']).then((server) {

      print("Listening on port 8080 ...");

      server.listen((HttpRequest request){

        /*
         * get the path coming with the request
         */
        final String path = request.uri.toFilePath();

        /*
         * if path == / use index.html instead (as is stands for /)
         * if the path is a different one: serve the one
         */
        //final String resultPath = path == '/' ? '../../web/web/index.html' : path;

        String resultPath;

        if(path == '/'){
          resultPath = 'web/index.html';
        }else{
          resultPath = path;

        }

        /*
         * new file from path
         */
        final File file = new File('${basePath}${resultPath}');

        file.exists().then((bool found){
          if(found){

            /*
             * read from file
             */
            file.openRead()
              .pipe(request.response) /*pipe the data directly from the file to the response stream*/
              .catchError((e) {});
          }else{

            /*
             * couldn't find page --> error
             */
            print("404_ERROR ${basePath}${resultPath} not_found");
            _sendNotFound(request.response);
          }
        });
      });

    });

  }

  _sendNotFound(HttpResponse response){
    response.statusCode = HttpStatus.NOT_FOUND;
    response.close();
  }

}