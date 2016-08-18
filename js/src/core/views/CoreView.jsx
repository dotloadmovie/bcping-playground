/**
 * @class CoreView
 */

import HomeView from './HomeView.jsx';

export default class CoreView {

    constructor(config) {

        this.template = '<div id="container"></div>';

        this.config = config || {};

    }

    render(){

        $(this.config.el).find('#container').remove();

        $(this.config.el).append(this.template);

        this.createHomeView();

    }

    createHomeView(){

        ReactDOM.unmountComponentAtNode($('#container')[0]);

        this.homeViewComponent = new HomeView();

        this.homeView = React.createElement(this.homeViewComponent,{});

        ReactDOM.render(<HomeView />, $('#container')[0]);

    }


}