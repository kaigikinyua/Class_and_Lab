//User Main Screen
class App extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return(
            <div className="tabs">
                <CurrentDayTab tasks={getTodaysTasks()}/>
                <ProjectListTab projects={getProjects()}/>
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
                        <button className="iconbtn"><i className="fa fa-plus"></i></button>
                    </div>
                </div>
                <div className="project_list">
                    {projects}
                </div>
            </div>
        )
    }
}


//task
class Task extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    delete(){

    }
    render(){
        {/* task state can be [done|stale|archived]*/}
        return (
            <div className='task'>
                <div className="appbar">
                    <div className='task_top'>
                        <span className={this.props.state}></span>
                        <span>{this.props.title}</span>
                    </div>
                    <div className="actions">
                        <button className="iconbtn"><i className="fa fa-check"></i></button>
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
    return[
        {"title":"Learning blender","tasksdone":1,"tasks_all":100,"tasks":getTodaysTasks()},
        {"title":"Learning Dart","tasksdone":4,"tasks_all":100,"tasks":getTodaysTasks()},
        {"title":"Learning Inkscape","tasksdone":2,"tasks_all":100,"tasks":getTodaysTasks()},
        {"title":"Learning jsx","tasksdone":10,"tasks_all":100,"tasks":getTodaysTasks()},
    ]
}


ReactDOM.render(<App/>,document.getElementById('app'))