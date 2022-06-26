import { createSlice } from '@reduxjs/toolkit'

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

export const epics = {}

export const reducer = slice.reducer
