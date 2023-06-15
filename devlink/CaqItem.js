import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CaqItem.module.css";

export function CaqItem({
  as: _Component = _Builtin.Block,
  questionText = "Tell me about yourself",
  numberText = "1.",
  onClickQuestion = {},
  isActive = true,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "questions-item")}
      tag="div"
      {...onClickQuestion}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "z-index-high", "text-large-bold")}
        tag="div"
      >
        {numberText}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "z-index-high", "text-large-bold")}
        tag="div"
      >
        {questionText}
      </_Builtin.Block>
      {isActive ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "active-question")}
          tag="div"
        />
      ) : null}
    </_Component>
  );
}
