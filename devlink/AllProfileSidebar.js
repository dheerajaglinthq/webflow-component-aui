import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./AllProfileSidebar.module.css";

export function AllProfileSidebar({
  as: _Component = _Builtin.Block,
  slotProfileCard,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "sidebar-stack")}
      id={_utils.cx(
        _styles,
        "w-node-f53e763a-e46a-ce25-ff05-c2147c1f50bd-7c1f50bd"
      )}
      tag="div"
    >
      {slotProfileCard ?? (
        <>
          <_Builtin.Block
            className={_utils.cx(_styles, "header-wrap")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "text-xl-bold")}
              tag="div"
            >
              {"All Profiles"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "text-md", "text-color-grey")}
              tag="div"
            >
              {
                "Please find profiles of individuals with similar titles and duties as this job. We are also including profiles for HR and Recruiting individuals whom you may want to network with. Our suggestion is to reach out to a few of these individuals and find out more about this job opportunity before applying for the job."
              }
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "stack-column")}
            tag="div"
          />
        </>
      )}
    </_Component>
  );
}
