import { useRouter } from "next/router";
import React, { useContext } from "react";
import BasicInput from "../basic/BasicInput";
import { Modal, ModalBody } from "../basic/BasicModal";
import { AppContext } from "../hooks/AppContext.hook";
import { AiOutlineClose as Close } from "react-icons/ai";

export default function CollabModal() {
  const navigate = useRouter();

  const { display, setDisplay } = useContext(AppContext);
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
          defaultValue="Fullname"
        />
        <BasicInput
          className="py-[.9rem] !border-b mb-[4.1rem]"
          inputStyles="bg-[#F1F1F1]"
          defaultValue="Email Address"
        />
        <BasicInput
          className="py-[.9rem] !border-b mb-[4.1rem]"
          inputStyles="bg-[#F1F1F1]"
          defaultValue="heee"
        />
        <BasicInput
          className="py-[.9rem] !border-b mb-[6.9rem]"
          inputStyles="bg-[#F1F1F1]"
          defaultValue="Project Description"
        />
        <button
          onClick={() => navigate.push("/home#talk-to-us")}
          className={`ml-[.9rem] px-[1.4rem] py-[.7rem] rounded-[.5rem] text-[1.1rem] border border-[#070707] bg-[#D4D4D4] !cursor-pointer `}
        >
          Send Request
        </button>
      </ModalBody>
    </Modal>
  );
}
