/**
 * @class CoreView
 */
import HomeView from './HomeView.jsx';

export default class CoreView {

    constructor(config) {

        this.template = '<div id="container" class="container"></div>';

        this.config = config || {};

    }


    render(){

        $(this.config.el).find('#container').remove();

        $(this.config.el).append(this.template);

        this.createHomeView();

    }

    createHomeView(){

        ReactDOM.unmountComponentAtNode($('#container')[0]);

        this.homeView = React.createElement(this.homeViewComponent,{});


        ReactDOM.render(<div className="main-wrapper"><HomeView current={parseFloat(this.config.model.data.amount)} target={this.config.personal.high} /></div>, $('#container')[0]);

    }


}