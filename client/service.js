

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

    // this.getInfo = (username) => {
    //   console.log(username);
    //   $http.get('/profile-load', username)
    //     .then(console.log('cool'))
    //     .catch(console.log('error'));
    // };
<<<<<<< HEAD
    this.favoritedMovie = (resultMovieName, resultSrc, favorite, watchLater, services, user, callback) => {
      $http.post('/favoritedMovie', {
        resultMovieName, resultSrc, favorite, watchLater, services, user,
=======
    this.favoritedMovie = (resultMovieName, resultSrc, favorite, watchLater) => {
      const username = this.username;
      $http.post('/favoritedMovie', {
        resultMovieName, resultSrc, favorite, watchLater, username,
>>>>>>> 165ffca3ee1775a658194c1c84ed78589bd09852
      })
        .then((response) => {
          callback(response);
        })
        .catch((error) => {
          console.log(error.data);
        });
    };


    this.getInfo = (username, cb) => {
      $http.get(`/profile/${username}`, {
        params: { username },
      })
        .then((response) => {
          cb(response.data);
          console.log(response, 'response from request for profile info');
        })
        .catch((error) => {
          console.error(error);
        });
    };
  });
