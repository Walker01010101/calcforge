export const metadata = {
  title: "CalcForge",
  description: "Free UK financial calculators for mortgages and loans",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Arial", margin: 0, padding: 20 }}>
        <header style={{ marginBottom: 30 }}>
          <h1>CalcForge</h1>
          <p>Simple UK financial calculators</p>
        </header>

        {children}
      </body>
    </html>
  );
}
