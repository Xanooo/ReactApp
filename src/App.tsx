import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Anime from "./components/Anime/Anime";
import Form from "./components/Form/Form";
import Connect from "./components/Connect/Connect";

import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Accueil</h1>} />
        <Route path="/about" element={<About />} />
        <Route path="/anime" element={<Anime />} />
        <Route path="/formulaire" element={<Form />} />
        <Route path="/seconnecter" element={<Connect />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
