import { useEffect, useState } from "react";

export default function Progress11({ value }) {
  console.log(value);
  const [percent, setPercent] = useState(value);
  useEffect(() => {
    setPercent(Math.min(100, Math.max(0, value)));
  }, [value]);
  return (
    <>
      <h4>progress-1</h4>
      <div className="progress">
        <span>{percent}%</span>
        <div
          style={{
            width: `${percent}%`,
          }}
        ></div>
      </div>
    </>
  );
}
