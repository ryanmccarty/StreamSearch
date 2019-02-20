angular.module('app')
  .component('app', {
    bindings: {},
    controller() {
      this.getUserData = function(data){
      //itemsService.getAll(function (data) {
      //  this.items = data;
      //})
      };
      this.route = '/'
      this.login = () => {
        this.route = '/login'
      };
    },
    templateUrl: '../templates/app.html',
})

// Add a create session function and send down information to log in and signup