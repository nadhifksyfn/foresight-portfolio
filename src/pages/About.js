import { Link } from "react-router-dom";
import Nav from "../components/Nav";

export default function About() {
  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif', background: "#f5f5f7", minHeight: "100vh", color: "#1d1d1f" }}>
      <Nav />

      <section style={{ paddingTop: 120, paddingBottom: 80, paddingLeft: "max(24px, calc((100vw - 980px)/2))", paddingRight: "max(24px, calc((100vw - 980px)/2))" }}>
        <span style={{ fontSize: 13, fontWeight: 500, color: "#0071e3", letterSpacing: "0.5px", textTransform: "uppercase" }}>Tentang</span>
        <h1 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, letterSpacing: "-1.5px", margin: "12px 0 40px", lineHeight: 1.1 }}>
          Satu orang.<br />Satu sistem.<br />Banyak pertanyaan.
        </h1>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "start", marginBottom: 40 }}>
          <div style={{ background: "white", borderRadius: 20, padding: "36px 40px", border: "0.5px solid rgba(0,0,0,0.08)" }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 16px" }}>Latar Belakang</h2>
            <p style={{ fontSize: 15, color: "#3d3d3f", lineHeight: 1.75, margin: "0 0 16px" }}>
              Fresh graduate dari Bandung yang membangun sistem riset konsumen berbasis AI — untuk membuktikan bahwa rigor metodologi dan kecepatan analisis bisa berjalan beriringan.
            </p>
            <p style={{ fontSize: 15, color: "#3d3d3f", lineHeight: 1.75, margin: 0 }}>
              Fokus pada pasar FMCG dan beauty Indonesia. Semua kode, metodologi, dan data tersedia publik untuk diverifikasi. Setiap klaim dalam laporan dapat ditelusuri ke sumbernya.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { label: "Target", value: "Paragon Corp & Tier-1 Research Firms" },
              { label: "Timeline", value: "90 hari · 12 laporan" },
              { label: "Stack", value: "Python · SQLite · React · Vercel" },
              { label: "AI Engine", value: "Gemini Flash + Claude Haiku" },
              { label: "Fokus", value: "Consumer Foresight — FMCG, Beauty, Digital Behavior" },
              { label: "Lokasi", value: "Bandung, Indonesia" },
            ].map(item => (
              <div key={item.label} style={{ background: "white", borderRadius: 14, padding: "14px 20px", border: "0.5px solid rgba(0,0,0,0.08)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 14, color: "#6e6e73" }}>{item.label}</span>
                <span style={{ fontSize: 14, fontWeight: 500 }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Research Roadmap */}
        <div style={{ background: "white", borderRadius: 20, padding: "36px 40px", border: "0.5px solid rgba(0,0,0,0.08)", marginBottom: 24 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 8px" }}>Research Roadmap — Year 1</h2>
          <p style={{ fontSize: 14, color: "#6e6e73", margin: "0 0 28px" }}>12 laporan, 4 kuartal, 1 program riset yang intentional.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
            {[
              { q: "Q1", theme: "Beauty & Personal Care", status: "active", reports: "3 laporan" },
              { q: "Q2", theme: "FMCG & Daily Consumption", status: "planned", reports: "3 laporan" },
              { q: "Q3", theme: "Digital Consumer Behavior", status: "planned", reports: "3 laporan" },
              { q: "Q4", theme: "Consumer Futures", status: "planned", reports: "3 laporan + Annual Review" },
            ].map(q => (
              <div key={q.q} style={{ background: q.status === "active" ? "#e8f4fd" : "#f5f5f7", borderRadius: 14, padding: "20px", border: q.status === "active" ? "0.5px solid #0071e3" : "0.5px solid rgba(0,0,0,0.06)" }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: q.status === "active" ? "#0071e3" : "#6e6e73", marginBottom: 6 }}>{q.q} {q.status === "active" ? "· AKTIF" : "· PLANNED"}</div>
                <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>{q.theme}</div>
                <div style={{ fontSize: 13, color: "#6e6e73" }}>{q.reports}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: "#0071e3", borderRadius: 20, padding: "36px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
          <div>
            <div style={{ fontSize: 20, fontWeight: 700, color: "white", marginBottom: 8 }}>Tertarik berkolaborasi atau merekrut?</div>
            <div style={{ fontSize: 15, color: "rgba(255,255,255,0.8)" }}>Lihat laporan pertama sebagai bukti kerja.</div>
          </div>
          <Link to="/research" style={{ background: "white", color: "#0071e3", padding: "14px 28px", borderRadius: 980, fontSize: 15, fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap" }}>
            Lihat Research →
          </Link>
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