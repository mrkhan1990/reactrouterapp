import { useNavigate } from "react-router-dom";

import React from "react";

export default function OrderNavigate() {
  const navigate = useNavigate();
  return (
    <>
      <div>Place Order</div>
      <button
        onClick={() => {
          navigate("/orderConfirm");
        }}
      >
        Order Confirm
      </button>
    </>
  );
}
