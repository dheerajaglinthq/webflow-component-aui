import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SuggestSkills.module.css";

export function SuggestSkills({
  as: _Component = _Builtin.Block,
  onClickSkills = {},
}) {
  return (
    <_Component className={_utils.cx(_styles, "suggested-skill")} tag="div">
      <_Builtin.Block tag="div" {...onClickSkills}>
        {"This is some text inside of a div block."}
      </_Builtin.Block>
    </_Component>
  );
}
