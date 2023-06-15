import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./DashboardMainHeader.module.css";

export function DashboardMainHeader({
  as: _Component = _Builtin.Block,
  heading = "Welcome John Snow!",
  headingLead = "Let's get started! Transform your career transition journey with these recommended steps.",
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
        <_Builtin.Heading tag="h2">{heading}</_Builtin.Heading>
        <_Builtin.Image
          loading="lazy"
          width="auto"
          height="auto"
          src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/647ff5fb374a40bef3d73b0f_hands.clap.svg"
        />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "dashboard-heading-lead")}
        tag="div"
      >
        {headingLead}
      </_Builtin.Block>
    </_Component>
  );
}
