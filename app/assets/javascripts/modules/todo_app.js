var todoApp = angular.module('todoApp', ['ngResource'])

todoApp.config(function ($routeProvider, $httpProvider) {
  $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');

  $routeProvider
    .when('/list',
      {
        controller: 'TodoController',
        template: JST['views/list']()
      })
    .when('/new',
      {
        controller: 'TodoController',
        template: JST['views/new']()
      })
    .when('/item/:itemID',
      {
        controller: 'TodoController',
        templateUrl: '/app/views/item.html'
      })
    .otherwise({ redirectTo: '/list' });
});

