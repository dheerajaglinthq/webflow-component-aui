import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./PlanList.module.css";

export function PlanList({
  as: _Component = _Builtin.Block,
  slotCurrentPlan,
  slotUpgradeablePlan,
  isUpgradeablePlans = true,
  onClickUpgrade = {},
}) {
  return (
    <_Component className={_utils.cx(_styles, "plan-list")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "currentplan")} tag="div">
        <_Builtin.Block className={_utils.cx(_styles, "frame-682")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "medium-default")}
            tag="div"
          >
            {"Current Plan "}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "", "currentplan")}
          tag="div"
        >
          {slotCurrentPlan}
        </_Builtin.Block>
      </_Builtin.Block>
      {isUpgradeablePlans ? (
        <_Builtin.Block className={_utils.cx(_styles, "frame-684")} tag="div">
          <_Builtin.Block className={_utils.cx(_styles, "frame-686")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "frame-685")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "", "vectors-wrapper")}
                loading="lazy"
                width={12}
                height={12}
                src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/6484446163f090818b99d420_Vectors-Wrapper.svg"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "", "medium-default")}
                tag="div"
              >
                {"Upgrage to unlock"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "upgrade-button")}
              tag="div"
              {...onClickUpgrade}
            >
              <_Builtin.Block tag="div">{"Upgrade Now"}</_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "", "disabledplan")}
            tag="div"
          >
            {slotUpgradeablePlan}
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
    </_Component>
  );
}
