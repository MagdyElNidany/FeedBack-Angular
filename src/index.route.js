var app = angular
  .module('feedbackapp');

app
  .config(function($stateProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'app/views/home/index.html'
        });
      $stateProvider
        .state('admin_signin', {
          url: '/admin/signin',
          templateUrl: 'app/views/admin/authentication/signin.html'
        });
      $stateProvider
        .state('admin_signout', {
          url: '/admin/signout',
          templateUrl: 'app/views/admin/authentication/signout.html'
        });
        $stateProvider
          .state('signin', {
            url: '/signin',
            templateUrl: 'app/views/authentication/signin.html'
          });
      });
