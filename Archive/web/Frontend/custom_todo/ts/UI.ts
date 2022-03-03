import {TodoComponent,TodoInterface} from './Components.js'

window.onload=()=>{
    showTodos()
}
//const todoMenuButton=document.getElementById('todoListMenuButton') as HTMLButtonElement
const projectMenuButton=document.getElementById('projectMenuButton') as HTMLDivElement
/*todoMenuButton.addEventListener('click',(e)=>{
    var state=todoMenuButton.getAttribute('data-open')
    var elem=document.getElementById('todo_list') as HTMLDivElement
    if(state=='0'){
        todoMenuButton.setAttribute('data-open','1')
        expandMenu(elem)
    }else{
        todoMenuButton.setAttribute('data-open','0')
        contractMenu(elem)
    }
})*/
projectMenuButton.addEventListener('click',(e)=>{
    var state=projectMenuButton.getAttribute('data-open')
    var elem=document.getElementById('project_list') as HTMLDivElement
    if(state=='0'){
        projectMenuButton.setAttribute('data-open','1')
        expandMenu(elem)
    }else{
        projectMenuButton.setAttribute('data-open','0')
        contractMenu(elem)
    }
})

function contractMenu(element:HTMLDivElement){element.setAttribute('style','height:0px;')}
function expandMenu(element:HTMLDivElement){element.setAttribute('style','height:auto;')}

function showTodos(){
    var parent=document.getElementById('todo_list_container') as HTMLDivElement
    var todos:Array<TodoInterface>=[
        {title:'todoone',done:true,desc:'This is my first todo'},
        {title:'todo2',done:false,desc:'This is my 2nd todo'},
        {title:'todo3',done:true,desc:'This is my 3rd todo'},
        {title:'todo4',done:false,desc:'This is my 4th todo'},
    ]
    todos.forEach(todo=>{
        var t:TodoComponent=new TodoComponent(todo.title,todo.done,todo.desc)
        var todoComponent=t.createComponent() as HTMLDivElement
        parent.appendChild(todoComponent)
        //console.log(todoComponent)
    })
}
function loadProjects(){
    var projects=["Project One","Project Two"]
    var project_list=document.getElementById("project_list")
    
}

function showProject(/*takeprojectid*/){
    var parent=document.getElementById("project_container")
    var todos:Array<TodoInterface>=[
        {title:'todoone',done:true,desc:'This is my first todo'},
        {title:'todo2',done:false,desc:'This is my 2nd todo'},
        {title:'todo3',done:true,desc:'This is my 3rd todo'},
        {title:'todo4',done:false,desc:'This is my 4th todo'},
    ]
    var projects:Array<object>=[
        {"title":"Project One","todos":todos},
        {"title":"Project Two","todos":todos},
    ]
}


