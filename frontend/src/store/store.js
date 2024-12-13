import { configureStore } from "@reduxjs/toolkit";
import authReduce from './auth-slice'


const store = configureStore({
    reducer : {
        auth:authReduce,
       
        
    }
})

export default store;