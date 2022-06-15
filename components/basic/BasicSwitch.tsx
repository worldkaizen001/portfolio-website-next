import React from "react";
import { useState } from "react";
// import { Switch } from "@headlessui/react";

export default function BasicSwitch() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div>haha</div>
    // <Switch
    //   checked={enabled}
    //   onChange={setEnabled}
    //   className={`${
    //     enabled ? "bg-[#FF9393]" : "bg-gray-200"
    //   } relative inline-flex items-center h-8 rounded-full w-14`}
    // >
    //   <span className="sr-only">Enable Exchange</span>
    //   <span
    //     className={`${
    //       enabled ? "translate-x-7" : "translate-x-1"
    //     } inline-block w-6 h-6 transform bg-white rounded-full`}
    //   />
    // </Switch>
  );
}
