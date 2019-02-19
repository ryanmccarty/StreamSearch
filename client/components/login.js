function Login($scope, $element, $attr){

  


  ctrl.userInputLogin= function(user, prop, info){
    user[prop] = info;
  };
}

  angular.module('StreamingServiceApp')
    .component('logIn', {
    bindings: {
      
    },
    controller(){
    
      this.login = (username, password) => {
        console.log(`${username} is now logged in`);
        //itemsService.sendText(username, password);
      };
    },
    templateUrl: '/Templates/login.html', 
  });
