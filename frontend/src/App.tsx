import CreateProfile from './_auth/forms/CreateProfile'
import SignInForm from './_auth/forms/SignInForm'
import SignupForm from './_auth/forms/SignupForm'
import Home from './_root/pages/Home'
import HomePage from './_root/pages/HomePage'
import './globals.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: "/",
    element:<CreateProfile/>,
  },
  {
    path: "/signUp",
    element: <SignupForm />,
  },
]);
const App = () => {

     return (
      //  <HomePage />
       <SignInForm/>
      //  <main className='flex'>
      //    <RouterProvider router={router} />
      // </main>
  )
}

export default App
          //   <Routes>
          //        {/* public Routes */}
          //  <Route   path='/' element={<SignInForm />} />
          //  <Route index path='/' element={<SignInForm/>} />
          //        {/* Private Routes */}
          //   </Routes  >