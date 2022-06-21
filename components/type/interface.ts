import { NextRouter } from "next/router";

//Basic

export interface IBasicButton {
  className?: string;
  id?: string;
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  bgColor?: string;
  textColor?: string;
  fontSize?: string;
  padding?: string;
  radius?: string;
  fontWeight?: string;
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface IBasicTextArea {
  className?: string;
  id?: string;
  cols?: number;
  rows?: number;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  onClick?: React.MouseEventHandler<HTMLTextAreaElement>;
}

export interface IBasicInput {
  className?: string;
  id?: string;
  startIcon?: React.ReactNode;
  inputStyles?: string;
  defaultValue?: string;
  value?: string;
  placeholder?: string;
  type?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  readOnly?: boolean;
  endIcon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLInputElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLInputElement>;
}

export interface IBasicSelect {
  className?: string;
  id?: string;
  name?: string;
  multiple?: boolean;
  size?: number;
  itemData: [];
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  onClick?: React.MouseEventHandler<HTMLSelectElement>;
}

//modal

export interface IBasicModal {
  children: React.ReactNode;
}

export interface IBasicModalBtn {
  children: React.ReactNode;
  open: { modal: boolean };
  setOpen: React.Dispatch<
    React.SetStateAction<{
      modal: boolean;
    }>
  >;
}

export interface IBasicModalBody {
  className?: string | undefined;
  children: React.ReactNode;
  open: { modal: boolean };
  setOpen: React.Dispatch<
    React.SetStateAction<{
      modal: boolean;
    }>
  >;
  navigate: NextRouter;
}

export interface IBasicModalContent {
  className?: string | undefined;
  children: React.ReactNode;
}

//hero section

export interface ISocials {
  link: {
    Twitter: string;
    Linkedin: string;
    Github: string;
  };
}

//custom

export interface IToggle {
  data: Array<{ link: string; name: string }>;
  toggle: number;
  className: string;
}

export interface ICarousel {
  scrollWidth: number;
  contentStyles: string;
  children: React.ReactNode;
}

//layout

export interface ILayout {
  className: string;
  children: React.ReactNode;
}

//nav

export interface INavSm {
  url: string;
  display: { modal: boolean; navMenu: boolean };
  setDisplay: React.Dispatch<
    React.SetStateAction<{
      modal: boolean;
      navMenu: boolean;
    }>
  >;
  navigate: NextRouter;
}
