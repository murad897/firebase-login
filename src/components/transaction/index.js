import React, { useState, useEffect } from "react";
import { useFirestore } from "../../hooks/UseFirestore";

const TransactionForm = ({ uid }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const { addDocument, state } = useFirestore("transactions");

  const handleSubmit = (e) => {
    e.preventDefault();
    addDocument({
      uid,
      name,
      amount,
    });
  };

  useEffect(() => {
    if (state.success) {
      setName("");
      setAmount("");
    }
  }, [state.success]);

  return (
    <div>
      <h3>Add transaction</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span style={{ color: " white" }}>transaction name :</span>
          <input
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span style={{ color: " white" }}>Amount ($) :</span>
          <input
            type="number"
            required
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
        </label>
        <button>Add transaction</button>
      </form>
    </div>
  );
};

export default TransactionForm;
