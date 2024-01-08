import AnimeList from "./page/searchAnime";
import Nav from "./component/nav";
import Home from "./page/home";
import { Routes, Route } from "react-router-dom";
import AnimePage from "./page/animePage";
import NotFoundPage from "./page/notFoundPage";
import Footer from "./component/footer";
import TopAnimePage from "./page/topAnime";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<AnimeList />} />
        <Route path="/top-anime" element={<TopAnimePage />} />
        <Route path="/anime/:id" element={<AnimePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
