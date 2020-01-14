import { actionTypes } from 'actions/category'
import uniqBy from 'lodash/uniqBy'

const getInitState = () => ({
    nodes: [],
    isLoading: false,
    hasMore: true,
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
                nodes: uniqBy([...state.nodes, ...payload.nodes], 'id'),
                hasMore: payload.nodes.length === payload.limit,
            }
        case actionTypes.GET_CATEGORIES_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error,
            }

        case actionTypes.GET_CATEGORY_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case actionTypes.GET_CATEGORY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                nodes: uniqBy([...state.nodes, payload.node], 'id'),
            }
        case actionTypes.GET_CATEGORY_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error,
            }

        case actionTypes.ADD_CATEGORY_REQUEST:
            return {
                ...state,
                isLoading: true,
            }

        case actionTypes.ADD_CATEGORY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                nodes: [...state.nodes, payload],
            }

        case actionTypes.ADD_CATEGORY_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error,
            }

        case actionTypes.REMOVE_CATEGORY_REQUEST:
            return {
                ...state,
                isLoading: true,
            }

        case actionTypes.REMOVE_CATEGORY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                nodes: state.nodes.filter(item => item.id !== +payload.id),
            }

        case actionTypes.REMOVE_CATEGORY_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error,
            }

        case actionTypes.EDIT_CATEGORY_REQUEST:
            return {
                ...state,
                isLoading: true,
            }

        case actionTypes.EDIT_CATEGORY_SUCCESS:
            const nodes = state.nodes
            const editIndex = nodes.findIndex(item => item.id === +payload.id)

            nodes[editIndex] = payload

            return {
                ...state,
                isLoading: false,
                nodes,
            }

        case actionTypes.EDIT_CATEGORY_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error,
            }

        default:
            return state
    }
}
