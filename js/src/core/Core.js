import CoreView from './views/CoreView.jsx';
import CoinModel from '../models/CoinModel';

class CoreController{

    constructor(){

        var core;

        var coinModel = new CoinModel();

        var fetchingData = coinModel.getData();

        $.when(fetchingData).done(function(status){

            if(status){
                core = new CoreView({
                    model: coinModel,
                    el:  'body'
                });

                core.render();
            }


        }.bind(this));

    }

}

var coreController = new CoreController();


