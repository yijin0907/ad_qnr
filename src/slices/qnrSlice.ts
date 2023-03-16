import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type AnsOption = {
    qnrId: string,
    opId: string
}

interface InitialState {
    personalList: Array<string>
    qnrList: Array<AnsOption>
}

const initialState: InitialState = {
    personalList:[],
    qnrList:[]
}

export const qnrSlice = createSlice({
    name:"qnrList",
    initialState,
    reducers:{
        addPersonalInfo:(state, action: PayloadAction<string>) => {
            state.personalList.push(action.payload)
        },
        removePersonalInfo:(state, action: PayloadAction<number>) => {
            state.personalList.splice(action.payload, 2)
        },
        addAns: (state, action: PayloadAction<AnsOption>) => {
            state.qnrList.push(action.payload)
        },
        removeAns: (state, action: PayloadAction<number>) => {
            state.qnrList.splice(action.payload, 1)
        },
    }
})

export const {addPersonalInfo, removePersonalInfo, addAns, removeAns } = qnrSlice.actions

export default qnrSlice.reducer