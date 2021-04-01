var TodoComponent = /** @class */ (function () {
    function TodoComponent(todoTitle, done, desc) {
        this.todoTitle = todoTitle;
        this.done = done;
        this.desc = desc;
    }
    TodoComponent.prototype.createComponent = function () {
        var container = document.createElement('div');
        container.classList.add('todo');
        container.setAttribute('data-open', '0');
        container.innerHTML = "\n            <h3>" + this.todoTitle + "</h3>\n            <p class='tododesc'>" + this.desc + "</p>\n        ";
        container.addEventListener('click', function (e) {
            var par = container.children[1];
            if (container.getAttribute('data-open') == '0') {
                par.setAttribute('style', 'height:auto;padding:20px;');
                container.setAttribute('data-open', '1');
            }
            else {
                par.setAttribute('style', 'height:0;padding:0px;');
                container.setAttribute('data-open', '0');
            }
        });
        this.done ? container.classList.add('done') : container.classList.add('undone');
        return container;
    };
    TodoComponent.closeAllTodosDesc = function () {
        var tododesc = document.querySelectorAll('p.tododesc');
        tododesc.forEach(function (tdesc) {
            console.log(tdesc);
        });
    };
    return TodoComponent;
}());
var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(title, todos
    //project should have submodules and then todos are organized to submodules
    ) {
        this.title = title;
        this.todos = todos;
    }
    ProjectComponent.prototype.createComponent = function () {
        var container = document.createElement('div');
        container.classList.add('project');
        this.todos.forEach(function (t) {
            var tObj = new TodoComponent(t.title, t.done, t.desc);
            var tC = tObj.createComponent();
            tC.classList.remove('todo');
            tC.classList.add('projectTodo');
            container.appendChild(tC);
        });
        return container;
    };
    return ProjectComponent;
}());
export { TodoComponent, ProjectComponent };
