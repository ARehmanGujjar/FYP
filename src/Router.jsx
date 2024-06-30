import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SignUp from "./Components/SignUp";
import MainPage from "./Components/Rander/MainPage";
import ErrorElement from "./Components/Rander/ErrorElement";
import Login from "./Components/Login";
import About from "./Components/Rander/About";
const MyRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/",
        element: <MainPage />,
      },
      
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/about",
        element: <About/>,
      }
    ]
  },{
    errorElement:<ErrorElement/>
  }
]);
export default MyRouter;
