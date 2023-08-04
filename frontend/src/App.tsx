import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import RegisterPage from "./pages/auth/Register";
import LoginPage from "./pages/auth/Login";
import Application from "./pages/application/Home";
import ProtectedRoutes from "./ProtectedRoutes";
import GET_APPLICATION from "./apollo/queries/ApplicationQuery";
import { useQuery } from '@apollo/client';
import ProcessingCircular from './components/processing/ProcessingCircular';
import AddMovie from "./pages/application/AddMovie";


export default function App() {

  const { loading, error, data } = useQuery(GET_APPLICATION);

  return (
  <>
  { loading ? <ProcessingCircular colour="red" text="Loading" />
  : error ? <p>{ error }</p> 
  : data ? 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/application" element={<Application />} />
          <Route path="/application/add-movie" element={<AddMovie />} />
        </Route>
      </Routes>
      <p className="py-5 px-3">Application Name: {data.application.name } Version: {data.application.version}</p> 
    </BrowserRouter>
   : ""
  }
    </>
  );
}
