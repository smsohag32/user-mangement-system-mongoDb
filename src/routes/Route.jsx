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
        loader: () => fetch(`https://users-management-server.vercel.app/users`),
      },
      {
        path: "update/:id",
        element: <Update />,
        loader: ({ params }) =>
          fetch(
            `https://users-management-server.vercel.app/users/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
