import axios from 'axios'
import url from 'url'
import { api as apiConfig } from '../config'

export const API_CALL = 'API_CALL'
export const API_CREATE = 'API_CREATE'
export const API_READ = 'API_READ'
export const API_UPDATE = 'API_UPDATE'
export const API_DELETE = 'API_DELETE'

export const API_STATUS = {
    NO_CONTENT: 204,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    BAD_REQUEST: 400,
    SUCCESS: 200,
}

const methods = {
    [API_CREATE]: 'POST',
    [API_READ]: 'GET',
    [API_UPDATE]: 'PUT',
    [API_DELETE]: 'DELETE',
}

export const sendRequest = ({ endpoint, method, body, credentials, headers = {} }) => {
    const fullUrl = url.format({
        protocol: apiConfig.protocol,
        hostname: apiConfig.url,
        port: apiConfig.port,
        pathname: endpoint,
    })

    const httpMethod = methods[method]

    let serializedBody = body

    // eslint-disable-next-line
    if (body instanceof FormData === false) {
        serializedBody = body || undefined

        headers['Content-Type'] = 'application/json'
    }

    let preparedData = {
        method: httpMethod,
        url: fullUrl,
        credentials,
        headers,
    }

    if (httpMethod === methods[API_READ]) {
        preparedData.params = { ...serializedBody }
    } else {
        preparedData.data = { ...serializedBody }
    }

    return axios(preparedData)
        .then(response => {
            if (response.status !== API_STATUS.SUCCESS) {
                // eslint-disable-next-line
                return Promise.reject({ ...response })
            }

            return {
                headers: response.headers,
                data: response.data,
            }
        })
        .then(
            response => ({ ...response }),
            error => ({
                error: (error && error.message) || error || 'Unknown error',
                response: error.data || {},
            }),
        )
}
