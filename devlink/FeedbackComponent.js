import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./FeedbackComponent.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-115":{"id":"e-115","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-49","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-116"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"839e4c67-e02f-e22b-213c-d85287230c9d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"839e4c67-e02f-e22b-213c-d85287230c9d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686408053559},"e-119":{"id":"e-119","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-51","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-120"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".feedback-option","originalId":"839e4c67-e02f-e22b-213c-d85287230cae","appliesTo":"CLASS"},"targets":[{"selector":".feedback-option","originalId":"839e4c67-e02f-e22b-213c-d85287230cae","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686407839441},"e-121":{"id":"e-121","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-122"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"839e4c67-e02f-e22b-213c-d85287230cc3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"839e4c67-e02f-e22b-213c-d85287230cc3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686407939017},"e-123":{"id":"e-123","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-50","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-124"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"839e4c67-e02f-e22b-213c-d85287230ca9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"839e4c67-e02f-e22b-213c-d85287230ca9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686410853867},"e-125":{"id":"e-125","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-51","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-126"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".feedback","originalId":"839e4c67-e02f-e22b-213c-d85287230cae","appliesTo":"CLASS"},"targets":[{"selector":".feedback","originalId":"839e4c67-e02f-e22b-213c-d85287230cae","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686411067365}},"actionLists":{"a-49":{"id":"a-49","title":"feedback-form-popup-close","actionItemGroups":[{"actionItems":[{"id":"a-49-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".feedback-popup-wrap","selectorGuids":["a35c79b1-30a4-56ac-175b-59a1e0e77a12"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686407844025},"a-51":{"id":"a-51","title":"feedback-form-popup-open","actionItemGroups":[{"actionItems":[{"id":"a-51-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".feedback-popup-wrap","selectorGuids":["a35c79b1-30a4-56ac-175b-59a1e0e77a12"]},"value":"none"}}]},{"actionItems":[{"id":"a-51-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".feedback-popup-wrap","selectorGuids":["a35c79b1-30a4-56ac-175b-59a1e0e77a12"]},"value":"flex"}},{"id":"a-51-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".feedback-dropdown","selectorGuids":["a35c79b1-30a4-56ac-175b-59a1e0e77a13"]},"value":"none"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686407844025},"a-52":{"id":"a-52","title":"feedback-dropdown-close","actionItemGroups":[{"actionItems":[{"id":"a-52-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".feedback-dropdown","selectorGuids":["a35c79b1-30a4-56ac-175b-59a1e0e77a13"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686406370534},"a-50":{"id":"a-50","title":"feedback-dropdown-open","actionItemGroups":[{"actionItems":[{"id":"a-50-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".feedback-dropdown","selectorGuids":["a35c79b1-30a4-56ac-175b-59a1e0e77a13"]},"value":"none"}}]},{"actionItems":[{"id":"a-50-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".feedback-dropdown","selectorGuids":["a35c79b1-30a4-56ac-175b-59a1e0e77a13"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686406370534}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function FeedbackComponent({
  as: _Component = _Builtin.Block,
  slotForm,
  onClickSubmit = {},
  isSuccess = false,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "feeback-component")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "feedback-popup-wrap")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "", "feed-back-popup-content")}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "close-feedback-form")}
            data-w-id="839e4c67-e02f-e22b-213c-d85287230c9d"
            loading="lazy"
            width="auto"
            height="auto"
            src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/648498d5b16b04a759e298a4__X%20-%2016px%20icon.svg"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "text-xl-bold", "text-align-center")}
            tag="div"
          >
            {"Let us know more"}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "popup-form")}
            tag="div"
          >
            {slotForm}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "feedback-submit-btn")}
            tag="div"
            {...onClickSubmit}
          >
            <_Builtin.Block tag="div">{"Submit"}</_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Image
            className={_utils.cx(_styles, "feedback-back-icon")}
            loading="lazy"
            width="auto"
            height="auto"
            src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/648498aca046a6a8342a578d_back.svg"
          />
          {isSuccess ? (
            <_Builtin.Block
              className={_utils.cx(_styles, "feedback-success-state")}
              tag="div"
            >
              <_Builtin.Block className={_utils.cx(_styles, "yay")} tag="div">
                {"🎉"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-lg-bold")}
                tag="div"
              >
                {"Thanks for your feeback."}
              </_Builtin.Block>
            </_Builtin.Block>
          ) : null}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "feedback-button")}
        data-w-id="839e4c67-e02f-e22b-213c-d85287230ca9"
        tag="div"
      >
        <_Builtin.Image
          loading="lazy"
          width="auto"
          height="auto"
          src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/648465fa0a4bc46d315afde0_Vectors-Wrapper.svg"
        />
        <_Builtin.Block tag="div">{"Feedback"}</_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "feedback-dropdown")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "feedback")} tag="div">
          <_Builtin.Image
            className={_utils.cx(_styles, "icon-24x24")}
            loading="lazy"
            width="auto"
            height="auto"
            src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/648464217cded92753e6e9c9_Vectors-Wrapper.svg"
          />
          <_Builtin.Block tag="div">
            <_Builtin.Block tag="div">{"Report Bug"}</_Builtin.Block>
            <_Builtin.Block tag="div">
              {"Let us know what is broken."}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "feedback")} tag="div">
          <_Builtin.Image
            className={_utils.cx(_styles, "icon-24x24")}
            loading="lazy"
            width="auto"
            height="auto"
            src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64846422989b9b2fe9968bc4_Vectors-Wrapper.svg"
          />
          <_Builtin.Block tag="div">
            <_Builtin.Block tag="div">{"Feature Request"}</_Builtin.Block>
            <_Builtin.Block tag="div">{"Let us improve."}</_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "feedback")} tag="div">
          <_Builtin.Image
            className={_utils.cx(_styles, "icon-24x24")}
            loading="lazy"
            width="auto"
            height="auto"
            src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/648464231da4e87db9aecf48_Vectors-Wrapper.svg"
          />
          <_Builtin.Block tag="div">
            <_Builtin.Block tag="div">{"General feedback"}</_Builtin.Block>
            <_Builtin.Block tag="div">
              {"Give General feedback on this page"}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Image
          className={_utils.cx(_styles, "feedback-close")}
          data-w-id="839e4c67-e02f-e22b-213c-d85287230cc3"
          loading="lazy"
          width="auto"
          height="auto"
          src="https://uploads-ssl.webflow.com/6480adc68b3db6d220ed1734/64818586ddb9563d1f9740bf_close.svg"
        />
      </_Builtin.Block>
    </_Component>
  );
}
