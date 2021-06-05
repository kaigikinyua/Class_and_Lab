class TopNav extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return(
            <div className="container">
                <Components.Header text="Header One"/>
                <Components.Header text="Header Two"/>
            </div>
        )
    }
}


ReactDOM.render(<TopNav/>,document.getElementById('topnav'))