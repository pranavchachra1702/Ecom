import { put, takeEvery } from "redux-saga/effects"
import { CREATE_BRAND, CREATE_BRAND_RED, DELETE_BRAND, DELETE_BRAND_RED, GET_BRAND, GET_BRAND_RED, UPDATE_BRAND, UPDATE_BRAND_RED } from "../Constant"
import { createRecord, createMultipartRecord, getRecord, updateRecord, deleteRecord } from "./Services/index"


function* createSaga(action) {                                         // Worker
    let response = yield createRecord("brand", action.payload)
    // let response = yield createMultipartRecord("brand", action.payload)
    yield put({ type: CREATE_BRAND_RED, payload: response })

}

function* getSaga(action) {                                         // Worker
    let response = yield getRecord("brand")
    yield put({ type: GET_BRAND_RED, payload: response })

}

function* updateSaga(action) {                                         // Worker
    yield updateRecord("brand", action.payload)
    yield put({ type: UPDATE_BRAND_RED, payload: action.payload })

    // let response = yield updateMultipartRecord("brand", action.payload)
    // yield put({ type: UPDATE_BRAND_RED, payload: response }) (For a REAL BACKEND)

}

function* deleteSaga(action) {                                         // Worker
    let response = yield deleteRecord("brand", action.payload)
    yield put({ type: DELETE_BRAND_RED, payload: response })

}
export default function* BrandSagas() {
    yield takeEvery(CREATE_BRAND, createSaga) // Watcher
    yield takeEvery(GET_BRAND, getSaga)
    yield takeEvery(UPDATE_BRAND, updateSaga)
    yield takeEvery(DELETE_BRAND, deleteSaga)
}