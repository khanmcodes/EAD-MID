import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import "./index.css";

function ScrollToTop() {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}


function App() {
  return (
    <Router>
    <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Page2" element={<Page2 />} />
        <Route path="/Page3" element={<Page3 />} />
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;