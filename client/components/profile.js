angular.module('app')
  .component('profile', {
    bindings: {
      path: '<',
      clickedService: '<',
    },
    controller(Serve) {
      this.changeService = (clickedService) => {
        console.log(clickedService, 'click registered in profile.js');
        this.status = !this.status;
      };
    },
    templateUrl: '/templates/profile.html',
  });
