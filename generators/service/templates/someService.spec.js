'use strict';

describe('Service: SomeService', function () {

    // load the directive's module and view
    beforeEach(module('tmsApp'));

    
    it('should do stuff that we want', inject(function (someService) {
	spyOn(someService, 'method').and.callThrough()
	expect(someService.method('whom')).toEqual('whomever');
	expect(someService.method).toHaveBeenCalled();
    }));
});
