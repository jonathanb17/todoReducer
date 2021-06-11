import React, { useReducer, useEffect } from 'react'
import './styles.css';
import todoReducer from './todoReducer';
import useForm from './useForm';


const init = () => {

    // retorna los valores o si retorna null ,retorna un arreglo
    return JSON.parse(localStorage.getItem("todos")) || [];

    // return [{
    //     id: new Date().getTime(),
    //     desc: 'aprender React',
    //     done: false
    // }];
}

const TodoApp = () => {


    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) {
            return; // que no retorne nada
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        // nesecito la accion que voy a mandar al reducer
        const action = {
            type: 'add',
            payload: newTodo
        };

        //  al dispatch le paso la accion
        dispatch(action)
        reset()
    }

    const [todos, dispatch] = useReducer(todoReducer, [], init)

    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    });

    const handleDelete = (todoid) => {
        console.log(todoid);
        //1-creamos la accion 
        const action = {
            type: 'delete',
            payload: todoid
        };

        //2- hacemos el dispach
        dispatch(action);
    }

    const handleToggle = (todoid) => {

        const action = {
            type: 'toggle',
            payload: todoid
        };

        dispatch(action)
    }

    // cuando alla cambios en el estado o 'todos' ,quiere decir que voy a agregar algo
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    console.log(description);

    return (
        <div>
            <h1>TodoApp({todos.length})</h1>
            <div className="row">
                <div className="col-md-7">
                    <ul className="list-group list-group-flush">
                        {
                            todos.map((todo, i) => (
                                <li key={todo.id}
                                    className="list-group-item"
                                >
                                    <p
                                        onClick={() => handleToggle(todo.id)}
                                        className={`${todo.done && "complete"}`}>{i + 1}.{todo.desc}</p>

                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleDelete(todo.id)}
                                    >Borrar</button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="col-md-5">
                    <h4>Agregar TODO</h4>
                    <form onSubmit={handleSubmit} >
                        <input
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Aprender ..."
                            autoComplete="off"
                            value={description}
                            onChange={handleInputChange}
                        />
                        <button type="submit"
                            className="btn btn-outline-primary 
                             btn-block mt-2"
                        >Agregar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TodoApp
