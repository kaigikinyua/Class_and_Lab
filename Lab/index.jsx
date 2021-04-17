var ClickComponent=React.createClass({
    getInitialState:function(){
        return {clicks:parseInt(this.props.clicks)}
    },
    increment:function(){
        this.setState(function(state){
            return {clicks:state.clicks+1}
        })
    },
    render:function(){
        return (
            <div className='click'>
                <button onClick={this.increment}>Click Me {this.state.clicks}</button>
            </div>
        )
    }
});
class ClickComponent2 extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={clicks:parseInt(this.props.clicks)}
        this.incrementClicks=this.incrementClicks.bind(this)
    }
    incrementClicks(){
        console.log(this.state)
        this.setState((prevState)=>{return {clicks:prevState.clicks+1}})
    }
    render(){
        return(
            <div className="click">
                <button onClick={this.incrementClicks}>{this.state.clicks}</button>
            </div>
        )
    }
}

ReactDOM.render(<ClickComponent clicks="10"/>,document.getElementById('clickComponent'))
ReactDOM.render(<ClickComponent2 clicks="100"/>,document.getElementById('clickComponent2'));
