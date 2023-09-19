import "./App.css";
import Home from "./pages/Home";
import BodyLay from "./layouts/BodyLay";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cities from "./pages/Cities";
import CityDetail from "./pages/CityDetail";
import NotFound404 from "./components/NotFound404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BodyLay />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cities",
        element: <Cities />,
      },
      {
        path: "/cities/:id",
        element: <CityDetail />,
      },
      {
        path: "*",
        element: <NotFound404 />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider
        router={router}
      />
    </>
  );
}

export default App;
