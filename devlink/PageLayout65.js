import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./PageLayout65.module.css";

export function PageLayout65({ as: _Component = _Builtin.Block, left, right }) {
  return (
    <_Component className={_utils.cx(_styles, "left-sidebar-layout")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "container-1280")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "slots")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "slot-65--left")}
            tag="div"
          >
            {left}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "slot-35--right")}
            tag="div"
          >
            {right}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "bg-half-grey-inside")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "_65--white")}
            tag="div"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "_35-grey")}
            tag="div"
          />
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
