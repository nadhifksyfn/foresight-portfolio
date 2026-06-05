import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import { reports } from "../data/reports";

const confidenceColors = {
  STRONG: { bg: "#e8fae8", color: "#1a7f37" },
  EMERGING: { bg: "#fff8e8", color: "#9a6700" },
  WEAK: { bg: "#f2f2f2", color: "#6e6e73" },
};

export default function Research() {
  const [hovered, setHovered] = useState(null);

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif', background: "#f5f5f7", minHeight: "100vh", color: "#1d1d1f" }}>
      <Nav />

      <section style={{ paddingTop: 80, paddingBottom: 60, paddingLeft: 16, paddingRight: 16, maxWidth: 980, margin: "0 auto" }}>
        <span style={{ fontSize: 13, fontWeight: 500, color: "#0071e3", letterSpacing: "0.5px", textTransform: "uppercase" }}>Research Library</span>
        <h1 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, letterSpacing: "-1.5px", margin: "12px 0 8px" }}>Semua Laporan</h1>
        <p style={{ fontSize: 17, color: "#6e6e73", margin: "0 0 48px", maxWidth: 480, lineHeight: 1.6 }}>
          Setiap laporan dibangun dengan metodologi terbuka dan evidence chain yang dapat ditelusuri.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {reports.map(r => {
            const conf = confidenceColors[r.confidence] || confidenceColors.WEAK;
            return (
              <div key={r.id}
                style={{
                  background: "white", borderRadius: 20, padding: "32px 36px",
                  border: "0.5px solid rgba(0,0,0,0.08)", cursor: "pointer",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  transform: hovered === r.id ? "translateY(-2px)" : "none",
                  boxShadow: hovered === r.id ? "0 12px 40px rgba(0,0,0,0.08)" : "none",
                }}
                onMouseEnter={() => setHovered(r.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 24, flexWrap: "wrap" }}>
                  <div style={{ flex: 1, minWidth: 260 }}>
                    <div style={{ display: "flex", gap: 8, marginBottom: 14, flexWrap: "wrap", alignItems: "center" }}>
                      <span style={{ fontSize: 12, fontWeight: 500, background: "#e8f4fd", color: "#0071e3", padding: "4px 12px", borderRadius: 980 }}>{r.topic}</span>
                      <span style={{ fontSize: 12, fontWeight: 600, background: conf.bg, color: conf.color, padding: "4px 12px", borderRadius: 980 }}>{r.confidence} · {r.confScore}</span>
                      <span style={{ fontSize: 12, color: "#6e6e73" }}>{r.readTime} baca</span>
                      <span style={{ fontSize: 12, color: "#6e6e73" }}>{r.date}</span>
                    </div>
                    <h2 style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.5px", margin: "0 0 6px", lineHeight: 1.25 }}>{r.title}</h2>
                    <p style={{ fontSize: 15, color: "#6e6e73", margin: "0 0 14px" }}>{r.subtitle}</p>
                    <p style={{ fontSize: 14, color: "#3d3d3f", lineHeight: 1.65, margin: 0 }}>{r.summary}</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 12, minWidth: 120 }}>
                    <div style={{ display: "flex", gap: 20, textAlign: "right" }}>
                      <div>
                        <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.8px" }}>{r.patterns}</div>
                        <div style={{ fontSize: 11, color: "#6e6e73" }}>patterns</div>
                      </div>
                      <div>
                        <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.8px" }}>{r.signals}</div>
                        <div style={{ fontSize: 11, color: "#6e6e73" }}>signals</div>
                      </div>
                    </div>
                    <Link to={`/report/${r.slug}`} style={{ background: "#0071e3", color: "white", padding: "10px 20px", borderRadius: 980, fontSize: 14, fontWeight: 500, textDecoration: "none", whiteSpace: "nowrap" }}>
                      Baca Laporan →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Coming soon */}
        <div style={{ marginTop: 24, background: "white", borderRadius: 20, padding: "32px 36px", border: "0.5px dashed rgba(0,0,0,0.15)", textAlign: "center" }}>
          <div style={{ fontSize: 13, color: "#6e6e73", marginBottom: 8 }}>Berikutnya · Q1 2026</div>
          <div style={{ fontSize: 17, fontWeight: 600, color: "#1d1d1f", marginBottom: 6 }}>Male Grooming: Kemunculan Kategori Baru</div>
          <div style={{ fontSize: 14, color: "#6e6e73" }}>Laporan kedua sedang dalam pipeline — sinyal sedang dikumpulkan</div>
        </div>
      </section>

      <footer style={{ borderTop: "0.5px solid rgba(0,0,0,0.1)", padding: "24px max(24px, calc((100vw - 980px)/2))", marginTop: 40 }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontSize: 13, color: "#6e6e73" }}>Foresight Intelligence System v2.1</span>
          <span style={{ fontSize: 13, color: "#6e6e73" }}>Bandung, Indonesia · 2026</span>
        </div>
      </footer>
    </div>
  );
}