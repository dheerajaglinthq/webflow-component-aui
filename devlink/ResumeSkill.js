import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ResumeSkill.module.css";

export function ResumeSkill({
  as: _Component = _Builtin.Block,
  skill = "skill",
}) {
  return (
    <_Component className={_utils.cx(_styles, "key-skill-text")} tag="div">
      {skill}
    </_Component>
  );
}
