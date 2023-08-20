import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import RegisterPage from "./pages/auth/Register";
import LoginPage from "./pages/auth/Login";
import Application from "./pages/application/Home";
import ProtectedRoutes from "./ProtectedRoutes";
import GET_APPLICATION from "./apollo/queries/ApplicationQuery";
import { useQuery } from "@apollo/client";
import ProcessingCircular from "./components/processing/ProcessingCircular";
import { UserContextProvider } from "./context/UserContext";
import About from "./pages/application/About";

export default function App() {
  const { loading, error, data } = useQuery(GET_APPLICATION);

  return (
    <>
      {loading ? (
        <ProcessingCircular colour="red" text="Loading" />
      ) : error ? (
        <p>{error}</p>
      ) : data ? (
        <UserContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route element={<ProtectedRoutes />}>
                <Route path="/application" element={<Application />} />
                <Route path="/application/about" element={<About />} />
              </Route>
            </Routes>
            <p className="py-5 px-3">
              Application Name: {data.application.name} Version:{" "}
              {data.application.version}
            </p>
          </BrowserRouter>
        </UserContextProvider>
      ) : (
        ""
      )}
    </>
  );
}
