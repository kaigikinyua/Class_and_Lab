interface TodoInterface{
    title:String,
    done:Boolean,
    desc:String
}
interface ProjectInterface{
    title:String,
    todos:Array<TodoComponent>
}

class TodoComponent{
    constructor(
        public todoTitle:String,
        public done:Boolean,
        public desc:String
    ){}
    createComponent(){
        var container=document.createElement('div')
        container.classList.add('todo')
        container.setAttribute('data-open','0')
        container.innerHTML=`
            <h3>${this.todoTitle}</h3>
            <p class='tododesc'>${this.desc}</p>
        `
        container.addEventListener('click',(e)=>{
            var par=container.children[1]
            if(container.getAttribute('data-open')=='0'){
                par.setAttribute('style','height:auto;padding:20px;')
                container.setAttribute('data-open','1')
            }else{
                par.setAttribute('style','height:0;padding:0px;')
                container.setAttribute('data-open','0')
            }
        })
        this.done?container.classList.add('done'):container.classList.add('undone')
        return container
    }
    static closeAllTodosDesc(){
        var tododesc=document.querySelectorAll('p.tododesc') as NodeList
        tododesc.forEach(tdesc=>{
            console.log(tdesc)
        }) 
    }
}

class ProjectComponent{
    constructor(
        public title:String,
        public todos:Array<TodoInterface>
        //project should have submodules and then todos are organized to submodules
    ){}
    createComponent(){
        var container=document.createElement('div')
        container.classList.add('project')
        this.todos.forEach(t=>{
            var tObj:TodoComponent=new TodoComponent(t.title,t.done,t.desc)
            var tC=tObj.createComponent()
            tC.classList.remove('todo')
            tC.classList.add('projectTodo')
            container.appendChild(tC)
        })
        return container
    }
}

export{
    TodoComponent,TodoInterface,ProjectComponent
}