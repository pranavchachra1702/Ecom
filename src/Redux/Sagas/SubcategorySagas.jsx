import { put, takeEvery } from "redux-saga/effects"
import { CREATE_SUBCATEGORY, CREATE_SUBCATEGORY_RED, DELETE_SUBCATEGORY, DELETE_SUBCATEGORY_RED, GET_SUBCATEGORY, GET_SUBCATEGORY_RED, UPDATE_SUBCATEGORY, UPDATE_SUBCATEGORY_RED } from "../Constant"
import { createRecord, createMultipartRecord, getRecord, updateRecord, deleteRecord } from "./Services/index"


function* createSaga(action) {                                         // Worker
    let response = yield createRecord("subcategory", action.payload)
    // let response = yield createMultipartRecord("subcategory", action.payload)
    yield put({ type: CREATE_SUBCATEGORY_RED, payload: response })

}

function* getSaga(action) {                                         // Worker
    let response = yield getRecord("subcategory")
    yield put({ type: GET_SUBCATEGORY_RED, payload: response })

}

function* updateSaga(action) {                                         // Worker
    yield updateRecord("subcategory", action.payload)
    yield put({ type: UPDATE_SUBCATEGORY_RED, payload: action.payload })

    // let response = yield updateMultipartRecord("subcategory", action.payload)
    // yield put({ type: UPDATE_SUBCATEGORY_RED, payload: response }) (For a REAL BACKEND)

}

function* deleteSaga(action) {                                         // Worker
    let response = yield deleteRecord("subcategory", action.payload)
    yield put({ type: DELETE_SUBCATEGORY_RED, payload: response })

}
export default function* SubcategorySagas() {
    yield takeEvery(CREATE_SUBCATEGORY, createSaga) // Watcher
    yield takeEvery(GET_SUBCATEGORY, getSaga)
    yield takeEvery(UPDATE_SUBCATEGORY, updateSaga)
    yield takeEvery(DELETE_SUBCATEGORY, deleteSaga)
}