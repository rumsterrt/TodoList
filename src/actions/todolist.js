import { sendRequest, API_READ, API_CREATE, API_UPDATE, API_DELETE } from 'utils/api'
import { actionTypes as categoryActionTypes } from './category'

const NS = '@todoList/todo'

//types
export const actionTypes = {
    GET_TODOS_REQUEST: `${NS}/GET_TODOS_REQUEST`,
    GET_TODOS_SUCCESS: `${NS}/GET_TODOS_SUCCESS`,
    GET_TODOS_FAILURE: `${NS}/GET_TODOS_FAILURE`,

    GET_TODO_REQUEST: `${NS}/GET_TODO_REQUEST`,
    GET_TODO_SUCCESS: `${NS}/GET_TODO_SUCCESS`,
    GET_TODO_FAILURE: `${NS}/GET_TODO_FAILURE`,

    ADD_TODO_REQUEST: `${NS}/ADD_TODO_REQUEST`,
    ADD_TODO_SUCCESS: `${NS}/ADD_TODO_SUCCESS`,
    ADD_TODO_FAILURE: `${NS}/ADD_TODO_FAILURE`,

    REMOVE_TODO_REQUEST: `${NS}/REMOVE_TODO_REQUEST`,
    REMOVE_TODO_SUCCESS: `${NS}/REMOVE_TODO_SUCCESS`,
    REMOVE_TODO_FAILURE: `${NS}/REMOVE_TODO_FAILURE`,

    EDIT_TODO_REQUEST: `${NS}/EDIT_TODO_REQUEST`,
    EDIT_TODO_SUCCESS: `${NS}/EDIT_TODO_SUCCESS`,
    EDIT_TODO_FAILURE: `${NS}/EDIT_TODO_FAILURE`,
}

//actions

export const addTodo = ({ categoryId, name }) => dispatch => {
    dispatch({
        type: actionTypes.ADD_TODO_REQUEST,
    })
    return sendRequest({ endpoint: '/todos', method: API_CREATE, body: { name, categoryId } })
        .then(({ data }) => {
            dispatch({
                type: actionTypes.ADD_TODO_SUCCESS,
                payload: { id: data.id, name, categoryId },
            })
            dispatch({
                type: categoryActionTypes.UPDATE_TODOS_COUNT,
                payload: { total: 1, categoryId },
            })
        })
        .catch(e => {
            dispatch({
                type: actionTypes.ADD_TODO_FAILURE,
                error: e,
            })
        })
}

export const removeTodo = ({ id, categoryId, isDone }) => dispatch => {
    dispatch({
        type: actionTypes.REMOVE_TODO_REQUEST,
    })
    return sendRequest({ endpoint: `/todos/${id}`, method: API_DELETE })
        .then(({ data }) => {
            dispatch({
                type: actionTypes.REMOVE_TODO_SUCCESS,
                payload: { data, id, categoryId },
            })
            dispatch({
                type: categoryActionTypes.UPDATE_TODOS_COUNT,
                payload: { total: -1, complete: isDone ? -1 : 0, categoryId },
            })
        })
        .catch(e => {
            dispatch({
                type: actionTypes.REMOVE_TODO_FAILURE,
                error: e,
            })
        })
}

export const editTodo = ({ id, categoryId, name, isDone }) => dispatch => {
    dispatch({
        type: actionTypes.EDIT_TODO_REQUEST,
    })
    return sendRequest({ endpoint: `/todos/${id}`, method: API_UPDATE, body: { name, isDone, id } })
        .then(() => {
            const fields = { name, isDone }
            Object.keys(fields).forEach(key => fields[key] === undefined && delete fields[key])

            dispatch({
                type: actionTypes.EDIT_TODO_SUCCESS,
                payload: { id, categoryId, ...fields },
            })
            dispatch({
                type: categoryActionTypes.UPDATE_TODOS_COUNT,
                payload: { complete: isDone !== undefined ? (isDone ? 1 : -1) : 0, categoryId },
            })
        })
        .catch(e => {
            dispatch({
                type: actionTypes.EDIT_TODO_FAILURE,
                error: e,
            })
        })
}

export const getTodos = ({ offset, limit, categoryId }) => dispatch => {
    dispatch({
        type: actionTypes.GET_TODOS_REQUEST,
        payload: { categoryId },
    })

    return sendRequest({ endpoint: `/todos`, method: API_READ, body: { offset, limit, categoryId } })
        .then(({ data }) => {
            dispatch({
                type: actionTypes.GET_TODOS_SUCCESS,
                payload: { nodes: data.nodes, offset, limit, categoryId },
            })
        })
        .catch(e => {
            dispatch({
                type: actionTypes.GET_TODOS_FAILURE,
                error: e,
                payload: { categoryId },
            })
        })
}

export const getTodo = ({ id }) => dispatch => {
    dispatch({
        type: actionTypes.GET_TODO_REQUEST,
    })

    return sendRequest({ endpoint: `/todos`, method: API_READ, body: { id } })
        .then(({ data }) => {
            dispatch({
                type: actionTypes.GET_TODO_SUCCESS,
                payload: { node: data.node },
            })
        })
        .catch(e => {
            dispatch({
                type: actionTypes.GET_TODO_FAILURE,
                error: e,
            })
        })
}
