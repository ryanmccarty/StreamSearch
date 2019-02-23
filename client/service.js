

angular.module('app')
  .service('Serve', function Serve($http) {
    this.login = (username, password) => {
      $http.post('/login', {
        username, password,
      })
        .then((response) => {
          console.log(response, `${username} succesfully logged in!`);
        })
        .catch((error) => {
          console.error(error, `failed to login ${username}`);
        });
    };

    this.signup = (username, fullname, password, country, services) => {
      $http.post('/signup', {
        username, fullname, password, country, services,
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          alert(error.data);
        });
    };

    this.search = (query, callback) => {
      console.log(query);
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
    this.favoritedMovie = (resultMovieName, resultSrc, favorite, watchLater) => {
      $http.post('/favoritedMovie', {
        resultMovieName, resultSrc, favorite, watchLater,
      })
        .then((response) => {
          console.log(response, `${resultMovieName} was saved to the DB `);
        })
        .catch((error) => {
          console.log(error, 'error saving movie to db, service.js line 53-ish');
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
