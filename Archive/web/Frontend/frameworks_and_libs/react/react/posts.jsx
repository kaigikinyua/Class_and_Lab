class UserPostProfile extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return(
            <div className="profile_post">
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
        this.disLikePost=this.disLikePost.bind(this)
    }
    likePost(){
        if(this.state.userMetric=="non"){
            this.setState(state=>{
                return {
                    likes:this.props.metrics.likes+=1,
                    userMetric:"liked"
                }
            })
        }else if(this.state.userMetric=="liked"){
            this.setState(state=>{
                return{
                    likes:this.props.metrics.likes-=1,
                    userMetric:"non"
                }
            })
        }
    }
    disLikePost(){
        if(this.state.userMetric=="non"){
            this.setState(state=>{
                return {
                    dislikes:this.props.metrics.dislikes+=1,
                    userMetric:"disliked"
                }
            })
        }else if(this.state.userMetric=="disliked"){
            this.setState(state=>{
                return {
                    dislikes:this.props.metrics.dislikes-=1,
                    userMetric:"non"
                }
            })
        }
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
    {"username":"William","likes":256,"dislikes":22,"userMetric":"non"},
    {"username":"Clark","likes":789,"dislikes":101,"userMetric":"non"},
    {"username":"Batman","likes":999,"dislikes":213,"userMetric":"non"},
    {"username":"Wonder Woman","likes":119,"dislikes":5,"userMetric":"non"}
]

ReactDOM.render(<Posts posts={posts}/>,document.getElementById("posts"))