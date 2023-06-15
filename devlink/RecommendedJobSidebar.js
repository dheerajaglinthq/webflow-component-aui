import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./RecommendedJobSidebar.module.css";

export function RecommendedJobSidebar({
  as: _Component = _Builtin.Block,
  slotJobListingCard,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "sidebar-stack")}
      id={_utils.cx(
        _styles,
        "w-node-_3a0e83a1-ed2a-61b2-de80-87c859d0d292-59d0d292"
      )}
      tag="div"
    >
      <_Builtin.Block className={_utils.cx(_styles, "header-wrap")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "text-xl-bold")}
          tag="div"
        >
          {"Recommended jobs"}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "text-md", "text-color-grey")}
          tag="div"
        >
          {
            "Discover accurate and relevant job opportunities tailored specifically to your skills and preferences"
          }
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "stack-column")} tag="div">
        {slotJobListingCard}
      </_Builtin.Block>
    </_Component>
  );
}
