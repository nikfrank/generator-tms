(function(angular) {
'use strict';

class ComponentController{
    /*@ngInject*/
    constructor(someService){
	this.name = someService.method('what');
    }
}
ComponentController.$inject = ['someService'];

angular.module('tmsApp')
    .controller('ComponentNameController', ComponentController);

})(angular);
