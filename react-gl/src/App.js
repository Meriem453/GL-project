import Login from "./components/login/login";
import Waiting from "./components/waiting/waiting";
import Profile from "./components/compteavocat/profile";
import Planification from "./components/planification/planification";
import Rendezvous from "./components/rendezvous/rendezvous";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signup from "./components/signup/signup";
import Commentpage from "./components/comments/comment";

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login/>,
    },
     {
      path: "/signup",
      element: <Signup/>,
     },
     {
      path: "/waiting",
      element: <Waiting/>,
     },
     {
      path: "/profile",
      element: <Profile/>,
     },
     {
      path: "/planification",
      element: <Planification/>,
     },
     {
      path: "/rendezvous",
      element: <Rendezvous/>,
     },
     {
      path: "/commentaires",
      element: <Commentpage/>,
     },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
