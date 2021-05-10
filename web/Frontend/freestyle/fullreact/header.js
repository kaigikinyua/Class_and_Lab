import React from "react"
export class Header extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return(
            <div className="index">
                <h3>{this.props.text}</h3>
            </div>
        )
    }
}