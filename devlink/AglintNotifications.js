import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./AglintNotifications.module.css";

export function AglintNotifications({
  as: _Component = _Builtin.Block,
  isEmpty = true,
  slotNotificationItem,
  onClickClearAll = {},
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "aglint-notification-wrapper")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "notification-header-wrap")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "text-lg-bold")}
          tag="div"
        >
          {"Notifications"}
        </_Builtin.Block>
        <_Builtin.Link
          className={_utils.cx(_styles, "text-button")}
          button={false}
          options={{
            href: "#",
          }}
          {...onClickClearAll}
        >
          {"Clear All"}
        </_Builtin.Link>
      </_Builtin.Block>
      {isEmpty ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "notification-empty-state")}
          tag="div"
        >
          <_Builtin.Image
            loading="lazy"
            width="auto"
            height="auto"
            src="https://uploads-ssl.webflow.com/6480adc68b3db6d220ed1734/6482f0f253d4414a77b4c700_emptyNotifications.svg"
          />
          <_Builtin.Block className={_utils.cx(_styles, "text-md")} tag="div">
            {"Great job! You've caught up on all your notifications."}
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
      <_Builtin.Block
        className={_utils.cx(_styles, "notification-list")}
        tag="div"
      >
        {slotNotificationItem}
      </_Builtin.Block>
    </_Component>
  );
}
