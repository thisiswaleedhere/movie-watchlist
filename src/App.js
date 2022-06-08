
import HeaderBar from "./components/HeaderBar";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import AddMovie from "./pages/AddMovie";
import EditMovie from "./pages/EditMovie";
import MovieList from "./pages/MovieList";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import { UserAuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {


  return (
    <body className="bg-white">
      <UserAuthContextProvider>
        <HeaderBar />
        <NavBar />

        <Routes>

          <Route path="/addmovie" element={<ProtectedRoute><AddMovie /></ProtectedRoute>} />
          <Route path="/editmovie" element={<ProtectedRoute><EditMovie /></ProtectedRoute>} />
          <Route path="/" element={<ProtectedRoute><MovieList /></ProtectedRoute>} exact />


          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes >
      </UserAuthContextProvider>

    </body>
  );
}

export default App;
