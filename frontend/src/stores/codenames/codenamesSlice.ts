import { createSlice } from '@reduxjs/toolkit'

interface CodenamesState {}

export const initialState: CodenamesState = {}

const slice = createSlice({ name: 'codenames', initialState, reducers: {} })

export const epics = {}

export const reducer = slice.reducer
