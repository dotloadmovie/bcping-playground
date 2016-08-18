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

            url: '/ext/sample_service.php'

        });


        return deferred;


    }

}