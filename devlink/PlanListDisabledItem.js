import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./PlanListDisabledItem.module.css";

export function PlanListDisabledItem({
  as: _Component = _Builtin.Block,
  itemText = "Advanced Interview Techniques and Strategies (two 30-min calls)",
}) {
  return (
    <_Component className={_utils.cx(_styles, "", "disabled-text")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "", "disabled-icon")}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "", "vectors-wrapper")}
          loading="lazy"
          width={12}
          height={12}
          src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64844462bbfd41238559d8dc_Vectors-Wrapper.svg"
        />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "medium-default-4", "width-90")}
        tag="div"
      >
        {itemText}
      </_Builtin.Block>
    </_Component>
  );
}
