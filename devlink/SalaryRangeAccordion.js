import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./SalaryRangeAccordion.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-218":{"id":"e-218","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-104","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-219"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"1d2cdb52-69d4-4e7a-ca45-d65ab649c63d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1d2cdb52-69d4-4e7a-ca45-d65ab649c63d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686746695666},"e-219":{"id":"e-219","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-105","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-218"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"1d2cdb52-69d4-4e7a-ca45-d65ab649c63d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1d2cdb52-69d4-4e7a-ca45-d65ab649c63d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686746695668}},"actionLists":{"a-104":{"id":"a-104","title":"accordian-opne","actionItemGroups":[{"actionItems":[{"id":"a-104-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".accordion-content","selectorGuids":["13f6e955-48ec-744b-2279-fb649e43eb5f"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-104-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".accordion-icon","selectorGuids":["2748dc48-ead5-789c-b272-3a6e27be60cf"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-104-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"SIBLINGS","selector":".accordion-content","selectorGuids":["13f6e955-48ec-744b-2279-fb649e43eb5f"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-104-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".accordion-icon","selectorGuids":["2748dc48-ead5-789c-b272-3a6e27be60cf"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686746698616},"a-105":{"id":"a-105","title":"accordian-opne 2","actionItemGroups":[{"actionItems":[{"id":"a-105-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".accordion-content","selectorGuids":["13f6e955-48ec-744b-2279-fb649e43eb5f"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-105-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".accordion-icon","selectorGuids":["2748dc48-ead5-789c-b272-3a6e27be60cf"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686746698616}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function SalaryRangeAccordion({
  as: _Component = _Builtin.Block,
  header = "This is some text inside of a div block.",
  slotSalaryDetailInfo,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "salary-accordion")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "accordion-header")}
        data-w-id="1d2cdb52-69d4-4e7a-ca45-d65ab649c63d"
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "text-lg-bold", "weight-500")}
          tag="div"
        >
          {header}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "accordion-icon")}
          tag="div"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icon-medium")}
            value="%3Csvg%20class%3D%22MuiSvgIcon-root%20MuiSvgIcon-fontSizeMedium%20css-vubbuv%22%20focusable%3D%22false%22%20aria-hidden%3D%22true%22%20viewBox%3D%220%200%2024%2024%22%20data-testid%3D%22ExpandMoreIcon%22%20aria-expanded%3D%22true%22%20aria-label%3D%22show%20more%22%3E%3Cpath%20d%3D%22M16.59%208.59%2012%2013.17%207.41%208.59%206%2010l6%206%206-6z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"
          />
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "accordion-content")}
        tag="div"
      >
        {slotSalaryDetailInfo}
      </_Builtin.Block>
    </_Component>
  );
}
