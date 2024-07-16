import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit'
// import { jwtDecode, JwtPayload } from 'jwt-decode'
import Config from 'react-native-config'

interface State {}

export const initialState: State = {}

export const attemptAuth = createAsyncThunk(
  'auth/attemptAuth',
  async (payload: { email: string; password: string }, { dispatch }) => {
    
  },
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => {
      // Handled in store.ts in rootReducer
    },
  },
})

export const { logout } = authSlice.actions

export default authSlice.reducer
