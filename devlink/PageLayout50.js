import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./PageLayout50.module.css";

export function PageLayout50({
  as: _Component = _Builtin.Block,
  slot50Left,
  slot50Right,
}) {
  return (
    <_Component className={_utils.cx(_styles, "_50--layout")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "container-1280")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "slots")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "slot-50--left")}
            tag="div"
          >
            {slot50Left}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "slot-50--right")}
            tag="div"
          >
            {slot50Right}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "bg-half-grey")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "_50--white")}
          tag="div"
        />
        <_Builtin.Block className={_utils.cx(_styles, "_50--grey")} tag="div" />
      </_Builtin.Block>
    </_Component>
  );
}
