import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import githubImg from "./assets/github.png";
import discordImg from "./assets/discord.png";

function App() {
  let items = ["Anime", "Formulaire", "Se connecter", "A Propos"];

  return (
    <>
      <Navbar items={items}></Navbar>
      <Footer githubPath={githubImg} discordPath={discordImg}></Footer>
    </>
  );
}

export default App;
