import { configureStore } from '@reduxjs/toolkit'

import qnrReducer from './slices/qnrSlice'

const store = configureStore({
    reducer: {
        qnrReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store