import "./styles/App.css";
import Header from "./components/Header";
import Cover from "./components/Cover";
import Home from "./components/Home";

function App() {
  return (
    <>
      <section className="cover-container">
        <Header />
        <Cover />
      </section>
      <main>
        <Home />
      </main>
    </>
  );
}

export default App;
