angular.module('app', ["ngRoute"]).config(function ($routeProvider,$locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
  .when("/", {
    templateUrl : "templates/app.html"
  })
  .when("/login", {
    templateUrl : "templates/login.html"
  })
  .when("/signup", {
    templateUrl : "templates/signup.html"
  });
});

//'itemsService'
