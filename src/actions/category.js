import { sendRequest, API_READ, API_CREATE, API_UPDATE, API_DELETE } from 'utils/api'

const NS = '@todoList/category'

//types
export const actionTypes = {
    GET_CATEGORIES_REQUEST: `${NS}/GET_CATEGORIES_REQUEST`,
    GET_CATEGORIES_SUCCESS: `${NS}/GET_CATEGORIES_SUCCESS`,
    GET_CATEGORIES_FAILURE: `${NS}/GET_CATEGORIES_FAILURE`,

    GET_CATEGORY_REQUEST: `${NS}/GET_CATEGORY_REQUEST`,
    GET_CATEGORY_SUCCESS: `${NS}/GET_CATEGORY_SUCCESS`,
    GET_CATEGORY_FAILURE: `${NS}/GET_CATEGORY_FAILURE`,

    ADD_CATEGORY_REQUEST: `${NS}/ADD_CATEGORY_REQUEST`,
    ADD_CATEGORY_SUCCESS: `${NS}/ADD_CATEGORY_SUCCESS`,
    ADD_CATEGORY_FAILURE: `${NS}/ADD_CATEGORY_FAILURE`,

    REMOVE_CATEGORY_REQUEST: `${NS}/REMOVE_CATEGORY_REQUEST`,
    REMOVE_CATEGORY_SUCCESS: `${NS}/REMOVE_CATEGORY_SUCCESS`,
    REMOVE_CATEGORY_FAILURE: `${NS}/REMOVE_CATEGORY_FAILURE`,

    EDIT_CATEGORY_REQUEST: `${NS}/EDIT_CATEGORY_REQUEST`,
    EDIT_CATEGORY_SUCCESS: `${NS}/EDIT_CATEGORY_SUCCESS`,
    EDIT_CATEGORY_FAILURE: `${NS}/EDIT_CATEGORY_FAILURE`,

    UPDATE_TODOS_COUNT: `${NS}/UPDATE_TODOS_COUNT`,
}

//actions

export const addCategory = ({ name, description }) => dispatch => {
    dispatch({
        type: actionTypes.ADD_CATEGORY_REQUEST,
    })
    return sendRequest({ endpoint: '/lists', method: API_CREATE, body: { name, description } }).then(
        ({ data, error }) => {
            if (error) {
                return dispatch({
                    type: actionTypes.ADD_CATEGORY_FAILURE,
                    error,
                })
            }
            dispatch({
                type: actionTypes.ADD_CATEGORY_SUCCESS,
                payload: { id: data.id, name, description },
            })
        },
    )
}

export const removeCategory = ({ id }) => dispatch => {
    dispatch({
        type: actionTypes.REMOVE_CATEGORY_REQUEST,
    })
    return sendRequest({ endpoint: `/lists/${id}`, method: API_DELETE }).then(({ data, error }) => {
        if (error) {
            return dispatch({
                type: actionTypes.REMOVE_CATEGORY_FAILURE,
                error,
            })
        }
        dispatch({
            type: actionTypes.REMOVE_CATEGORY_SUCCESS,
            payload: { data, id },
        })
    })
}

export const editCategory = ({ id, name, description }) => dispatch => {
    dispatch({
        type: actionTypes.EDIT_CATEGORY_REQUEST,
    })
    return sendRequest({ endpoint: `/lists/${id}`, method: API_UPDATE, body: { name, description } }).then(
        ({ data, error }) => {
            if (error) {
                return dispatch({
                    type: actionTypes.EDIT_CATEGORY_FAILURE,
                    error,
                })
            }
            dispatch({
                type: actionTypes.EDIT_CATEGORY_SUCCESS,
                payload: { id, name, description },
            })
        },
    )
}

export const getCategories = ({ offset, limit }) => dispatch => {
    dispatch({
        type: actionTypes.GET_CATEGORIES_REQUEST,
    })

    return sendRequest({ endpoint: '/lists', method: API_READ, body: { offset, limit } }).then(({ error, data }) => {
        if (error) {
            return dispatch({
                type: actionTypes.GET_CATEGORIES_FAILURE,
                error,
            })
        }
        dispatch({
            type: actionTypes.GET_CATEGORIES_SUCCESS,
            payload: { nodes: data.nodes, offset, limit },
        })
    })
}

export const getCategory = ({ id }) => dispatch => {
    dispatch({
        type: actionTypes.GET_CATEGORY_REQUEST,
    })

    return sendRequest({ endpoint: `/lists`, method: API_READ, body: { id } }).then(({ data, error }) => {
        if (error) {
            return dispatch({
                type: actionTypes.GET_CATEGORY_FAILURE,
                error,
            })
        }
        dispatch({
            type: actionTypes.GET_CATEGORY_SUCCESS,
            payload: { node: data.node },
        })
    })
}
