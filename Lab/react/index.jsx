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

class UserProfileCard extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={friend:false}
        this.sendFriendRequest=this.sendFriendRequest.bind(this)
    }
    sendFriendRequest(){
        this.setState(prevState=>{
            return {friend:!prevState.friend}
        });
    }
    render(){
        return(
            <div className="user">
                <div className="profile center"></div>
                <div>{this.props.username}</div>
                <button className={this.state.friend?"friend":""} onClick={this.sendFriendRequest}>
                    {this.state.friend?"Friend":"Send Request"}
                </button>
            </div>
        )
    }
}
class Users extends React.Component{
    constructor(props,context){super(props,context)}
    render(){
        var users=this.props.users.map((user,i)=>{
            return <UserProfileCard username={user}/>
        })
        //console.log(users)
        return (
            <div className='userlist'>{users}</div>
        );
    }
}


ReactDOM.render(<ClickComponent clicks="10"/>,document.getElementById('clickComponent'))
ReactDOM.render(<ClickComponent2 clicks="100"/>,document.getElementById('clickComponent2'));
var friends=['James','John','Lewis','Clarkson','Mathew','Mark','Luke']
ReactDOM.render(<Users users={friends}/>,document.getElementById('userlist'))
