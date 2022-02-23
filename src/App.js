import HeaderBar from "./HeaderBar";
import NavBar from "./NavBar";
import TitleCard from "./TitleCard";

function App() {
  return (
    <body className="bg-white">
      <HeaderBar />
      <NavBar />
      <TitleCard title="Marcus Rashford - The Movie" year="2023" lang="English" genre="Biography" />
      <TitleCard title="newererr namded xyzzz" year="1999" lang="English" genre="Biography" />
      <TitleCard title="kdjskdjskdjskdjskdjkdjskdjskdjskdjskdj" year="2003" lang="English" genre="Biography" />
      <TitleCard title="kdjs" year="2021" lang="English" genre="Biography" />
      <TitleCard title="kdwwwwwwwwwwwwwwwwwwwwww jskdjskdjskdjskdjkdjskdjskdjskdjskdj" year="2023" lang="English" genre="Biography" />
    </body>
  );
}

export default App;
