import React, { useState } from "react";
import PropTypes from "prop-types";
import { Input } from "./Input"; 

ContactInfo.propTypes = {
  onSave: PropTypes.func.isRequired,
};

ContactInfo.defaultProps = {};

export function ContactInfo({ onSave }) {

  const [phonePart1, setPhonePart1] = useState("");
  const [phonePart2, setPhonePart2] = useState("");
  const [phonePart3, setPhonePart3] = useState("");

  const handlePhonePart1Change = (e) => {
    const numericValue = e.target.value.replace(/\D/g, ""); 
    setPhonePart1(numericValue.slice(0, 3));
  };

  const handlePhonePart2Change = (e) => {
    const numericValue = e.target.value.replace(/\D/g, "");
    setPhonePart2(numericValue.slice(0, 4)); 
  };

  const handlePhonePart3Change = (e) => {
    const numericValue = e.target.value.replace(/\D/g, "");
    setPhonePart3(numericValue.slice(0, 4)); 
  };

  return (
    <>
      <Input
        type="tel"
        maxLength="3"
        width="60px"
        value={phonePart1}
        onChange={handlePhonePart1Change}
        placeholder=" "
      />
      <span className="mlr_4">-</span>
      <Input
        type="tel"
        maxLength="4"
        width="70px"
        value={phonePart2}
        onChange={handlePhonePart2Change}
        placeholder=" "
      />
      <span className="mlr_4">-</span>
      <Input
        type="tel"
        maxLength="4"
        width="70px"
        value={phonePart3}
        onChange={handlePhonePart3Change}
        placeholder=" "
      />
    </>
  );
}

export default ContactInfo;
