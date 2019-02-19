angular.module('app')
  .component('selectServices', {
    templateUrl: 'templates/selectServices.html',
    controller: function() {
      const selectServices = this;

      selectServices.serviceList = {
        crunchyroll: false,
        googleplay: false,
        hulu: false,
        iTunes: false,
        netflix: false,
        primevideo: false
      };

      selectServices.hasService = function(service) {
        console.log(this.serviceList);
      }
    }
  });