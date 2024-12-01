import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="mt-[50px] flex justify-between conteaner ml-[300px]">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>RTK</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
