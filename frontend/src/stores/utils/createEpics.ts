import { Epic, ofType, StateObservable } from 'redux-observable'
import { Observable } from 'rxjs'
import { mergeMap } from 'rxjs/operators'

interface Slice {
  epics: Record<string, Epic>
}

export const createEpics = (slices: Slice[] = []): Epic[] => {
  if (!Array.isArray(slices)) {
    throw Error('slices must be array')
  }

  return slices
    .map((slice) => {
      if (!slice || !slice.epics) {
        return []
      }

      const actionTypes = Object.fromEntries(
        Object.entries(slice)
          .filter(([k]) => k !== 'default' && k !== 'epics')
          .filter(([, v]) => v?.type)
          .map(([k, v]) => [k, v.type]),
      )

      const epics = Object.entries(slice.epics).map(
        ([k, func]) =>
          (action$: Observable<any>, state$: StateObservable<any>) =>
            action$.pipe(
              ofType(actionTypes[k]),
              mergeMap((action) => func(action$, state$, action)),
            ),
      )
      return epics
    })
    .reduce((acc, cur) => acc.concat(cur), [])
}
