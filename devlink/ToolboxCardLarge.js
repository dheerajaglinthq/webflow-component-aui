import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ToolboxCardLarge.module.css";

export function ToolboxCardLarge({
  as: _Component = _Builtin.Block,
  toolboxImageImage = "",
  toolboxHeadingSmall = "Refine your resume to perfection with the help of Aglint AI",
  description = "Let our AI-powered solution provide you with expert guidance and feedback to impress potential employers.",

  toolboxButtonLink = {
    href: "#",
  },

  toolboxButtonText = "Upload",
}) {
  return (
    <_Component className={_utils.cx(_styles, "toolbox-card-block")} tag="div">
      <_Builtin.Image
        className={_utils.cx(_styles, "toolbox-image")}
        loading="lazy"
        width="auto"
        height="auto"
        src={toolboxImageImage}
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "toolbox-content-wrapper")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "toolbox-content-block")}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "toolbox-heading-small")}
            tag="h1"
          >
            {toolboxHeadingSmall}
          </_Builtin.Heading>
          <_Builtin.Paragraph
            className={_utils.cx(_styles, "toolbox-text-small")}
          >
            {description}
          </_Builtin.Paragraph>
        </_Builtin.Block>
        <_Builtin.Link
          className={_utils.cx(_styles, "toolbox-button")}
          id={_utils.cx(
            _styles,
            "w-node-c5c3bc07-74e0-a298-ef71-b78e2ca41a97-2ca41a8f"
          )}
          button={true}
          options={toolboxButtonLink}
        >
          {toolboxButtonText}
        </_Builtin.Link>
      </_Builtin.Block>
    </_Component>
  );
}
