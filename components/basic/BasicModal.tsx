import React from "react";

export function Modal(props: any) {
  return <div>{props.children}</div>;
}

export function ModalBtn(props: any) {
  const { open, setOpen } = props;
  return (
    <div
      className="cursor-pointer"
      onClick={() => setOpen({ ...open, modal: true })}
    >
      {props.children}
    </div>
  );
}

export function ModalBody(props: any) {
  const { open, setOpen, className, navigate } = props;
  return (
    open.modal && (
      <div
        className={`fixed z-[1000] left-0 top-0 w-full h-full overflow-auto bg-[rgba(0,0,0,0.75)]`}
        onClick={() => {
          setOpen({ ...open, modal: false });
          navigate.push("/home");
        }}
      >
        <ModalContent className={className}>{props.children}</ModalContent>
      </div>
    )
  );
}

function ModalContent(props: any) {
  const { className } = props;
  return (
    <div
      className={`bg-[#F1F1F1] z-[1001] top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 m-auto max-h-[80%] 2xs:max-h-[90%] min-h-[20rem] p-8 w-full 2xs:w-[41.4rem] fixed overflow-auto rounded-xl ${className}`}
      onClick={(e) => e.stopPropagation()}
    >
      {props.children}
    </div>
  );
}
