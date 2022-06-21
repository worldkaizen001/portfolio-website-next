import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { ISocials } from "../type/interface";

export default function SocialsLinkLg({ link }: ISocials) {
  return (
    <div className="hidden lg:block absolute top-[45%] xl:top-[38%] right-[12%] z-10 ">
      <a
        className="block mb-[2.588rem]"
        target="_blank"
        rel="noopener noreferrer"
        href={link.Twitter}
      >
        <FaTwitter size="2.5rem" color="#fff" />
      </a>
      <a
        className="block mb-[2.588rem]"
        target="_blank"
        rel="noopener noreferrer"
        href={link.Linkedin}
      >
        <FaLinkedin size="2.5rem" color="#fff" />
      </a>
      <a
        className="block "
        target="_blank"
        rel="noopener noreferrer"
        href={link.Github}
      >
        <FaGithub size="2.5rem" color="#fff" />
      </a>
    </div>
  );
}
