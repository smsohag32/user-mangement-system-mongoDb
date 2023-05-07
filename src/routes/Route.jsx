import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../components/Home";
import Admin from "../components/Admin";
import Users from "../components/Users";
import Update from "../components/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "admin",
        element: <Admin />,
      },
      {
        path: "users",
        element: <Users />,
        loader: () => fetch(`http://localhost:5000/users`),
      },
      {
        path: "update/:id",
        element: <Update />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/users/${params.id}`),
      },
    ],
  },
]);

export default router;
