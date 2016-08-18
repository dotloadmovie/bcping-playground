import CoreView from '../../src/core/views/CoreView.js';

var coreView = new CoreView();

var assert = require('assert');
describe('CoreView', function(){

    it('should contain a createHomeView method', function(){

        assert.notEqual('undefined', coreView.sampleFunc);

    });

    it('should contain a render method', function(){

        assert.notEqual('undefined', coreView.render);

    });


});
