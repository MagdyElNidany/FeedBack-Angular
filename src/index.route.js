var app = angular
  .module('feedbackapp');

app
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('attendee', {
        abstract: true,
        url: '/',
        templateUrl: 'app/views/layouts/application_layout.html',
        controller: 'ApplicationCtrl'
      }).state('attendee.signin', {
        url: '/signin',
        templateUrl: 'app/views/attendees/authentication/signin.html',
        controller: 'AuthenticationCtrl'
      }).state('attendee.accept_invitation', {
          url: '/invitation/accept/:token',
          templateUrl: 'app/views/attendees/accept_invitation.html',
          controller: 'InvitationsCtrl'
      });

    $stateProvider
      .state('admin', {
        abstract: true,
        url: '/admin',
        templateUrl: 'app/views/layouts/admin_layout.html',
        controller: 'AdminCtrl'
      })
      .state('admin.signin', {
        url: '/signin',
        templateUrl: 'app/views/admin/authentication/signin.html',
        controller: 'AdminAuthenticationCtrl'
      }).state('admin.signout', {
        url: '/signout',
        templateUrl: 'app/views/admin/authentication/signout.html',
        controller: 'AdminAuthenticationCtrl'
      }).state('admin.mentor_invitation', {
        url: '/mentor/invite',
        templateUrl: 'app/views/admin/mentors/invite.html',
        controller: 'AdminInvitationsCtrl'
      }).state('admin.prog_manager_invitation', {
        url: '/prog_managers/invite',
        templateUrl: 'app/views/admin/prog_managers/invite.html',
        controller: 'AdminInvitationsCtrl'
      }).state('admin.attendee_invitation', {
        url: '/attendees/invite',
        templateUrl: 'app/views/admin/attendees/invite.html',
        controller: 'AdminInvitationsCtrl'
      }).state('admin.programs', {
        url: '/programs',
        templateUrl: 'app/views/admin/programs/index.html',
        controller: 'AdminProgramsCtrl'
      }).state('admin.program', {
        url: '/program/:id',
        templateUrl: 'app/views/admin/programs/show.html',
        controller: 'AdminProgramsCtrl'
      }).state('admin.new_program', {
        url: '/program/new',
        templateUrl: 'app/views/admin/programs/new.html',
        controller: 'AdminProgramsCtrl'
      }).state('admin.edit_program', {
        url: '/program/:id/edit',
        templateUrl: 'app/views/admin/programs/edit.html',
        controller: 'AdminProgramsCtrl'
      });

    $stateProvider
      .state('prog_manager', {
        abstract: true,
        url: '/prog_manager',
        templateUrl: 'app/views/layouts/prog_manager_layout.html',
        controller: 'ProgManagerCtrl'
      }).state('prog_manager.accept_invitation', {
        url: '/invitation/accept/:token',
        templateUrl: 'app/views/prog_manager/accept_invitation.html',
        controller: 'ProgManagerInvitationsCtrl'
      }).state('prog_manager.signin', {
        url: '/signin',
        templateUrl: 'app/views/prog_manager/authentication/signin.html',
        controller: 'ProgManagerAuthenticationCtrl'
      }).state('prog_manager.signout', {
        url: '/signout',
        templateUrl: 'app/views/prog_manager/authentication/signout.html',
        controller: 'ProgManagerAuthenticationCtrl'
      });

    $stateProvider
      .state('mentor', {
        abstract: true,
        url: '/mentor',
        templateUrl: 'app/views/layouts/mentor_layout.html',
        controller: 'MentorCtrl'
      }).state('mentor.accept_invitation', {
        url: '/invitation/accept/:token',
        templateUrl: 'app/views/mentor/accept_invitation.html',
        controller: 'MentorInvitationsCtrl'
      }).state('mentor.signin', {
        url: '/signin',
        templateUrl: 'app/views/mentor/authentication/signin.html',
        controller: 'MentorAuthenticationCtrl'
      }).state('mentor.signout', {
        url: '/signout',
        templateUrl: 'app/views/mentor/authentication/signout.html',
        controller: 'MentorAuthenticationCtrl'
      });

    $urlRouterProvider.otherwise('/')
  });
