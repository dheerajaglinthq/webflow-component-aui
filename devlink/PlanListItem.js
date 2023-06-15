import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./PlanListItem.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-109":{"id":"e-109","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-41","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-110"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"841ee67d-759c-ce20-419c-3b9a0c11e20f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"841ee67d-759c-ce20-419c-3b9a0c11e20f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686395128250},"e-110":{"id":"e-110","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-42","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-109"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"841ee67d-759c-ce20-419c-3b9a0c11e20f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"841ee67d-759c-ce20-419c-3b9a0c11e20f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686395128251}},"actionLists":{"a-41":{"id":"a-41","title":"profile [expand]","actionItemGroups":[{"actionItems":[{"id":"a-41-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".profile-desccription","selectorGuids":["4542c770-9604-d6de-f50e-1a41462c4c54"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-41-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".embed-flex","selectorGuids":["52fed630-20a7-0da5-bc89-35c4f4847d44"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-41-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".profile-desccription","selectorGuids":["4542c770-9604-d6de-f50e-1a41462c4c54"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-41-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".embed-flex","selectorGuids":["52fed630-20a7-0da5-bc89-35c4f4847d44"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686395132149},"a-42":{"id":"a-42","title":"profile [collapse]","actionItemGroups":[{"actionItems":[{"id":"a-42-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".profile-desccription","selectorGuids":["4542c770-9604-d6de-f50e-1a41462c4c54"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-42-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".embed-flex","selectorGuids":["52fed630-20a7-0da5-bc89-35c4f4847d44"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686395132149}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function PlanListItem({
  as: _Component = _Builtin.Block,
  isActive = true,
  itemText = "Job Search Strategy Session (30-min call)",
  isNotActive = true,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "plan-list-item-wrap")} tag="div">
      {isActive ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "", "plan-list-item", "is-active")}
          tag="div"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "embed-flex", "align-top")}
            value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M6%200C2.69%200%200%202.69%200%206C0%209.31%202.69%2012%206%2012C9.31%2012%2012%209.31%2012%206C12%202.69%209.31%200%206%200ZM9.44%204.94L5.94%208.44C5.82%208.56%205.66%208.62%205.5%208.62C5.34%208.62%205.18%208.56%205.06%208.44L3.06%206.44C2.82%206.2%202.82%205.8%203.06%205.56C3.3%205.32%203.7%205.32%203.94%205.56L5.5%207.12L8.56%204.06C8.8%203.82%209.2%203.82%209.44%204.06C9.69%204.3%209.69%204.7%209.44%204.94V4.94Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "", "medium-default-2")}
            tag="div"
          >
            {itemText}
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
      {isNotActive ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "", "plan-list-item", "not-active")}
          tag="div"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "embed-flex", "align-top")}
            value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M6%200C2.69%200%200%202.69%200%206C0%209.31%202.69%2012%206%2012C9.31%2012%2012%209.31%2012%206C12%202.69%209.31%200%206%200ZM9.44%204.94L5.94%208.44C5.82%208.56%205.66%208.62%205.5%208.62C5.34%208.62%205.18%208.56%205.06%208.44L3.06%206.44C2.82%206.2%202.82%205.8%203.06%205.56C3.3%205.32%203.7%205.32%203.94%205.56L5.5%207.12L8.56%204.06C8.8%203.82%209.2%203.82%209.44%204.06C9.69%204.3%209.69%204.7%209.44%204.94V4.94Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "", "medium-default-2")}
            tag="div"
          >
            {itemText}
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
    </_Component>
  );
}
