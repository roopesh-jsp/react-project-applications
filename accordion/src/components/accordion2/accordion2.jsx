import { createContext, useState } from "react";
export const accordionContext = createContext();
export default function Accordion2({ children, className }) {
  const [openId, setOpenId] = useState(null);
  function handleOpen(id) {
    setOpenId(id);
  }
  function handleClose() {
    setOpenId(null);
  }
  const ctx = {
    openId,
    handleClose,
    handleOpen,
  };
  return (
    <accordionContext.Provider value={ctx}>
      <ul className={className}>{children}</ul>
    </accordionContext.Provider>
  );
}
