import React from "react";

import './option.css'

export default function Option({ text, onClick }) {
   return (
      <div className='button' onClick={onClick}>{text}</div>
   )
}