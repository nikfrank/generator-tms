(function(angular) {
'use strict';

function pageRoute($stateProvider) {
    $stateProvider.state('page', {
        url: '/page',
        templateUrl: 'app/page/page-route.html',
        controller: 'PageRouteController',
        controllerAs: 'vm'
    });
}

pageRoute.$inject = ['$stateProvider'];

angular.module('tmsApp')
    .config(pageRoute);
})(angular);
