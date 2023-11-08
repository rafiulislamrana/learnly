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
import MyAssignments from './components/pages/MyAssignments/MyAssignments.jsx';
import SubmitAssignment from './components/pages/SubmitAssignment/SubmitAssignment.jsx';
import AllSubmittedAssignments from './components/pages/AllSubmittedAssignments/AllSubmittedAssignments.jsx';
import SinglePendingAssignments from './components/pages/SinglePendingAssignments/SinglePendingAssignments.jsx';


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
        path: "/my-assignments",
        element: <PrivateRoute><MyAssignments></MyAssignments></PrivateRoute>
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
      },
      {
        path: "/submit/:id",
        element: <PrivateRoute><SubmitAssignment></SubmitAssignment></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/assignment/${params.id}`)
      },
      {
        path: "/all-submitted-assignments",
        element: <PrivateRoute><AllSubmittedAssignments></AllSubmittedAssignments></PrivateRoute>
      },
      {
        path: "/pending-assignments/:id",
        element: <PrivateRoute><SinglePendingAssignments></SinglePendingAssignments></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/pending-assignments/${params.id}`)
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
