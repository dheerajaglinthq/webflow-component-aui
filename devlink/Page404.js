import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Page404.module.css";

export function Page404({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "page-404")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "page-404-wrapper")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "page-404-grid")}
          tag="div"
        >
          <_Builtin.Block
            id={_utils.cx(
              _styles,
              "w-node-a3c6fa00-ea77-386c-f7f2-9b01906d7766-906d7763"
            )}
            tag="div"
          >
            <_Builtin.Image
              id={_utils.cx(
                _styles,
                "w-node-a3c6fa00-ea77-386c-f7f2-9b01906d7767-906d7763"
              )}
              loading="lazy"
              width="auto"
              height="auto"
              src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/6481521aaf835b5134787277_Illustration%2015.svg"
            />
          </_Builtin.Block>
          <_Builtin.Block
            id={_utils.cx(
              _styles,
              "w-node-a3c6fa00-ea77-386c-f7f2-9b01906d7768-906d7763"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "page-404-title-wrapper")}
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
                {"Looks like you're lost"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-lg-default")}
                tag="div"
              >
                {"Don't worry, we'll help you find your way"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "page-404-description-wrapper")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text-md-default")}
                tag="div"
              >
                {
                  "We couldn't find the page you're looking for, but we're here to help you navigate your career development journey. Take a moment to explore our resources and discover new opportunities to enhance your skills and advance your career. If you still can't find what you're looking for, please contact our support team for assistance."
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
