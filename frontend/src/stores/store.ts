import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { combineEpics } from 'redux-observable'
import { createEpicMiddleware } from 'redux-observable'

import * as codenamesSlice from './codenames'
import * as documentSlice from './document'
import { createEpics } from './utils'

const epicMiddleware = createEpicMiddleware()

export const store = configureStore({
  reducer: combineReducers({
    document: documentSlice.reducer,
    codenames: codenamesSlice.reducer,
  }),
  middleware: [epicMiddleware],
  devTools: true,
})

const rootEpic = combineEpics(createEpics([documentSlice, codenamesSlice]))
epicMiddleware.run(rootEpic)

export type FBoardState = ReturnType<typeof store.getState>
