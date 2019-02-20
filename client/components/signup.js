angular.module('app')
  .component('signup', {
    bindings: {
      path: '<',
      log: '<',
    },
    controller(Serve){
    this.username = null;
    this.fullname = null;
    this.password = null;
    this.services = null;
    this.country = null;
    this.createUser = () => {
      Serve.signup(this.username, this.fullname, this.password, this.services, this.country);
    }
  },
    templateUrl: '/templates/signup.html',
})