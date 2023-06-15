import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./CoachCard.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-107":{"id":"e-107","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-39","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-108"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"09de66b3-932c-ef87-f1e2-f0a698dc36ae","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"09de66b3-932c-ef87-f1e2-f0a698dc36ae","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686380874105},"e-108":{"id":"e-108","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-40","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-107"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"09de66b3-932c-ef87-f1e2-f0a698dc36ae","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"09de66b3-932c-ef87-f1e2-f0a698dc36ae","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686380874106},"e-109":{"id":"e-109","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-41","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-110"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"841ee67d-759c-ce20-419c-3b9a0c11e20f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"841ee67d-759c-ce20-419c-3b9a0c11e20f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686395128250},"e-110":{"id":"e-110","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-42","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-109"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"841ee67d-759c-ce20-419c-3b9a0c11e20f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"841ee67d-759c-ce20-419c-3b9a0c11e20f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686395128251}},"actionLists":{"a-39":{"id":"a-39","title":"coach card [hover in]","actionItemGroups":[{"actionItems":[{"id":"a-39-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".coach-button-move","selectorGuids":["4fc71a1a-41ec-87c5-f2bd-59160f2d7358"]},"yValue":100,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-39-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".coach-button-move","selectorGuids":["4fc71a1a-41ec-87c5-f2bd-59160f2d7358"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686380877084},"a-40":{"id":"a-40","title":"coach card [hover out]","actionItemGroups":[{"actionItems":[{"id":"a-40-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".coach-button-move","selectorGuids":["4fc71a1a-41ec-87c5-f2bd-59160f2d7358"]},"yValue":100,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686380877084},"a-41":{"id":"a-41","title":"profile [expand]","actionItemGroups":[{"actionItems":[{"id":"a-41-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".profile-desccription","selectorGuids":["4542c770-9604-d6de-f50e-1a41462c4c54"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-41-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".embed-flex","selectorGuids":["52fed630-20a7-0da5-bc89-35c4f4847d44"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-41-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".profile-desccription","selectorGuids":["4542c770-9604-d6de-f50e-1a41462c4c54"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-41-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".embed-flex","selectorGuids":["52fed630-20a7-0da5-bc89-35c4f4847d44"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686395132149},"a-42":{"id":"a-42","title":"profile [collapse]","actionItemGroups":[{"actionItems":[{"id":"a-42-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".profile-desccription","selectorGuids":["4542c770-9604-d6de-f50e-1a41462c4c54"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-42-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".embed-flex","selectorGuids":["52fed630-20a7-0da5-bc89-35c4f4847d44"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686395132149}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function CoachCard({
  as: _Component = _Builtin.Block,
  coachImage = "",
  coachName = "COACH NAME",
  isSelected = true,
  isImage = true,
  onClickViewProfile = {},
  onClickCoach = {},
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "coach-card")}
      data-w-id="09de66b3-932c-ef87-f1e2-f0a698dc36ae"
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "coach-image")}
        tag="div"
        {...onClickCoach}
      >
        {isImage ? (
          <_Builtin.Image
            className={_utils.cx(_styles, "cover-image")}
            loading="lazy"
            width="auto"
            height="auto"
            src={coachImage}
          />
        ) : null}
        <_Builtin.Image
          className={_utils.cx(_styles, "cover-image-empty")}
          loading="lazy"
          width="auto"
          height="auto"
          src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64841d40a7baf73f865a69d2_user.png"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "coach-checkbox")}
          tag="div"
        >
          {isSelected ? (
            <_Builtin.Block
              className={_utils.cx(_styles, "coach-selected")}
              tag="div"
              {...onClickCoach}
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "embed-flex")}
                value="%3Csvg%20width%3D%228%22%20height%3D%226%22%20viewBox%3D%220%200%208%206%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M3%203.58579L6.29289%200.292893C6.68342%20-0.0976311%207.31658%20-0.0976311%207.70711%200.292893C8.09763%200.683418%208.09763%201.31658%207.70711%201.70711L3.70711%205.70711C3.31658%206.09763%202.68342%206.09763%202.29289%205.70711L0.292893%203.70711C-0.0976311%203.31658%20-0.0976311%202.68342%200.292893%202.29289C0.683418%201.90237%201.31658%201.90237%201.70711%202.29289L3%203.58579Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.Block>
          ) : null}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "coach-buttons")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "coach-button-move")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "hover-button-link")}
              tag="div"
              id="test"
              {...onClickViewProfile}
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "hover-button-text")}
                tag="div"
              >
                {"View Profile"}
              </_Builtin.Block>
              {isSelected ? (
                <_Builtin.Block
                  className={_utils.cx(_styles, "hover-button-success")}
                  tag="div"
                />
              ) : null}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "coach-name")}
        tag="div"
        {...onClickViewProfile}
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "text-md-bold")}
          tag="div"
        >
          {coachName}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "coach-card-bg")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "not-selected")}
          tag="div"
        />
        {isSelected ? (
          <_Builtin.Block className={_utils.cx(_styles, "selcted")} tag="div" />
        ) : null}
      </_Builtin.Block>
    </_Component>
  );
}
