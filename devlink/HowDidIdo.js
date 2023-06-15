import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./HowDidIdo.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-109":{"id":"e-109","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-41","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-110"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"841ee67d-759c-ce20-419c-3b9a0c11e20f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"841ee67d-759c-ce20-419c-3b9a0c11e20f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686395128250},"e-110":{"id":"e-110","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-42","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-109"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"841ee67d-759c-ce20-419c-3b9a0c11e20f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"841ee67d-759c-ce20-419c-3b9a0c11e20f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686395128251},"e-220":{"id":"e-220","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-106","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-221"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2e9d7b43-a602-192b-18db-24409ac4d48b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2e9d7b43-a602-192b-18db-24409ac4d48b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686771713608},"e-221":{"id":"e-221","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-107","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-220"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2e9d7b43-a602-192b-18db-24409ac4d48b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2e9d7b43-a602-192b-18db-24409ac4d48b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686771713608}},"actionLists":{"a-41":{"id":"a-41","title":"profile [expand]","actionItemGroups":[{"actionItems":[{"id":"a-41-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".profile-desccription","selectorGuids":["4542c770-9604-d6de-f50e-1a41462c4c54"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-41-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".embed-flex","selectorGuids":["52fed630-20a7-0da5-bc89-35c4f4847d44"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-41-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".profile-desccription","selectorGuids":["4542c770-9604-d6de-f50e-1a41462c4c54"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-41-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".embed-flex","selectorGuids":["52fed630-20a7-0da5-bc89-35c4f4847d44"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686395132149},"a-42":{"id":"a-42","title":"profile [collapse]","actionItemGroups":[{"actionItems":[{"id":"a-42-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".profile-desccription","selectorGuids":["4542c770-9604-d6de-f50e-1a41462c4c54"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-42-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".embed-flex","selectorGuids":["52fed630-20a7-0da5-bc89-35c4f4847d44"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686395132149},"a-106":{"id":"a-106","title":"info interview","actionItemGroups":[{"actionItems":[{"id":"a-106-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".info-interview","selectorGuids":["29aa5099-7c09-acb1-1e8d-65454af66ec4"]},"value":"none"}},{"id":"a-106-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".info-interview","selectorGuids":["29aa5099-7c09-acb1-1e8d-65454af66ec4"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-106-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".info-interview","selectorGuids":["29aa5099-7c09-acb1-1e8d-65454af66ec4"]},"value":"flex"}}]},{"actionItems":[{"id":"a-106-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".info-interview","selectorGuids":["29aa5099-7c09-acb1-1e8d-65454af66ec4"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686771380899},"a-107":{"id":"a-107","title":"info interview 2","actionItemGroups":[{"actionItems":[{"id":"a-107-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".info-interview","selectorGuids":["29aa5099-7c09-acb1-1e8d-65454af66ec4"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-107-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".info-interview","selectorGuids":["29aa5099-7c09-acb1-1e8d-65454af66ec4"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686771380899}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function HowDidIdo({
  as: _Component = _Builtin.Block,
  onClick = {},
  isActive = true,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "interview-btns")}
      tag="div"
      {...onClick}
    >
      {isActive ? (
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "button-interview",
            "cancel-interview-copy"
          )}
          tag="div"
          {...onClick}
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "embed-flex", "ontop")}
            value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M5%205C5%205.55228%204.55228%206%204%206C3.44772%206%203%205.55228%203%205C3%204.44772%203.44772%204%204%204C4.55228%204%205%204.44772%205%205ZM3.06292%207.74282C2.92881%207.50143%203.01579%207.19703%203.25718%207.06292C3.49857%206.92881%203.80297%207.01579%203.93708%207.25718C4.36947%208.03548%205.12155%208.5%206%208.5C6.87845%208.5%207.63053%208.03548%208.06292%207.25718C8.19703%207.01579%208.50143%206.92881%208.74282%207.06292C8.98421%207.19703%209.07119%207.50143%208.93708%207.74282C8.33215%208.83169%207.25012%209.5%206%209.5C4.74988%209.5%203.66785%208.83169%203.06292%207.74282ZM8%206C8.55228%206%209%205.55228%209%205C9%204.44772%208.55228%204%208%204C7.44772%204%207%204.44772%207%205C7%205.55228%207.44772%206%208%206ZM6%2012C2.68629%2012%200%209.31371%200%206C0%202.68629%202.68629%200%206%200C9.31371%200%2012%202.68629%2012%206C12%209.31371%209.31371%2012%206%2012ZM6%2011C8.76142%2011%2011%208.76142%2011%206C11%203.23858%208.76142%201%206%201C3.23858%201%201%203.23858%201%206C1%208.76142%203.23858%2011%206%2011Z%22%20fill%3D%22%232E8200%22%2F%3E%0A%3Cmask%20id%3D%22mask0_2722_203346%22%20style%3D%22mask-type%3Aluminance%22%20maskUnits%3D%22userSpaceOnUse%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2212%22%20height%3D%2212%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M5%205C5%205.55228%204.55228%206%204%206C3.44772%206%203%205.55228%203%205C3%204.44772%203.44772%204%204%204C4.55228%204%205%204.44772%205%205ZM3.06292%207.74282C2.92881%207.50143%203.01579%207.19703%203.25718%207.06292C3.49857%206.92881%203.80297%207.01579%203.93708%207.25718C4.36947%208.03548%205.12155%208.5%206%208.5C6.87845%208.5%207.63053%208.03548%208.06292%207.25718C8.19703%207.01579%208.50143%206.92881%208.74282%207.06292C8.98421%207.19703%209.07119%207.50143%208.93708%207.74282C8.33215%208.83169%207.25012%209.5%206%209.5C4.74988%209.5%203.66785%208.83169%203.06292%207.74282ZM8%206C8.55228%206%209%205.55228%209%205C9%204.44772%208.55228%204%208%204C7.44772%204%207%204.44772%207%205C7%205.55228%207.44772%206%208%206ZM6%2012C2.68629%2012%200%209.31371%200%206C0%202.68629%202.68629%200%206%200C9.31371%200%2012%202.68629%2012%206C12%209.31371%209.31371%2012%206%2012ZM6%2011C8.76142%2011%2011%208.76142%2011%206C11%203.23858%208.76142%201%206%201C3.23858%201%201%203.23858%201%206C1%208.76142%203.23858%2011%206%2011Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fmask%3E%0A%3Cg%20mask%3D%22url(%23mask0_2722_203346)%22%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block tag="div">{"Get Feedback"}</_Builtin.Block>
        </_Builtin.Block>
      ) : null}
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "button-interview",
          "cancel-interview",
          "is-disabled-btn"
        )}
        data-w-id="2e9d7b43-a602-192b-18db-24409ac4d48b"
        tag="div"
      >
        <_Builtin.HtmlEmbed
          className={_utils.cx(_styles, "embed-flex", "ontop", "disabledo")}
          value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M5%205C5%205.55228%204.55228%206%204%206C3.44772%206%203%205.55228%203%205C3%204.44772%203.44772%204%204%204C4.55228%204%205%204.44772%205%205ZM3.06292%207.74282C2.92881%207.50143%203.01579%207.19703%203.25718%207.06292C3.49857%206.92881%203.80297%207.01579%203.93708%207.25718C4.36947%208.03548%205.12155%208.5%206%208.5C6.87845%208.5%207.63053%208.03548%208.06292%207.25718C8.19703%207.01579%208.50143%206.92881%208.74282%207.06292C8.98421%207.19703%209.07119%207.50143%208.93708%207.74282C8.33215%208.83169%207.25012%209.5%206%209.5C4.74988%209.5%203.66785%208.83169%203.06292%207.74282ZM8%206C8.55228%206%209%205.55228%209%205C9%204.44772%208.55228%204%208%204C7.44772%204%207%204.44772%207%205C7%205.55228%207.44772%206%208%206ZM6%2012C2.68629%2012%200%209.31371%200%206C0%202.68629%202.68629%200%206%200C9.31371%200%2012%202.68629%2012%206C12%209.31371%209.31371%2012%206%2012ZM6%2011C8.76142%2011%2011%208.76142%2011%206C11%203.23858%208.76142%201%206%201C3.23858%201%201%203.23858%201%206C1%208.76142%203.23858%2011%206%2011Z%22%20fill%3D%22%232E8200%22%2F%3E%0A%3Cmask%20id%3D%22mask0_2722_203346%22%20style%3D%22mask-type%3Aluminance%22%20maskUnits%3D%22userSpaceOnUse%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2212%22%20height%3D%2212%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M5%205C5%205.55228%204.55228%206%204%206C3.44772%206%203%205.55228%203%205C3%204.44772%203.44772%204%204%204C4.55228%204%205%204.44772%205%205ZM3.06292%207.74282C2.92881%207.50143%203.01579%207.19703%203.25718%207.06292C3.49857%206.92881%203.80297%207.01579%203.93708%207.25718C4.36947%208.03548%205.12155%208.5%206%208.5C6.87845%208.5%207.63053%208.03548%208.06292%207.25718C8.19703%207.01579%208.50143%206.92881%208.74282%207.06292C8.98421%207.19703%209.07119%207.50143%208.93708%207.74282C8.33215%208.83169%207.25012%209.5%206%209.5C4.74988%209.5%203.66785%208.83169%203.06292%207.74282ZM8%206C8.55228%206%209%205.55228%209%205C9%204.44772%208.55228%204%208%204C7.44772%204%207%204.44772%207%205C7%205.55228%207.44772%206%208%206ZM6%2012C2.68629%2012%200%209.31371%200%206C0%202.68629%202.68629%200%206%200C9.31371%200%2012%202.68629%2012%206C12%209.31371%209.31371%2012%206%2012ZM6%2011C8.76142%2011%2011%208.76142%2011%206C11%203.23858%208.76142%201%206%201C3.23858%201%201%203.23858%201%206C1%208.76142%203.23858%2011%206%2011Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fmask%3E%0A%3Cg%20mask%3D%22url(%23mask0_2722_203346)%22%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E"
        />
        <_Builtin.Block tag="div">{"Get Feedback"}</_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "info-interview")}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "vectors-wrapper-7")}
            loading="lazy"
            width={16}
            height={16}
            src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/648a15e124fc7b2ba7544e63_Vectors-Wrapper.svg"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "medium-default-8")}
            tag="div"
          >
            {"You need to complete atleast 5 questions to get feedback."}
          </_Builtin.Block>
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "hide")}
            value="%3Cstyle%3E%0A.info-interview%7B%0Apointer-events%3Anone%3B%0A%7D%0A%3C%2Fstyle%3E"
          />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
