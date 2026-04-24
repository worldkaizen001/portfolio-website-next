import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import React from "react";
// import { AppRouterInstance } from "next/navigation";
// 

// import { AppRouterInstance } from "next/navigation";

// =====================
// BASIC COMPONENT TYPES
// =====================

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
  itemData: any[];
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  onClick?: React.MouseEventHandler<HTMLSelectElement>;
}

// =====================
// MODAL TYPES (FIXED)
// =====================

export interface IBasicModal {
  children: React.ReactNode;
}

export interface IBasicModalBtn {
  children: React.ReactNode;
  open: boolean;
  setOpen: (value: boolean) => void;
}

export interface IBasicModalBody {
  className?: string;
  children: React.ReactNode;
  open: boolean;
  setOpen: (value: boolean) => void;
  navigate: AppRouterInstance;
}

export interface IBasicModalContent {
  className?: string;
  children: React.ReactNode;
}

// =====================
// HERO SECTION
// =====================

export interface ISocials {
  link: {
    Twitter: string;
    Linkedin: string;
    Github: string;
  };
}

// =====================
// CUSTOM COMPONENTS
// =====================

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

// =====================
// LAYOUT
// =====================

export interface ILayout {
  className: string;
  children: React.ReactNode;
}

// =====================
// NAVIGATION (FIXED)
// =====================


export interface INavSm {
  display: {
    modal: boolean;
    navMenu: boolean;
  };
  setDisplay: React.Dispatch<
    React.SetStateAction<{
      modal: boolean;
      navMenu: boolean;
    }>
  >;
  url: string;
  navigate: AppRouterInstance;
}