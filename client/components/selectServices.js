angular.module('app')
  .component('selectServices', {
    templateUrl: '../templates/selectServices.html',
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



      selectServices.submitList = function(serviceList) {
        $http.post('/signup', {
          serviceList
        })
          .then((response) => {
            console.log(response, 'login request worked');
          })
          .catch((error) => {
            console.error(error);
          });
        // console.log(selectServices.serviceList);
      }
    }
  });