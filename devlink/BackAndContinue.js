import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./BackAndContinue.module.css";

export function BackAndContinue({
  as: _Component = _Builtin.Block,
  isActivateNextButton = true,
  isSkipButton = true,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "back-continue-wrapper", "max-width-670")}
      tag="div"
    >
      <_Builtin.Link
        className={_utils.cx(_styles, "back-button")}
        button={false}
        options={{
          href: "#",
        }}
      >
        <_Builtin.Image
          loading="lazy"
          width="auto"
          height="auto"
          src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64820ff84e6c35a26e842ad5_Start%20icon%20-%2016px.svg"
        />
        <_Builtin.Block tag="div">{"Back"}</_Builtin.Block>
      </_Builtin.Link>
      <_Builtin.Block className={_utils.cx(_styles, "skip")} tag="div">
        {isSkipButton ? (
          <_Builtin.Link
            className={_utils.cx(_styles, "back-button")}
            button={false}
            options={{
              href: "#",
            }}
          >
            <_Builtin.Block tag="div">{"Skip"}</_Builtin.Block>
          </_Builtin.Link>
        ) : null}
        <_Builtin.Block
          className={_utils.cx(_styles, "button-wrapper-next")}
          tag="div"
        >
          <_Builtin.Link
            className={_utils.cx(_styles, "disabled-button")}
            button={true}
            options={{
              href: "#",
            }}
          >
            {"Continue"}
          </_Builtin.Link>
          {isActivateNextButton ? (
            <_Builtin.Link
              className={_utils.cx(_styles, "active-button")}
              button={true}
              options={{
                href: "#",
              }}
            >
              {"Continue"}
            </_Builtin.Link>
          ) : null}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
