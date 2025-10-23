import { CREATE_MAINCATEGORY_RED, DELETE_MAINCATEGORY_RED, GET_MAINCATEGORY_RED, UPDATE_MAINCATEGORY_RED } from "../Constant"

export default function MaincategoryReducer(state = [], action) {
    switch (action.type) {
        case CREATE_MAINCATEGORY_RED:
            return [...state, action.payload]

        case GET_MAINCATEGORY_RED:
            return action.payload

        case UPDATE_MAINCATEGORY_RED:
            let index = state.findIndex(x => x.id === action.payload.id)
            state[index.name] = action.payload.name
            state[index.pic] = action.payload.pic
            state[index.status] = action.payload.status

            return state

        case DELETE_MAINCATEGORY_RED:
            return state.filter(x => x.id !== action.payload.id)

        default:
            return state

    }
}
