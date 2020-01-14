import { actionTypes } from 'actions/todolist'
import uniqBy from 'lodash/uniqBy'
import _get from 'lodash/get'

const categoryTodosTemplate = {
    nodes: [],
    isLoading: false,
    hasMore: true,
    error: null,
    page: 0,
}
const getInitState = () => ({
    categories: {},
    isFetching: false,
    error: null,
    template: categoryTodosTemplate,
})

export default (state = getInitState(), action) => {
    const payload = action.payload || {}

    const categodyOld =
        (payload.categoryId && state.categories[payload.categoryId]) ||
        (_get(payload, 'node.list_id') && state.categories[_get(payload, 'node.list_id')]) ||
        categoryTodosTemplate

    switch (action.type) {
        case actionTypes.GET_TODOS_REQUEST:
            return {
                ...state,
                isFetching: true,
                categories: {
                    ...state.categories,
                    [payload.categoryId]: {
                        ...categodyOld,
                        isLoading: true,
                    },
                },
            }
        case actionTypes.GET_TODOS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                categories: {
                    ...state.categories,
                    [payload.categoryId]: {
                        isLoading: false,
                        nodes: uniqBy([...categodyOld.nodes, ...payload.nodes], 'id'),
                        hasMore: payload.nodes.length === payload.limit,
                    },
                },
            }
        case actionTypes.GET_TODOS_FAILURE:
            return {
                ...state,
                isFetching: false,
                categories: {
                    ...state.categories,
                    [payload.categoryId]: {
                        ...categodyOld,
                        isLoading: false,
                        error: action.error,
                    },
                },
            }

        case actionTypes.GET_TODO_REQUEST:
            return {
                ...state,
                isFetching: true,
            }
        case actionTypes.GET_TODO_SUCCESS:
            return {
                ...state,
                categories: {
                    ...state.categories,
                    [_get(payload, 'node.list_id')]: {
                        ...categodyOld,
                        isLoading: false,
                        nodes: uniqBy([...categodyOld.nodes, payload.node], 'id'),
                    },
                },
            }
        case actionTypes.GET_TODO_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.error,
            }

        case actionTypes.ADD_TODO_REQUEST:
            return {
                ...state,
                isFetching: true,
            }

        case actionTypes.ADD_TODO_SUCCESS:
            return {
                ...state,
                isFetching: false,
                categories: {
                    ...state.categories,
                    [payload.categoryId]: {
                        ...categodyOld,
                        nodes: [...categodyOld.nodes, payload],
                    },
                },
            }

        case actionTypes.ADD_TODO_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.error,
            }

        case actionTypes.REMOVE_TODO_REQUEST:
            return {
                ...state,
                isFetching: true,
            }

        case actionTypes.REMOVE_TODO_SUCCESS:
            return {
                ...state,
                isFetching: false,
                categories: {
                    ...state.categories,
                    [payload.categoryId]: {
                        ...categodyOld,
                        nodes: categodyOld.nodes.filter(item => item.id !== +payload.id),
                    },
                },
            }

        case actionTypes.REMOVE_TODO_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.error,
            }

        case actionTypes.EDIT_TODO_REQUEST:
            return {
                ...state,
                isFetching: true,
            }

        case actionTypes.EDIT_TODO_SUCCESS:
            const nodes = categodyOld.nodes
            const editIndex = nodes.findIndex(item => item.id === +payload.id)

            nodes[editIndex] = { ...nodes[editIndex], ...payload }

            return {
                ...state,
                isFetching: false,
                categories: {
                    ...state.categories,
                    [payload.categoryId]: {
                        ...categodyOld,
                        nodes,
                    },
                },
            }

        case actionTypes.EDIT_TODO_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.error,
            }

        default:
            return state
    }
}
