import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ResumeComp.module.css";

export function ResumeComp({
  as: _Component = _Builtin.Block,
  onClickResume = {},
  isActiveResume = true,
  image = "https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/6488122d78fc8182d6498416_1131w-f5JNR-K5jjw.webp",
  name = "This is some text inside of a div block.",
  position = "This is some text inside of a div block.",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "resume")}
      tag="div"
      {...onClickResume}
    >
      <_Builtin.Block className={_utils.cx(_styles, "resume-img")} tag="div">
        <_Builtin.Image
          className={_utils.cx(_styles, "resume-image")}
          loading="eager"
          width="auto"
          height="auto"
          src={image}
        />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "rsume-name-wrap")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "resume-name", "line-clamp-1")}
          tag="div"
        >
          {name}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "position", "line-clamp-1")}
          tag="div"
        >
          {position}
        </_Builtin.Block>
      </_Builtin.Block>
      {isActiveResume ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "resume-overlay")}
          tag="div"
        />
      ) : null}
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "hide")}
        value="%3Cstyle%3E%0A.line-clamp-1%20%7B%0A%09display%3A%20-webkit-box%3B%0A%09overflow%3A%20hidden%3B%0A%09-webkit-line-clamp%3A%201%3B%0A%09-webkit-box-orient%3A%20vertical%3B%0A%7D%0A%3C%2Fstyle%3E"
      />
    </_Component>
  );
}
