// Look up requiring axios
// const axios = require('axios');

angular.module('app')
  .service('Serve', function Serve($http) {
    this.login = (username, password) => {
      $http.post('/login', {
        username, password
      })
        .then((response) => {
          console.log(response, 'login request worked');
        })
        .catch((error) => {
          console.error(error);
        });
    };

    this.signup = (username, fullname, password, country, services) => {
      $http.post('/signup', {
        username, fullname, password, country, services
      })
        .then((response) => {
          console.log(response.data, '!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
          console.log('signup request worked');
        })
        .catch((error) => {
          console.error(error);
        });
    };

    this.search = (term) => {
      $http.post('/search', {
        term
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      })
    } 
  });
















// app.config(function($routeProvider){
//   $routeProvider
//     .when('/', {
//       templateUrl: 'Template.login.html'
//     })
//     .when('/dashboard', {
//       templateUrl: 'dashboard.html'
//     })
//     .otherwise({
//       redirectTo: '/'
//     });
// });

// app.controller('loginCtrl', function($scope, $location){
//   $scope.submit = function() {
//     const username = $scope.username;
//     const password = $scope.password;

//     if($scope.username === 'kaelyn' && $scope.password === 'chresfield'){
//       $location.path('/dashboard');
//     } else{
//       $location.path('/');
//     }
//   }
// })