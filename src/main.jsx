import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Error from './components/shared/Error/Error.jsx';
import Home from './components/pages/Home/Home.jsx';
import AddAssigment from './components/pages/AddAssigment/AddAssigment.jsx';
import UpdateAssignment from './components/pages/UpdateAssignment/UpdateAssignment.jsx';
import Login from './components/pages/Login/Login.jsx';
import Registration from './components/pages/Registration/Registration.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import PrivateRoute from './routes/PrivateRoute/PrivateRoute.jsx';
import SingleAssignment from './components/pages/SingleAssignmenta/SingleAssignment.jsx';
import Assignments from './components/pages/Assignments/Assignments.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/assignments",
        element: <Assignments></Assignments>
      },
      {
        path: "/add-assignment",
        element: <PrivateRoute><AddAssigment></AddAssigment></PrivateRoute>
      },
      {
        path: "/update-assignment/:id",
        element: <PrivateRoute><UpdateAssignment></UpdateAssignment></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/assignment/${params.id}`)
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      },
      {
        path: "/assignment/:id",
        element: <PrivateRoute><SingleAssignment></SingleAssignment></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
