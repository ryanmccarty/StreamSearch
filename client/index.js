angular.module('app', ['ui.router']).config(function($stateProvider) {
  const appState = {
    name: 'app',
    url: '/',
    component: 'app'
  }
  
  const signupState = {
    name: 'signup',
    url: '/signup',
    component: 'signup'
  }

  const loginState = {
    name: 'login',
    url: '/login',
    component: 'login'
  }

  const logoutState = {
    name: 'logout',
    url: '/logout',
    redirectTo: 'app'
  }

  $stateProvider.state(signupState);
  $stateProvider.state(loginState);
  $stateProvider.state(logoutState);
  $stateProvider.state(appState);
});

//'itemsService'
