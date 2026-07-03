export const metadata = {
  title: "CalcForge - UK Financial Calculators",
  description:
    "Free UK mortgage and loan calculators to estimate monthly repayments instantly.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif", background: "#f5f7fb" }}>
        
        {/* HEADER */}
        <header style={{
          background: "#0f172a",
          color: "white",
          padding: "16px 20px",
          position: "sticky",
          top: 0
        }}>
          <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", justifyContent: "space-between" }}>
            <strong>CalcForge</strong>
            <span style={{ fontSize: 12, opacity: 0.8 }}>
              UK Financial Tools
            </span>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main style={{
          maxWidth: 900,
          margin: "30px auto",
          padding: "0 16px"
        }}>
          {children}
        </main>

        {/* FOOTER */}
        <footer style={{
          marginTop: 60,
          padding: 20,
          textAlign: "center",
          fontSize: 12,
          color: "#666"
        }}>
          © {new Date().getFullYear()} CalcForge • Free UK Calculators
        </footer>

      </body>
    </html>
  );
}
