import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./OnBoarding.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-143":{"id":"e-143","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-54","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-144"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"451a3141-0249-d17a-90a3-b76d0688fef3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"451a3141-0249-d17a-90a3-b76d0688fef3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686481255066},"e-145":{"id":"e-145","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-55","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-146"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"451a3141-0249-d17a-90a3-b76d0688fefb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"451a3141-0249-d17a-90a3-b76d0688fefb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686481977828},"e-147":{"id":"e-147","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-55","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-148"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"451a3141-0249-d17a-90a3-b76d0688ff01","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"451a3141-0249-d17a-90a3-b76d0688ff01","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686481625976},"e-149":{"id":"e-149","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-56","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-150"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"451a3141-0249-d17a-90a3-b76d0688ff0e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"451a3141-0249-d17a-90a3-b76d0688ff0e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686480709234},"e-150":{"id":"e-150","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-57","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-149"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"451a3141-0249-d17a-90a3-b76d0688ff0e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"451a3141-0249-d17a-90a3-b76d0688ff0e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686480709235}},"actionLists":{"a-54":{"id":"a-54","title":"onboard-click","actionItemGroups":[{"actionItems":[{"id":"a-54-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".onboarding-pop-up","selectorGuids":["e880faf2-6bdd-e3c8-2ece-4056e2d4cb9d"]},"value":0,"unit":""}},{"id":"a-54-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".onboarding-popup-card","selectorGuids":["e880faf2-6bdd-e3c8-2ece-4056e2d4cba1"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-54-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".onboarding-pop-up","selectorGuids":["e880faf2-6bdd-e3c8-2ece-4056e2d4cb9d"]},"value":"none"}}]},{"actionItems":[{"id":"a-54-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".onboarding-pop-up","selectorGuids":["e880faf2-6bdd-e3c8-2ece-4056e2d4cb9d"]},"value":1,"unit":""}},{"id":"a-54-n-5","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".separator","selectorGuids":["e880faf2-6bdd-e3c8-2ece-4056e2d4cba3"]},"globalSwatchId":"e42b2e06","rValue":47,"bValue":65,"gValue":57,"aValue":1}},{"id":"a-54-n-6","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":true,"id":"451a3141-0249-d17a-90a3-b76d0688fef3"},"globalSwatchId":"e42b2e06","rValue":47,"bValue":65,"gValue":57,"aValue":1}},{"id":"a-54-n-7","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":true,"id":"451a3141-0249-d17a-90a3-b76d0688fef3"},"globalSwatchId":"80449ce7","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-54-n-8","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outExpo","duration":800,"target":{"selector":".onboarding-popup-card","selectorGuids":["e880faf2-6bdd-e3c8-2ece-4056e2d4cba1"]},"heightValue":600,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-54-n-9","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".onboarding-pop-up","selectorGuids":["e880faf2-6bdd-e3c8-2ece-4056e2d4cb9d"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686481259712},"a-55":{"id":"a-55","title":"onboard-click close","actionItemGroups":[{"actionItems":[{"id":"a-55-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":600,"target":{"selector":".onboarding-pop-up","selectorGuids":["e880faf2-6bdd-e3c8-2ece-4056e2d4cb9d"]},"value":0,"unit":""}},{"id":"a-55-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"ease","duration":400,"target":{"selector":".separator","selectorGuids":["e880faf2-6bdd-e3c8-2ece-4056e2d4cba3"]},"globalSwatchId":"80449ce7","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-55-n-3","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":400,"target":{"selector":".onboarding","selectorGuids":["e880faf2-6bdd-e3c8-2ece-4056e2d4cb96"]},"globalSwatchId":"80449ce7","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-55-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"ease","duration":400,"target":{"selector":".onboarding","selectorGuids":["e880faf2-6bdd-e3c8-2ece-4056e2d4cb96"]},"globalSwatchId":"e42b2e06","rValue":47,"bValue":65,"gValue":57,"aValue":1}},{"id":"a-55-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outExpo","duration":1000,"target":{"selector":".onboarding-popup-card","selectorGuids":["e880faf2-6bdd-e3c8-2ece-4056e2d4cba1"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-55-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":1000,"easing":"","duration":0,"target":{"selector":".onboarding-pop-up","selectorGuids":["e880faf2-6bdd-e3c8-2ece-4056e2d4cb9d"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686481259712},"a-56":{"id":"a-56","title":"onboard-sub-card-hover In","actionItemGroups":[{"actionItems":[{"id":"a-56-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":true,"id":"451a3141-0249-d17a-90a3-b76d0688ff0e"},"globalSwatchId":"d2a1a159","rValue":237,"bValue":255,"gValue":247,"aValue":1}},{"id":"a-56-n-2","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":true,"id":"451a3141-0249-d17a-90a3-b76d0688ff0e"},"globalSwatchId":"2a96c522","rValue":173,"bValue":228,"gValue":204,"aValue":1}},{"id":"a-56-n-3","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".onboard-start-button","selectorGuids":["e880faf2-6bdd-e3c8-2ece-4056e2d4cb99"]},"globalSwatchId":"80449ce7","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-56-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".onboard-start-button","selectorGuids":["e880faf2-6bdd-e3c8-2ece-4056e2d4cb99"]},"globalSwatchId":"e42b2e06","rValue":47,"bValue":65,"gValue":57,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686480713096},"a-57":{"id":"a-57","title":"onboard-sub-card-hover Out","actionItemGroups":[{"actionItems":[{"id":"a-57-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":true,"id":"451a3141-0249-d17a-90a3-b76d0688ff0e"},"globalSwatchId":"3a86b552","rValue":248,"bValue":249,"gValue":249,"aValue":1}},{"id":"a-57-n-2","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":true,"id":"451a3141-0249-d17a-90a3-b76d0688ff0e"},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":0}},{"id":"a-57-n-3","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".onboard-start-button","selectorGuids":["e880faf2-6bdd-e3c8-2ece-4056e2d4cb99"]},"globalSwatchId":"e42b2e06","rValue":47,"bValue":65,"gValue":57,"aValue":1}},{"id":"a-57-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".onboard-start-button","selectorGuids":["e880faf2-6bdd-e3c8-2ece-4056e2d4cb99"]},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":0}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686480713096}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function OnBoarding({
  as: _Component = _Builtin.Block,
  slotOnBoardingCard,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "all-onboarding-wrapper")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "onboarding-wrapper-2")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "onboarding")}
          data-w-id="451a3141-0249-d17a-90a3-b76d0688fef3"
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "text-md-bold")}
            tag="div"
          >
            {"Onboarding"}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "separator")}
            tag="div"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "text-md-bold")}
            tag="div"
          >
            {"25%complete"}
          </_Builtin.Block>
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "onboard-threedot")}
            value="%3Csvg%20width%3D%224%22%20height%3D%2212%22%20viewBox%3D%220%200%204%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M3.5%201.5C3.5%202.32843%202.82843%203%202%203C1.17157%203%200.5%202.32843%200.5%201.5C0.5%200.671573%201.17157%200%202%200C2.82843%200%203.5%200.671573%203.5%201.5ZM3.5%2010.5C3.5%2011.3284%202.82843%2012%202%2012C1.17157%2012%200.5%2011.3284%200.5%2010.5C0.5%209.67157%201.17157%209%202%209C2.82843%209%203.5%209.67157%203.5%2010.5ZM3.5%206C3.5%206.82843%202.82843%207.5%202%207.5C1.17157%207.5%200.5%206.82843%200.5%206C0.5%205.17157%201.17157%204.5%202%204.5C2.82843%204.5%203.5%205.17157%203.5%206Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
          />
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "onboarding-pop-up")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "onboarding-bg-popup")}
          data-w-id="451a3141-0249-d17a-90a3-b76d0688fefb"
          tag="div"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "onboarding-popup-card")}
          tag="div"
        >
          <_Builtin.Block tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "onboarding-header-wrapper")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text-md-bold")}
                tag="div"
              >
                {"This is some text inside of a div block."}
              </_Builtin.Block>
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "onboard-drop-icon")}
                data-w-id="451a3141-0249-d17a-90a3-b76d0688ff01"
                value="%3Csvg%20width%3D%2210%22%20height%3D%226%22%20viewBox%3D%220%200%2010%206%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M0.292893%200.292893C0.653377%20-0.0675907%201.22061%20-0.0953203%201.6129%200.209705L1.70711%200.292893L5%203.585L8.29289%200.292893C8.65338%20-0.0675907%209.22061%20-0.0953203%209.6129%200.209705L9.70711%200.292893C10.0676%200.653377%2010.0953%201.22061%209.7903%201.6129L9.70711%201.70711L5.70711%205.70711C5.34662%206.06759%204.77939%206.09532%204.3871%205.7903L4.29289%205.70711L0.292893%201.70711C-0.0976311%201.31658%20-0.0976311%200.683418%200.292893%200.292893Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "onboard-line")}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "onboard-card-header")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "onboard-card-left")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-lg-bold")}
                  tag="div"
                >
                  {"This is some text inside of a div block."}
                </_Builtin.Block>
                <_Builtin.Block tag="div">
                  {"This is some text inside of a div block."}
                </_Builtin.Block>
                <_Builtin.Link
                  className={_utils.cx(_styles, "onboard-invite")}
                  button={false}
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block tag="div">{"Invite"}</_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "profile-onboard")}
                tag="div"
              />
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "onboarding-card-slots")}
            tag="div"
          >
            {slotOnBoardingCard ?? (
              <_Builtin.Block
                className={_utils.cx(_styles, "onboarding-sub-card")}
                data-w-id="451a3141-0249-d17a-90a3-b76d0688ff0e"
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "onboard-subcarad-name-wrapper"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "onboarding-sub-card-profile"
                    )}
                    tag="div"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-md-default")}
                    tag="div"
                  >
                    {"This is some text inside of a div block."}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Link
                  className={_utils.cx(_styles, "onboard-start-button")}
                  button={true}
                  options={{
                    href: "#",
                  }}
                >
                  {"Start"}
                </_Builtin.Link>
              </_Builtin.Block>
            )}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
