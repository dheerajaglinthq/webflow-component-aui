import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./FinalScreenIvFlow.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-109":{"id":"e-109","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-41","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-110"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"841ee67d-759c-ce20-419c-3b9a0c11e20f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"841ee67d-759c-ce20-419c-3b9a0c11e20f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686395128250},"e-110":{"id":"e-110","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-42","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-109"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"841ee67d-759c-ce20-419c-3b9a0c11e20f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"841ee67d-759c-ce20-419c-3b9a0c11e20f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686395128251}},"actionLists":{"a-41":{"id":"a-41","title":"profile [expand]","actionItemGroups":[{"actionItems":[{"id":"a-41-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".profile-desccription","selectorGuids":["4542c770-9604-d6de-f50e-1a41462c4c54"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-41-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".embed-flex","selectorGuids":["52fed630-20a7-0da5-bc89-35c4f4847d44"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-41-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".profile-desccription","selectorGuids":["4542c770-9604-d6de-f50e-1a41462c4c54"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-41-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".embed-flex","selectorGuids":["52fed630-20a7-0da5-bc89-35c4f4847d44"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686395132149},"a-42":{"id":"a-42","title":"profile [collapse]","actionItemGroups":[{"actionItems":[{"id":"a-42-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".profile-desccription","selectorGuids":["4542c770-9604-d6de-f50e-1a41462c4c54"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-42-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".embed-flex","selectorGuids":["52fed630-20a7-0da5-bc89-35c4f4847d44"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686395132149}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function FinalScreenIvFlow({
  as: _Component = _Builtin.Block,
  finalTitle = "Let's begin your interview preparation for the UI/UX Designer position at Google.",
  finalDescrition = "During this session, you'll be asked questions about your UI/UX skills, including proficiency in Figma, Wireframing, and Miro, as well as your past project experiences.",
  onClickBegin = {},
  slotSkills,
  onClickBack = {},
  showSkillWarning = true,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "final-screen")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "container-940")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "position-component")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "position-left-wrapper")}
            id={_utils.cx(
              _styles,
              "w-node-_5561b36e-9122-9916-dfe8-df186b31b8b6-6b31b8b3"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "back-button", "marfin-bottom-40")}
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
            <_Builtin.Block
              className={_utils.cx(_styles, "final-heading-wrap")}
              tag="div"
            >
              <_Builtin.Block tag="div">{finalTitle}</_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "est-wrapper")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "est-item")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "est-time")}
                  tag="div"
                >
                  <_Builtin.Block tag="div">
                    <_Builtin.Image
                      loading="lazy"
                      width="auto"
                      height="auto"
                      src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64820ff84e6c35a26e842ada_Time%20Zone%20token.svg"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block tag="div">
                    <_Builtin.Block
                      className={_utils.cx(_styles, "title")}
                      tag="div"
                    >
                      {"Estimated Time"}
                    </_Builtin.Block>
                    <_Builtin.Block tag="div">{"30 Miniutes"}</_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "div-block-17")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "est-item")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "est-time")}
                    tag="div"
                  >
                    <_Builtin.Image
                      loading="lazy"
                      width="auto"
                      height="auto"
                      src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64820ff84e6c35a26e842adb_Flag%20-%2016px%20icon.svg"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "title")}
                      tag="div"
                    >
                      {"Skills"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "slot-skills")}
                    tag="div"
                  >
                    {slotSkills}
                  </_Builtin.Block>
                </_Builtin.Block>
                {showSkillWarning ? (
                  <_Builtin.Block
                    className={_utils.cx(_styles, "skill-wraring")}
                    tag="div"
                  >
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "embed-flex")}
                      value="%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M7.5%206C8.05228%206%208.5%205.55228%208.5%205C8.5%204.44772%208.05228%204%207.5%204C6.94772%204%206.5%204.44772%206.5%205C6.5%205.55228%206.94772%206%207.5%206ZM7.5%2013C7.77614%2013%208%2012.7761%208%2012.5V8C8%207.72386%207.77614%207.5%207.5%207.5C7.22386%207.5%207%207.72386%207%208V12.5C7%2012.7761%207.22386%2013%207.5%2013ZM7.5%2016C3.35786%2016%200%2012.6421%200%208.5C0%204.35786%203.35786%201%207.5%201C11.6421%201%2015%204.35786%2015%208.5C15%2012.6421%2011.6421%2016%207.5%2016ZM7.5%2015C11.0899%2015%2014%2012.0899%2014%208.5C14%204.91015%2011.0899%202%207.5%202C3.91015%202%201%204.91015%201%208.5C1%2012.0899%203.91015%2015%207.5%2015Z%22%20fill%3D%22%23AD5918%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                    <_Builtin.Block tag="div">
                      {"Minimum 3 skills required"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                ) : null}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "position-description-wrapper")}
              tag="div"
            >
              <_Builtin.Paragraph>{finalDescrition}</_Builtin.Paragraph>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-9")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "begin-button")}
                tag="div"
                {...onClickBegin}
              >
                {"Lets Begin"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "tips-wrapper")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "tips-title")}
                tag="div"
              >
                {"Tips"}
              </_Builtin.Block>
              <_Builtin.List
                className={_utils.cx(_styles, "list")}
                tag="ul"
                unstyled={false}
              >
                <_Builtin.ListItem>
                  {"Norem ipsum dolor sit amet, consectetur adipiscing elit."}
                </_Builtin.ListItem>
                <_Builtin.ListItem>
                  {"Rorem ipsum dolor sit amet, consectetur"}
                </_Builtin.ListItem>
                <_Builtin.ListItem>
                  {
                    "Borem ipsum dolor sit amet adipiscing elit., consectetur adipiscing elit."
                  }
                </_Builtin.ListItem>
              </_Builtin.List>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "position-image-wrapper")}
            id={_utils.cx(
              _styles,
              "w-node-_5561b36e-9122-9916-dfe8-df186b31b8db-6b31b8b3"
            )}
            tag="div"
          >
            <_Builtin.Image
              loading="lazy"
              width="auto"
              height="auto"
              src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/6484baef04d267c20f95ee59_lastlillus.png"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
