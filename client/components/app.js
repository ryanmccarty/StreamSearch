angular.module('app')
  .component('main', {
    bindings: {},
    controller() {
      this.getUserData = function(data){
      //itemsService.getAll(function (data) {
      //  this.items = data;
      //})
      }
    },
    templateUrl: './templates/app.html',
})

// Add a create session function and send down information to log in and signup