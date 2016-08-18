import CoreController from '../../src/core/Corejs';

var coreController = new CoreController();

var assert = require('assert');
describe('CoreController', function(){

    it('should contain an override default view method', function(){

        assert.notEqual('undefined', coreController.overrideDefaultView);

    });


});
