import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SelectResume.module.css";

export function SelectResume({
  as: _Component = _Builtin.Block,
  slotResume,
  onClickNext = {},
  onClickPrev = {},
  isActiveNext = true,
  onClickSkip = {},
}) {
  return (
    <_Component className={_utils.cx(_styles, "container-960")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "interview-add-company")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "company-list-wrapper")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "company-list")}
            id={_utils.cx(
              _styles,
              "w-node-_13ce0bdb-96de-4f75-ba8b-392d6017b195-6017b192"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "resume-list")}
              tag="div"
            >
              {slotResume}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "back-continue-wrapper")}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "back-button")}
                button={false}
                options={{
                  href: "#",
                }}
                {...onClickPrev}
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
                <_Builtin.Link
                  className={_utils.cx(_styles, "back-button")}
                  button={false}
                  options={{
                    href: "#",
                  }}
                  {...onClickSkip}
                >
                  <_Builtin.Block tag="div">{"Skip"}</_Builtin.Block>
                </_Builtin.Link>
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
                  {isActiveNext ? (
                    <_Builtin.Link
                      className={_utils.cx(_styles, "active-button")}
                      button={true}
                      options={{
                        href: "#",
                      }}
                      {...onClickNext}
                    >
                      {"Continue"}
                    </_Builtin.Link>
                  ) : null}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "illustration-wrapper")}
            id={_utils.cx(
              _styles,
              "w-node-_13ce0bdb-96de-4f75-ba8b-392d6017b1a0-6017b192"
            )}
            tag="div"
          >
            <_Builtin.Image
              loading="lazy"
              width="auto"
              height="auto"
              src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64820ff84e6c35a26e842ad1_Illustration%2013.png"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "tooltip-wrapper")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "tooltip")}
                tag="div"
              >
                <_Builtin.Image
                  loading="lazy"
                  width="auto"
                  height="auto"
                  src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64820ff84e6c35a26e842ad3_Nubbin.svg"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "select-title")}
                tag="div"
              >
                {"Select Job Tittle & Company."}
              </_Builtin.Block>
              <_Builtin.Paragraph>
                {
                  "Hello! I'm your Interview Assistant Bot, here to help you prepare effectively. To get started, please tell me the company and job position you're interviewing for."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
