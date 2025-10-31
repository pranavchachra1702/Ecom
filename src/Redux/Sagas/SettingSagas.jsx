import { put, takeEvery } from "redux-saga/effects"
import { CREATE_SETTING, CREATE_SETTING_RED, DELETE_SETTING, DELETE_SETTING_RED, GET_SETTING, GET_SETTING_RED, UPDATE_SETTING, UPDATE_SETTING_RED } from "../Constant"
import { createRecord, createMultipartRecord, getRecord, updateRecord, deleteRecord } from "./Services/index"


function* createSaga(action) {                                         // Worker
    let response = yield createRecord("setting", action.payload)
    // let response = yield createMultipartRecord("setting", action.payload)
    yield put({ type: CREATE_SETTING_RED, payload: response })

}

function* getSaga(action) {                                         // Worker
    let response = yield getRecord("setting")
    yield put({ type: GET_SETTING_RED, payload: response })

}

function* updateSaga(action) {                                         // Worker
    yield updateRecord("setting", action.payload)
    yield put({ type: UPDATE_SETTING_RED, payload: action.payload })

    // let response = yield updateMultipartRecord("setting", action.payload)
    // yield put({ type: UPDATE_SETTING_RED, payload: response }) (For a REAL BACKEND)

}

function* deleteSaga(action) {                                         // Worker
    let response = yield deleteRecord("setting", action.payload)
    yield put({ type: DELETE_SETTING_RED, payload: response })

}
export default function* SettingSagas() {
    yield takeEvery(CREATE_SETTING, createSaga) // Watcher
    yield takeEvery(GET_SETTING, getSaga)
    yield takeEvery(UPDATE_SETTING, updateSaga)
    yield takeEvery(DELETE_SETTING, deleteSaga)
}