import { createStore } from "redux";
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");


const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO" 

const reducer = (state = [],action) => {
  switch(action.type){
    case ADD_TODO: return [...state,{text:action.text , id:Date.now()}];
    case DELETE_TODO: return state.filter(toDo => toDo.id !== action.id);
    default: return state;
  }

}

const store = createStore(reducer);

const deleteToDo = e => {
  const id  = parseInt(e.target.parentNode.id);
  store.dispatch({type:DELETE_TODO , id:id})
}

const paintToDos= () => {
  const toDos = store.getState();
  ul.innerHTML = ""
  console.log(toDos);
  toDos.forEach(toDo => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", deleteToDo)
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li)
  })
}

store.subscribe(paintToDos)

const addToDo = (text) => {
  store.dispatch({type:ADD_TODO , text:text});
}

const onSubMit = e => {
  e.preventDefault();

  const toDo = input.value;
  input.value = "";
  addToDo(toDo)
}

form.addEventListener("submit" , onSubMit)