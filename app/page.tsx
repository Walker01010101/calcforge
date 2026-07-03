import Link from "next/link";

export default function Home() {
  return (
    <div>

      {/* HERO */}
      <div style={{
        background: "white",
        padding: 24,
        borderRadius: 12,
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
      }}>
        <h1>UK Financial Calculators</h1>
        <p>
          Instantly calculate mortgage and loan repayments with simple, free tools.
        </p>
      </div>

      {/* CARDS */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: 16,
        marginTop: 20
      }}>

        <Link href="/calculators/mortgage" style={{
          background: "white",
          padding: 20,
          borderRadius: 12,
          textDecoration: "none",
          color: "black",
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
        }}>
          <h3>Mortgage Calculator</h3>
          <p>Estimate monthly repayments for UK mortgages.</p>
        </Link>

        <Link href="/calculators/loan" style={{
          background: "white",
          padding: 20,
          borderRadius: 12,
          textDecoration: "none",
          color: "black",
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
        }}>
          <h3>Loan Calculator</h3>
          <p>Calculate personal loan repayments instantly.</p>
        </Link>

      </div>

    </div>
  );
}
