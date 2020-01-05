import { types } from 'actions/todolist'

const initState = {
    todos: [],
}

export default (state = initState, action) => {
    const payload = action.payload

    switch (action.type) {
        case types.ADD_TODO:
            return { ...state, todos: [...state.todos, { id: state.todos.length + 1, text: payload.text }] }

        case types.REMOVE_TODO:
            return { ...state, todos: state.todos.filter(todo => todo.id !== payload.id) }

        case types.EDIT_TODO:
            return {
                ...state,
                todos: [...state.todos.filter(todo => todo.id !== payload.id), { id: payload.id, text: payload.text }],
            }

        default:
            return state
    }
}
