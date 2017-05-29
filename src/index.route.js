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
        .state('signin', {
          url: '/admin/signin',
          templateUrl: 'app/views/admin/authentication/signin.html'
        });
      $stateProvider
        .state('signout', {
          url: '/admin/signout',
          templateUrl: 'app/views/admin/authentication/signout.html'
        });
      $stateProvider
        .state('prog_manager_invitation', {
          url: '/admin/prog_managers/invite',
          templateUrl: 'app/views/admin/prog_managers/invite.html'
        });
      $stateProvider
        .state('prog_manager_accept_invitation', {
          url: '/prog_manager/invitation/accept/:token',
          templateUrl: 'app/views/prog_managers/accept_invitation.html'
        });
        $stateProvider
          .state('attendee_invitation', {
            url: '/admin/attendees/invite',
            templateUrl: 'app/views/admin/attendees/invite.html'
          });
        $stateProvider
          .state('attendee_accept_invitation', {
            url: '/attendee/invitation/accept/:token',
            templateUrl: 'app/views/attendees/accept_invitation.html'
          });
      });
