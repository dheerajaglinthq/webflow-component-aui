import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./JobCardDashboard.module.css";

export function JobCardDashboard({
  as: _Component = _Builtin.Block,
  slotCompanyLogo,
  jobTitle = "Job Title",
  jobDesc = "Job Location",
  isNew = true,
  onClickJob = {},
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "job-card-component", "on-dashboard")}
      tag="div"
      {...onClickJob}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "company-icon-slot", "small-image")}
        tag="div"
      >
        {slotCompanyLogo}
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "job-card-text")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "job-card-header")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "job-title-wrapper")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "job-title-text",
                "line-clamp-1",
                "one-line-clamp"
              )}
              tag="div"
            >
              {jobTitle}
            </_Builtin.Block>
            {isNew ? (
              <_Builtin.Block
                className={_utils.cx(_styles, "new-tag", "is-static")}
                tag="div"
              >
                <_Builtin.Block tag="div">{"New"}</_Builtin.Block>
              </_Builtin.Block>
            ) : null}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "job-location",
              "line-clamp-1",
              "small-text",
              "one-line-clamp"
            )}
            tag="div"
          >
            {jobDesc}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "job-card-footer")}
          tag="div"
        />
      </_Builtin.Block>
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "hide")}
        value="%3Cstyle%3E%0A.line-clamp-1%20%7B%0A%09display%3A%20-webkit-box%3B%0A%09overflow%3A%20hidden%3B%0A%09-webkit-line-clamp%3A%201%3B%0A%09-webkit-box-orient%3A%20vertical%3B%0A%7D%0A%3C%2Fstyle%3E"
      />
    </_Component>
  );
}
