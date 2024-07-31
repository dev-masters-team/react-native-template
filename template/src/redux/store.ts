import {
  combineReducers,
  configureStore,
  type UnknownAction,
  type Reducer,
  createListenerMiddleware,
} from '@reduxjs/toolkit'
import { enableMapSet } from 'immer'
import { persistReducer, persistStore } from 'redux-persist'
import authReducer, {
  initialState as authInitialState,
} from './auth/authSlice'
import appReducer, {
  initialState as appInitialState,
} from './appSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'

enableMapSet()

const reducers = {
  auth: authReducer,
  app: appReducer,
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whiteList: ['auth', 'app'],
  // blacklist: [],
}

const combinedReducer = combineReducers(reducers)

const initialState = {
  auth: authInitialState,
  app: appInitialState,
}

export const rootReducer: Reducer = (state: RootState, action: UnknownAction) => {
  if (action.type === 'auth/logout') {
    return combinedReducer(
      {
        ...initialState,
      },
      action,
    )
  }

  return combinedReducer(state, action)
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

/* export const restoreSettingsMiddleware: Middleware<{}, RootState> =
  (storeApi) => (next) => (action) => {
    if (action.type === 'persist/REHYDRATE') {
      // const blurCamera = localStorage.getItem("settingsBlurCamera") == "true"
      // storeApi.dispatch(setBokehEffectActive(blurCamera))
    }

    return next(action)
  }
 */
export const listenerMiddleware = createListenerMiddleware()

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }).prepend(listenerMiddleware.middleware),
  // .concat(restoreSettingsMiddleware),
})

export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof combinedReducer>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
