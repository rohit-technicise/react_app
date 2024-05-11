import Login from './pages/Login';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import SignIn from './pages/SignIn';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "Sign up",
    element: <SignIn/>,
  },
]);
function App() {
  return(
    <RouterProvider router = {router} />
  );

}

export default App;