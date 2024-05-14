import Login from './pages/Login';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import SignIn from './pages/SignIn';
import Dashboard from './pages/dashboard';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "sign_up",
    element: <SignIn/>,
  },
  {
    path: "dashboard",
    element:  <Dashboard/>,
  },
]);
function App() {
  return(
    <RouterProvider router = {router} />
  );

}

export default App;