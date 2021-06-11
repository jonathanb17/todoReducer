
//  creamos un estado inicial
// arreglo de un objeto -todo :es la tarea por hacer
const initialState = [{
    id: 1,
    todo: "comprar pan",
    done: false
}]

// creamos mi reducer 
//regresa un nuevo estado
const todoReducer = (state = initialState, action) => {

    if (action?.type === 'agregar') {
        return [...state, action.payload]
    }
    return state;
}

//inicilizamos en un variable
let todos = todoReducer();


//  creamos un new to-do
const newTodo = [{
    id: 2,
    todo: "comprar leche",
    done: false
}];

//  el to-do lo agrego mediante la accion
const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo
}

//  esa accion se la mando al reducer
todos = todoReducer(todos, agregarTodoAction)

console.log(todos);
