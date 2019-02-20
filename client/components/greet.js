angular.module('app')
    .component('greet', {
    bindings: {
      log: '<',
      path: '<',
    },
    controller() {
    },
    templateUrl: '../templates/greet.html',
  });