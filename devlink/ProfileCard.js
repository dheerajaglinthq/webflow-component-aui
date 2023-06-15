import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./ProfileCard.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-224":{"id":"e-224","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-108","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-225"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f5d5ce2f-c068-7418-3b37-acc2e3eb97e7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f5d5ce2f-c068-7418-3b37-acc2e3eb97e7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686819535290},"e-225":{"id":"e-225","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-109","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-224"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f5d5ce2f-c068-7418-3b37-acc2e3eb97e7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f5d5ce2f-c068-7418-3b37-acc2e3eb97e7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686819535292}},"actionLists":{"a-108":{"id":"a-108","title":"Profile-cardhover","actionItemGroups":[{"actionItems":[{"id":"a-108-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".iconbutton-copy","selectorGuids":["fa695846-6d9c-0abc-caf2-2057e0e7ace3"]},"value":0,"unit":""}},{"id":"a-108-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".iconbutton-copy","selectorGuids":["fa695846-6d9c-0abc-caf2-2057e0e7ace3"]},"value":"none"}}]},{"actionItems":[{"id":"a-108-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".iconbutton-copy","selectorGuids":["fa695846-6d9c-0abc-caf2-2057e0e7ace3"]},"value":"flex"}}]},{"actionItems":[{"id":"a-108-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".iconbutton-copy","selectorGuids":["fa695846-6d9c-0abc-caf2-2057e0e7ace3"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686819539114},"a-109":{"id":"a-109","title":"Profile-cardhover out","actionItemGroups":[{"actionItems":[{"id":"a-109-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".iconbutton-copy","selectorGuids":["fa695846-6d9c-0abc-caf2-2057e0e7ace3"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-109-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".iconbutton-copy","selectorGuids":["fa695846-6d9c-0abc-caf2-2057e0e7ace3"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686819539114}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ProfileCard({
  as: _Component = _Builtin.Block,
  name = "Mikalyn Reif",
  jobTittle = "Account Development Executive",
  onClickAddToContact = {},
  isAdded = true,
  onClickLinkedin = {},
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "profile-card")}
      data-w-id="f5d5ce2f-c068-7418-3b37-acc2e3eb97e7"
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "profile-card-content-wrap")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "text-md-bold", "one-line-clamp")}
          tag="div"
        >
          {name}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "text-md",
            "text-color-dark-grey",
            "one-line-clamp"
          )}
          tag="div"
        >
          {jobTittle}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "icon-buttons-wrap-copy")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "iconbutton-copy")}
          tag="div"
          {...onClickLinkedin}
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "iconbtn-icon")}
            loading="lazy"
            width="auto"
            height="auto"
            src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64807341f88d76f4353e1c19_link-arrow.svg"
          />
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "icon-buttons")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "iconbutton")}
            tag="div"
            {...onClickAddToContact}
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "iconbtn-icon")}
              value="%3Csvg%20class%3D%22MuiSvgIcon-root%20MuiSvgIcon-fontSizeMedium%20css-vubbuv%22%20focusable%3D%22false%22%20aria-hidden%3D%22true%22%20viewBox%3D%220%200%2024%2024%22%20data-testid%3D%22PersonAddAlt1Icon%22%3E%3Cpath%20d%3D%22M13%208c0-2.21-1.79-4-4-4S5%205.79%205%208s1.79%204%204%204%204-1.79%204-4zm2%202v2h3v3h2v-3h3v-2h-3V7h-2v3h-3zM1%2018v2h16v-2c0-2.66-5.33-4-8-4s-8%201.34-8%204z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"
            />
          </_Builtin.Block>
          {isAdded ? (
            <_Builtin.Block
              className={_utils.cx(_styles, "iconbutton", "added-copyabsolute")}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "iconbtn-icon", "tick")}
                value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22currentColor%22%20class%3D%22bi%20bi-check-circle%22%20viewBox%3D%220%200%2016%2016%22%3E%0A%20%20%3Cpath%20d%3D%22M8%2015A7%207%200%201%201%208%201a7%207%200%200%201%200%2014zm0%201A8%208%200%201%200%208%200a8%208%200%200%200%200%2016z%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M10.97%204.97a.235.235%200%200%200-.02.022L7.477%209.417%205.384%207.323a.75.75%200%200%200-1.06%201.06L6.97%2011.03a.75.75%200%200%200%201.079-.02l3.992-4.99a.75.75%200%200%200-1.071-1.05z%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.Block>
          ) : null}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
