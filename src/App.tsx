import Login from './pages/Login';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
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
    path: "Dashboard",
    element:  <Dashboard/>,
  },
]);
function App() {
  return(
    <RouterProvider router = {router} />
  );

}

export default App;