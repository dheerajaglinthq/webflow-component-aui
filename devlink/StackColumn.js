import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./StackColumn.module.css";

export function StackColumn({ as: _Component = _Builtin.Block, slot }) {
  return (
    <_Component className={_utils.cx(_styles, "stack-column")} tag="div">
      {slot}
    </_Component>
  );
}
