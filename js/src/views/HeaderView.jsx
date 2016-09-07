import NavigationView from './NavigationView.jsx';

export default class HeaderView extends React.Component{

    constructor(props){

        super(props);

        this.props = props;

    }

    render(){

        return (
            <div className="header">
                <NavigationView data={this.props.data} />
                <h1>Page Header</h1>
            </div>
        );

    }

}