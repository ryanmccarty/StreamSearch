

angular.module('app')
  .service('Serve', function Serve($http) {
    this.login = (username, password) => {
      $http.post('/login', {
        username, password,
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
        username, fullname, password, country, services,
      })
        .then((response) => {
          console.log(response.data, '!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
          console.log('signup request worked');
        })
        .catch((error) => {
          console.error(error);
        });
    };

    this.search = (query, callback) => {
      $http.post('/search', query)
        .then(callback)
        .catch(callback);
    };
  });
