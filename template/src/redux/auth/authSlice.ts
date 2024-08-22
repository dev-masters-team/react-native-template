import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { jwtDecode, JwtPayload } from 'jwt-decode'
import Config from 'react-native-config'
import { AuthDTO, AuthResponseDTO } from './authDTO'
import { useDev } from '../../../dev-tools/useDev'

interface AuthenticatedJwtToken extends JwtPayload, User {
  exp: NonNullable<JwtPayload['exp']>
}
interface User {
  email: string
  sessionExpiresAt: number
  firstName: string
  lastName: string
  tel: string
  lang: string
}

interface State extends User {
  jwt: string
}

export const initialState: Partial<State> = {}

export const attemptAuth = createAsyncThunk<AuthResponseDTO, AuthDTO>(
  'auth/attemptAuth',
  async (payload) => {
    console.log('attemptAuth:', payload)
    console.log('fake delay')
    //const response = await api
    await useDev().delay(2000)
    return { jwt: 'jwt token' }
  },
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    //to be used with google/facebook/apple etc... authentication
    setJWT: (state, { payload }: PayloadAction<string | undefined>) => {
      // const user = jwtDecode<AuthenticatedJwtToken>(payload)
      return {
        // ...user,
        jwt: payload,
        // email: user.sub,
        // sessionExpiresAt: user.exp * 1000,
      }
    },
    logout: () => {
      // Handled in store.ts in rootReducer
    },
  },
  extraReducers: (builder) => {
    builder.addCase(attemptAuth.fulfilled, (state, { payload }) => {
      console.log('payload fulfilled:', payload)
      return payload
    })
  },
})

export const { setJWT, logout } = authSlice.actions

export default authSlice.reducer
