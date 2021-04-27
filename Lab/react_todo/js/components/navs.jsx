class UserPageNav extends React.Component{
    constructor(){}
    showProject(projectID){}
    
    render(){
        <div className="userPageNav">
            <span className="item"><i className="fa"></i></span>
            <span className="item"><i className="fa"></i></span>
            <span className="item"><i className="fa"></i></span>
        </div>
    }
}

class TopNav extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        var links=this.props.links.forEach(e => {
            return <Link name={e.name} link={e.link}/>
        });
        return(
            <div className="topnav">
                <div className="banner">
                    <h3 className="banner">{this.props.title}</h3>
                </div>
                <div className="links">
                    <ul className="links">
                        {links}
                    </ul>
                </div>
            </div>
        )
    }
}

class Link extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return (
            <a href={this.props.link} className="link">
                <span>{this.props.name}</span>
            </a>
        )
    }
}