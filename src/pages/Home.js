import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import { reports } from "../data/reports";

const agents = [
  { id: "00", name: "RQ Generator", color: "#0071e3" },
  { id: "01", name: "Signal Scanner", color: "#34c759" },
  { id: "02", name: "Synthesizer", color: "#ff9f0a" },
  { id: "4A", name: "Critic Agent", color: "#ff453a" },
  { id: "4B", name: "Fact Checker", color: "#bf5af2" },
  { id: "05", name: "Report Writer", color: "#0071e3" },
];

const agentDescs = [
  "Mengubah topik vague menjadi 3-5 research question tajam",
  "Scrape Google Trends, RSS, Reddit — klasifikasi otomatis",
  "Deteksi pola lintas sumber dengan confidence scoring",
  "Tantang logika findings — model berbeda dari Synthesizer",
  "Verifikasi URL + string matching. Zero LLM. Deterministik.",
  "Kompilasi Markdown + PDF dengan methodology card otomatis",
];

export default function Home() {
  const [hovered, setHovered] = useState(null);

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif', background: "#f5f5f7", minHeight: "100vh", color: "#1d1d1f" }}>
      <Nav />

      {/* HERO */}
      <section style={{ paddingTop: 140, paddingBottom: 100, paddingLeft: "max(24px, calc((100vw - 980px)/2))", paddingRight: "max(24px, calc((100vw - 980px)/2))" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#0071e3", borderRadius: 20, padding: "5px 14px", marginBottom: 28 }}>
          <div style={{ width: 7, height: 7, borderRadius: "50%", background: "white", opacity: 0.9 }}></div>
          <span style={{ fontSize: 12, color: "white", fontWeight: 500, letterSpacing: "0.3px" }}>Consumer Foresight · Indonesia</span>
        </div>
        <h1 style={{ fontSize: "clamp(42px, 6vw, 72px)", fontWeight: 700, letterSpacing: "-2px", lineHeight: 1.05, margin: "0 0 24px", maxWidth: 720 }}>
          Riset yang bergerak<br />
          <span style={{ color: "#0071e3" }}>secepat sistem.</span>
        </h1>
        <p style={{ fontSize: 19, color: "#6e6e73", lineHeight: 1.6, maxWidth: 520, margin: "0 0 44px", fontWeight: 400 }}>
          Laporan foresight konsumen Indonesia dengan metodologi terbuka, evidence chain yang dapat ditelusuri, dan AI yang bertanggung jawab.
        </p>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <Link to="/research" style={{ display: "inline-block", background: "#0071e3", color: "white", padding: "14px 28px", borderRadius: 980, fontSize: 15, fontWeight: 500, textDecoration: "none", letterSpacing: "-0.2px" }}>
            Lihat Research →
          </Link>
          <Link to="/methodology" style={{ display: "inline-block", background: "white", color: "#1d1d1f", padding: "14px 28px", borderRadius: 980, fontSize: 15, fontWeight: 500, textDecoration: "none", border: "0.5px solid rgba(0,0,0,0.15)" }}>
            Cara Kerja
          </Link>
        </div>
      </section>

      {/* STATS */}
      <section style={{ padding: "0 max(24px, calc((100vw - 980px)/2)) 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {[
            { num: "01", label: "Laporan dipublikasikan", sub: "Beauty · FMCG" },
            { num: "10", label: "Signals dianalisis", sub: "Google Trends · RSS" },
            { num: "05", label: "Patterns teridentifikasi", sub: "1 Strong · 4 Emerging" },
          ].map(s => (
            <div key={s.num} style={{ background: "white", borderRadius: 20, padding: "28px 24px", border: "0.5px solid rgba(0,0,0,0.08)" }}>
              <div style={{ fontSize: 48, fontWeight: 700, letterSpacing: "-2px", color: "#1d1d1f", lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: 15, fontWeight: 500, color: "#1d1d1f", marginTop: 8 }}>{s.label}</div>
              <div style={{ fontSize: 13, color: "#6e6e73", marginTop: 4 }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* LATEST REPORT */}
      <section style={{ padding: "0 max(24px, calc((100vw - 980px)/2)) 100px" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 32 }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.8px", margin: 0 }}>Laporan Terbaru</h2>
          <Link to="/research" style={{ fontSize: 13, color: "#0071e3", textDecoration: "none" }}>Lihat semua →</Link>
        </div>
        {reports.map(r => (
          <div key={r.id}
            style={{
              background: "white", borderRadius: 24, padding: "36px 40px",
              border: "0.5px solid rgba(0,0,0,0.08)", cursor: "pointer",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              transform: hovered === r.id ? "translateY(-2px)" : "none",
              boxShadow: hovered === r.id ? "0 12px 40px rgba(0,0,0,0.08)" : "none",
            }}
            onMouseEnter={() => setHovered(r.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 16 }}>
              <div style={{ flex: 1, minWidth: 280 }}>
                <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 12, fontWeight: 500, background: "#e8f4fd", color: "#0071e3", padding: "4px 12px", borderRadius: 980 }}>{r.topic}</span>
                  <span style={{ fontSize: 12, fontWeight: 600, background: "#e8fae8", color: "#1a7f37", padding: "4px 12px", borderRadius: 980 }}>{r.confidence} {r.confScore}</span>
                  <span style={{ fontSize: 12, color: "#6e6e73", padding: "4px 0" }}>{r.readTime} baca</span>
                </div>
                <h3 style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.6px", margin: "0 0 6px", lineHeight: 1.2 }}>{r.title}</h3>
                <p style={{ fontSize: 16, color: "#6e6e73", margin: "0 0 20px" }}>{r.subtitle}</p>
                <p style={{ fontSize: 15, color: "#3d3d3f", lineHeight: 1.65, margin: 0, maxWidth: 560 }}>{r.summary}</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, minWidth: 160, alignItems: "flex-end" }}>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 12, color: "#6e6e73" }}>Dipublikasikan</div>
                  <div style={{ fontSize: 14, fontWeight: 500, marginTop: 2 }}>{r.date}</div>
                </div>
                <div style={{ display: "flex", gap: 16 }}>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-1px" }}>{r.patterns}</div>
                    <div style={{ fontSize: 11, color: "#6e6e73" }}>patterns</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-1px" }}>{r.signals}</div>
                    <div style={{ fontSize: 11, color: "#6e6e73" }}>signals</div>
                  </div>
                </div>
                <Link to={`/report/${r.slug}`} style={{ background: "#0071e3", color: "white", border: "none", padding: "10px 20px", borderRadius: 980, fontSize: 14, fontWeight: 500, textDecoration: "none", marginTop: 4, display: "inline-block" }}>
                  Baca Laporan →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "0.5px solid rgba(0,0,0,0.1)", padding: "24px max(24px, calc((100vw - 980px)/2))" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 13, color: "#6e6e73" }}>Foresight Intelligence System v2.1</span>
          <span style={{ fontSize: 13, color: "#6e6e73" }}>Bandung, Indonesia · 2026</span>
        </div>
      </footer>
    </div>
  );
}