import * as React from "react";
import { MdMoreVert as More } from "react-icons/md";
import BasicPopover from "../basic/BasicPopover";

export default function MoreBtn(props: any) {
  return <BasicPopover btn={<More />}>{props.children}</BasicPopover>;
}
