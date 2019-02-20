angular.module('app')
    .component('login', {
    bindings: {
      path: '<',
    },
    controller(Serve){
      this.username = null;
      this.password = null;
    
      this.login = () => {
        console.log(`${this.username} is now logged in their password is ${this.password}`);
        Serve.login(this.username, this.password);
        //itemsService.sendText(username, password);
      };
    },
    templateUrl: '/templates/login.html', 
  });
