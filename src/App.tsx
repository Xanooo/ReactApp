import Navbar from "./components/Navbar/Navbar";

function App() {
  let items = ["Home", "About", "Work", "Contact"];

  return <Navbar items={items}></Navbar>;
}

export default App;
