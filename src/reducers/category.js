import { actionTypes } from 'actions/category'

const getInitState = () => ({
    nodes: [],
    isLoading: false,
    error: null,
    page: 0,
})

export default (state = getInitState(), action) => {
    const payload = action.payload

    switch (action.type) {
        case actionTypes.GET_CATEGORIES_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case actionTypes.GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                nodes: [...state.nodes, ...payload.nodes],
            }
        case actionTypes.GET_CATEGORIES_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload.error,
            }
        /*
        case types.ADD_CATEGORY:
            return {
                ...state,
                categories: [...state.categories, { id: state.categories.length + 1, text: payload.text }],
            }

        case types.REMOVE_CATEGORY:
            return { ...state, categories: state.categories.filter(todo => todo.id !== payload.id) }

        case types.EDIT_CATEGORY:
            return {
                ...state,
                categories: [
                    ...state.categories.filter(todo => todo.id !== payload.id),
                    { id: payload.id, text: payload.text },
                ],
            }
            */

        default:
            return state
    }
}
