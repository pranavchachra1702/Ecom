import { all } from "redux-saga/effects";

import MaincategorySagas from "./MaincategorySagas";
import SubcategorySagas from "./SubcategorySagas";
import FeatureSagas from "./FeatureSagas";
import FaqSagas from "./FaqSagas";
import BrandSagas from "./BrandSagas";
import SettingSagas from "./SettingSagas";
import ProductSagas from "./ProductSagas";

export default function* RootSage(){
    yield all([
        MaincategorySagas(),
        SubcategorySagas(),
        FeatureSagas(),
        FaqSagas(),
        BrandSagas(),
        SettingSagas(),
        ProductSagas()
    ])
}