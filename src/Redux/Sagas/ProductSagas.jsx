import { put, takeEvery } from "redux-saga/effects"
import { CREATE_PRODUCT, CREATE_PRODUCT_RED, DELETE_PRODUCT, DELETE_PRODUCT_RED, GET_PRODUCT, GET_PRODUCT_RED, UPDATE_PRODUCT, UPDATE_PRODUCT_RED } from "../Constant"
import { createRecord, createMultipartRecord, getRecord, updateRecord, deleteRecord } from "./Services/index"


function* createSaga(action) {                                         // Worker
    let response = yield createRecord("product", action.payload)
    // let response = yield createMultipartRecord("product", action.payload)
    yield put({ type: CREATE_PRODUCT_RED, payload: response })

}

function* getSaga(action) {                                         // Worker
    let response = yield getRecord("product")
    yield put({ type: GET_PRODUCT_RED, payload: response })

}

function* updateSaga(action) {                                         // Worker
    yield updateRecord("product", action.payload)
    yield put({ type: UPDATE_PRODUCT_RED, payload: action.payload })

    // let response = yield updateMultipartRecord("product", action.payload)
    // yield put({ type: UPDATE_PRODUCT_RED, payload: response }) (For a REAL BACKEND)

}

function* deleteSaga(action) {                                         // Worker
    let response = yield deleteRecord("product", action.payload)
    yield put({ type: DELETE_PRODUCT_RED, payload: response })

}
export default function* ProductSagas() {
    yield takeEvery(CREATE_PRODUCT, createSaga) // Watcher
    yield takeEvery(GET_PRODUCT, getSaga)
    yield takeEvery(UPDATE_PRODUCT, updateSaga)
    yield takeEvery(DELETE_PRODUCT, deleteSaga)
}