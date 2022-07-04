import { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { useDispatch } from 'react-redux'

import { auth } from './stores/document'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(auth())
  }, [dispatch])

  return <h1>Hello</h1>
}

const root = createRoot(document.getElementById('root')!)

root.render(<App />)
