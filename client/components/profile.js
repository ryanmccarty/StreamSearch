angular.module('app')
  .component('profile', {
    bindings: {
      path: '<',
      clickedService: '<',
    },
    controller(Serve) {

      this.changeService = (clickedService) => {
        console.log(clickedService, 'profile.js');
        this.status = !this.status;
      };
    },
    templateUrl: '/templates/profile.html',
  });
