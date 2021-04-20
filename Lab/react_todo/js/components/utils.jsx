class Calender extends React.Component{
    constructor(){}
    render(){}
}

class Month extends React.Component{
    constructor(){}
    render(){}
}

class TextInput extends React.Component{
    constructor(props,context){
        super(props,context)
        this.getValue()=this.getValue.bind(this)
    }
    getValue(){
        return "value"
    }
    render(){
        return (
            <div className="input">
                <input type="text" className="textInput" name={this.props.name}/>
            </div>
        )
    }
}