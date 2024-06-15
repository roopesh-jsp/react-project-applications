import { useState, useRef } from "react";
import "./stepper.css";
import { useEffect } from "react";

export default function ({ data }) {
  const [stepIndex, setStepIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [margins, setMargins] = useState({
    leftMArgin: 0,
    rightMArgin: 0,
  });
  const stepRef = useRef([]);
  useEffect(() => {
    setMargins({
      leftMArgin: stepRef.current[0].offsetWidth / 2,
      rightMArgin: stepRef.current[data.length - 1].offsetWidth / 2,
    });
  }, [stepRef, data.length]);
  function handleNext() {
    if (stepIndex < data.length) {
      setStepIndex((prev) => prev + 1);
    }
  }
  function progressCal() {
    return (stepIndex / (data.length - 1)) * 100;
  }
  function marginCal() {
    return 100 - (margins.leftMArgin + margins.rightMArgin);
  }
  console.log(margins);
  return (
    <>
      <div className="stepper">
        <div
          className="progress-bar"
          //   style={{
          //     width: `calc(100% - ${
          //       margins.leftMArgin + margins.rightMArgin
          //     }px))`,
          //     width: `${marginCal()}%`,
          //     marginLeft: margins.leftMArgin,
          //     marginRight: margins.rightMArgin,
          //   }}
        >
          <div
            className="progress"
            style={{
              width: `${progressCal()}%`,
            }}
          ></div>
        </div>
        {data.map((step, idx) => (
          <div
            className="step"
            ref={(el) => (stepRef.current[idx] = el)}
            key={step.name}
          >
            <div
              className={`step-number ${
                stepIndex > idx || isCompleted ? "step-completed" : ""
              } ${stepIndex === idx ? "step-active " : ""}`}
            >
              {stepIndex > idx || isCompleted ? <span>&#10003;</span> : idx + 1}
            </div>
            <div className="step-name">{step.name}</div>
          </div>
        ))}
      </div>
      {stepIndex < data.length && <h4>{data[stepIndex].descripton}</h4>}
      <button onClick={handleNext}>
        {stepIndex < data.length - 1 ? "next" : "finish"}
      </button>
    </>
  );
}
