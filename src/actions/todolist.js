//types
const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const EDIT_TODO = 'EDIT_TODO'

export const types = {
    ADD_TODO,
    REMOVE_TODO,
    EDIT_TODO,
}

//actions
export const addTodo = ({ text }) => ({
    type: ADD_TODO,
    payload: { text },
})

export const removeTodo = ({ id }) => ({
    type: REMOVE_TODO,
    payload: { id },
})

export const editTodo = ({ id, text }) => ({
    type: EDIT_TODO,
    payload: { id, text },
})
