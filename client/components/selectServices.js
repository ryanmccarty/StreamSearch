angular.module('app')
  .component('selectServices', {
    templateUrl: '../templates/selectServices.html',
    bindings: {
      createUser: '<',
    },
    controller($http) {
      const selectServices = this;

      selectServices.serviceList = {
        crunchyroll: false,
        googleplay: false,
        hulu: false,
        iTunes: false,
        netflix: false,
        primevideo: false
      };
    }
  });