import React from "react";
import * as _Builtin from "./_Builtin";
import { Loader } from "./Loader";
import * as _utils from "./utils";
import _styles from "./AiGeneratedSalary.module.css";

export function AiGeneratedSalary({
  as: _Component = _Builtin.Block,
  isLoading = true,
  aiContent = "",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "ai-generated-salary")}
      tag="aside"
    >
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "text-md-skeleton",
          "text-color-dark-grey",
          "hide"
        )}
        tag="div"
      >
        {"This is some text inside of a div block."}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "text-md-default")}
        tag="div"
      >
        {aiContent}
      </_Builtin.Block>
      {isLoading ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "loader-absolute", "flex-center")}
          tag="div"
        >
          <Loader />
        </_Builtin.Block>
      ) : null}
    </_Component>
  );
}
