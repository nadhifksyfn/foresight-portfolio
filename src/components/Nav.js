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
      background: scrolled ? "rgba(245,245,247,0.85)" : "rgba(245,245,247,0.95)",
      backdropFilter: "saturate(180%) blur(20px)",
      borderBottom: "0.5px solid rgba(0,0,0,0.1)",
      transition: "all 0.3s ease",
      padding: "0 16px",
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 52, maxWidth: 980, margin: "0 auto" }}>
        <Link to="/" style={{ fontSize: 14, fontWeight: 600, letterSpacing: "-0.3px", textDecoration: "none", color: "#1d1d1f", whiteSpace: "nowrap", flexShrink: 0 }}>
          Foresight Intelligence
        </Link>
        <div style={{ display: "flex", gap: 20 }}>
          {links.map(item => (
            <Link key={item.to} to={item.to} style={{
              fontSize: 13, textDecoration: "none",
              color: location.pathname === item.to ? "#0071e3" : "#1d1d1f",
              opacity: location.pathname === item.to ? 1 : 0.7,
              fontWeight: location.pathname === item.to ? 500 : 400,
              whiteSpace: "nowrap",
            }}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}