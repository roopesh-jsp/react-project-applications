import { useEffect } from "react";
import { useState } from "react";
import Progress11 from "./Progress1.1";

export default function Progress1() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setValue((prev) => prev + 1);
    }, 100);
    return () => {
      if (value > 100) {
        clearInterval(timer);
      }
    };
  }, []);

  return (
    <div id="progress1">
      <Progress11 value={value} />
    </div>
  );
}
