import React from "react";

const CustomInput = ({
  type = "text",
  placeholder = "",
  inputColor = "#fff",
  placeholderColor = "#ccc",
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="custom-input"
      style={{
        backgroundColor: inputColor,
        color: "#000",
        border: "none",
        padding: "10px 15px",
        outline: "none",
        fontSize: "16px",
        width: "100%",
        "::placeholder": {
          color: placeholderColor,
        },
      }}
    />
  );
};

export default CustomInput;
