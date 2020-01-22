import { actionTypes } from 'actions/category'
import uniq from 'lodash/uniq'

const getInitState = () => ({
    items: {}, //id => category
    nodes: {
        //ids for pagination
        items: [],
        isLoading: false,
        hasMore: true,
        error: null,
        filter: null,
    },
    isFetching: false,
    error: null,
})

export default (state = getInitState(), action) => {
    const payload = action.payload

    switch (action.type) {
        case actionTypes.GET_CATEGORIES_REQUEST:
            return {
                ...state,
                nodes: {
                    ...state.nodes,
                    isLoading: true,
                    error: null,
                },
                isFetching: true,
            }
        case actionTypes.GET_CATEGORIES_SUCCESS:
            const nodes =
                state.nodes.filter === payload.filter
                    ? uniq([...state.nodes.items, ...payload.nodes.map(node => node.id)])
                    : payload.nodes.map(node => node.id)

            return {
                ...state,
                nodes: {
                    ...state.nodes,
                    items: nodes,
                    isLoading: false,
                    hasMore: payload.nodes.length === payload.limit,
                    filter: payload.filter,
                },
                items: { ...state.items, ...payload.nodes.reduce((acc, node) => ({ ...acc, [node.id]: node }), {}) },
                isFetching: false,
            }
        case actionTypes.GET_CATEGORIES_FAILURE:
            return {
                ...state,
                nodes: {
                    ...state.nodes,
                    isLoading: false,
                    error: action.error,
                },
                isFetching: false,
            }

        case actionTypes.GET_CATEGORY_REQUEST:
            return {
                ...state,
                isFetching: true,
                error: null,
            }
        case actionTypes.GET_CATEGORY_SUCCESS:
            return {
                ...state,
                isFetching: false,
                items: { ...state.items, [payload.node.id]: payload.node },
            }
        case actionTypes.GET_CATEGORY_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.error,
            }

        case actionTypes.ADD_CATEGORY_REQUEST:
            return {
                ...state,
                isFetching: true,
                error: null,
            }

        case actionTypes.ADD_CATEGORY_SUCCESS:
            return {
                ...state,
                isFetching: false,
                items: { ...state.items, [payload.id]: { ...payload, totalTodos: 0, completeTodos: 0 } },
                nodes: { ...state.nodes, items: [...state.nodes.items, payload.id] },
            }

        case actionTypes.ADD_CATEGORY_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.error,
            }

        case actionTypes.REMOVE_CATEGORY_REQUEST:
            return {
                ...state,
                isFetching: true,
                error: null,
            }

        case actionTypes.REMOVE_CATEGORY_SUCCESS:
            return {
                ...state,
                isFetching: false,
                nodes: {
                    ...state.nodes,
                    items: state.nodes.items.filter(item => item !== +payload.id),
                },
                items: { ...state.items, [payload.id]: undefined },
            }

        case actionTypes.REMOVE_CATEGORY_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.error,
            }

        case actionTypes.EDIT_CATEGORY_REQUEST:
            return {
                ...state,
                isFetching: true,
                error: null,
            }

        case actionTypes.EDIT_CATEGORY_SUCCESS:
            return {
                ...state,
                isFetching: false,
                items: {
                    ...state.items,
                    [payload.id]: {
                        ...state.items[payload.id],
                        ...payload,
                    },
                },
            }

        case actionTypes.EDIT_CATEGORY_FAILURE:
            return {
                ...state,
                isFetching: false,
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
                        totalTodos: (item.totalTodos || 0) + (payload.total || 0),
                        completeTodos: (item.completeTodos || 0) + (payload.complete || 0),
                    },
                },
            }

        case actionTypes.UPDATE_LIST_FILTER:
            return {
                ...state,
                nodes: {
                    ...state.nodes,
                    items: [],
                    hasMore: true,
                    error: null,
                    filter: payload.filter,
                },
            }

        default:
            return state
    }
}
