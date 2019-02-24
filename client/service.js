

angular.module('app')
  .service('Serve', function Serve($http) {
    this.username = undefined;
    this.login = (username, password) => {
      $http.post('/login', {
        username, password,
      })
        .then((response) => {
          this.username = username;
          console.log(response, `${username} succesfully logged in!`);
        })
        .catch((error) => {
          console.error(error, `failed to login ${username}`);
        });
    };

    this.signup = (username, fullname, password, country, services, cb) => {
      $http.post('/signup', {
        username, fullname, password, country, services,
      })
        .then((response) => {
          cb(response.data);
        })
        .catch((error) => {
          cb(error.data);
        });
    };

    this.search = (query, callback) => {
      $http({
        url: '/search',
        params: query,
        method: 'GET',
      })
        .then(callback)
        .catch(callback);
    };

    this.favoritedMovie = (resultMovieName, resultSrc, favorite, watchLater, services, user) => {
      $http.post('/favoritedMovie', {
        resultMovieName, resultSrc, favorite, watchLater, services, user,
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    };


    this.getServices = (username, cb) => {
      $http.get(`/profile/${username}/favorites`, {
        params: { username },
      })
        .then((response) => {
          cb(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    this.getMovies = (username, cb) => {
      $http.get(`/profile/${username}/movies`, {
        params: { username },
      })
        .then((response) => {
          cb(response.data);
          console.log(response, 'response from request for user movies');
        })
        .catch((error) => {
          console.error(error);
        });
    };
  });
