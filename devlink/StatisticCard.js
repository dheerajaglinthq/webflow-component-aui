import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./StatisticCard.module.css";

export function StatisticCard({
  as: _Component = _Builtin.Block,
  title = "Job Statistic",
}) {
  return (
    <_Component className={_utils.cx(_styles, "statistic-card")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "statistic-header", "text-lg-bold")}
        tag="div"
      >
        {title}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "statistic-content-wrap")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "statistic-content")}
          tag="div"
        />
      </_Builtin.Block>
    </_Component>
  );
}
