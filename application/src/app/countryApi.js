/* eslint-disable no-labels */
import {fetchBaseQuery,createApi} from "@reduxjs/toolkit/query/react"



const countryApi = createApi({
    reducerPath: "countryApis",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/data"
    }),
    endpoints:(builder) => {
        allData: builder.query({
            query:() => ({
                url : "/",
                method: "GET"
            })
        })
    }
})


export default countryApi;
export const {useAllDataQuery} = countryApi;

//use+< the endpoint name.