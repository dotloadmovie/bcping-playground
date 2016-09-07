/**
 * @class CoreController
 */

import CoreView from './views/CoreView.jsx';
import CoinModel from '../models/CoinModel';

class CoreController{

    constructor(){

        Radio('navigation:channel').subscribe(this.handleRouteRequest.bind(this));

        this.setRoutes();

    }

    handleRouteRequest(route){

        console.log(route);

    }

    overrideDefaultView(){

        this.router.navigate('/home');

    }

    loadHomeView(){

        var coreView;

        var coinModel = new CoinModel();

        var fetchingData = coinModel.getData();

        $.when(fetchingData).done(function(status){

            if(status){
                coreView = new CoreView({
                    model: coinModel,
                    el:  'body'
                });

                coreView.render();
            }


        }.bind(this));

    }

    loadSettingsView(){



    }

    loadDetailView(){



    }

    setRoutes(){

        this.router = new Grapnel({
            pushState: true
        });


        this.router.get('/home', this.loadHomeView.bind(this));
        this.router.get('/settings', this.loadSettingsView.bind(this));
        this.router.get('/detail', this.loadDetailView.bind(this));
        this.router.get('', this.overrideDefaultView.bind(this));

    }

}

var coreController = new CoreController();


