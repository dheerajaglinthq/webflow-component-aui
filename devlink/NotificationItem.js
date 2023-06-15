import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./NotificationItem.module.css";

export function NotificationItem({
  as: _Component = _Builtin.Block,
  title = "This is some text.",
  content = "This is some text",
  posted = "18 days ago",
  onClickNotificationClose = {},
  isActive = true,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "notifications-outer-wrap")}
      tag="div"
    >
      {isActive ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "notification-is-active")}
          tag="div"
        />
      ) : null}
      <_Builtin.Block
        className={_utils.cx(_styles, "notifications-content-wrap")}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "notification-icon")}
          loading="lazy"
          width="auto"
          height="auto"
          src="https://uploads-ssl.webflow.com/6480adc68b3db6d220ed1734/6482e5816590cb2cc505d56d_trending.svg"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "notification-content-stack")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "text-lg-bold")}
            tag="div"
          >
            {title}
          </_Builtin.Block>
          <_Builtin.Block className={_utils.cx(_styles, "text-md")} tag="div">
            {content}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Image
          className={_utils.cx(_styles, "notification-close")}
          loading="lazy"
          width="auto"
          height="auto"
          src="https://uploads-ssl.webflow.com/6480adc68b3db6d220ed1734/64818586ddb9563d1f9740bf_close.svg"
          {...onClickNotificationClose}
        />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "notification-posted")}
        tag="div"
      >
        {posted}
      </_Builtin.Block>
    </_Component>
  );
}
