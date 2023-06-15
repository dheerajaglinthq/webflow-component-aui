import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./DashboardCard.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-79":{"id":"e-79","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-27","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-80"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".dashboard-card","originalId":"98e33a39-4df4-52f0-82a5-20a0af68e155","appliesTo":"CLASS"},"targets":[{"selector":".dashboard-card","originalId":"98e33a39-4df4-52f0-82a5-20a0af68e155","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686136182879},"e-80":{"id":"e-80","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-28","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-79"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".dashboard-card","originalId":"98e33a39-4df4-52f0-82a5-20a0af68e155","appliesTo":"CLASS"},"targets":[{"selector":".dashboard-card","originalId":"98e33a39-4df4-52f0-82a5-20a0af68e155","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686136182880}},"actionLists":{"a-27":{"id":"a-27","title":"dashboard card hover","actionItemGroups":[{"actionItems":[{"id":"a-27-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".arrowhide","selectorGuids":["630ea08f-55b3-a76d-5fe3-c2317298c45d"]},"value":"none"}}]},{"actionItems":[{"id":"a-27-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":200,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".arrowhide","selectorGuids":["630ea08f-55b3-a76d-5fe3-c2317298c45d"]},"value":"block"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1685683811847},"a-28":{"id":"a-28","title":"dashboard card hover out","actionItemGroups":[{"actionItems":[{"id":"a-28-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".arrowhide","selectorGuids":["630ea08f-55b3-a76d-5fe3-c2317298c45d"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1685683811847}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function DashboardCard({
  as: _Component = _Builtin.Block,
  header = "Review Your Aglint AI Generated Resume Now!",
  description = "Aglint AI did the heavy lifting for you. Now, it's your turn take a quick look at your professionally generated resume and make sure it meets your expectations.",
  image = "https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/647ff5fb374a40bef3d73b11_Frame.svg",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "dashboard-card")} tag="div">
      <_Builtin.Image
        className={_utils.cx(_styles, "image-2")}
        loading="lazy"
        width="auto"
        height="auto"
        src={image}
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "dashboard-card-content")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "dashboard-card-head")}
          tag="div"
        >
          {header}
        </_Builtin.Block>
        <_Builtin.Paragraph>{description}</_Builtin.Paragraph>
      </_Builtin.Block>
      <_Builtin.Image
        className={_utils.cx(_styles, "hide")}
        loading="lazy"
        width="auto"
        height="auto"
        src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/647ff5fb374a40bef3d73b13_chevron.forward.svg"
      />
    </_Component>
  );
}
