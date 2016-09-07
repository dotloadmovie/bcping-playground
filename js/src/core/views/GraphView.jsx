class GraphView extends React.Component{

    constructor(){

        super();

    }

    componentDidMount(){

        new Chartist.Pie('#core-graph', {
            series: [parseInt(this.props.current), parseInt(this.props.target)]
        }, {
            donut: true,
            donutWidth: 60,
            startAngle: 270,
            total: 1000,
            showLabel: false
        });

    }


    render(){

        return (
            <div className="large-graph ct-square" id="core-graph">

            </div>
        )

    }


}

export default GraphView;