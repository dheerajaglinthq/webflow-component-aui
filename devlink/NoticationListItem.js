import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./NoticationListItem.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-33":{"id":"e-33","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-10","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-34"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".coaching-price-card-wrapper","originalId":"82111d76-4463-1f07-af21-45601f24cd61","appliesTo":"CLASS"},"targets":[{"selector":".coaching-price-card-wrapper","originalId":"82111d76-4463-1f07-af21-45601f24cd61","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686056099616},"e-34":{"id":"e-34","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-33"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".coaching-price-card-wrapper","originalId":"82111d76-4463-1f07-af21-45601f24cd61","appliesTo":"CLASS"},"targets":[{"selector":".coaching-price-card-wrapper","originalId":"82111d76-4463-1f07-af21-45601f24cd61","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686056099617}},"actionLists":{"a-10":{"id":"a-10","title":"Coach Pricing Hover In","actionItemGroups":[{"actionItems":[{"id":"a-10-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"82111d76-4463-1f07-af21-45601f24cd61"},"globalSwatchId":"e42b2e06","rValue":47,"bValue":65,"gValue":57,"aValue":1}},{"id":"a-10-n-6","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".text-sm-default","selectorGuids":["6f00d157-c0f8-129f-d4e0-87ff1eea0754"]},"globalSwatchId":"e42b2e06","rValue":47,"bValue":65,"gValue":57,"aValue":1}},{"id":"a-10-n-5","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"82111d76-4463-1f07-af21-45601f24cd61"},"xValue":1.1,"yValue":1.1,"locked":true}},{"id":"a-10-n-4","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".coach-price-button","selectorGuids":["d4b8fba1-f8b8-1b1a-19ea-d7bea6a39ada"]},"globalSwatchId":"e42b2e06","rValue":47,"bValue":65,"gValue":57,"aValue":1}},{"id":"a-10-n-3","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".coach-price-button","selectorGuids":["d4b8fba1-f8b8-1b1a-19ea-d7bea6a39ada"]},"globalSwatchId":"80449ce7","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-10-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"82111d76-4463-1f07-af21-45601f24cd61"},"globalSwatchId":"80449ce7","rValue":255,"bValue":255,"gValue":255,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686056103359},"a-11":{"id":"a-11","title":"Coach Pricing Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-11-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"82111d76-4463-1f07-af21-45601f24cd61"},"globalSwatchId":"3a86b552","rValue":248,"bValue":249,"gValue":249,"aValue":1}},{"id":"a-11-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"82111d76-4463-1f07-af21-45601f24cd61"},"xValue":1,"yValue":1,"locked":true}},{"id":"a-11-n-3","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".coach-price-button","selectorGuids":["d4b8fba1-f8b8-1b1a-19ea-d7bea6a39ada"]},"globalSwatchId":"80449ce7","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-11-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".coach-price-button","selectorGuids":["d4b8fba1-f8b8-1b1a-19ea-d7bea6a39ada"]},"globalSwatchId":"e42b2e06","rValue":47,"bValue":65,"gValue":57,"aValue":1}},{"id":"a-11-n-5","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"82111d76-4463-1f07-af21-45601f24cd61"},"globalSwatchId":"e42b2e06","rValue":47,"bValue":65,"gValue":57,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686056103359}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function NoticationListItem({
  as: _Component = _Builtin.Block,
  onClickNotification = {},
  onClickCloseNotification = {},
  textTitle = "This is some text inside of a div block.",
  textDesc = "Congratultions! Coach sutomer success has completed uoyr request for a resume review of resume treasure map",
  textTime = "A few seconds ago",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "notification-cards")}
      tag="div"
      {...onClickNotification}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "notification-card-tittle-wrapper")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "notification-card-left-title")}
          tag="div"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "html-embed")}
            value="%3Csvg%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M13%209C13%209.35362%2012.8595%209.69276%2012.6095%209.94281C12.3594%2010.1929%2012.0203%2010.3333%2011.6667%2010.3333H3.66667L1%2013V2.33333C1%201.97971%201.14048%201.64057%201.39052%201.39052C1.64057%201.14048%201.97971%201%202.33333%201H11.6667C12.0203%201%2012.3594%201.14048%2012.6095%201.39052C12.8595%201.64057%2013%201.97971%2013%202.33333V9Z%22%20stroke%3D%22%232F3941%22%20stroke-width%3D%221.33333%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "text-sm-bold")}
            tag="div"
          >
            {textTitle}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block tag="div" {...onClickCloseNotification}>
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "close-icon")}
            value="%3Csvg%20width%3D%228%22%20height%3D%228%22%20viewBox%3D%220%200%208%208%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M0.646447%207.35355C0.841709%207.54882%201.15829%207.54882%201.35355%207.35355L4%204.70711L6.64645%207.35355C6.84171%207.54882%207.15829%207.54882%207.35355%207.35355C7.54882%207.15829%207.54882%206.84171%207.35355%206.64645L4.70711%204L7.35355%201.35355C7.54882%201.15829%207.54882%200.841709%207.35355%200.646447C7.15829%200.451184%206.84171%200.451184%206.64645%200.646447L4%203.29289L1.35355%200.646447C1.15829%200.451184%200.841709%200.451184%200.646447%200.646447C0.451184%200.841709%200.451184%201.15829%200.646447%201.35355L3.29289%204L0.646447%206.64645C0.451184%206.84171%200.451184%207.15829%200.646447%207.35355Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
          />
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "div-block-15")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "text-sm-default", "color-grey-600")}
          tag="div"
        >
          {textDesc}
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "div-block-3")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "text-sm-default", "color-grey-600")}
            tag="div"
          >
            {textTime}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
