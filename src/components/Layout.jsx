import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import SearchPanel from "./SearchPanel.jsx";
import Drawer from "./Drawer.jsx";
import LoginModal from "./LoginModal.jsx";
import SignUpModal from "./SignUpModal.jsx";
import ScrollToTop from "./ScrollToTop.jsx";

// Wraps every page: top line, navbar, the page itself, footer and the pop-up panels.
export default function Layout() {
  const [panel, setPanel] = useState(null); // "search" | "menu" | "login" | "signup" | null
  const close = () => setPanel(null);

  return (
    <>
      <ScrollToTop />
      <div className="topline" aria-hidden="true" />
      <Navbar onSearch={() => setPanel("search")} onMenu={() => setPanel("menu")} />
      <main>
        <Outlet />
      </main>
      <Footer />
      {panel === "search" && <SearchPanel onClose={close} />}
      {panel === "menu" && <Drawer onClose={close} onLogin={() => setPanel("login")} onSignUp={() => setPanel("signup")} />}
      {panel === "login" && <LoginModal onClose={close} />}
      {panel === "signup" && <SignUpModal onClose={close} />}
    </>
  );
}