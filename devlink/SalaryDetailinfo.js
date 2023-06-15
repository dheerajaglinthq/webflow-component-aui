import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SalaryDetailinfo.module.css";

export function SalaryDetailinfo({
  as: _Component = _Builtin.Block,
  max = "4000",
  med = "4000",
  min = "4000",
  source = ".",
  currency = ".",
}) {
  return (
    <_Component className={_utils.cx(_styles, "salary-info-wrap")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "salary-info-header")}
        tag="div"
      >
        <_Builtin.Block tag="div">{source}</_Builtin.Block>
        <_Builtin.Block tag="div">{currency}</_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "salary-info")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "salary-info-content")}
          tag="div"
        >
          <_Builtin.Block tag="div">{"Maximum"}</_Builtin.Block>
          <_Builtin.Block tag="div">{max}</_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "salary-info-content")}
          tag="div"
        >
          <_Builtin.Block tag="div">{"Medium"}</_Builtin.Block>
          <_Builtin.Block tag="div">{med}</_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "salary-info-content")}
          tag="div"
        >
          <_Builtin.Block tag="div">{"Minimum"}</_Builtin.Block>
          <_Builtin.Block tag="div">{min}</_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
