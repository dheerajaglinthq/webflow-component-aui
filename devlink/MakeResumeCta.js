import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { Loader } from "./Loader";
import * as _utils from "./utils";
import _styles from "./MakeResumeCta.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-51":{"id":"e-51","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-93"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"680357f5-7f0c-4520-7447-4c2ae79e95a3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"680357f5-7f0c-4520-7447-4c2ae79e95a3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686145699597},"e-73":{"id":"e-73","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-23","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-74"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"647ffce5e7e2792ad45d0f6d|d8d1e289-3034-4182-7a90-5e7693a5800a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"647ffce5e7e2792ad45d0f6d|d8d1e289-3034-4182-7a90-5e7693a5800a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686203414618},"e-83":{"id":"e-83","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-30","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-84"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"647ff5fb374a40bef3d73ae9|5496a19e-e4cc-2e77-f695-55f709ff12ec","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"647ff5fb374a40bef3d73ae9|5496a19e-e4cc-2e77-f695-55f709ff12ec","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686312525061},"e-85":{"id":"e-85","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-31","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-86"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"976defe7-d106-5ebb-ce11-2124b9370887","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"976defe7-d106-5ebb-ce11-2124b9370887","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686322124869},"e-109":{"id":"e-109","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-41","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-110"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"841ee67d-759c-ce20-419c-3b9a0c11e20f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"841ee67d-759c-ce20-419c-3b9a0c11e20f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686395128250},"e-110":{"id":"e-110","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-42","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-109"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"841ee67d-759c-ce20-419c-3b9a0c11e20f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"841ee67d-759c-ce20-419c-3b9a0c11e20f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686395128251},"e-192":{"id":"e-192","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-83","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-193"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b10b90ab-33b9-421e-9959-b40bc765d1eb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b10b90ab-33b9-421e-9959-b40bc765d1eb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686562740254},"e-202":{"id":"e-202","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-94","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-203"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9add077a-4bcb-be31-5e19-97a27cbdfd05","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"9add077a-4bcb-be31-5e19-97a27cbdfd05","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686598984347}},"actionLists":{"a-18":{"id":"a-18","title":"do-it-later","actionItemGroups":[{"actionItems":[{"id":"a-18-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".do-later-content-wrap","selectorGuids":["61e51a9a-3e31-5744-374f-41a318bc3f59"]},"value":"none"}}]},{"actionItems":[{"id":"a-18-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".make-resume-suggestion-content","selectorGuids":["e06cc50a-154e-5130-5c79-e111091ad904"]},"value":"none"}},{"id":"a-18-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".do-later-content-wrap","selectorGuids":["61e51a9a-3e31-5744-374f-41a318bc3f59"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686145710870},"a-23":{"id":"a-23","title":"job-card-add-to-tracker-click 2","actionItemGroups":[{"actionItems":[{"id":"a-23-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".button.is-kale","selectorGuids":["861c86f9-b47b-5623-6db9-1058bb3a74e2","317567eb-f14f-90d8-0f95-b870950c338f"]},"value":"none"}},{"id":"a-23-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".recentlyviewedjobcard","selectorGuids":["b006c486-288d-037c-67cf-bea0d618fe89"]},"globalSwatchId":"3a86b552","rValue":248,"bValue":249,"gValue":249,"aValue":1}}]},{"actionItems":[{"id":"a-23-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"647ffce5e7e2792ad45d0f6d|d8d1e289-3034-4182-7a90-5e7693a5800a"},"value":"none"}},{"id":"a-23-n-4","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"PARENT","selector":".recentlyviewedjobcard","selectorGuids":["b006c486-288d-037c-67cf-bea0d618fe89"]},"globalSwatchId":"027c1f43","rValue":174,"bValue":194,"gValue":207,"aValue":1}},{"id":"a-23-n-5","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"PARENT","selector":".recentlyviewedjobcard","selectorGuids":["b006c486-288d-037c-67cf-bea0d618fe89"]},"globalSwatchId":"3c062f81","rValue":209,"bValue":223,"gValue":232,"aValue":1}},{"id":"a-23-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".button.is-kale","selectorGuids":["861c86f9-b47b-5623-6db9-1058bb3a74e2","317567eb-f14f-90d8-0f95-b870950c338f"]},"value":"block"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686127541696},"a-30":{"id":"a-30","title":"job-card-add-to-tracker-click 3","actionItemGroups":[{"actionItems":[{"id":"a-30-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".button.is-kale","selectorGuids":["861c86f9-b47b-5623-6db9-1058bb3a74e2","317567eb-f14f-90d8-0f95-b870950c338f"]},"value":"none"}},{"id":"a-30-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".recentlyviewedjobcard","selectorGuids":["b006c486-288d-037c-67cf-bea0d618fe89"]},"globalSwatchId":"3a86b552","rValue":248,"bValue":249,"gValue":249,"aValue":1}}]},{"actionItems":[{"id":"a-30-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"647ff5fb374a40bef3d73ae9|5496a19e-e4cc-2e77-f695-55f709ff12ec"},"value":"none"}},{"id":"a-30-n-4","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"PARENT","selector":".recentlyviewedjobcard","selectorGuids":["b006c486-288d-037c-67cf-bea0d618fe89"]},"globalSwatchId":"027c1f43","rValue":174,"bValue":194,"gValue":207,"aValue":1}},{"id":"a-30-n-5","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"PARENT","selector":".recentlyviewedjobcard","selectorGuids":["b006c486-288d-037c-67cf-bea0d618fe89"]},"globalSwatchId":"3c062f81","rValue":209,"bValue":223,"gValue":232,"aValue":1}},{"id":"a-30-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".button.is-kale","selectorGuids":["861c86f9-b47b-5623-6db9-1058bb3a74e2","317567eb-f14f-90d8-0f95-b870950c338f"]},"value":"block"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686127541696},"a-31":{"id":"a-31","title":"job-card-add-to-tracker-click 4","actionItemGroups":[{"actionItems":[{"id":"a-31-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".button.is-kale","selectorGuids":["861c86f9-b47b-5623-6db9-1058bb3a74e2","317567eb-f14f-90d8-0f95-b870950c338f"]},"value":"none"}},{"id":"a-31-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".recentlyviewedjobcard","selectorGuids":["b006c486-288d-037c-67cf-bea0d618fe89"]},"globalSwatchId":"3a86b552","rValue":248,"bValue":249,"gValue":249,"aValue":1}}]},{"actionItems":[{"id":"a-31-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"976defe7-d106-5ebb-ce11-2124b9370887"},"value":"none"}},{"id":"a-31-n-4","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"PARENT","selector":".recentlyviewedjobcard","selectorGuids":["b006c486-288d-037c-67cf-bea0d618fe89"]},"globalSwatchId":"027c1f43","rValue":174,"bValue":194,"gValue":207,"aValue":1}},{"id":"a-31-n-5","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"PARENT","selector":".recentlyviewedjobcard","selectorGuids":["b006c486-288d-037c-67cf-bea0d618fe89"]},"globalSwatchId":"3c062f81","rValue":209,"bValue":223,"gValue":232,"aValue":1}},{"id":"a-31-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".button.is-kale","selectorGuids":["861c86f9-b47b-5623-6db9-1058bb3a74e2","317567eb-f14f-90d8-0f95-b870950c338f"]},"value":"block"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686127541696},"a-41":{"id":"a-41","title":"profile [expand]","actionItemGroups":[{"actionItems":[{"id":"a-41-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".profile-desccription","selectorGuids":["4542c770-9604-d6de-f50e-1a41462c4c54"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-41-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".embed-flex","selectorGuids":["52fed630-20a7-0da5-bc89-35c4f4847d44"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-41-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".profile-desccription","selectorGuids":["4542c770-9604-d6de-f50e-1a41462c4c54"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-41-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".embed-flex","selectorGuids":["52fed630-20a7-0da5-bc89-35c4f4847d44"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686395132149},"a-42":{"id":"a-42","title":"profile [collapse]","actionItemGroups":[{"actionItems":[{"id":"a-42-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".profile-desccription","selectorGuids":["4542c770-9604-d6de-f50e-1a41462c4c54"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-42-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".embed-flex","selectorGuids":["52fed630-20a7-0da5-bc89-35c4f4847d44"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686395132149},"a-83":{"id":"a-83","title":"doitlater","actionItemGroups":[{"actionItems":[{"id":"a-83-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".do-later-content-wrap","selectorGuids":["61e51a9a-3e31-5744-374f-41a318bc3f59"]},"value":"none"}},{"id":"a-83-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".make-resume-suggestion-content","selectorGuids":["e06cc50a-154e-5130-5c79-e111091ad904"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686562744124},"a-94":{"id":"a-94","title":"view-in-tracker","actionItemGroups":[{"actionItems":[{"id":"a-94-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".button.view-in-tracker","selectorGuids":["861c86f9-b47b-5623-6db9-1058bb3a74e2","ac6ffcc3-ef2a-e870-f748-4d2a3882fe71"]},"value":"none"}}]},{"actionItems":[{"id":"a-94-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".button.view-in-tracker","selectorGuids":["861c86f9-b47b-5623-6db9-1058bb3a74e2","ac6ffcc3-ef2a-e870-f748-4d2a3882fe71"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686598987806}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function MakeResumeCta({
  as: _Component = _Builtin.Block,
  onClickCreateResume = {},
  onClickApply = {},
  slotSetReminder,
  textReminderInstruction = "This is the default text value",
  slotResumes,
  newShowCreate = true,
  headerText = "Please finish your resume using our AI-Assisted Resume Builder",
  isLoading = true,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "make-resume-suggestion-wrap")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "make-resume-suggestion-content")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "flex-row", "align-top")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "text-lg-bold")}
            tag="div"
          >
            {headerText}
          </_Builtin.Block>
          {newShowCreate ? (
            <_Builtin.Block
              className={_utils.cx(_styles, "button", "is-green")}
              tag="div"
              {...onClickCreateResume}
            >
              <_Builtin.Block tag="div">{"Make Resume"}</_Builtin.Block>
              <_Builtin.Image
                className={_utils.cx(_styles, "icon-small")}
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/6480886205a22fc1ca3fa578_resume.svg"
              />
            </_Builtin.Block>
          ) : null}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "resume-listing")}
          tag="div"
        >
          {slotResumes}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "buttons-wrap",
            "make-resume-cta-button"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "button-apply-niw")}
            tag="div"
            {...onClickApply}
          >
            <_Builtin.Block tag="div">{"Apply now"}</_Builtin.Block>
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "embed-flex")}
              value="%3Csvg%20width%3D%2217%22%20height%3D%2213%22%20viewBox%3D%220%200%2017%2013%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_2638_202774)%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M6.36549%200.977476C6.34142%201.25257%206.54492%201.49508%206.82001%201.51915L12.5208%202.0179L2.03141%2010.8195C1.81987%2010.997%201.79228%2011.3124%201.96978%2011.5239C2.14728%2011.7355%202.46266%2011.7631%202.6742%2011.5856L13.2402%202.71967L12.7291%208.56132C12.705%208.83641%2012.9085%209.07892%2013.1836%209.10299C13.4587%209.12706%2013.7012%208.92356%2013.7253%208.64847L14.2923%202.16784C14.341%201.61099%2013.9447%201.13866%2013.3878%201.08994L6.90717%200.522957C6.63208%200.49889%206.38956%200.702385%206.36549%200.977476Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_2638_202774%22%3E%0A%3Crect%20width%3D%2216.07%22%20height%3D%2213%22%20fill%3D%22white%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "button-outlined")}
            data-w-id="680357f5-7f0c-4520-7447-4c2ae79e95a3"
            tag="div"
          >
            <_Builtin.Block tag="div">{"Do it later"}</_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "do-later-content-wrap")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "back-button", "mrgin-bottom-19")}
          data-w-id="b10b90ab-33b9-421e-9959-b40bc765d1eb"
          tag="div"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "embed-flex")}
            value="%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M5.85355%2013.7536C6.04882%2013.5583%206.04882%2013.2417%205.85355%2013.0464L1.80711%209H15.5C15.7761%209%2016%208.77614%2016%208.5C16%208.22386%2015.7761%208%2015.5%208H1.70711L5.85355%203.85355C6.04882%203.65829%206.04882%203.34171%205.85355%203.14645C5.65829%202.95118%205.34171%202.95118%205.14645%203.14645L0.546447%207.74645C0.151184%208.14171%200.151184%208.75829%200.546447%209.15355L5.14645%2013.7536C5.34171%2013.9488%205.65829%2013.9488%205.85355%2013.7536Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block tag="div">{"Back"}</_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "text-lg-bold")}
          tag="div"
        >
          {"Don't miss out on this opportunity!"}
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "text-md")} tag="div">
          {textReminderInstruction}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "buttons-wrap",
            "make-resume-cta-button"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "date-slot",
              "resume",
              "coverlotter-copy"
            )}
            tag="div"
          >
            {slotSetReminder}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      {isLoading ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "reume-loading")}
          tag="div"
        >
          <Loader />
        </_Builtin.Block>
      ) : null}
    </_Component>
  );
}
