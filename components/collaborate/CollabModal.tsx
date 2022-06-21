import { NextRouter, useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import BasicInput from "../basic/BasicInput";
import { Modal, ModalBody } from "../basic/BasicModal";
import { AppContext } from "../hooks/AppContext.hook";
import { AiOutlineClose as Close } from "react-icons/ai";

export default function CollabModal() {
  const navigate: NextRouter = useRouter();

  const { display, setDisplay } = useContext(AppContext);

  const [error, setError] = useState(false);

  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <Modal>
      <ModalBody
        open={display}
        setOpen={setDisplay}
        navigate={navigate}
        className="text-[1.3rem] pt-[5.3rem] pb-[8.7rem]"
      >
        <div className="py-[2.5rem] border-b border-[rgba(7,_7,_7,_0.39)] flex justify-between items-center mb-[4.1rem]">
          <div
            className={"rounded-[.5rem] text-[1.4rem] w-[80%] font-semibold"}
          >
            What kind of project do you want to build?
          </div>
          <button
            id="navMenuClose"
            onClick={() => {
              setDisplay({ ...display, modal: false });
              navigate.push("/home");
            }}
          >
            <Close size={"2rem"} className="text-[#565353]" />
          </button>
        </div>
        <BasicInput
          className="py-[.9rem] !border-b mb-[4.1rem]"
          inputStyles="bg-[#F1F1F1]"
          placeholder="Fullname"
        />
        <BasicInput
          className="py-[.9rem] !border-b mb-[4.1rem]"
          inputStyles="bg-[#F1F1F1]"
          placeholder="Email Address"
        />
        <BasicInput
          className="py-[.9rem] !border-b mb-[4.1rem]"
          inputStyles="bg-[#F1F1F1]"
          placeholder="Type of Project"
        />
        <BasicInput
          className="py-[.9rem] !border-b mb-[6.9rem]"
          inputStyles="bg-[#F1F1F1]"
          placeholder="Project Description"
        />
        <button
          onClick={() => {
            setError(true);
            setSeconds(5);
          }}
          className={`ml-[.9rem] px-[1.4rem] py-[.7rem] rounded-[.5rem] text-[1.1rem] border border-[#070707] bg-[#D4D4D4] !cursor-pointer `}
        >
          Send Request
        </button>
        {error && seconds > 0 && (
          <div className="ml-4 mt-6 font-semibold text-[1.4rem]">
            ** Currently under development
          </div>
        )}
      </ModalBody>
    </Modal>
  );
}
