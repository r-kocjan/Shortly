import "./App.css";
import Boost from "./components/Boost";
import Footer from "./components/Footer";
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
      <Footer />
    </div>
  );
}

export default App;
