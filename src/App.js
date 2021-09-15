import "./App.css";
import Boost from "./components/Boost";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Main />
      <Boost />
    </div>
  );
}

export default App;
