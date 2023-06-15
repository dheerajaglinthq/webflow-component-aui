import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./TrackerButton.module.css";

export function TrackerButton({
  as: _Component = _Builtin.Block,
  buttonText = "Add to Tracker",
  buttonIcon = "https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/647ff5fb374a40bef3d73b19_plus.circle.svg",
}) {
  return (
    <_Component className={_utils.cx(_styles, "add-tracker-wrapper")} tag="div">
      <_Builtin.Image
        loading="lazy"
        width="auto"
        height="auto"
        src={buttonIcon}
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "add-tracker-text")}
        tag="div"
      >
        {buttonText}
      </_Builtin.Block>
    </_Component>
  );
}
