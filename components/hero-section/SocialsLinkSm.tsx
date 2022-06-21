import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { ISocials } from "../type/interface";

export default function SocialsLinkSm({ link }: ISocials) {
  return (
    <div className="flex lg:hidden absolute bottom-[7%] sm:bottom-[6%] md:bottom-[8%] right-[9%]  z-10 ">
      <a
        className="block mr-[1.6rem]"
        target="_blank"
        rel="noopener noreferrer"
        href={link.Twitter}
      >
        <FaTwitter size="1.8rem" color="#fff" />
      </a>
      <a
        className="block mr-[1.6rem]"
        target="_blank"
        rel="noopener noreferrer"
        href={link.Linkedin}
      >
        <FaLinkedin size="1.8rem" color="#fff" />
      </a>
      <a
        className="block "
        target="_blank"
        rel="noopener noreferrer"
        href={link.Github}
      >
        <FaGithub size="1.8rem" color="#fff" />
      </a>
    </div>
  );
}
