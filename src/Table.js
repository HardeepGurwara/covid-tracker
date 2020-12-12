import React from "react";
import "./Table.css";
import numeral from "numeral";
function Table({ countries }) {
  return (
    <div className="table">
      {countries.map((country) => (
        <tr>
          <td>{country.country}</td>
          <td>{numeral(country.cases).format("")}</td>
        </tr>
      ))}
    </div>
  );
}

export default Table;
