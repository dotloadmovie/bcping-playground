export default class NavigationView extends React.Component{

    constructor(props){

        super(props);

        this.props = props;

    }

    render(){

        return(
            <nav>
                <ul className="nav nav-pills pull-right">

                    {
                        this.props.data.map(function(item){

                            return (<NavigationItemView data={item} />);

                        })
                    }

                </ul>
            </nav>
        )

    }

}


class NavigationItemView extends React.Component{

    constructor(props){

        super();

        this.props = props;

    }

    render(){

        var url = '/'+this.props.data.url;
        var css = '';

        var iconString = 'fa '+this.props.data.icon;

        if(this.props.data.current){
            css = 'active';
        }

        return (
            <li role="presentation" title={this.props.data.name} className={css}><a href={url}><i className={iconString}></i></a></li>
        )

    }

}