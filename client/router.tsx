/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import Home from './components/Home'
import Finder from './components/Finder'

const router = createBrowserRouter(
  createRoutesFromElements([<Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="/finder" element={<Finder />} />
  </Route>])
)

export default router
