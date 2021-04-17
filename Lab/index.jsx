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
ReactDOM.render(<ClickComponent clicks="10"/>,document.getElementById('clickComponent'))

