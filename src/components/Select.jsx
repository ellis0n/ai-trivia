import React, { useState } from "react";
import axios from "axios";

const Select = ({ onSelect, values, id, btn_text }) => {
  const [selected, setSelected] = useState("");
  console.log(selected);

  const handleSubmit = async (event) => {
    console.log(selected);
    event.preventDefault();
    onSelect(selected);
  };

  return (
    <div className="topic-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="topic">Pick a topic:</label>

        <select id={id} name={id} onChange={(e) => setSelected(e.target.value)}>
          {values.map((value) => (
            <option key={value} value={value}>
              {value.toUpperCase()}
            </option>
          ))}
        </select>
        <button className="submit" type="submit">
          {btn_text}
        </button>
      </form>
    </div>
  );
};

export default Select;
