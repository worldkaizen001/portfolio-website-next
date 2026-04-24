import React from "react";
import {
  IBasicModal,
  IBasicModalBody,
  IBasicModalBtn,
  IBasicModalContent,
} from "../type/interface";

export function Modal(props: IBasicModal) {
  return <div>{props.children}</div>;
}

export function ModalBtn(
  props: IBasicModalBtn
): React.ReactElement<any, any> | any {
  const { setOpen, children } = props;

  return (
    <div className="cursor-pointer" onClick={() => setOpen(true)}>
      {children}
    </div>
  );
}

export function ModalBody(
  props: IBasicModalBody
): React.ReactElement<any, any> | any {
  const { open, setOpen, className, navigate, children } = props;

  if (!open) return null;

  return (
    <div className="fixed z-[1000] inset-0">
      <div
        className="fixed inset-0 bg-[rgba(0,0,0,0.75)]"
        onClick={() => {
          setOpen(false);
          navigate.push("/home");
        }}
      />

      <ModalContent className={className}>
        {children}
      </ModalContent>
    </div>
  );
}

function ModalContent(props: IBasicModalContent) {
  const { className, children } = props;

  return (
    <div
      className={`modal-body bg-[#F1F1F1] z-[1001] top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 m-auto max-h-[80%] 2xs:max-h-[90%] min-h-[20rem] p-8 w-full 2xs:w-[41.4rem] fixed overflow-auto rounded-xl ${className}`}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
}