import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";

import "./app.scss";
import "./style.scss";

import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const currentUser = true;
  const { darkMode } = useContext(DarkModeContext);

  const Layout = () => {
    return (
      <div className={darkMode ? "theme-light" : "theme-dark"}>
        <Navbar />
        <div style={{ display: "flex", gap: "1rem" }}>
          <LeftBar />
          <div style={{ flex: 6, marginTop: "1rem" }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };

  const PrtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to={"/login"} />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <PrtectedRoute>
          <Layout />
        </PrtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
