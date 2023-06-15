import React from "react";
import * as _Builtin from "./_Builtin";
import { TrackerButton } from "./TrackerButton";
import * as _utils from "./utils";
import _styles from "./ViewJobCard.module.css";

export function ViewJobCard({
  as: _Component = _Builtin.Block,
  header = "IP Verification expert really Long IP Verification expert",
  tag2 = "Herzliya, Israel",
  tag1 = "Apple",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "view-job-card-wrapper")}
      tag="div"
    >
      <_Builtin.Heading tag="h4">{header}</_Builtin.Heading>
      <_Builtin.Block
        className={_utils.cx(_styles, "job-card-tag-wrapper")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "job-card-tag-text")}
          tag="div"
        >
          {tag1}
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "text-block")} tag="div">
          {tag2}
        </_Builtin.Block>
      </_Builtin.Block>
      <TrackerButton />
    </_Component>
  );
}
