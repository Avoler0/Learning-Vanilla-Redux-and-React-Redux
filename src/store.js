import {createStore} from "redux";

const ADD = "ADD";
const DELETE = "DLELTE"

const addToDo = (text) =>{
  return{
    type:ADD,
    text
  }
}
const deleteToDo = id => {
  return {
    type:DELETE,
    id: parseInt(id)
  }
}
const reducer = (state = [] , action) => {
  switch(action.type){
    case ADD:
      return [ ...state , {text:action.text , id:Date.now()}];
    case DELETE:
      return state.filter(toDo => toDo.id !== action.id);
    default:
      return state;
  }
}
const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo
}
// store.subscribe();

export default store;