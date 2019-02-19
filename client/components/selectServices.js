angular.module('app')
  .component('selectServices', {
    templateUrl: 'templates/selectServices.html',
    controller: function() {
      const selectServices = this;

      selectServices.serviceList = [
        'crunchyroll', 
        'googleplay',
        'hulu',
        'iTunes',
        'netflix',
        'primevideo' 
      ];

      selectServices.serviceStatus1 = null;
      selectServices.serviceStatus2 = null;
      selectServices.serviceStatus3 = null;

      selectServices.hasService = function(val) {
        console.log(selectServices.serviceStatus1)
        console.log(selectServices.serviceStatus2)
        console.log(selectServices.serviceStatus3)
        // console.log(val);
      }
    }
  });