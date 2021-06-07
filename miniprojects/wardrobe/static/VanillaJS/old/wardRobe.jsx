class Wear extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return (
            <div className="wardRobeItem">
                <img className={this.props.itemClass}/>
            </div>
        )
    }
}

class WardRobe extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        var items=this.props.items.map((item,index)=>{
            return 
        })
        return (
            <div className="WardRobe">
                
            </div>
        )
    }
}