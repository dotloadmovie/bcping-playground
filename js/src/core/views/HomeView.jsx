import HeaderView from './../../views/HeaderView.jsx';
import FooterView from './../../views/FooterView.jsx';
import GraphView from './GraphView.jsx';

class HomeView extends React.Component{

    constructor(){

        super();

        this.navigationItems = [
            {url: 'home', name: 'Home', current: true, icon: 'fa-home'},
            {url: 'detail', name: 'Detail', icon: 'fa-bars'},
            {url: 'settings', name: 'Settings', icon: 'fa-cogs'}
        ];

    }


    render(){

        return (
            <div>
                <HeaderView data={this.navigationItems} />
                <div className="main-wrapper">
                    <GraphView target={this.props.target} current={this.props.current} />
                </div>
                <FooterView />
            </div>
        )

    }


}

export default HomeView;