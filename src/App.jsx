import "./styles/App.css";
import Header from "./components/Header";
import Cover from "./components/Cover";

function App() {
  return (
    <>
      <section className="cover-container">
        <Header />
        <Cover />
      </section>
      <main></main>
    </>
  );
}

export default App;
