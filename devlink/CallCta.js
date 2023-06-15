import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CallCta.module.css";

export function CallCta({
  as: _Component = _Builtin.Block,
  onClickBookACall = {},
  meetingInfo = "Introductry call booked with coach on 20th June 2023",
  onClickJoin = {},
  isBookAMeeting = true,
  meetingName = "Indroductory Call",
}) {
  return (
    <_Component className={_utils.cx(_styles, "coach-sidecta")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "indroductory-call")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "frame-574")} tag="div">
          <_Builtin.Image
            className={_utils.cx(_styles, "vectors-wrapper-2")}
            loading="lazy"
            width={16}
            height={16}
            src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64844f8e6b57153799551ad3_Vectors-Wrapper.svg"
          />
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "frame-573")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "medium-bold")}
            tag="div"
          >
            {meetingName}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "small-default-3")}
            tag="div"
          >
            {meetingInfo}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "cursor-pointer")}
            tag="div"
            {...onClickJoin}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "small-hover")}
              tag="div"
            >
              {"Join Here"}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      {isBookAMeeting ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "book-a-meeting")}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "frame-574")} tag="div">
            <_Builtin.Image
              className={_utils.cx(_styles, "vectors-wrapper-2")}
              loading="lazy"
              width={16}
              height={16}
              src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64844f8e6b57153799551ad3_Vectors-Wrapper.svg"
            />
          </_Builtin.Block>
          <_Builtin.Block className={_utils.cx(_styles, "frame-573")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "medium-bold")}
              tag="div"
            >
              {"Book A Meeting "}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "small-default-3")}
              tag="div"
            >
              {"No meeting is scheduled.Click below to book."}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "cursor-pointer")}
              tag="div"
              {...onClickBookACall}
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "small-hover")}
                tag="div"
              >
                {"Book A Meeting"}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
    </_Component>
  );
}
