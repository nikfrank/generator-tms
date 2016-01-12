(function(angular) {
'use strict';

class SomeService{
    constructor(){
	this.name = 'some name we want somewhere';
    }

    method(arg){
	return (arg+'ever');
    }

    
}
SomeService.$inject = [];

angular.module('tmsApp').service('someService', SomeService);

})(angular);
