/* http_server.dart
 *
 * Handles all HTTP server requests and does the routing (for now)
 *
 * Written by Michael Köppl
 */

library http_server;

import 'dart:io';


class Http_Server {


  /*__________________________________________________________________________________________________*/
  /*                                               VARIABLES                                          */
  /*__________________________________________________________________________________________________*/
  var address; /*stores the address of the http server*/
  var host; /*stores the port of the http server*/
  var server;/*stores http server itself*/




  /*__________________________________________________________________________________________________*/
  /*                                        CONSTRUCTOR, START & STOP                                 */
  /*__________________________________________________________________________________________________*/

  /*
   * constructor
   * stores address and port given to it
   */
  Http_Server(var a, var h) {
    address = a;
    host = h;
  }

  start(){
    /*
     * open new http server on selected port
     *
     * for further explanations on http server --> https://www.dartlang.org/docs/tutorials/httpserver/
     */
    HttpServer.bind(address, host).then((s){

      /*
       * storing server object
       */
      server = s;

      print("\n\rHTTP SERVER LISTENING ON PORT $host...");


      server.asBroadcastStream()
      /*
         * handling / requests (e.g.: www.lel.com/)
         */
        ..where((r) => r.uri.path == '/').listen((request) {
        _handleRootRequest(request);
      })

      /*
         * handling /people requests (e.g.: www.lel.com/people)
         */
        ..where((r) => r.uri.path == '/people').listen((request) {
        _handlePeopleRequest(request);
      });
    });
  }

  /*
   * close http server
   */
  stop(){
    server.close();
  }





  /*__________________________________________________________________________________________________*/
  /*                                        OUTPUT & REQUEST HANDLERS                                 */
  /*__________________________________________________________________________________________________*/


  /*
   * print out request data on incoming request
   */
  void printRequestData(var request, String servedfile){
    /*
     * add 1 clear line
     * print data
     */
    print('\n\r${new DateTime.now()} ${request.method} for ${request.uri.path} --> served $servedfile');
  }

  /*
   * handle requests for /
   */
  _handleRootRequest(request){
    /*
     * switch between request methods, such as GET, POST, etc.
     */
    switch(request.method) {
      case 'GET':
        /*
         * try to print IP
         */
        //print('By --> ${request.connectionInfo.remoteHost}');

        /*
         * print request information
         */
        printRequestData(request, '/web/lel.html');

        /*
         * set contentType of response
         */
        request.response.headers.contentType = new ContentType("text", "html");

        /*
         * return/pipe file directly via response
         */
        new File('web/lel.html').openRead().pipe(request.response);
        break;

      case 'POST':
        /*handle post request*/
        break;
    }
  }

  /*
   * handle requests for /people
   */
  _handlePeopleRequest(request){
    switch(request.method) {
      case 'GET':

        /*
         * print request information
         */
        printRequestData(request, '/web/people.html');

        /*
         * set contentType of response
         */
        request.response.headers.contentType = new ContentType("text", "html");

        /*
         * return/pipe file directly via response
         */
        new File('web/people.html').openRead().pipe(request.response);
        break;

      case 'POST':
        break;
    }
  }
}
