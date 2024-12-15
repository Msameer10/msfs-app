import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";  // Import the About component
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router basename="msfs-app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}
