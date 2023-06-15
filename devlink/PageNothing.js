import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./PageNothing.module.css";

export function PageNothing({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "page-nothing")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "page-nothing-wrapper")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "page-nothing-grid")}
          tag="div"
        >
          <_Builtin.Block
            id={_utils.cx(
              _styles,
              "w-node-_9156ee65-d182-5bab-9f23-32cd2a3a86ae-2a3a86ab"
            )}
            tag="div"
          >
            <_Builtin.Image
              loading="lazy"
              width="auto"
              height="auto"
              src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/648152564c8aa83e0b7ea74e_Illustration%2015%20(1).svg"
            />
          </_Builtin.Block>
          <_Builtin.Block
            id={_utils.cx(
              _styles,
              "w-node-_9156ee65-d182-5bab-9f23-32cd2a3a86b0-2a3a86ab"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "page-nothing-title-wrapper")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "text-xxxl-default",
                  "color-red-800"
                )}
                tag="div"
              >
                {"Oops! "}
                <br />
                {"Something went wrong."}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-lg-default")}
                tag="div"
              >
                {"We apologize for the inconvenience."}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "page-nothing-description")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text-md-default")}
                tag="div"
              >
                {
                  "Our server is experiencing some technical difficulties at the moment, but rest assured that we're working hard to fix the issue. In the meantime, take a moment to check out our blog, forum, or other resources to continue your learning and development journey."
                }
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "support-wrapper")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text-lg-default")}
                tag="div"
              >
                {"Explore our"}
              </_Builtin.Block>
              <_Builtin.Link
                className={_utils.cx(_styles, "tools-link")}
                button={false}
                options={{
                  href: "/toolbox",
                }}
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-lg-default")}
                  tag="div"
                >
                  {"tools"}
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-lg-default")}
                tag="div"
              >
                {"or contact "}
              </_Builtin.Block>
              <_Builtin.Link
                className={_utils.cx(_styles, "tools-link")}
                button={false}
                options={{
                  href: "mailto:support@alignthq.com?subject=Contact%20Aglint",
                }}
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-lg-default")}
                  tag="div"
                >
                  {"support."}
                </_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
