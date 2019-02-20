angular.module('app', ['ui.router']).config(function($stateProvider, $locationProvider) {
  // $locationProvider.html5Mode(true);
$locationProvider.hashPrefix('StreamSearch');
  const appState = {
    name: 'app',
    url: '/',
    component: 'app'
  }

  blankState = {
    name: 'blank',
    url: '',
    redirectTo: 'app'
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

  const searchState = {
    name: 'search',
    url: '/search',
    component: 'search'
  }

  $stateProvider.state(signupState);
  $stateProvider.state(loginState);
  $stateProvider.state(logoutState);
  $stateProvider.state(appState);
<<<<<<< HEAD
  $stateProvider.state(blankState);
=======
  $stateProvider.state(searchState);

>>>>>>> 531967f45198e6d9665bf0aac7e35bac9d31dc9d
});

//'itemsService'
