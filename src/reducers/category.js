import { actionTypes } from 'actions/category'
import uniq from 'lodash/uniq'

const getInitState = () => ({
    items: {}, //id => category
    nodes: [], //ids for pagination
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
                nodes: uniq([...state.nodes, ...payload.nodes.map(node => node.id)]),
                items: { ...state.items, ...payload.nodes.reduce((acc, node) => ({ ...acc, [node.id]: node }), {}) },
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
                items: { ...state.items, [payload.node.id]: payload.node },
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
                items: { ...state.items, [payload.id]: { ...payload, totalTodos: 0, completeTodos: 0 } },
                nodes: [...state.nodes, payload.id],
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
                nodes: state.nodes.filter(item => item !== +payload.id),
                items: { ...state.items, [payload.id]: undefined },
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
            const items = state.items

            items[payload.id] = payload

            return {
                ...state,
                isLoading: false,
                items,
            }

        case actionTypes.EDIT_CATEGORY_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error,
            }

        case actionTypes.UPDATE_TODOS_COUNT:
            const item = state.items[payload.categoryId]

            if (!item) {
                return state
            }

            return {
                ...state,
                items: {
                    ...state.items,
                    [payload.categoryId]: {
                        ...item,
                        totalTodos: item.totalTodos + (payload.total || 0),
                        completeTodos: item.completeTodos + (payload.complete || 0),
                    },
                },
            }

        default:
            return state
    }
}
