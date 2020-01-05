import { sendRequest, API_READ, API_CREATE, API_UPDATE, API_DELETE } from 'utils/api'

const NS = '@todoList/category'

//types
export const actionTypes = {
    GET_CATEGORIES_REQUEST: `${NS}/GET_CATEGORIES_REQUEST`,
    GET_CATEGORIES_SUCCESS: `${NS}/GET_CATEGORIES_SUCCESS`,
    GET_CATEGORIES_FAILURE: `${NS}/GET_CATEGORIES_FAILURE`,

    ADD_CATEGORY_REQUEST: `${NS}/ADD_CATEGORY_REQUEST`,
    ADD_CATEGORY_SUCCESS: `${NS}/ADD_CATEGORY_SUCCESS`,
    ADD_CATEGORY_FAILURE: `${NS}/ADD_CATEGORY_FAILURE`,

    REMOVE_CATEGORY_REQUEST: `${NS}/REMOVE_CATEGORY_REQUEST`,
    REMOVE_CATEGORY_SUCCESS: `${NS}/REMOVE_CATEGORY_SUCCESS`,
    REMOVE_CATEGORY_FAILURE: `${NS}/REMOVE_CATEGORY_FAILURE`,

    EDIT_CATEGORY_REQUEST: `${NS}/EDIT_CATEGORY_REQUEST`,
    EDIT_CATEGORY_SUCCESS: `${NS}/EDIT_CATEGORY_SUCCESS`,
    EDIT_CATEGORY_FAILURE: `${NS}/EDIT_CATEGORY_FAILURE`,
}

//actions

export const addCathegory = ({ name, description }) => dispatch => {
    dispatch({
        type: actionTypes.ADD_CATEGORY_REQUEST,
    })
    return sendRequest({ endpoint: '/lists', method: API_CREATE, body: { name, description } })
        .then(({ data }) => {
            dispatch({
                type: actionTypes.ADD_CATEGORY_SUCCESS,
                payload: { data, name, description },
            })
        })
        .catch(e => {
            dispatch({
                type: actionTypes.ADD_CATEGORY_FAILURE,
                error: e,
            })
        })
}

export const removeCathegory = ({ id }) => dispatch => {
    dispatch({
        type: actionTypes.ADD_CATEGORY_REQUEST,
    })
    return sendRequest({ endpoint: '/lists', method: API_DELETE, body: { id } })
        .then(({ data }) => {
            dispatch({
                type: actionTypes.ADD_CATEGORY_SUCCESS,
                payload: { data, id },
            })
        })
        .catch(e => {
            dispatch({
                type: actionTypes.ADD_CATEGORY_FAILURE,
                error: e,
            })
        })
}

export const editCathegory = ({ id, name }) => dispatch => {
    dispatch({
        type: actionTypes.ADD_CATEGORY_REQUEST,
    })
    return sendRequest({ endpoint: '/lists', method: API_UPDATE, body: { id, name } })
        .then(({ data }) => {
            dispatch({
                type: actionTypes.ADD_CATEGORY_SUCCESS,
                payload: { data, id, name },
            })
        })
        .catch(e => {
            dispatch({
                type: actionTypes.ADD_CATEGORY_FAILURE,
                error: e,
            })
        })
}

export const getCathegories = ({ offset, limit }) => dispatch => {
    dispatch({
        type: actionTypes.GET_CATEGORIES_REQUEST,
    })

    return sendRequest({ endpoint: '/lists/nodes', method: API_READ, body: { offset, limit } })
        .then(({ data }) => {
            dispatch({
                type: actionTypes.GET_CATEGORIES_SUCCESS,
                payload: { nodes: data.nodes, offset, limit },
            })
        })
        .catch(e => {
            dispatch({
                type: actionTypes.GET_CATEGORIES_FAILURE,
                error: e,
            })
        })
}
