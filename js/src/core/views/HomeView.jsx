import HeaderView from './../../views/HeaderView.jsx';
import FooterView from './../../views/FooterView.jsx';

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
                <div className="main-wrapper">body goes here</div>
                <FooterView />
            </div>
        )

    }


}

export default HomeView;