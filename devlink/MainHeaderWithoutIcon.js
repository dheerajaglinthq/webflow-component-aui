import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./MainHeaderWithoutIcon.module.css";

export function MainHeaderWithoutIcon({
  as: _Component = _Builtin.Block,
  header = "Toolbox",
  headerLead = "Our job seeker toolbox includes a cover letter writer, mock interview simulator, resume builder, salary negotiation guide, and email sequence to simplify your job search.",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "dashboard-left-title-wrapper")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "dash-heading-wrapper")}
        tag="div"
      >
        <_Builtin.Heading tag="h2">{header}</_Builtin.Heading>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "dashboard-heading-lead")}
        tag="div"
      >
        {headerLead}
      </_Builtin.Block>
    </_Component>
  );
}
