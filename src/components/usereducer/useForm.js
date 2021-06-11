//rafc

import { useState } from 'react'

// este es un custom Hook q se encarga de manejar los formularios
// el estado inicial lo defino como un objeto vacio ,porque si no me manda nada no quiero q de error
//el initialState seria un objeto igual al que tengo en 'formWithCustomHook'
/*  
{        name: '',
         email: '',
         password: '' //aqui estan vacio
}   en la funcion useForm ,reciviarias emai,name,pasword

*/
const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues(initialState);
    }

    const handleInputChange = ({ target }) => {

        setValues({
            ...values, [target.name]: target.value //aqui hago databinding
        })
    }

    // 0-return q quiero retornan
    // 1- se regresa el estado del formulario 
    // 2 -el dtabinding
    return [values, handleInputChange, reset]; // retornas un arreglo con los valores y el handleInput
}

export default useForm
