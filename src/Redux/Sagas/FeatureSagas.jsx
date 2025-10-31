import { put, takeEvery } from "redux-saga/effects"
import { CREATE_FEATURE, CREATE_FEATURE_RED, DELETE_FEATURE, DELETE_FEATURE_RED, GET_FEATURE, GET_FEATURE_RED, UPDATE_FEATURE, UPDATE_FEATURE_RED } from "../Constant"
import { createRecord, createMultipartRecord, getRecord, updateRecord, deleteRecord } from "./Services/index"


function* createSaga(action) {                                         // Worker
    let response = yield createRecord("feature", action.payload)
    // let response = yield createMultipartRecord("feature", action.payload)
    yield put({ type: CREATE_FEATURE_RED, payload: response })

}

function* getSaga(action) {                                         // Worker
    let response = yield getRecord("feature")
    yield put({ type: GET_FEATURE_RED, payload: response })

}

function* updateSaga(action) {                                         // Worker
    yield updateRecord("feature", action.payload)
    yield put({ type: UPDATE_FEATURE_RED, payload: action.payload })

    // let response = yield updateMultipartRecord("feature", action.payload)
    // yield put({ type: UPDATE_FEATURE_RED, payload: response }) (For a REAL BACKEND)

}

function* deleteSaga(action) {                                         // Worker
    let response = yield deleteRecord("feature", action.payload)
    yield put({ type: DELETE_FEATURE_RED, payload: response })

}
export default function* FeatureSagas() {
    yield takeEvery(CREATE_FEATURE, createSaga) // Watcher
    yield takeEvery(GET_FEATURE, getSaga)
    yield takeEvery(UPDATE_FEATURE, updateSaga)
    yield takeEvery(DELETE_FEATURE, deleteSaga)
}