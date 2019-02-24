angular.module('app')
  .component('profile', {
    bindings: {
      path: '<',
    },
    controller(Serve) {
      // this.username = 'ryan';
      this.services = [];
      this.movies = [];
      Serve.getServices(Serve.username, (userInfo) => {
        const keys = Object.keys(userInfo);
        keys.forEach((key) => {
          if (userInfo[key] === '1' && key !== 'id_service') this.services.push(key.slice(8));
        });
      });

      Serve.getMovies(Serve.username, (userMovies) => {
        console.log(userMovies);
        userMovies.forEach(movie => this.movies.push(movie));
      });
    },
    templateUrl: '/templates/profile.html',
  });
