import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ToolboxCard.module.css";

export function ToolboxCard({
  as: _Component = _Builtin.Block,
  image = "",
  header = "Write a Compelling Cover Letter With Aglint AI",
  description = "Our AI assisted cover letter generation simplifies the writing process and creates personalized cover letters in minutes.",

  toolboxButtonLink = {
    href: "#",
  },

  toolboxButtonText = "Let’s Write",
}) {
  return (
    <_Component className={_utils.cx(_styles, "toolbox-card-block")} tag="div">
      <_Builtin.Image
        className={_utils.cx(_styles, "toolbox-image")}
        loading="lazy"
        width="auto"
        height="auto"
        src={image}
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
            {header}
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
            "w-node-_93917a60-14ee-2318-1163-fca6ad32eb1a-ad32eb12"
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
