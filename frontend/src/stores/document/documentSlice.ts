import { createSlice } from '@reduxjs/toolkit'

import { AuthEpic } from './epics'

interface DocumentState {}

export const initialState: DocumentState = {}

const slice = createSlice({
  name: 'document',
  initialState,
  reducers: {
    auth: () => {},
  },
})

export const { auth } = slice.actions

export const epics = {
  auth: AuthEpic,
}

export const reducer = slice.reducer
