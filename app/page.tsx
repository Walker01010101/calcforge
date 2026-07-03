import Link from "next/link";

export default function Home() {
  return (
    <div style={{ maxWidth: 700, margin: "0 auto" }}>
      
      <h1>CalcForge</h1>
      <p>Free UK financial calculators for loans, mortgages, and savings.</p>

      <h2>Calculators</h2>

      <ul>
        <li>
          <Link href="/calculators/mortgage">
            Mortgage Calculator
          </Link>
        </li>

        <li>
          <Link href="/calculators/loan">
            Loan Calculator
          </Link>
        </li>
      </ul>

      <p style={{ marginTop: 40, fontSize: 12 }}>
        Simple tools to estimate repayments instantly.
      </p>

    </div>
  );
}
