import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Research from "./pages/Research";
import Methodology from "./pages/Methodology";
import About from "./pages/About";
import ReportDetail from "./pages/ReportDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/methodology" element={<Methodology />} />
        <Route path="/about" element={<About />} />
        <Route path="/report/:slug" element={<ReportDetail />} />
      </Routes>
    </BrowserRouter>
  );
}