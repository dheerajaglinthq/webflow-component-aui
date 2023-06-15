import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CandidateListItem.module.css";

export function CandidateListItem({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "candidates-card")} tag="div">
      <_Builtin.Image
        className={_utils.cx(_styles, "candidate-pic")}
        id={_utils.cx(
          _styles,
          "w-node-c68db5fb-3d44-a241-adcf-c7aa45cd85f3-45cd85f2"
        )}
        loading="lazy"
        width="auto"
        height="auto"
        src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "candidate-content")}
        id={_utils.cx(
          _styles,
          "w-node-c68db5fb-3d44-a241-adcf-c7aa45cd85f4-45cd85f2"
        )}
        tag="div"
      >
        <_Builtin.Block tag="div">
          {"This is some text inside of a div block."}
        </_Builtin.Block>
        <_Builtin.Block tag="div">
          {"This is some text inside of a div block."}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
