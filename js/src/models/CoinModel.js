/**
 * @class CoinModel
 * @extends BaseModel
 */

import BaseModel from './BaseModel.js';

export default class CoinModel extends BaseModel{

    constructor(){

        super();

    }

    getData(){

        var deferred = $.Deferred();

        this.fetcher({

            success: function(data){

                this.data = data;

                deferred.resolve(true)


            }.bind(this),

            error: function(){

                this.data = {};
                deferred.resolve(false);


            }.bind(this),

            type: 'GET',

            beforeSend: function (request){
                
                request.setRequestHeader('X-Mashape-Key', window.BCPing.mashapeKey);
            },

            url: 'https://montanaflynn-bitcoin-exchange-rate.p.mashape.com/prices/spot_rate?currency=USD'

        });


        return deferred;


    }

}