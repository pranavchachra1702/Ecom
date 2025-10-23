import { combineReducers } from "@reduxjs/toolkit";
import MaincategoryReducer from "./MaincategoryReducer";


export default function RootReducer() {
    return combineReducers({
        MaincategoryStateData: MaincategoryReducer
    })
}

