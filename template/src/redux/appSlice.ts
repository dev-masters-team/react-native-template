import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { jwtDecode, JwtPayload } from 'jwt-decode'
import Config from 'react-native-config'

export enum THEME_ID {
  AS_DEVICE = 'AS_DEVICE',
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

interface State {
  lang?: string
  themeId: THEME_ID
}

export const initialState: State = {
  themeId: THEME_ID.AS_DEVICE,
}

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
    setUserSelectedTheme(state, { payload }: PayloadAction<THEME_ID>) {
      state.themeId = payload
    },
  },
  extraReducers: (builder) => {},
})

export const {} = appSlice.actions

export default appSlice.reducer
