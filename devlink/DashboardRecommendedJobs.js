import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./DashboardRecommendedJobs.module.css";

export function DashboardRecommendedJobs({
  as: _Component = _Builtin.Block,
  slotRecommendedJobs,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "dashboard-right-wrapper-2")}
      id={_utils.cx(
        _styles,
        "w-node-d86d1ee0-324b-8c0d-4002-8e2fce8b4d6b-ce8b4d6b"
      )}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "dashboard-subhead-wrapper")}
        tag="div"
      >
        <_Builtin.Heading tag="h3">{"Recommended Jobs"}</_Builtin.Heading>
        <_Builtin.Block
          className={_utils.cx(_styles, "dashboard-heading-lead-2")}
          tag="div"
        >
          {
            "Discover more relevant and accurate job opportunities tailored to your skills and preferences"
          }
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "all-recommend-job-card")}
        tag="div"
      >
        {slotRecommendedJobs}
      </_Builtin.Block>
    </_Component>
  );
}
