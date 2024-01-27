import Login from "./components/login/login";
import Waiting from "./components/waiting/waiting";
import Profile from "./components/compteavocat/profile";
import Planification from "./components/planification/planification";
import Rendezvous from "./components/rendezvous/rendezvous";
import Admin from "./components/admin/admin";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signup from "./components/signup/signup";
import Commentpage from "./components/comments/comment";

import Home from './componentss/home';
import Recherche from './componentss/beforeSearch';
import Apresrecherche from './componentss/afterSearch';
import Proifil from './componentss/profilAvocat';
import Avocat from './componentss/avocat';

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
     {
      path: "/",
      element: <Home/>,
     },
     {
      path: '/recherche',
      element: <Recherche/>,
     },
     {
      path: '/apres_recherche',
      element: <Apresrecherche/>,
     },
     
     {
      path: '/avocat',
      element: <Avocat/>,
     },
     {
      path: '/profilavocat/:id',
      element: <Proifil/>,
     },

     {
      path: '/secure-admin-path-here',
      element: <Admin/>,
     },

    

  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
