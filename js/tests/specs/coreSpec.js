/*var assert = require('assert');
describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal(-1, [1,2,3].indexOf(4));
        });
    });
});*/

import CoreView from '../../src/core/views/CoreView.js';

var coreView = new CoreView();

var assert = require('assert');
describe('CoreView', function(){

    it('should contain a sampleFunc method', function(){

        assert.notEqual('undefined', coreView.sampleFunc);

    });

    describe('#sampleFunc()', function(){

        it('should return 1 when called', function(){

            assert.equal(1, coreView.sampleFunc());

        });


    });


});
