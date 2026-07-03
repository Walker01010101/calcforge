"use client";

import { useState } from "react";

export default function LoanCalculator() {
  const [amount, setAmount] = useState(5000);
  const [rate, setRate] = useState(7);
  const [months, setMonths] = useState(36);

  const monthly =
    (amount * (rate / 100 / 12)) /
    (1 - Math.pow(1 + rate / 100 / 12, -months));

  return (
    <div style={{ maxWidth: 700, margin: "0 auto" }}>

      <h1>Loan Calculator UK</h1>

      <label>Loan Amount (£)</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />

      <br /><br />

      <label>Interest Rate (%)</label>
      <input
        type="number"
        value={rate}
        onChange={(e) => setRate(Number(e.target.value))}
      />

      <br /><br />

      <label>Term (months)</label>
      <input
        type="number"
        value={months}
        onChange={(e) => setMonths(Number(e.target.value))}
      />

      <h2 style={{ marginTop: 30 }}>
        Monthly Payment: £{monthly.toFixed(2)}
      </h2>

      <div style={{
        marginTop: 30,
        padding: 15,
        border: "1px solid #ccc"
      }}>
        Affiliate / Ads placeholder (we monetise next)
      </div>

    </div>
  );
}
