class UserPostProfile extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return(
            <div className="user_profile">
                <div className="profile"></div>
                <span>{this.props.username}</span>
            </div>
        )
    }
}

class Post extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={
            likes:this.props.metrics.likes,
            dislikes:this.props.metrics.dislikes,
            userMetric:this.props.metrics.userMetric,
        }
        this.likePost=this.likePost.bind(this)
        this.dislikes=this.disLikePost.bind(this)
    }
    likePost(){
        this.setState(state=>{
            return {
                likes:this.props.metrics.likes+=1,
                userMetric:"liked"
            }
        })
    }
    disLikePost(){
        this.setState(state=>{
            return {
                dislikes:this.props.metrics.dislikes+=1,
                userMetric:"disliked"
            }
        })
    }
    render(){
        var liked=false;var disliked=false;
        if(this.state.userMetric=="liked"){liked=true}
        if(this.state.userMetric=="disliked"){disliked=true}
        return(
            <div className="post">
                <UserPostProfile username={this.props.metrics.username}/>
                <div className="post_media"></div>
                <div className="metrics">
                    <button className={liked?"liked":""} onClick={this.likePost}>
                        Likes {this.state.likes}
                    </button>
                    <button className={disliked?"disliked":""} onClick={this.disLikePost}>
                        Dislike {this.state.dislikes}
                    </button>
                </div>
            </div>
        )
    }
}

class Posts extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        var posts=this.props.posts.map((post,index)=>{
            return <Post metrics={post} key={index}/>
        })
        return <div className="postsContainer">
            {posts}
        </div>
    }
}
var posts=[
    {"username":"William","likes":100,"dislikes":10,"userMetric":"non"},
    {"username":"William","likes":100,"dislikes":10,"userMetric":"non"},
    {"username":"William","likes":100,"dislikes":10,"userMetric":"non"},
    {"username":"William","likes":100,"dislikes":10,"userMetric":"non"}
]

ReactDOM.render(<Posts posts={posts}/>,document.getElementById("posts"))