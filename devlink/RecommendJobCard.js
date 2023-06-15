import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./RecommendJobCard.module.css";

export function RecommendJobCard({
  as: _Component = _Builtin.Block,
  header = "Senior Hardware Cloud Engineer",
  tag2 = "Rocklin, CA, US",
  tag1 = "Verzon",
  image = "https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/647ff5fb374a40bef3d73b1b_Frame%20430.svg",
}) {
  return (
    <_Component className={_utils.cx(_styles, "recommend-job-card")} tag="div">
      <_Builtin.Image loading="lazy" width="auto" height="auto" src={image} />
      <_Builtin.Block tag="div">
        <_Builtin.Heading tag="h4">{header}</_Builtin.Heading>
        <_Builtin.Block
          className={_utils.cx(_styles, "job-card-tag-wrapper")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "job-card-tag-text", "semi-bold")}
            tag="div"
          >
            {tag1}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "job-card-tag-text")}
            tag="div"
          >
            {tag2}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
