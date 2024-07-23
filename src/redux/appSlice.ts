import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { jwtDecode, JwtPayload } from 'jwt-decode'
import Config from 'react-native-config'


interface State {
  lang: string
}

export const initialState: Partial<State> = {}


export const updateLanguage = createAsyncThunk(
  'account/updateLanguage',
  async (payload: { lang: string }, { getState, dispatch }) => {
    // const { auth } = getState() as { auth: { jwt: string } }
    // if (!auth.jwt) return

  },
)


export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    
  },
})

export const { } = appSlice.actions

export default appSlice.reducer
