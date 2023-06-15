import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { PriceFeature } from "./PriceFeature";
import * as _utils from "./utils";
import _styles from "./PricingCard.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-33":{"id":"e-33","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-10","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-34"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".coaching-price-card-wrapper","originalId":"82111d76-4463-1f07-af21-45601f24cd61","appliesTo":"CLASS"},"targets":[{"selector":".coaching-price-card-wrapper","originalId":"82111d76-4463-1f07-af21-45601f24cd61","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686056099616},"e-34":{"id":"e-34","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-33"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".coaching-price-card-wrapper","originalId":"82111d76-4463-1f07-af21-45601f24cd61","appliesTo":"CLASS"},"targets":[{"selector":".coaching-price-card-wrapper","originalId":"82111d76-4463-1f07-af21-45601f24cd61","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686056099617}},"actionLists":{"a-10":{"id":"a-10","title":"Coach Pricing Hover In","actionItemGroups":[{"actionItems":[{"id":"a-10-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"82111d76-4463-1f07-af21-45601f24cd61"},"globalSwatchId":"e42b2e06","rValue":47,"bValue":65,"gValue":57,"aValue":1}},{"id":"a-10-n-6","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".text-sm-default","selectorGuids":["6f00d157-c0f8-129f-d4e0-87ff1eea0754"]},"globalSwatchId":"e42b2e06","rValue":47,"bValue":65,"gValue":57,"aValue":1}},{"id":"a-10-n-5","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"82111d76-4463-1f07-af21-45601f24cd61"},"xValue":1.1,"yValue":1.1,"locked":true}},{"id":"a-10-n-4","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".coach-price-button","selectorGuids":["d4b8fba1-f8b8-1b1a-19ea-d7bea6a39ada"]},"globalSwatchId":"e42b2e06","rValue":47,"bValue":65,"gValue":57,"aValue":1}},{"id":"a-10-n-3","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".coach-price-button","selectorGuids":["d4b8fba1-f8b8-1b1a-19ea-d7bea6a39ada"]},"globalSwatchId":"80449ce7","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-10-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"82111d76-4463-1f07-af21-45601f24cd61"},"globalSwatchId":"80449ce7","rValue":255,"bValue":255,"gValue":255,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686056103359},"a-11":{"id":"a-11","title":"Coach Pricing Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-11-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"82111d76-4463-1f07-af21-45601f24cd61"},"globalSwatchId":"3a86b552","rValue":248,"bValue":249,"gValue":249,"aValue":1}},{"id":"a-11-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"82111d76-4463-1f07-af21-45601f24cd61"},"xValue":1,"yValue":1,"locked":true}},{"id":"a-11-n-3","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".coach-price-button","selectorGuids":["d4b8fba1-f8b8-1b1a-19ea-d7bea6a39ada"]},"globalSwatchId":"80449ce7","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-11-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".coach-price-button","selectorGuids":["d4b8fba1-f8b8-1b1a-19ea-d7bea6a39ada"]},"globalSwatchId":"e42b2e06","rValue":47,"bValue":65,"gValue":57,"aValue":1}},{"id":"a-11-n-5","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"82111d76-4463-1f07-af21-45601f24cd61"},"globalSwatchId":"e42b2e06","rValue":47,"bValue":65,"gValue":57,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686056103359}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function PricingCard({
  as: _Component = _Builtin.Block,
  isEssential = true,
  isAdvanced = true,
  isUltimate = true,
  name = "This is some text inside of a div block.",
  desc = "This is some text inside of a div block.",
  slotPriceFeature,
  onClickChoosePlan = {},
  price = "This is some text inside of a div block.",
  isActivePlan = true,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "pricingcards")} tag="div">
      {isEssential ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "pricing-card", "is-essential")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "coach-pricing-slot")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "coaching-price-card-heading-wrapper"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text-xxxl-default")}
                tag="div"
              >
                {price}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-lg-bold")}
                tag="div"
              >
                {name}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-sm-default")}
                tag="div"
              >
                {desc}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "list-slots")}
              tag="div"
            >
              {slotPriceFeature ?? <PriceFeature />}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "button-wrapper-next")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "coach-price-button2")}
              tag="div"
            >
              <_Builtin.Block tag="div">{"Current Plan"}</_Builtin.Block>
            </_Builtin.Block>
            {isActivePlan ? (
              <_Builtin.Block
                className={_utils.cx(_styles, "coach-price-button")}
                tag="div"
                {...onClickChoosePlan}
              >
                <_Builtin.Block tag="div">{"Choose Plan"}</_Builtin.Block>
              </_Builtin.Block>
            ) : null}
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
      {isAdvanced ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "pricing-card", "is-advanced")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "coach-pricing-slot")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "coaching-price-card-heading-wrapper",
                "text-white"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text-xxxl-default")}
                tag="div"
              >
                {price}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-lg-bold")}
                tag="div"
              >
                {name}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-sm-default")}
                tag="div"
              >
                {desc}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "list-slots")}
              tag="div"
            >
              {slotPriceFeature ?? <PriceFeature />}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "button-wrapper-next")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "button-current")}
              tag="div"
            >
              <_Builtin.Block tag="div">{"Current Plan"}</_Builtin.Block>
            </_Builtin.Block>
            {isActivePlan ? (
              <_Builtin.Block
                className={_utils.cx(_styles, "button-advanced")}
                tag="div"
                {...onClickChoosePlan}
              >
                <_Builtin.Block tag="div">{"Choose Plan"}</_Builtin.Block>
              </_Builtin.Block>
            ) : null}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "most-popular-wrapper")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "text-sm-default")}
              tag="div"
            >
              {"MOSTpopular"}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
      {isUltimate ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "pricing-card", "is-ultimate")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "coach-pricing-slot")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "coaching-price-card-heading-wrapper"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text-xxxl-default")}
                tag="div"
              >
                {price}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-lg-bold")}
                tag="div"
              >
                {name}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-sm-default")}
                tag="div"
              >
                {desc}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "list-slots")}
              tag="div"
            >
              {slotPriceFeature ?? <PriceFeature />}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "button-wrapper-next")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "coach-price-button2")}
              tag="div"
            >
              <_Builtin.Block tag="div">{"Current Plan"}</_Builtin.Block>
            </_Builtin.Block>
            {isActivePlan ? (
              <_Builtin.Block
                className={_utils.cx(_styles, "coach-price-button")}
                tag="div"
                {...onClickChoosePlan}
              >
                <_Builtin.Block tag="div">{"Choose Plan"}</_Builtin.Block>
              </_Builtin.Block>
            ) : null}
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
    </_Component>
  );
}
