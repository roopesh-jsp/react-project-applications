import { useState } from "react";

export default function InputChips() {
  const [allInputs, setAllInputs] = useState<string[]>([]);
  const [inputVal, setInputVal] = useState("");
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (inputVal.trim() === "") return;
    setAllInputs((prev) => [...prev, inputVal]);
    setInputVal("");
  }
  function handleDelete(idx: number) {
    console.log(idx);

    setAllInputs((prev) => prev.filter((_, i) => i !== idx));
  }
  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button>Add</button>
      </form>
      <div className="chips">
        {allInputs.map((chip, i) => (
          <div className="chip" key={i}>
            <span> {chip}</span>
            <span onClick={() => handleDelete(i)}>X</span>
          </div>
        ))}
      </div>
    </div>
  );
}
