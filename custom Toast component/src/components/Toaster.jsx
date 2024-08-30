import React, { useEffect } from "react";
import Toast from "./Toast";

export default function Toaster({ toasts, setToast }) {
  function removeToast(id) {
    const updatedToasts = toasts.filter((toast) => toast.id !== id);
    setToast(updatedToasts);
  }
  function handleToast() {
    const updatedToasts = toasts.filter((toast) => toast.expiry >= Date.now());
    setToast(updatedToasts);
  }
  useEffect(() => {
    const interval = setInterval(() => {
      if (toasts.length) {
        removeToast(toasts[0].id);
        // handleToast();
      }
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [toasts]);
  return (
    <div className="toaster">
      {toasts.map((toast, idx) => {
        return (
          <Toast
            key={idx}
            list={toasts}
            toast={toast}
            removeToast={removeToast}
            setList={setToast}
          />
        );
      })}
    </div>
  );
}
