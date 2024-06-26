import { createSlice } from "@reduxjs/toolkit";

const loggedSlice = createSlice({
    name: 'loggedSlice',
    initialState: { isLogged: false },
    reducers: {
        signIn: (state) => {
            state.isLogged = !state.isLogged
        }
    }
})

export const { signIn } = loggedSlice.actions

export default loggedSlice.reducer