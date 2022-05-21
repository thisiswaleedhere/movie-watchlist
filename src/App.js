
import HeaderBar from "./components/HeaderBar";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import AddMovie from "./pages/AddMovie";
import EditMovie from "./pages/EditMovie";
import MovieList from "./pages/MovieList";
import LoginPage from "./pages/LoginPage";


function App() {


  return (
    <body className="bg-white">
      <HeaderBar />
      <NavBar />

      <Routes>
        <Route path="/addmovie" element={<AddMovie />} />
        <Route path="/editmovie" element={<EditMovie />} />
        <Route path="/home" element={<MovieList />} exact />
        <Route path="/login" element={<LoginPage />} />
      </Routes >

    </body>
  );
}

export default App;
