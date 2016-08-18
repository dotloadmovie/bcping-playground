import CoinModel from '../../src/models/CoinModel.js';


var coinModel = new CoinModel();

var assert = require('assert');
describe('CoinModel', function(){

    it('should contain a getData method', function(){

        assert.notEqual('undefined', coinModel.getData);

    });

    it('should contain a public data property [object]', function(){

        assert.equal('[object Object]', coinModel.data.toString());

    })

    describe('#getData()', function(){

        it('should return true when called', function(){

            assert.equal(true, coinModel.getData());

        });


    });


});