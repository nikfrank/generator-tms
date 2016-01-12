'use strict';

describe('Component: ComponentName', function () {

    // load the directive's module and view
    beforeEach(module('tmsApp'));

    var Controller, mockSomeService;

    // mock a service
    mockSomeService =  {
	method: function(arg){
	    return (arg+'ever');
	}
    };
    
    beforeEach(inject(function($controller){

	spyOn(mockSomeService, 'method').and.callThrough();

	Controller = $controller('ComponentNameController', {
	    someService: mockSomeService
	});
    }));

    it('should do stuff that we want', inject(function ($compile) {
	expect(mockSomeService.method).toHaveBeenCalled();
	expect(Controller.name).toEqual('whatever');
    }));
});
