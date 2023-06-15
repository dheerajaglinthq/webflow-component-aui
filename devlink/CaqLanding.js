import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./CaqLanding.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-232":{"id":"e-232","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-111","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-233"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4722c42d-6350-873a-5cf0-2cbf29527a22","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4722c42d-6350-873a-5cf0-2cbf29527a22","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686830376325},"e-233":{"id":"e-233","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-112","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-232"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4722c42d-6350-873a-5cf0-2cbf29527a22","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4722c42d-6350-873a-5cf0-2cbf29527a22","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686830376326}},"actionLists":{"a-111":{"id":"a-111","title":"PRO-FEATURE","actionItemGroups":[{"actionItems":[{"id":"a-111-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".primary-button.book-a-call-btn","selectorGuids":["ceb0f0d4-02c9-a28d-0553-ef569b624fe5","4f6c5085-8a96-f3a6-77ae-884f831bc9ef"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-111-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".primary-button.book-a-call-btn","selectorGuids":["ceb0f0d4-02c9-a28d-0553-ef569b624fe5","4f6c5085-8a96-f3a6-77ae-884f831bc9ef"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686830379350},"a-112":{"id":"a-112","title":"PRO-FEATURE 2","actionItemGroups":[{"actionItems":[{"id":"a-112-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".primary-button.book-a-call-btn","selectorGuids":["ceb0f0d4-02c9-a28d-0553-ef569b624fe5","4f6c5085-8a96-f3a6-77ae-884f831bc9ef"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686830379350}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function CaqLanding({
  as: _Component = _Builtin.Block,
  slotFilters,
  onClickBack = {},
  onClickContunue = {},
  isButtonDisabled = true,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "caq-wrapper")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "commonly-asked-questions")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-10")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "back-link", "margin-top-0")}
            tag="div"
            {...onClickBack}
          >
            <_Builtin.Image
              loading="lazy"
              width="auto"
              height="auto"
              src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64820ff84e6c35a26e842ad5_Start%20icon%20-%2016px.svg"
            />
            <_Builtin.Block tag="div">{"Back"}</_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "caq-content-wrap")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "text-xxl-bold")}
            tag="div"
          >
            {"Commonly Asked Questions"}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "text-md-default", "text-color-grey")}
            tag="div"
          >
            {
              "Please provide your desired job title and experience level. This will enable us to tailor the commonly asked questions to suit your specific role and level of expertise."
            }
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "caq-filters-slot")}
            tag="div"
          >
            {slotFilters}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "button-flex")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "button-relative")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "primary-button", "is-active")}
                tag="div"
                {...onClickContunue}
              >
                <_Builtin.Block tag="div">{"Continue"}</_Builtin.Block>
              </_Builtin.Block>
              {isButtonDisabled ? (
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "primary-button",
                    "is-disabled"
                  )}
                  tag="div"
                >
                  <_Builtin.Block tag="div">{"Continue"}</_Builtin.Block>
                </_Builtin.Block>
              ) : null}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
