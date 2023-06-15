import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./GetSalaryRange.module.css";

export function GetSalaryRange({
  as: _Component = _Builtin.Block,
  slotSalary,
  isLoading,
}) {
  return (
    <_Component className={_utils.cx(_styles, "job-salary-wrap")} tag="div">
      {isLoading ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "salary-loading")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "text-lg-bold")}
            tag="div"
          >
            {"Loading the salary for you..."}
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
      <_Builtin.Block tag="div">{slotSalary}</_Builtin.Block>
    </_Component>
  );
}
