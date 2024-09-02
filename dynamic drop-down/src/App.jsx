import React, { useState } from "react";

const countries = [
  {
    name: "south-india",
    states: [
      "andhra pradesh",
      "tamil nadu",
      "kerla",
      "karnataka",
      "odisa",
      "telengana",
    ],
  },
  {
    name: "north-india",
    states: [
      "bihar",
      "haryana",
      "uttar pradesh",
      "himachal pradesh",
      "gujarat",
      "rajasthan",
    ],
  },
];

function App() {
  const [country, setCountry] = useState(null);
  function handleChange(e) {
    setCountry(e.target.value.split(","));
  }
  return (
    <div className="main">
      <h1>choose your country</h1>
      <select onChange={handleChange}>
        {countries.map((item, index) => (
          <option key={item.name} value={item.states}>
            {item.name}
          </option>
        ))}
      </select>
      {country && (
        <select>
          {country.map((item, index) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
