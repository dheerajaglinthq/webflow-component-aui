import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SidebarHeader.module.css";

export function SidebarHeader({
  as: _Component = _Builtin.Block,
  sidebarTitle = "Sidebar title",
  sidebarDesc = "Sidebar Subtitle",
}) {
  return (
    <_Component className={_utils.cx(_styles, "header-wrap")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "text-xl-bold")} tag="div">
        {sidebarTitle}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "text-md", "text-color-grey")}
        tag="div"
      >
        {sidebarDesc}
      </_Builtin.Block>
    </_Component>
  );
}
