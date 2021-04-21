//User Main Screen
class App extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={
            addProject:false,
            projects:getProjects(),
            todaysTasks:getTodaysTasks()
        }
        //this.hideAddProject=this.hideAddProject.bind(this)
        this.showAddProject=this.showAddProject.bind(this)
        this.addNewProject=this.addNewProject.bind(this)
    }
    //hideAddProject(){this.setState({addProject:false})}
    showAddProject(){this.setState({addProject:true})}
    addNewProject=(title)=>{
        console.log(title)
        this.setState(
            {
                projects:this.state.projects.push({'title':title}),
                addProject:false
            }
        )
    }
    render(){
        return(
            <div className="tabs">
                <CurrentDayTab tasks={getTodaysTasks()}/>
                <ProjectListTab projects={getProjects()} openAddProject={this.showAddProject}/>
                {this.state.addProject?<AddProject addProject={this.addNewProject}/>:""}
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
                        <button className="iconbtn"><i className="fa fa-plus"></i></button>
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
        var projects=this.props.projects.map((p,index)=>{
            return <Project title={p.title} tasksdone={p.tasksdone} tasks_all={p.tasks_all}/>
        });
        return(
            <div>
                <div className="appbar">
                    <h3 className="title">Project List</h3>
                    <div className="actions">
                        <button className="iconbtn" onClick={this.props.openAddProject}>
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                </div>
                <div className="project_list">
                    {projects}
                </div>
            </div>
        )
    }
}
//addproject input
class AddProject extends React.Component{
    constructor(props,context){
        super(props,context)
        this.checkInput=this.checkInput.bind(this)
        this.addProject=this.addProject.bind(this)
        this.state={
            enableBtn:false
        }
    }
    checkInput(e){
        console.log(e.target.value.length) 
        var value=e.target.value
        if(value.length>0){this.setState({enableBtn:true})}
        else{this.setState({enableBtn:false})}
    }
    addProject(){
        var projectTitle=document.getElementById('newProjectName').value
        //console.log(this.props.addProject);
        this.props.addProject(projectTitle)
    }
    render(){
        return(
            <div id="addProject">
                <div className="appbar">
                    <h3 className="title">Create a new Project</h3>
                </div>
                <div className="content">
                    <div className="field">
                        <label>Project Name</label>
                        <input className="text" onChange={this.checkInput} type="text" id="newProjectName"/>
                    </div>
                    <div className="field">
                        <label>Start Date</label>
                        <input type="date" className="text" placeholder="Deadline"/>
                    </div>
                    <div className="field">
                        <label>Start Date</label>
                        <input type="date" className="text" placeholder="Deadline"/>
                    </div>
                    
                    <button disabled={!this.state.enableBtn} className="submit" onClick={this.addProject}>Add Project</button>
                </div>
            </div>
        )
    }
}


//task
class Task extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={
            done:false,
            delete:false
        }
        this.markDone=this.markDone.bind(this)
    }
    markDone(){
        this.setState((state)=>{return {done:true}})
        //console.log(this.state)
    }
    delete(){

    }
    render(){
        {/* task state can be [done|stale|archived]*/}
        const taskdoneStyle=this.state.done?{color:'lightgreen'}:{}
        return (
            <div className='task'>
                <div className="appbar">
                    <div className='task_top'>
                        <span className={this.props.state}></span>
                        <span>{this.props.title}</span>
                    </div>
                    <div className="actions">
                        <button className="iconbtn"onClick={this.markDone}>
                            <i className="fa fa-check" style={taskdoneStyle}></i>
                        </button>
                        <button className="iconbtn"><i className="fa fa-trash"></i></button>
                    </div>
                </div>
            </div>
        )
    }
}

class Project extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    showProjectTasks(){}
    render(){
        return (
            <div className="task">
                <div className="appbar">
                    <div className="project_top">
                        <span>{this.props.title}</span>
                        <span>{this.props.tasksdone}/{this.props.tasks_all}</span>
                    </div>
                    <div className="actions">
                        <button className="iconbtn"><i className="fa fa-plus"></i></button>
                        <button className="iconbtn"><i className="fa fa-trash"></i></button>
                    </div>
                </div>
                <div className="project_task_list"></div>
            </div>
        )
    }
}




//common functions
var projects=[
    {"title":"Learning blender","tasksdone":1,"tasks_all":100,"tasks":getTodaysTasks()},
    {"title":"Learning Dart","tasksdone":4,"tasks_all":100,"tasks":getTodaysTasks()},
    {"title":"Learning Inkscape","tasksdone":2,"tasks_all":100,"tasks":getTodaysTasks()},
    {"title":"Learning jsx","tasksdone":10,"tasks_all":100,"tasks":getTodaysTasks()},
]


function getTodaysTasks(){
    return [
        {"title":"Get milk","state":"done"},
        {"title":"Buy chicken","state":"done"},
        {"title":"Buy Cigarettes","state":"stale"},
        {"title":"Learn regex","state":"archived"},
        {"title":"Learn react","state":"done"},
    ]
}
function getProjects(){
    return projects
}

function addProject({title}){
    projects.push({"title":title,"tasksdone":1,"tasks_all":300,"tasks":getTodaysTasks})
}


ReactDOM.render(<App/>,document.getElementById('app'))