import "./styles/App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Cover from "./components/Cover";

function App() {
  return (
    <>
      <section className="cover-container">
        <Header />
        <Cover />
      </section>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
