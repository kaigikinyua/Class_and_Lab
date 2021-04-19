//User Main Screen
class App extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={
            cDayTasks:true,
            pList:false
        }
        this.displayProjectListTab=this.displayProjectListTab.bind(this)
        this.displayCurrentDayTab=this.displayCurrentDayTab.bind(this)
    }
    displayCurrentDayTab(){
        this.setState(prevstate=>{return {cDayTasks:true,pList:false}});
        //console.log("current tab")
    }
    displayProjectListTab(){
        console.log("Hello")
        this.setState(prevstate=>{return {cDayTasks:false,pList:true}});
    }
    render(){
        var tabshow=this.state.cDayTasks?<CurrentDayTab tasks={getTodaysTasks()}/>:<ProjectListTab/>
        return(
            <div>
                <div className="tab_nav">
                    <button onClick={this.displayCurrentDayTab} className={this.state.currentDayDisplay?'active':'inactive'}>Todays Tasks</button>
                    <button onClick={this.displayProjectListTab} className={this.state.projectListDisplay?'active':'inactive'}>Project List</button>
                </div>
                <div className="tabs">
                    {tabshow}
                </div>
            </div>
        )
    }
}

//tabs
class CurrentDayTab extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    addTask(){}
    removeTask(){}
    render(){
        var tasks=this.props.tasks.map((task,index)=>{
            {/* add the date and task description */}
            return <Task title={task.title} state={task.state}/>
        })
        return (
            <div>
                <div className="appbar">
                    <h3 className="title">Todays Tasks</h3>
                    <div className="actions">
                        <button className="iconbtn">Add Task</button>
                    </div>
                </div>
                <div className="tile_list">
                    {tasks}
                </div>
            </div>
        )
    }
}

class ProjectListTab extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return(
            <div>
                <div className="appbar"></div>
            </div>
        )
    }
}


//task
class Task extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return (
            <div className='task'>
                <div className="appbar">
                    <h3 className='subtitle'>
                        {this.props.title}
                        {/* task state can be [done|stale|archived]*/}
                        <span className={this.props.state}></span>
                    </h3>
                    <div className="actions">
                        <button className="iconbtn">Done</button>
                        <button className="iconbtn">Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}


//common functions

function getTodaysTasks(){
    return [
        {"title":"Get milk","state":"done"},
        {"title":"Buy chicken","state":"done"},
        {"title":"Buy Cigarettes","state":"stale"},
        {"title":"Learn regex","state":"done"},
        {"title":"Learn react","state":"done"},
    ]
}


ReactDOM.render(<App/>,document.getElementById('app'))