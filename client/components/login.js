angular.module('app')
    .component('login', {
    bindings: {
      path: '<',
    },
    controller(){
    
      this.login = (username, password) => {
        console.log(`${username} is now logged in their password is ${password}`);
        //itemsService.sendText(username, password);
      };
    },
    templateUrl: '/templates/login.html', 
  });
