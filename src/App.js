import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Terms from "./pages/Terms/Terms";
import Privacy from "./pages/Privacy/Privacy";
import Shipping from "./pages/Shipping/Shipping";
import Returns from "./pages/Returns/Returns";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Home />} path={"/"}></Route>
          <Route element={<About />} path={"/about"}></Route>
          <Route element={<Contact />} path={"/contact"}></Route>
          <Route element={<Terms />} path={"/terms"}></Route>
          <Route element={<Privacy />} path={"/privacy"}></Route>
          <Route element={<Shipping />} path={"/shipping"}></Route>
          <Route element={<Returns />} path={"/returns"}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
