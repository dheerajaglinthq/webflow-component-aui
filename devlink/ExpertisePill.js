import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ExpertisePill.module.css";

export function ExpertisePill({
  as: _Component = _Builtin.Block,
  text = "Job Search",
}) {
  return (
    <_Component className={_utils.cx(_styles, "expertise")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "small-default-5")}
        tag="div"
      >
        {text}
      </_Builtin.Block>
    </_Component>
  );
}
