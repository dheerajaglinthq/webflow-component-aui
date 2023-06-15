import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { Loader } from "./Loader";
import * as _utils from "./utils";
import _styles from "./ConnectPeopleSidebar.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-73":{"id":"e-73","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-23","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-74"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"647ffce5e7e2792ad45d0f6d|d8d1e289-3034-4182-7a90-5e7693a5800a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"647ffce5e7e2792ad45d0f6d|d8d1e289-3034-4182-7a90-5e7693a5800a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686203414618},"e-81":{"id":"e-81","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-29","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-82"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"03d942f9-e86d-6a9f-0f23-fa1fbf4036f7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"03d942f9-e86d-6a9f-0f23-fa1fbf4036f7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686289070568},"e-83":{"id":"e-83","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-30","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-84"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"647ff5fb374a40bef3d73ae9|5496a19e-e4cc-2e77-f695-55f709ff12ec","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"647ff5fb374a40bef3d73ae9|5496a19e-e4cc-2e77-f695-55f709ff12ec","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686312525061},"e-85":{"id":"e-85","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-31","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-86"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"976defe7-d106-5ebb-ce11-2124b9370887","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"976defe7-d106-5ebb-ce11-2124b9370887","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686322124869},"e-202":{"id":"e-202","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-94","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-203"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9add077a-4bcb-be31-5e19-97a27cbdfd05","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"9add077a-4bcb-be31-5e19-97a27cbdfd05","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686598984347}},"actionLists":{"a-23":{"id":"a-23","title":"job-card-add-to-tracker-click 2","actionItemGroups":[{"actionItems":[{"id":"a-23-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".button.is-kale","selectorGuids":["861c86f9-b47b-5623-6db9-1058bb3a74e2","317567eb-f14f-90d8-0f95-b870950c338f"]},"value":"none"}},{"id":"a-23-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".recentlyviewedjobcard","selectorGuids":["b006c486-288d-037c-67cf-bea0d618fe89"]},"globalSwatchId":"3a86b552","rValue":248,"bValue":249,"gValue":249,"aValue":1}}]},{"actionItems":[{"id":"a-23-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"647ffce5e7e2792ad45d0f6d|d8d1e289-3034-4182-7a90-5e7693a5800a"},"value":"none"}},{"id":"a-23-n-4","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"PARENT","selector":".recentlyviewedjobcard","selectorGuids":["b006c486-288d-037c-67cf-bea0d618fe89"]},"globalSwatchId":"027c1f43","rValue":174,"bValue":194,"gValue":207,"aValue":1}},{"id":"a-23-n-5","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"PARENT","selector":".recentlyviewedjobcard","selectorGuids":["b006c486-288d-037c-67cf-bea0d618fe89"]},"globalSwatchId":"3c062f81","rValue":209,"bValue":223,"gValue":232,"aValue":1}},{"id":"a-23-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".button.is-kale","selectorGuids":["861c86f9-b47b-5623-6db9-1058bb3a74e2","317567eb-f14f-90d8-0f95-b870950c338f"]},"value":"block"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686127541696},"a-29":{"id":"a-29","title":"grow-network-click","actionItemGroups":[{"actionItems":[{"id":"a-29-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar-profiles-wrap","selectorGuids":["bf4b9627-96c4-52fc-8f53-374497c6dc0b"]},"value":"none"}}]},{"actionItems":[{"id":"a-29-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar-profiles-wrap","selectorGuids":["bf4b9627-96c4-52fc-8f53-374497c6dc0b"]},"value":"flex"}},{"id":"a-29-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".connect-sidbar","selectorGuids":["e97446d2-950b-17fc-98df-6b88d41440df"]},"value":"none"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686289095787},"a-30":{"id":"a-30","title":"job-card-add-to-tracker-click 3","actionItemGroups":[{"actionItems":[{"id":"a-30-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".button.is-kale","selectorGuids":["861c86f9-b47b-5623-6db9-1058bb3a74e2","317567eb-f14f-90d8-0f95-b870950c338f"]},"value":"none"}},{"id":"a-30-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".recentlyviewedjobcard","selectorGuids":["b006c486-288d-037c-67cf-bea0d618fe89"]},"globalSwatchId":"3a86b552","rValue":248,"bValue":249,"gValue":249,"aValue":1}}]},{"actionItems":[{"id":"a-30-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"647ff5fb374a40bef3d73ae9|5496a19e-e4cc-2e77-f695-55f709ff12ec"},"value":"none"}},{"id":"a-30-n-4","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"PARENT","selector":".recentlyviewedjobcard","selectorGuids":["b006c486-288d-037c-67cf-bea0d618fe89"]},"globalSwatchId":"027c1f43","rValue":174,"bValue":194,"gValue":207,"aValue":1}},{"id":"a-30-n-5","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"PARENT","selector":".recentlyviewedjobcard","selectorGuids":["b006c486-288d-037c-67cf-bea0d618fe89"]},"globalSwatchId":"3c062f81","rValue":209,"bValue":223,"gValue":232,"aValue":1}},{"id":"a-30-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".button.is-kale","selectorGuids":["861c86f9-b47b-5623-6db9-1058bb3a74e2","317567eb-f14f-90d8-0f95-b870950c338f"]},"value":"block"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686127541696},"a-31":{"id":"a-31","title":"job-card-add-to-tracker-click 4","actionItemGroups":[{"actionItems":[{"id":"a-31-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".button.is-kale","selectorGuids":["861c86f9-b47b-5623-6db9-1058bb3a74e2","317567eb-f14f-90d8-0f95-b870950c338f"]},"value":"none"}},{"id":"a-31-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".recentlyviewedjobcard","selectorGuids":["b006c486-288d-037c-67cf-bea0d618fe89"]},"globalSwatchId":"3a86b552","rValue":248,"bValue":249,"gValue":249,"aValue":1}}]},{"actionItems":[{"id":"a-31-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"976defe7-d106-5ebb-ce11-2124b9370887"},"value":"none"}},{"id":"a-31-n-4","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"PARENT","selector":".recentlyviewedjobcard","selectorGuids":["b006c486-288d-037c-67cf-bea0d618fe89"]},"globalSwatchId":"027c1f43","rValue":174,"bValue":194,"gValue":207,"aValue":1}},{"id":"a-31-n-5","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"PARENT","selector":".recentlyviewedjobcard","selectorGuids":["b006c486-288d-037c-67cf-bea0d618fe89"]},"globalSwatchId":"3c062f81","rValue":209,"bValue":223,"gValue":232,"aValue":1}},{"id":"a-31-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".button.is-kale","selectorGuids":["861c86f9-b47b-5623-6db9-1058bb3a74e2","317567eb-f14f-90d8-0f95-b870950c338f"]},"value":"block"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686127541696},"a-94":{"id":"a-94","title":"view-in-tracker","actionItemGroups":[{"actionItems":[{"id":"a-94-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".button.view-in-tracker","selectorGuids":["861c86f9-b47b-5623-6db9-1058bb3a74e2","ac6ffcc3-ef2a-e870-f748-4d2a3882fe71"]},"value":"none"}}]},{"actionItems":[{"id":"a-94-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".button.view-in-tracker","selectorGuids":["861c86f9-b47b-5623-6db9-1058bb3a74e2","ac6ffcc3-ef2a-e870-f748-4d2a3882fe71"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686598987806}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ConnectPeopleSidebar({
  as: _Component = _Builtin.Block,
  slotProfiles,
  skeletonVisibility = true,
  onClickGrowNetwork = {},
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "connect-sidebar-wrap")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "connect-sidbar")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "text-lg-bold", "align-lext")}
          tag="div"
        >
          {"Connect with people who can help"}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "connect-images-wrap")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "connect-block-line1-wrap")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "connect-avatar")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "image-5")}
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/6488f73359f38d1ae0621f36_0c81a41ce9f2a97569e452e11b2e2e1f.png"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "connect-line")}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "connect-avatar")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "image-5")}
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/6488f722381e141907d0df60_8b045cff3728ba621791c48f8710c485.png"
              />
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "connect-block-line2")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "connect-line", "_2")}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "connect-avatar")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "image-5")}
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/6488f73c381e141907d105de_2378c9c454b941d6a0babbb950441562.png"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "connect-line", "_3")}
              tag="div"
            />
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "all-profiles-image-wrap")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "all-profile-image")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "relative")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "width-334")}
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/6489849b8024709235fc4960_Gradient%20and%20sidebar.png"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "gradient-left")}
                tag="div"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "gradient-right")}
                tag="div"
              />
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "network-button-wrap")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "button", "is-green")}
              data-w-id="03d942f9-e86d-6a9f-0f23-fa1fbf4036f7"
              tag="div"
              {...onClickGrowNetwork}
            >
              <_Builtin.Image
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/6480adc68b3db6d220ed1734/6480b171250885143cefd139_network.svg"
              />
              <_Builtin.Block tag="div">{"Grow your Network"}</_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "sidebar-profiles-wrap")}
        id={_utils.cx(
          _styles,
          "w-node-b5884071-ad49-ba27-5749-a26320473d9f-bf4036e5"
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "profile-sidebar-stack")}
          id={_utils.cx(
            _styles,
            "w-node-_23c503fc-9337-ea79-65b6-ed416d24c24c-bf4036e5"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "header-wrap")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "text-xl-bold")}
              tag="div"
            >
              {"All Profiles"}
            </_Builtin.Block>
            <_Builtin.Block className={_utils.cx(_styles, "text-md")} tag="div">
              {
                "Please find profiles of individuals with similar titles and duties as this job. We are also including profiles for HR and Recruiting individuals whom you may want to network with. Our suggestion is to reach out to a few of these individuals and find out more about this job opportunity before applying for the job."
              }
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "stack-column")}
            tag="div"
          >
            {slotProfiles}
          </_Builtin.Block>
          {skeletonVisibility ? (
            <_Builtin.Block
              className={_utils.cx(_styles, "stack-column")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "profile-card")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "profile-card-content-wrap")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-lg-skeleton")}
                    tag="div"
                  >
                    {"Mikalyn Reif"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "text-md-skeleton",
                      "line-clamp-1"
                    )}
                    tag="div"
                  >
                    {"A Development Executive"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "icon-buttons-wrap")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "iconbutton-skeleton")}
                    tag="div"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "iconbutton-skeleton")}
                    tag="div"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "profile-card")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "profile-card-content-wrap")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-lg-skeleton")}
                    tag="div"
                  >
                    {"Mikalyn Reif"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "text-md-skeleton",
                      "line-clamp-1"
                    )}
                    tag="div"
                  >
                    {"A Development Executive"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "icon-buttons-wrap")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "iconbutton-skeleton")}
                    tag="div"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "iconbutton-skeleton")}
                    tag="div"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "profile-card")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "profile-card-content-wrap")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-lg-skeleton")}
                    tag="div"
                  >
                    {"Mikalyn Reif"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "text-md-skeleton",
                      "line-clamp-1"
                    )}
                    tag="div"
                  >
                    {"A Development Executive"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "icon-buttons-wrap")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "iconbutton-skeleton")}
                    tag="div"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "iconbutton-skeleton")}
                    tag="div"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "profile-card")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "profile-card-content-wrap")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-lg-skeleton")}
                    tag="div"
                  >
                    {"Mikalyn Reif"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "text-md-skeleton",
                      "line-clamp-1"
                    )}
                    tag="div"
                  >
                    {"A Development Executive"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "icon-buttons-wrap")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "iconbutton-skeleton")}
                    tag="div"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "iconbutton-skeleton")}
                    tag="div"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "profile-card")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "profile-card-content-wrap")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-lg-skeleton")}
                    tag="div"
                  >
                    {"Mikalyn Reif"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "text-md-skeleton",
                      "line-clamp-1"
                    )}
                    tag="div"
                  >
                    {"A Development Executive"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "icon-buttons-wrap")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "iconbutton-skeleton")}
                    tag="div"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "iconbutton-skeleton")}
                    tag="div"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "profile-card")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "profile-card-content-wrap")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-lg-skeleton")}
                    tag="div"
                  >
                    {"Mikalyn Reif"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "text-md-skeleton",
                      "line-clamp-1"
                    )}
                    tag="div"
                  >
                    {"A Development Executive"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "icon-buttons-wrap")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "iconbutton-skeleton")}
                    tag="div"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "iconbutton-skeleton")}
                    tag="div"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "profile-card")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "profile-card-content-wrap")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-lg-skeleton")}
                    tag="div"
                  >
                    {"Mikalyn Reif"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "text-md-skeleton",
                      "line-clamp-1"
                    )}
                    tag="div"
                  >
                    {"A Development Executive"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "icon-buttons-wrap")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "iconbutton-skeleton")}
                    tag="div"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "iconbutton-skeleton")}
                    tag="div"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "loader-absolute")}
                tag="div"
              >
                <Loader />
              </_Builtin.Block>
            </_Builtin.Block>
          ) : null}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
