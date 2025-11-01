import { combineReducers } from "@reduxjs/toolkit";
import MaincategoryReducer from "./MaincategoryReducer";
import SubcategoryReducer from "./SubcategoryReducer";
import BrandReducer from "./BrandReducer";
import FaqReducer from "./FaqReducer";
import FeatureReducer from "./FeatureReducer";
import ProductReducer from "./ProductReducer";
import SettingReducer from "./SettingReducer";

export default combineReducers({
    MaincategoryStateData: MaincategoryReducer,
    SubcategoryStateData: SubcategoryReducer,
    BrandStateData: BrandReducer,
    FaqStateData: FaqReducer,
    FeatureStateData: FeatureReducer,
    ProductStateData: ProductReducer,
    SettingStateData: SettingReducer,
})
