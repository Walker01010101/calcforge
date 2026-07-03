"use client";

import { useState } from "react";

export default function MortgageCalculator() {
  const [amount, setAmount] = useState(200000);
  const [rate, setRate] = useState(5);
  const [years, setYears] = useState(25);

  const monthly =
    (amount * (rate / 100 / 12)) /
    (1 - Math.pow(1 + rate / 100 / 12, -years * 12));

  return (
    <div style={{ maxWidth: 700, margin: "0 auto" }}>
      
      <h1>Mortgage Calculator UK</h1>

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

      <label>Term (years)</label>
      <input
        type="number"
        value={years}
        onChange={(e) => setYears(Number(e.target.value))}
      />

      <h2 style={{ marginTop: 30 }}>
        Monthly Payment: £{monthly.toFixed(2)}
      </h2>

      <div style={{
        marginTop: 30,
        padding: 15,
        border: "1px solid #ccc"
      }}>
        Affiliate / Ad space (we will monetise this next)
      </div>

    </div>
  );
}
