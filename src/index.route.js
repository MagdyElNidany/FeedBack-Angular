var app = angular
  .module('feedbackapp');

app
  .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'app/views/home/index.html'
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
          templateUrl: 'app/views/attendees/authentication/signin.html'
        });
      $stateProvider
        .state('mentor_invitation', {
          url: '/admin/mentor/invite',
          templateUrl: 'app/views/admin/mentors/invite.html'
        });
      $stateProvider
        .state('mentor_accept_invitation', {
          url: '/mentor/invitation/accept/:token',
          templateUrl: 'app/views/mentors/accept_invitation.html'
        });
      $stateProvider
        .state('mentor_signin', {
          url: '/mentors/signin',
          templateUrl: 'app/views/mentors/authentication/signin.html'
        });
      $stateProvider
        .state('mentor_signout', {
          url: '/mentors/signout',
          templateUrl: 'app/views/mentors/authentication/signout.html'
        });
      // $stateProvider
      //   .state('prog_manager_invitation', {
      //     url: '/admin/prog_managers/invite',
      //     templateUrl: 'app/views/admin/prog_managers/invite.html'
      //   });
      $stateProvider
        .state('mentor_program_page', {
          url: '/mentors/program_page',
          templateUrl: 'app/views/mentors/program_page.html'
        });
      $stateProvider
        .state('prog_manager_signin', {
          url: '/prog_managers/signin',
          templateUrl: 'app/views/prog_managers/authentication/signin.html'
        });
        $stateProvider
        .state('prog_manager_signout', {
          url: '/prog_managers/signout',
          templateUrl: 'app/views/prog_managers/authentication/signout.html'
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
      $urlRouterProvider.otherwise('/')
      });
