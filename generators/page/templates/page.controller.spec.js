'use strict';

describe('PageController: Page', function () {

    // load the directive's module and view
    beforeEach(module('tmsApp'));

    // mock a service
    var mockState = {
	params:{uid:'blah-blah-blah'}
    };

    var Controller;
    
    beforeEach(inject(function($controller) {
	Controller = $controller('PageController', {
	    $state: mockState
	});
    }));

    it('should do stuff that we want', inject(function () {
	expect(Controller.params.uid).toEqual(mockState.params.uid);
    }));
});
