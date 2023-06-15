import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./TonePill.module.css";

export function TonePill({
  as: _Component = _Builtin.Block,
  isActive = true,
  text = "Improve writing",
  onClickTone = {},
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "tone-pill")}
      tag="div"
      {...onClickTone}
    >
      <_Builtin.Block className={_utils.cx(_styles, "pill-text")} tag="div">
        {text}
      </_Builtin.Block>
      {isActive ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "active-pill")}
          tag="div"
        />
      ) : null}
    </_Component>
  );
}
