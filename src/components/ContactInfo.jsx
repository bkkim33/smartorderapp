import React from "react";
import { Input } from "./Input"; 

export function ContactInfo() {  
  
  return (
    <>
      <Input type="tel" maxLength={3} width="60px" placeholder=" " slice={3} />
      <span className="mlr_4">-</span>
      <Input type="tel" maxLength={4} width="70px" placeholder=" " slice={4} />
      <span className="mlr_4">-</span>
      <Input type="tel" maxLength={4} width="70px" placeholder=" " slice={4} />
    </>
  );
}

export default ContactInfo;
