import { put, takeEvery } from "redux-saga/effects"
import { CREATE_FAQ, CREATE_FAQ_RED, DELETE_FAQ, DELETE_FAQ_RED, GET_FAQ, GET_FAQ_RED, UPDATE_FAQ, UPDATE_FAQ_RED } from "../Constant"
import { createRecord, createMultipartRecord, getRecord, updateRecord, deleteRecord } from "./Services/index"


function* createSaga(action) {                                         // Worker
    let response = yield createRecord("faq", action.payload)
    // let response = yield createMultipartRecord("faq", action.payload)
    yield put({ type: CREATE_FAQ_RED, payload: response })

}

function* getSaga(action) {                                         // Worker
    let response = yield getRecord("faq")
    yield put({ type: GET_FAQ_RED, payload: response })

}

function* updateSaga(action) {                                         // Worker
    yield updateRecord("faq", action.payload)
    yield put({ type: UPDATE_FAQ_RED, payload: action.payload })

    // let response = yield updateMultipartRecord("faq", action.payload)
    // yield put({ type: UPDATE_FAQ_RED, payload: response }) (For a REAL BACKEND)

}

function* deleteSaga(action) {                                         // Worker
    let response = yield deleteRecord("faq", action.payload)
    yield put({ type: DELETE_FAQ_RED, payload: response })

}
export default function* FaqSagas() {
    yield takeEvery(CREATE_FAQ, createSaga) // Watcher
    yield takeEvery(GET_FAQ, getSaga)
    yield takeEvery(UPDATE_FAQ, updateSaga)
    yield takeEvery(DELETE_FAQ, deleteSaga)
}