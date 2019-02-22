angular.module('app')
  .component('login', {
    bindings: {
      path: '<',
    },
    controller(Serve) {
      this.username = null;
      this.password = null;

      this.login = () => {
        console.log(`logging in ${this.username}...`);
        Serve.login(this.username, this.password);
      };
    },
    templateUrl: '/templates/login.html',
  });
