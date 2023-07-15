
import './App.css';

import app from './FireBase/Firebase.init';

import ReactRegister from './Components/ReactRegister/ReactRegister';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Layout/Main';
import Login from './Components/Login/Login';




function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <ReactRegister></ReactRegister>
        },
        {
          path: '/login',
          element: <Login></Login>
        }
      ]
    }
  ])

  return (
    <div className="">

      <div>
        <RouterProvider router={router}></RouterProvider>
      </div>


    </div>
  );
}

export default App;
