var app = angular
  .module('feedbackapp');

app
  .config(function($authProvider, $locationProvider) {
      $authProvider
        .configure({
          apiUrl: 'http://localhost:3000'
        });
      $locationProvider.html5Mode(true);
    });
