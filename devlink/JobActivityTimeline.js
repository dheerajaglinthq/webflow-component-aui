import React from "react";
import * as _Builtin from "./_Builtin";
import { JobActivityItem } from "./JobActivityItem";
import * as _utils from "./utils";
import _styles from "./JobActivityTimeline.module.css";

export function JobActivityTimeline({
  as: _Component = _Builtin.Block,
  slotJobActivityCard,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "job-activity-timeline-wrap")}
      tag="div"
    >
      <_Builtin.Block className={_utils.cx(_styles, "header-wrap")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "text-xl-bold")}
          tag="div"
        >
          {"Job Activity Timeline"}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "text-md-default", "text-color-grey")}
          tag="div"
        >
          {
            "Get an overview of all your job-related activities in a clear and concise timeline view."
          }
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "job-activity-stack")}
        tag="div"
      >
        {slotJobActivityCard ?? (
          <>
            <JobActivityItem />
            <JobActivityItem />
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "hide")}
              value="%3Cstyle%3E%0A.job-activity-item-wrap%3Anth-last-child(2)%20.job-activity-item-separator%7B%0Adisplay%3Anone%3B%0A%7D%0A%3C%2Fstyle%3E"
            />
          </>
        )}
      </_Builtin.Block>
    </_Component>
  );
}
