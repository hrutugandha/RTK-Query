import {configureStore} from "@reduxjs/toolkit"


import countryApi from "./countryApi"

const store = configureStore({
    reducer: {
        [countryApi.reducerPath]: countryApi.reducer
    }
})


export default store;