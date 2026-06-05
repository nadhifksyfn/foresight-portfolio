import Nav from "../components/Nav";

const agents = [
  { id: "00", name: "RQ Generator", color: "#0071e3", desc: "Mengubah topik vague menjadi 3–5 research question tajam yang falsifiable dan spesifik. Pipeline diblokir sampai peneliti menyetujui minimal 1 RQ." },
  { id: "01", name: "Signal Scanner", color: "#34c759", desc: "Scrape Google Trends, RSS feed media Indonesia, dan Reddit secara otomatis. Setiap sinyal diklasifikasi: Noise / Weak / Trend / Megatrend / Wild Card." },
  { id: "02", name: "Trend Synthesizer", color: "#ff9f0a", desc: "Mendeteksi pola lintas sumber dengan confidence scoring otomatis. Minimal 3 sumber independen dibutuhkan sebelum pola dideklarasikan." },
  { id: "4A", name: "Critic Agent", color: "#ff453a", desc: "Menantang logika temuan menggunakan model berbeda dari Synthesizer — untuk menghindari self-critique bias. Minimal 3 kritik per laporan." },
  { id: "4B", name: "Fact Checker", color: "#bf5af2", desc: "Verifikasi URL + string matching. Zero LLM — deterministik. Laporan diblokir jika >30% klaim berstatus UNVERIFIED." },
  { id: "05", name: "Report Writer", color: "#0071e3", desc: "Kompilasi semua output yang sudah tervalidasi menjadi laporan terstruktur. Methodology Card otomatis melekat di setiap laporan." },
];

const tiers = [
  { tier: "Tier 1", weight: "1.0", sources: "BPS, Bank Indonesia, Euromonitor, Nielsen, IDX filings, peer-reviewed journals" },
  { tier: "Tier 2", weight: "0.8", sources: "Marketeers, SWA, Bisnis Indonesia, Katadata, press release brand, observasi kompetitif langsung" },
  { tier: "Tier 3", weight: "0.6", sources: "Detik, Kompas, Tempo — harus dikonfirmasi Tier 1 atau 2" },
  { tier: "Tier 4", weight: "0.3", sources: "Reddit, Twitter/X, Kaskus — signal only, bukan sole source" },
  { tier: "Tier 0", weight: "—", sources: "Forum anonim, blog tidak terverifikasi, konten AI sebagai sumber" },
];

export default function Methodology() {
  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif', background: "#f5f5f7", minHeight: "100vh", color: "#1d1d1f" }}>
      <Nav />

      {/* HERO */}
      <section style={{ paddingTop: 120, paddingBottom: 60, paddingLeft: "max(24px, calc((100vw - 980px)/2))", paddingRight: "max(24px, calc((100vw - 980px)/2))" }}>
        <span style={{ fontSize: 13, fontWeight: 500, color: "#0071e3", letterSpacing: "0.5px", textTransform: "uppercase" }}>System Architecture</span>
        <h1 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, letterSpacing: "-1.5px", margin: "12px 0 8px" }}>
          6 agen. 1 pipeline.<br />Nol halusinasi tak terdeteksi.
        </h1>
        <p style={{ fontSize: 17, color: "#6e6e73", margin: "0 0 60px", maxWidth: 520, lineHeight: 1.6 }}>
          Setiap klaim dapat ditelusuri. Setiap angka diverifikasi secara deterministik — tanpa LLM untuk verifikasi fakta.
        </p>

        {/* AGENT GRID */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14, marginBottom: 72 }}>
          {agents.map((a) => (
            <div key={a.id} style={{ background: "white", borderRadius: 18, padding: "24px", border: "0.5px solid rgba(0,0,0,0.08)", display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: a.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "white", flexShrink: 0, letterSpacing: "0.5px" }}>{a.id}</div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 600, letterSpacing: "-0.3px", marginBottom: 6 }}>{a.name}</div>
                <div style={{ fontSize: 13, color: "#6e6e73", lineHeight: 1.6 }}>{a.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CONFIDENCE SCORING */}
        <div style={{ background: "white", borderRadius: 20, padding: "36px 40px", border: "0.5px solid rgba(0,0,0,0.08)", marginBottom: 24 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.6px", margin: "0 0 8px" }}>Confidence Scoring</h2>
          <p style={{ fontSize: 14, color: "#6e6e73", margin: "0 0 28px", lineHeight: 1.6 }}>
            Score = (Σ source weights × diversity bonus) / normalized scale. Diversity Bonus: +20% jika sumber mencakup 3+ tipe. +10% jika ada primary research.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            {[
              { label: "STRONG", range: "≥ 0.70", bg: "#e8fae8", color: "#1a7f37" },
              { label: "EMERGING", range: "0.45 – 0.69", bg: "#fff8e8", color: "#9a6700" },
              { label: "WEAK", range: "< 0.45", bg: "#f2f2f2", color: "#6e6e73" },
            ].map(c => (
              <div key={c.label} style={{ background: c.bg, borderRadius: 14, padding: "16px 20px", flex: 1, minWidth: 140 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: c.color, marginBottom: 4 }}>{c.label}</div>
                <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.8px", color: "#1d1d1f" }}>{c.range}</div>
              </div>
            ))}
          </div>
        </div>

        {/* SOURCE TIERS */}
        <div style={{ background: "white", borderRadius: 20, padding: "36px 40px", border: "0.5px solid rgba(0,0,0,0.08)", marginBottom: 24 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.6px", margin: "0 0 24px" }}>Source Credibility Tiers</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {tiers.map(t => (
              <div key={t.tier} style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: "14px 0", borderBottom: "0.5px solid rgba(0,0,0,0.06)" }}>
                <div style={{ minWidth: 64, fontSize: 13, fontWeight: 700, color: t.tier === "Tier 0" ? "#ff453a" : "#0071e3" }}>{t.tier}</div>
                <div style={{ minWidth: 36, fontSize: 13, fontWeight: 600, color: "#1d1d1f" }}>{t.weight}</div>
                <div style={{ fontSize: 13, color: "#6e6e73", lineHeight: 1.6 }}>{t.sources}</div>
              </div>
            ))}
          </div>
        </div>

        {/* HUMAN CHECKPOINTS */}
        <div style={{ background: "white", borderRadius: 20, padding: "36px 40px", border: "0.5px solid rgba(0,0,0,0.08)" }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.6px", margin: "0 0 24px" }}>Human Judgment Checkpoints</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { n: "01", label: "RQ Approval", desc: "Peneliti menyetujui research question dari Agent 0 sebelum data collection dimulai." },
              { n: "02", label: "Signal Review", desc: "Peneliti meninjau sinyal yang masuk dan memutuskan topik mana yang dikejar." },
              { n: "03", label: "Pattern Validation", desc: "Peneliti menyetujui pola dari Synthesizer sebelum masuk ke pipeline selanjutnya." },
              { n: "04", label: "Final Edit", desc: "Setiap laporan mendapat editing manusia. Peneliti menambahkan konteks lokal dan analytical voice." },
              { n: "05", label: "Publication Decision", desc: "Hanya peneliti yang memutuskan kapan laporan siap dipublikasikan. Tidak ada auto-publishing." },
            ].map(cp => (
              <div key={cp.n} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#0071e3", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "white", flexShrink: 0 }}>{cp.n}</div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 3 }}>{cp.label}</div>
                  <div style={{ fontSize: 14, color: "#6e6e73", lineHeight: 1.6 }}>{cp.desc}</div>
                </div>
              </div>
            ))}
          </div>
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