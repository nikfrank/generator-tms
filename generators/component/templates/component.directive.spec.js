'use strict';

describe('Component: ComponentNameDirective', function () {

    // load the directive's module and view
    beforeEach(module('tmsApp'));
    beforeEach(module('components/component-name/component.html'));

    var element, scope;

    beforeEach(inject(function ($rootScope, $compile) {
	scope = $rootScope.$new();
	element = angular.element('<tms-component-name></tms-component-name>');
	element = $compile(element)(scope);
	scope.$apply();
    }));

    it('should do stuff that we want', inject(function () {
	expect(element.text()).toContain('this is the componentName component');
    }));
});
