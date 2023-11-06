import { QueryClientProvider } from 'react-query'
import CreateProfile from './_auth/forms/CreateProfile'
import SignInForm from './_auth/forms/SignInForm'
import SignupForm from './_auth/forms/SignupForm'
import Home from './_root/pages/Home'
import HomePage from './_root/pages/HomePage'
import './globals.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { queryClient } from './utils/https'
const router = createBrowserRouter([
  {
    path: '/',
    element:<HomePage/>
  },
  {

    path: "/CreateProfile",
    element:<CreateProfile/>,
  },
  {
    path: "/signUp",
    element: <SignupForm />,
  },
  {
    path: "/login",
    element: <SignInForm />,
  },
]);
const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
       <main className='flex'>
         <RouterProvider router={router} />
      </main>
      </QueryClientProvider>
  )
}

export default App
          //   <Routes>
          //        {/* public Routes */}
          //  <Route   path='/' element={<SignInForm />} />
          //  <Route index path='/' element={<SignInForm/>} />
          //        {/* Private Routes */}
          //   </Routes  >