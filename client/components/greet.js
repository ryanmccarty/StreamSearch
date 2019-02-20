angular.module('app')
    .component('greet', {
    bindings: {
      log: '<',
      path: '<',
    },
    controller() {
      M.AutoInit();
    },
    templateUrl: '../templates/greet.html',
  });
  