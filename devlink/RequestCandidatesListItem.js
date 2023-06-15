import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./RequestCandidatesListItem.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-33":{"id":"e-33","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-10","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-34"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".coaching-price-card-wrapper","originalId":"82111d76-4463-1f07-af21-45601f24cd61","appliesTo":"CLASS"},"targets":[{"selector":".coaching-price-card-wrapper","originalId":"82111d76-4463-1f07-af21-45601f24cd61","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686056099616},"e-34":{"id":"e-34","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-33"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".coaching-price-card-wrapper","originalId":"82111d76-4463-1f07-af21-45601f24cd61","appliesTo":"CLASS"},"targets":[{"selector":".coaching-price-card-wrapper","originalId":"82111d76-4463-1f07-af21-45601f24cd61","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686056099617}},"actionLists":{"a-10":{"id":"a-10","title":"Coach Pricing Hover In","actionItemGroups":[{"actionItems":[{"id":"a-10-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"82111d76-4463-1f07-af21-45601f24cd61"},"globalSwatchId":"e42b2e06","rValue":47,"bValue":65,"gValue":57,"aValue":1}},{"id":"a-10-n-6","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".text-sm-default","selectorGuids":["6f00d157-c0f8-129f-d4e0-87ff1eea0754"]},"globalSwatchId":"e42b2e06","rValue":47,"bValue":65,"gValue":57,"aValue":1}},{"id":"a-10-n-5","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"82111d76-4463-1f07-af21-45601f24cd61"},"xValue":1.1,"yValue":1.1,"locked":true}},{"id":"a-10-n-4","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".coach-price-button","selectorGuids":["d4b8fba1-f8b8-1b1a-19ea-d7bea6a39ada"]},"globalSwatchId":"e42b2e06","rValue":47,"bValue":65,"gValue":57,"aValue":1}},{"id":"a-10-n-3","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".coach-price-button","selectorGuids":["d4b8fba1-f8b8-1b1a-19ea-d7bea6a39ada"]},"globalSwatchId":"80449ce7","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-10-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"82111d76-4463-1f07-af21-45601f24cd61"},"globalSwatchId":"80449ce7","rValue":255,"bValue":255,"gValue":255,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686056103359},"a-11":{"id":"a-11","title":"Coach Pricing Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-11-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"82111d76-4463-1f07-af21-45601f24cd61"},"globalSwatchId":"3a86b552","rValue":248,"bValue":249,"gValue":249,"aValue":1}},{"id":"a-11-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"82111d76-4463-1f07-af21-45601f24cd61"},"xValue":1,"yValue":1,"locked":true}},{"id":"a-11-n-3","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".coach-price-button","selectorGuids":["d4b8fba1-f8b8-1b1a-19ea-d7bea6a39ada"]},"globalSwatchId":"80449ce7","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-11-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".coach-price-button","selectorGuids":["d4b8fba1-f8b8-1b1a-19ea-d7bea6a39ada"]},"globalSwatchId":"e42b2e06","rValue":47,"bValue":65,"gValue":57,"aValue":1}},{"id":"a-11-n-5","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"82111d76-4463-1f07-af21-45601f24cd61"},"globalSwatchId":"e42b2e06","rValue":47,"bValue":65,"gValue":57,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686056103359}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function RequestCandidatesListItem({
  as: _Component = _Builtin.Block,
  name = "Name",
  daysText = "days text",
  postedDate = "text block",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "candidate-request-stack")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "candidate-name-wrap")}
        id={_utils.cx(
          _styles,
          "w-node-_7a799230-2b50-e065-a3a5-2bdcd9f31407-d9f31406"
        )}
        tag="div"
      >
        <_Builtin.Image
          loading="lazy"
          width="auto"
          height="auto"
          src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/6486dd2bd4dcff7522e0e077_write.svg"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "text-lg-bold")}
          tag="div"
        >
          {name}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "request-day-grid")}
        id={_utils.cx(
          _styles,
          "w-node-_7a799230-2b50-e065-a3a5-2bdcd9f3140b-d9f31406"
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "text-sm-default", "text-color-grey")}
          tag="div"
        >
          {daysText}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "text-sm-default", "text-color-grey")}
          tag="div"
        >
          {postedDate}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
