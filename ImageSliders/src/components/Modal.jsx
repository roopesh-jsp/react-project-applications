import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
export const Modal = forwardRef(function Modal({}, ref) {
  const newRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        newRef.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={newRef}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus harum qui
        est molestiae nostrum laborum, quas veniam recusandae, assumenda, nemo
        ad! Porro illum dignissimos enim odit asperiores saepe quas labore.
      </p>
      <form method="dialog">
        <button>close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});
export default Modal;
