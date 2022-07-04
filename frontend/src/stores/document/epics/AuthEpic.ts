import { Epic } from 'redux-observable'
import { map } from 'rxjs'

export const AuthEpic: Epic = (action$, state$) =>
  action$.pipe(
    map(() => {
      console.log(228)
    }),
  )
