angular.module('app')
  .component('app', {
    bindings: {},
    controller() {
      this.getUserData = function(data){
      //itemsService.getAll(function (data) {
      //  this.items = data;
      //})
      };
      this.login = () => {
        console.log('hi');
      };
    },
    templateUrl: '../templates/app.html',
})

// Add a create session function and send down information to log in and signup