import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SkillComponent.module.css";

export function SkillComponent({
  as: _Component = _Builtin.Block,
  onClickClose = {},
  name = "This is some text inside of a div block.",
}) {
  return (
    <_Component className={_utils.cx(_styles, "skill-comp")} tag="div">
      <_Builtin.Block tag="div">{name}</_Builtin.Block>
      <_Builtin.Block tag="div" {...onClickClose}>
        {"Close"}
      </_Builtin.Block>
    </_Component>
  );
}
