import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./PastInterview.module.css";

export function PastInterview({
  as: _Component = _Builtin.Block,
  onClickPastInterview = {},
  company = "This is some text inside of a div block.",
  jobTitle = "Job Title",
  isComplete = false,
  slotCompanyAvatar,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "past-interview")}
      tag="div"
      {...onClickPastInterview}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "past-interview-wrap")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "text-lg-bold")}
          tag="div"
        >
          {jobTitle}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "past-interview-company-wrap",
            "div-block-4",
            "div-block-5"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "interview-compant-icon")}
            tag="div"
          >
            {slotCompanyAvatar}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "text-md-bold")}
            tag="div"
          >
            {company}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "interview-badge-wrap")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "interview-status-badge")}
          tag="div"
        >
          {"Incomplete"}
        </_Builtin.Block>
        {isComplete ? (
          <_Builtin.Block
            className={_utils.cx(_styles, "interview-status-badge", "complete")}
            tag="div"
          >
            {"Complete"}
          </_Builtin.Block>
        ) : null}
      </_Builtin.Block>
    </_Component>
  );
}
