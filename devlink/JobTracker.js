import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./JobTracker.module.css";

export function JobTracker({
  as: _Component = _Builtin.Block,
  slotTracker,
  slotFirstTime,
  slotEmpty,
  isLoading = true,
}) {
  return (
    <_Component className={_utils.cx(_styles, "job-tracker")} tag="div">
      {isLoading ? (
        <_Builtin.Block className={_utils.cx(_styles, "jt-loading")} tag="div">
          <_Builtin.Image
            loading="lazy"
            width="auto"
            height="auto"
            src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/6480817af88d76f4354e68b1_Vector.svg"
          />
        </_Builtin.Block>
      ) : null}
      <_Builtin.Block className={_utils.cx(_styles, "jt-empty")} tag="div">
        <_Builtin.Block className={_utils.cx(_styles, "slot-empty")} tag="div">
          {slotEmpty}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "jt-initial")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "slot-first-time")}
          tag="div"
        >
          {slotFirstTime}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "jt-main")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "slot-tracker")}
          tag="div"
        >
          {slotTracker}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
