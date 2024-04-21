import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import RootLayout from "./components/RootLayout"
import Landing from './screens/Landing'
import Signin from './screens/Signin'
import Signup from './screens/Signup'
import Profile from './screens/Profile'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} >
      <Route index element={<Landing />} />
      <Route path="signin" element={<Signin />} />
      <Route path="signup" element={<Signup />} />
      <Route path="profile" element={<Profile />} />
    </Route>
  )
)

function App() {

  return <RouterProvider router={router}/>
}

export default App
