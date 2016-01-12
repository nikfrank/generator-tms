(function(angular) {
'use strict';

angular.module('tmsApp')
    .directive('tmsComponentName', function () {
	return {
	    templateUrl: 'components/component-name/component.html',
	    restrict: 'EA',
	    scope:true,
	    bindToController:{},
	    controller:'ComponentNameController',
	    controllerAs:'vm'
	};
    });
})(angular);
