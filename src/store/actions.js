export const FETCH_REQUEST = 'FETCH_REQUEST'
export const fetchRequest = (params) => ({
    type: FETCH_REQUEST,
    payload: params
})

export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const fetchSuccess = (data) => ({
    type: FETCH_SUCCESS,
    payload: {
        data,
        status: 'success',
        message: '',
    }
})

export const FETCH_FAILD = 'FETCH_FAILD'
export const fetchFaild = (message) => ({
    type: FETCH_FAILD,
    payload: {
        status: 'faild',
        message,
    }
})