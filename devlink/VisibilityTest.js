import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./VisibilityTest.module.css";

export function VisibilityTest({
  as: _Component = _Builtin.Block,
  isShow = true,
  isHide,
}) {
  return (
    <_Component className={_utils.cx(_styles, "test-visibility")} tag="div">
      {isShow ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "blue")}
          id={_utils.cx(
            _styles,
            "w-node-b782fcce-e12c-7319-ba26-1a3364993251-64993250"
          )}
          tag="div"
        />
      ) : null}
      {isShow ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "green")}
          id={_utils.cx(
            _styles,
            "w-node-b782fcce-e12c-7319-ba26-1a3364993252-64993250"
          )}
          tag="div"
          data-isshow={isHide}
        />
      ) : null}
    </_Component>
  );
}
