import { call, put, takeLatest } from 'redux-saga/effects'

import * as API from '../API'
import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILD } from './actions'


function* fetch(action){
    try{
        const response = yield call(API.get, action.payload)
        yield put({
            type: FETCH_SUCCESS,
            payload: response
        })
    }catch(ex){
        yield put({
            type: FETCH_FAILD,
            payload: ex.message
        })
    }
}

function* requestSaga(){
    yield takeLatest(FETCH_REQUEST, fetch)
}

export {
    requestSaga,
}