//SELECTORS
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//LISTENERS
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

//FUNCTIONS
function addTodo(event) {
    //"preventDefault" prémunit du rechargement de pagea vec le bouton "submit"
    event.preventDefault();

    //creation d'une div
    const todoDiv = document.createElement("div");
    //on y ajoute une classe "todo"
    todoDiv.classList.add("todo");

    //création de la "li"
    const newTodo = document.createElement("li");
    //on récupère la valeur de "todoInput" pour l'afficher dans le "newTodo"
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    //ajout de la "li" à la div.todo
    todoDiv.appendChild(newTodo);

    //ajout d'un bouton "checked"
    const completedButton = document.createElement("button");
    //ajout de l'icône voulue au bouton
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    //ajout d'une class supp.
    completedButton.classList.add("complete-btn");
    //ajout du btn à la div.todo
    todoDiv.appendChild(completedButton);

    //ajout d'un bouton "trash" (idem "checked")
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //ajout de la "newTodo" à la "todoList"
    todoList.appendChild(todoDiv);

    //réinitialisation de l'input
    todoInput.value = "";
}

function deleteCheck(e) {
    //l'objet (item) est la cible de l'événement (qui est "click")
    //en l'occurence, il s'agit du bouton sur lequel on clique (check ou delete)
    const item = e.target;
    
    //effacer la todo

    //si la première classe (index 0) de l'item est "trash-btn"
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        //ajout d'une classe pour donner un effet css quand on supprime l'élément
        todo.classList.add("fall");
        //suppression de l'élément parent du bouton (donc la "li" entière)
        //après effet de transition !
        todo.addEventListener("transitionend", () => {
            todo.remove();
        })
    }

    //checker la todo
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        //on change la classe de l'élément parent à chaque fois qu'on clique (avec toggle, comme ON/OFF)
        todo.classList.toggle("completed");
    }
}

function filterTodo(e) {
    /* on cible les enfants de la todoList, donc les todos */
    const todos = todoList.childNodes;
    /* on boucle sur les todos */
    todos.forEach(function (todo) { 
        const mStyle = todo.style;  
        if(mStyle != undefined && mStyle != null){
            switch (e.target.value) {
                case "all":
                    mStyle.display = "flex";
                    break;
                /* si la classe de la todo est "completed" */
                case "completed":
                    if (todo.classList.contains('completed')) {
                        mStyle.display = 'flex';
                    } else {
                        mStyle.display = "none";
                    }
                    break;
                /* si la classe de la todo n'est pas "completed" */
                case "uncompleted":
                    if (todo.classList.contains('completed')){
                        mStyle.display = 'none';
                    }
                    else{
                        mStyle.display = "flex";
                    }
                    break;
            }
        }
    })
}