var app = angular
  .module('feedbackapp');

app
  .config(function($stateProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'app/home/index.html'
        });
      $stateProvider
        .state('signin', {
          url: '/signin',
          templateUrl: 'app/authentication/signin.html'
        });
      $stateProvider
        .state('signout', {
          url: '/signout',
          templateUrl: 'app/authentication/signout.html'
        });
      });
