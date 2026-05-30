let todos=JSON.parse(localStorage.getItem("todos"))||[];
let filter="all";

const form=document.querySelector("#todoForm");
const input=document.querySelector("#todoInput");
const list=document.querySelector("#todoList");
const count=document.querySelector("#count");

function save(){
    localStorage.setItem("todos",JSON.stringify(todos));
}

function render(){
    list.innerHTML="";

    let data=todos;

    if(filter==="active") data=todos.filter(t=>!t.completed);
    if(filter==="completed") data=todos.filter(t=>t.completed);

    data.forEach(todo=>{
        const li=document.createElement("li");
        li.dataset.id=todo.id;

        const span=document.createElement("span");
        span.textContent=todo.text;
        if(todo.completed) span.classList.add("completed");

        const btn=document.createElement("button");
        btn.textContent="❌";

        li.append(span,btn);
        list.append(li);
    });

    count.textContent=`${todos.filter(t=>!t.completed).length} items left`;
    save();
}

form.addEventListener("submit",e=>{
    e.preventDefault();

    if(!input.value.trim()) return;

    todos.push({
        id:Date.now(),
        text:input.value,
        completed:false
    });

    input.value="";
    render();
});

list.addEventListener("click",e=>{
    const li=e.target.closest("li");
    if(!li) return;

    const id=Number(li.dataset.id);

    if(e.target.tagName==="BUTTON"){
        todos=todos.filter(t=>t.id!==id);
    }else{
        const todo=todos.find(t=>t.id===id);
        todo.completed=!todo.completed;
    }

    render();
});

document.querySelectorAll("[data-filter]").forEach(btn=>{
    btn.addEventListener("click",()=>{
        filter=btn.dataset.filter;
        render();
    });
});

document.querySelector("#clearCompleted")
.addEventListener("click",()=>{
    todos=todos.filter(t=>!t.completed);
    render();
});

render();