var Components={
    Header:class Header extends React.Component{
        constructor(props,context){
            super(props,context)
        }
        render(){
            return (
                <h3 className="header">{this.props.text}</h3>
            )
        }
    }
}
