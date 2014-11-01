library routes;

import 'package:route/url_pattern.dart';

class Routes {
  static final home = new UrlPattern(r'/');
  static final sayHello = new UrlPattern(r'/say/hello/(.+)');
  static final showItem = new UrlPattern(r'/item/(.+)');
  static final currentUser = new UrlPattern(r'/currentuser');
  static final sayWelcome = new UrlPattern(r'/welcome');
  static final starred = new UrlPattern(r'/saved');
  static final people = new UrlPattern(r'/people');
  static final sendWelcome = new UrlPattern(r'/sendwelcome');
  static final sendNotifications = new UrlPattern(r'/x/sendnotifications');
}

class NoMatchingRoute {}