import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Research", to: "/research" },
    { label: "Methodology", to: "/methodology" },
    { label: "About", to: "/about" },
  ];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(245,245,247,0.85)" : "transparent",
      backdropFilter: scrolled ? "saturate(180%) blur(20px)" : "none",
      borderBottom: scrolled ? "0.5px solid rgba(0,0,0,0.1)" : "none",
      transition: "all 0.3s ease",
      padding: "0 max(24px, calc((100vw - 980px)/2))",
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 52 }}>
        <Link to="/" style={{ fontSize: 15, fontWeight: 600, letterSpacing: "-0.3px", textDecoration: "none", color: "#1d1d1f" }}>
          Foresight Intelligence
        </Link>
        <div style={{ display: "flex", gap: 32 }}>
          {links.map(item => (
            <Link key={item.to} to={item.to} style={{
              fontSize: 13, textDecoration: "none",
              color: location.pathname === item.to ? "#0071e3" : "#1d1d1f",
              opacity: location.pathname === item.to ? 1 : 0.7,
              fontWeight: location.pathname === item.to ? 500 : 400,
              transition: "all 0.2s",
            }}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}