import { useParams, Link } from "react-router-dom";
import Nav from "../components/Nav";
import { reports } from "../data/reports";

const confidenceColors = {
  STRONG: { bg: "#e8fae8", color: "#1a7f37" },
  EMERGING: { bg: "#fff8e8", color: "#9a6700" },
  WEAK: { bg: "#f2f2f2", color: "#6e6e73" },
};

export default function ReportDetail() {
  const { slug } = useParams();
  const report = reports.find(r => r.slug === slug);

  if (!report) {
    return (
      <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif', background: "#f5f5f7", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Nav />
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 48, fontWeight: 700, marginBottom: 16 }}>404</div>
          <div style={{ fontSize: 17, color: "#6e6e73", marginBottom: 24 }}>Laporan tidak ditemukan.</div>
          <Link to="/research" style={{ background: "#0071e3", color: "white", padding: "12px 24px", borderRadius: 980, textDecoration: "none", fontSize: 15, fontWeight: 500 }}>← Kembali ke Research</Link>
        </div>
      </div>
    );
  }

  const confColor = confidenceColors[report.confidence] || confidenceColors.WEAK;

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif', background: "#f5f5f7", minHeight: "100vh", color: "#1d1d1f" }}>
      <Nav />

      {/* HEADER */}
      <section style={{ paddingTop: 100, paddingBottom: 0, paddingLeft: "max(24px, calc((100vw - 720px)/2))", paddingRight: "max(24px, calc((100vw - 720px)/2))" }}>
        <Link to="/research" style={{ fontSize: 14, color: "#0071e3", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 32 }}>
          ← Semua Laporan
        </Link>

        <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap", alignItems: "center" }}>
          <span style={{ fontSize: 12, fontWeight: 500, background: "#e8f4fd", color: "#0071e3", padding: "4px 12px", borderRadius: 980 }}>{report.topic}</span>
          <span style={{ fontSize: 12, fontWeight: 600, background: confColor.bg, color: confColor.color, padding: "4px 12px", borderRadius: 980 }}>{report.confidence} · {report.confScore}</span>
          <span style={{ fontSize: 12, color: "#6e6e73" }}>{report.readTime} baca</span>
          <span style={{ fontSize: 12, color: "#6e6e73" }}>{report.date}</span>
        </div>

        <h1 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, letterSpacing: "-1.2px", lineHeight: 1.1, margin: "0 0 12px" }}>{report.title}</h1>
        <p style={{ fontSize: 19, color: "#6e6e73", margin: "0 0 48px", lineHeight: 1.5 }}>{report.subtitle}</p>

        {/* EXECUTIVE SUMMARY */}
        <div style={{ background: "#0071e3", borderRadius: 20, padding: "32px 36px", marginBottom: 48 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.7)", letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: 20 }}>Executive Summary</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {report.executiveSummary.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "white", flexShrink: 0, marginTop: 7, opacity: 0.8 }}></div>
                <p style={{ fontSize: 15, color: "white", lineHeight: 1.65, margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RESEARCH QUESTION */}
        <div style={{ background: "white", borderRadius: 16, padding: "24px 28px", marginBottom: 48, border: "0.5px solid rgba(0,0,0,0.08)" }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: "#6e6e73", letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: 10 }}>Research Question</div>
          <p style={{ fontSize: 16, color: "#1d1d1f", lineHeight: 1.6, margin: 0, fontStyle: "italic" }}>"{report.researchQuestion}"</p>
        </div>

        {/* FINDINGS */}
        <h2 style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.6px", margin: "0 0 20px" }}>Temuan & Patterns</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 56 }}>
          {report.findings.map((f, i) => {
            const fc = confidenceColors[f.confidence] || confidenceColors.WEAK;
            return (
              <div key={i} style={{ background: "white", borderRadius: 18, padding: "28px 32px", border: "0.5px solid rgba(0,0,0,0.08)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, marginBottom: 14, flexWrap: "wrap" }}>
                  <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: "#6e6e73" }}>Pattern {String(i + 1).padStart(2, "0")}</span>
                    <span style={{ fontSize: 12, fontWeight: 600, background: fc.bg, color: fc.color, padding: "3px 10px", borderRadius: 980 }}>{f.confidence} · {f.confScore}</span>
                  </div>
                  <span style={{ fontSize: 12, color: "#6e6e73" }}>{f.sources} sumber</span>
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, letterSpacing: "-0.4px", margin: "0 0 10px" }}>{f.pattern}</h3>
                <p style={{ fontSize: 14, color: "#3d3d3f", lineHeight: 1.7, margin: 0 }}>{f.description}</p>
              </div>
            );
          })}
        </div>

        {/* METHODOLOGY CARD */}
        <div style={{ background: "white", borderRadius: 20, padding: "32px 36px", border: "0.5px solid rgba(0,0,0,0.08)", marginBottom: 80 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: "#6e6e73", letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: 24 }}>Methodology Card</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {[
              { label: "Jumlah Sinyal", value: `${report.signals} signals dianalisis` },
              { label: "Periode Pengumpulan", value: report.methodology.period },
              { label: "Metode", value: report.methodology.method },
              { label: "Primary Data", value: report.methodology.primaryData },
            ].map(item => (
              <div key={item.label}>
                <div style={{ fontSize: 12, color: "#6e6e73", marginBottom: 4 }}>{item.label}</div>
                <div style={{ fontSize: 14, fontWeight: 500, lineHeight: 1.5 }}>{item.value}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 24, paddingTop: 20, borderTop: "0.5px solid rgba(0,0,0,0.06)" }}>
            <div style={{ fontSize: 12, color: "#6e6e73", marginBottom: 6 }}>Limitasi</div>
            <p style={{ fontSize: 14, color: "#3d3d3f", lineHeight: 1.65, margin: 0 }}>{report.methodology.limitations}</p>
          </div>
        </div>
      </section>

      <footer style={{ borderTop: "0.5px solid rgba(0,0,0,0.1)", padding: "24px max(24px, calc((100vw - 980px)/2))" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontSize: 13, color: "#6e6e73" }}>Foresight Intelligence System v2.1</span>
          <span style={{ fontSize: 13, color: "#6e6e73" }}>Bandung, Indonesia · 2026</span>
        </div>
      </footer>
    </div>
  );
}