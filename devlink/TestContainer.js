import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./TestContainer.module.css";

export function TestContainer({ as: _Component = _Builtin.Block, slotTest }) {
  return (
    <_Component className={_utils.cx(_styles, "test-block")} tag="div">
      <_Builtin.Container
        className={_utils.cx(_styles, "container-1280")}
        tag="div"
      >
        <_Builtin.Block tag="div">{slotTest}</_Builtin.Block>
      </_Builtin.Container>
    </_Component>
  );
}
