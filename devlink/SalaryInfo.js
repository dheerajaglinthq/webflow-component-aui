import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SalaryInfo.module.css";

export function SalaryInfo({
  as: _Component = _Builtin.Block,
  rowHeading = "Maximum",
  pay = "4000",
}) {
  return (
    <_Component className={_utils.cx(_styles, "salary-info-content")} tag="div">
      <_Builtin.Block tag="div">{rowHeading}</_Builtin.Block>
      <_Builtin.Block tag="div">{pay}</_Builtin.Block>
    </_Component>
  );
}
