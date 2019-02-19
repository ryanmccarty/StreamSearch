angular.module('app')
  .component('signUp', {
  controller(){
    this.username = null;
    this.fullname = null;
    this.password = null;
    this.services = null;
    this.country = null;
    this.signup = () => {
      console.log('user has signed up');
      // itemsService.sendText(ctrl.username, ctrl.fullname, ctrl.password, ctrl.services, ctrl.country)
    };
  },
    templateUrl: '/templates/signup.html',
})