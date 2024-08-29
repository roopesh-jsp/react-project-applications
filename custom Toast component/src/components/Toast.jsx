import React, { useEffect } from "react";

export default function Toast({ toast, removeToast, list, setList }) {
  //   useEffect(() => {
  //     setTimeout(() => {
  //       const updatedToasts = list.filter((t) => {
  //         console.log(t);

  //         return t.id !== toast.id;
  //       });

  //       setList(updatedToasts);
  //     }, toast.expiry - toast.id);
  //   }, []);
  return (
    <div
      className="toast"
      style={{
        backgroundColor: `${toast.type == "sucess" ? "green" : "red"}`,
      }}
    >
      <span onClick={() => removeToast(toast.id)}>X</span>
      <h1>{toast.heading}</h1>
      <p>{toast.msg}</p>
    </div>
  );
}
