(function(angular) {
'use strict';

class PageController{
    /*@ngInject*/
    constructor($state){
	this.params = $state.params;
    }
}
PageController.$inject = ['$state'];

angular.module('tmsApp')
    .controller('PageController', PageController);
})(angular);
