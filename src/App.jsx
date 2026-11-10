import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import News from "./pages/News.jsx";
import Contact from "./pages/Contact.jsx";
import ComingSoon from "./pages/ComingSoon.jsx";

// One line per page. Build a page, then swap its ComingSoon for the real one.
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="news" element={<News />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<ComingSoon />} />
      </Route>
    </Routes>
  );
}