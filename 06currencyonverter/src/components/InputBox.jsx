import React from "react";

function InputBox() {
  label,
    amount,
    onAmountChange,
    onCurrencyChange,
    (currencyOptions = []),
    (selectedCurrency = "usd"),
    (amountDisabled = false),
    (currencyDisabled = false),
    (className = "");
  return;
  <div className={`bg-white p-3 rounded-lg text-sm flex${className}`}>
    <div className="w-1-2 ">
      <label className="text-black/40 mb-4 inline-block">{label}</label>
      <input
        type="number"
        name=""
        className="outline-none w-full bg-transparent py-1.5"
        id=""
      />
    </div>
  </div>;
}

export default InputBox;
