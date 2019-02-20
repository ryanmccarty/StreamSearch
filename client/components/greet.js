angular.module('app')
    .component('greet', {
    bindings: {
      log: '<',
      count: '<',
    },
    controller() {
    },
    templateUrl: '../templates/greet.html',
  });