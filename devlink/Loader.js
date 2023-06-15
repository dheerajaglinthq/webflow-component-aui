import React from "react";
import * as _Builtin from "./_Builtin";
import { LoaderSvg } from "./LoaderSvg";
import * as _utils from "./utils";
import _styles from "./Loader.module.css";

export function Loader({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "default-loader")} tag="div">
      <LoaderSvg />
    </_Component>
  );
}
