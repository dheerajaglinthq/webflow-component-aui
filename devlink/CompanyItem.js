import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CompanyItem.module.css";

export function CompanyItem({
  as: _Component = _Builtin.Block,
  onClickCompanyItem = {},
  name = "Microsoft",
  jobTittle = "Software Engineer",
  isActive = true,
  slotCompnayImage,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "company-item")}
      id={_utils.cx(
        _styles,
        "w-node-d8cf4964-a942-6ab2-0b67-bd346f350e50-6f350e50"
      )}
      tag="div"
      {...onClickCompanyItem}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "company-image-wrap")}
        tag="div"
      >
        {slotCompnayImage}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "company-details")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "company-name", "line-clamp-1")}
          tag="div"
          title="ezsxtbh"
        >
          {jobTittle}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "designation-title", "line-clamp-1")}
          tag="div"
        >
          {name}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "card-actions")} tag="div">
        {isActive ? (
          <_Builtin.Block
            className={_utils.cx(_styles, "on-active")}
            tag="div"
          />
        ) : null}
      </_Builtin.Block>
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "hide")}
        value="%3Cstyle%3E%0A.line-clamp-1%20%7B%0A%09display%3A%20-webkit-box%3B%0A%09overflow%3A%20hidden%3B%0A%09-webkit-line-clamp%3A%201%3B%0A%09-webkit-box-orient%3A%20vertical%3B%0A%7D%0A%3C%2Fstyle%3E"
      />
    </_Component>
  );
}
