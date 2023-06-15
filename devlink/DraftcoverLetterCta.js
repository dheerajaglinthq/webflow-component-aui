import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { Loader } from "./Loader";
import { LoaderSvg } from "./LoaderSvg";
import * as _utils from "./utils";
import _styles from "./DraftcoverLetterCta.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-73":{"id":"e-73","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-23","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-74"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"647ffce5e7e2792ad45d0f6d|d8d1e289-3034-4182-7a90-5e7693a5800a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"647ffce5e7e2792ad45d0f6d|d8d1e289-3034-4182-7a90-5e7693a5800a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686203414618},"e-83":{"id":"e-83","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-30","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-84"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"647ff5fb374a40bef3d73ae9|5496a19e-e4cc-2e77-f695-55f709ff12ec","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"647ff5fb374a40bef3d73ae9|5496a19e-e4cc-2e77-f695-55f709ff12ec","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686312525061},"e-85":{"id":"e-85","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-31","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-86"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"976defe7-d106-5ebb-ce11-2124b9370887","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"976defe7-d106-5ebb-ce11-2124b9370887","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686322124869},"e-109":{"id":"e-109","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-41","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-110"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"841ee67d-759c-ce20-419c-3b9a0c11e20f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"841ee67d-759c-ce20-419c-3b9a0c11e20f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686395128250},"e-110":{"id":"e-110","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-42","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-109"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"841ee67d-759c-ce20-419c-3b9a0c11e20f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"841ee67d-759c-ce20-419c-3b9a0c11e20f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686395128251},"e-133":{"id":"e-133","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-134"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f15ce908-d6e0-a731-b013-1c7d9b103962","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f15ce908-d6e0-a731-b013-1c7d9b103962","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686474087419},"e-202":{"id":"e-202","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-94","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-203"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9add077a-4bcb-be31-5e19-97a27cbdfd05","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"9add077a-4bcb-be31-5e19-97a27cbdfd05","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686598984347}},"actionLists":{"a-23":{"id":"a-23","title":"job-card-add-to-tracker-click 2","actionItemGroups":[{"actionItems":[{"id":"a-23-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".button.is-kale","selectorGuids":["861c86f9-b47b-5623-6db9-1058bb3a74e2","317567eb-f14f-90d8-0f95-b870950c338f"]},"value":"none"}},{"id":"a-23-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".recentlyviewedjobcard","selectorGuids":["b006c486-288d-037c-67cf-bea0d618fe89"]},"globalSwatchId":"3a86b552","rValue":248,"bValue":249,"gValue":249,"aValue":1}}]},{"actionItems":[{"id":"a-23-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"647ffce5e7e2792ad45d0f6d|d8d1e289-3034-4182-7a90-5e7693a5800a"},"value":"none"}},{"id":"a-23-n-4","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"PARENT","selector":".recentlyviewedjobcard","selectorGuids":["b006c486-288d-037c-67cf-bea0d618fe89"]},"globalSwatchId":"027c1f43","rValue":174,"bValue":194,"gValue":207,"aValue":1}},{"id":"a-23-n-5","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"PARENT","selector":".recentlyviewedjobcard","selectorGuids":["b006c486-288d-037c-67cf-bea0d618fe89"]},"globalSwatchId":"3c062f81","rValue":209,"bValue":223,"gValue":232,"aValue":1}},{"id":"a-23-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".button.is-kale","selectorGuids":["861c86f9-b47b-5623-6db9-1058bb3a74e2","317567eb-f14f-90d8-0f95-b870950c338f"]},"value":"block"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686127541696},"a-30":{"id":"a-30","title":"job-card-add-to-tracker-click 3","actionItemGroups":[{"actionItems":[{"id":"a-30-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".button.is-kale","selectorGuids":["861c86f9-b47b-5623-6db9-1058bb3a74e2","317567eb-f14f-90d8-0f95-b870950c338f"]},"value":"none"}},{"id":"a-30-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".recentlyviewedjobcard","selectorGuids":["b006c486-288d-037c-67cf-bea0d618fe89"]},"globalSwatchId":"3a86b552","rValue":248,"bValue":249,"gValue":249,"aValue":1}}]},{"actionItems":[{"id":"a-30-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"647ff5fb374a40bef3d73ae9|5496a19e-e4cc-2e77-f695-55f709ff12ec"},"value":"none"}},{"id":"a-30-n-4","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"PARENT","selector":".recentlyviewedjobcard","selectorGuids":["b006c486-288d-037c-67cf-bea0d618fe89"]},"globalSwatchId":"027c1f43","rValue":174,"bValue":194,"gValue":207,"aValue":1}},{"id":"a-30-n-5","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"PARENT","selector":".recentlyviewedjobcard","selectorGuids":["b006c486-288d-037c-67cf-bea0d618fe89"]},"globalSwatchId":"3c062f81","rValue":209,"bValue":223,"gValue":232,"aValue":1}},{"id":"a-30-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".button.is-kale","selectorGuids":["861c86f9-b47b-5623-6db9-1058bb3a74e2","317567eb-f14f-90d8-0f95-b870950c338f"]},"value":"block"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686127541696},"a-31":{"id":"a-31","title":"job-card-add-to-tracker-click 4","actionItemGroups":[{"actionItems":[{"id":"a-31-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".button.is-kale","selectorGuids":["861c86f9-b47b-5623-6db9-1058bb3a74e2","317567eb-f14f-90d8-0f95-b870950c338f"]},"value":"none"}},{"id":"a-31-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".recentlyviewedjobcard","selectorGuids":["b006c486-288d-037c-67cf-bea0d618fe89"]},"globalSwatchId":"3a86b552","rValue":248,"bValue":249,"gValue":249,"aValue":1}}]},{"actionItems":[{"id":"a-31-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"976defe7-d106-5ebb-ce11-2124b9370887"},"value":"none"}},{"id":"a-31-n-4","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"PARENT","selector":".recentlyviewedjobcard","selectorGuids":["b006c486-288d-037c-67cf-bea0d618fe89"]},"globalSwatchId":"027c1f43","rValue":174,"bValue":194,"gValue":207,"aValue":1}},{"id":"a-31-n-5","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"PARENT","selector":".recentlyviewedjobcard","selectorGuids":["b006c486-288d-037c-67cf-bea0d618fe89"]},"globalSwatchId":"3c062f81","rValue":209,"bValue":223,"gValue":232,"aValue":1}},{"id":"a-31-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".button.is-kale","selectorGuids":["861c86f9-b47b-5623-6db9-1058bb3a74e2","317567eb-f14f-90d8-0f95-b870950c338f"]},"value":"block"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686127541696},"a-41":{"id":"a-41","title":"profile [expand]","actionItemGroups":[{"actionItems":[{"id":"a-41-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".profile-desccription","selectorGuids":["4542c770-9604-d6de-f50e-1a41462c4c54"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-41-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".embed-flex","selectorGuids":["52fed630-20a7-0da5-bc89-35c4f4847d44"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-41-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".profile-desccription","selectorGuids":["4542c770-9604-d6de-f50e-1a41462c4c54"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-41-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".embed-flex","selectorGuids":["52fed630-20a7-0da5-bc89-35c4f4847d44"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686395132149},"a-42":{"id":"a-42","title":"profile [collapse]","actionItemGroups":[{"actionItems":[{"id":"a-42-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".profile-desccription","selectorGuids":["4542c770-9604-d6de-f50e-1a41462c4c54"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-42-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".embed-flex","selectorGuids":["52fed630-20a7-0da5-bc89-35c4f4847d44"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686395132149},"a-53":{"id":"a-53","title":"draft-now","actionItemGroups":[{"actionItems":[{"id":"a-53-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".draft-coverletter-card-content","selectorGuids":["65d7345b-078b-3bb0-69de-e3e6c70291e7"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686474094821},"a-94":{"id":"a-94","title":"view-in-tracker","actionItemGroups":[{"actionItems":[{"id":"a-94-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".button.view-in-tracker","selectorGuids":["861c86f9-b47b-5623-6db9-1058bb3a74e2","ac6ffcc3-ef2a-e870-f748-4d2a3882fe71"]},"value":"none"}}]},{"actionItems":[{"id":"a-94-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".button.view-in-tracker","selectorGuids":["861c86f9-b47b-5623-6db9-1058bb3a74e2","ac6ffcc3-ef2a-e870-f748-4d2a3882fe71"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686598987806}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function DraftcoverLetterCta({
  as: _Component = _Builtin.Block,
  onClickEdit = {},
  onClickCopy = {},
  isAiContentLoading = false,
  onClickDraftNow = {},
  isClGenerated = false,
  isLoading = true,
  showDraft,
  aiGereratedContent = (
    <>
      {
        " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.gdjhyvfhvrehjjbgmnrabgmnbtr sfdjahvhwravg aedsugfehrbg sgjah4jhgbjh43qbkhy wgaegyb4h3bghbhrtrqa d fwrtgy4ug3yqvjq35 wrwqth34iubub"
      }
      <br />
    </>
  ),
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "draft-coverletter-card-wrap",
        "no-min-height"
      )}
      tag="div"
    >
      {showDraft ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "draft-coverletter-card-content")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "draft-icon")}
            tag="div"
          >
            <_Builtin.Image
              loading="lazy"
              width="auto"
              height="auto"
              src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64807eaf2d16a205e8f79bda_draft.svg"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "drafted-coverletter-content-wrap")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "text-lg-bold")}
              tag="div"
            >
              {"Aglint can now help you draft your cover letter in seconds."}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "text-md", "text-color-grey")}
              tag="div"
            >
              {
                "Let us help you draft your cover letter faster. We will use the job description and your profile data to create the perfect cover letter for your job. Review and edit it to make sure it's correct for the job role and contains all required information."
              }
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "button", "is-green")}
              data-w-id="f15ce908-d6e0-a731-b013-1c7d9b103962"
              tag="div"
              {...onClickDraftNow}
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icon-embed")}
                value="%3Csvg%20width%3D%2217%22%20height%3D%2217%22%20viewBox%3D%220%200%2017%2017%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M8.49902%2016.3281C9.58757%2016.3281%2010.611%2016.1198%2011.5693%2015.7031C12.5329%2015.2865%2013.3818%2014.7109%2014.1162%2013.9766C14.8506%2013.2422%2015.4261%2012.3958%2015.8428%2011.4375C16.2594%2010.474%2016.4678%209.44792%2016.4678%208.35938C16.4678%207.27083%2016.2594%206.2474%2015.8428%205.28906C15.4261%204.32552%2014.8506%203.47656%2014.1162%202.74219C13.3818%202.00781%2012.5329%201.43229%2011.5693%201.01562C10.6058%200.598958%209.57975%200.390625%208.49121%200.390625C7.40267%200.390625%206.37663%200.598958%205.41309%201.01562C4.45475%201.43229%203.6084%202.00781%202.87402%202.74219C2.14486%203.47656%201.57194%204.32552%201.15527%205.28906C0.738607%206.2474%200.530273%207.27083%200.530273%208.35938C0.530273%209.44792%200.738607%2010.474%201.15527%2011.4375C1.57194%2012.3958%202.14746%2013.2422%202.88184%2013.9766C3.61621%2014.7109%204.46257%2015.2865%205.4209%2015.7031C6.38444%2016.1198%207.41048%2016.3281%208.49902%2016.3281ZM8.49902%2015C7.57715%2015%206.71517%2014.8281%205.91309%2014.4844C5.111%2014.1406%204.40527%2013.6667%203.7959%2013.0625C3.19173%2012.4531%202.71777%2011.7474%202.37402%2010.9453C2.03548%2010.1432%201.86621%209.28125%201.86621%208.35938C1.86621%207.4375%202.03548%206.57552%202.37402%205.77344C2.71777%204.97135%203.19173%204.26562%203.7959%203.65625C4.40007%203.04688%205.10319%202.57292%205.90527%202.23438C6.70736%201.89062%207.56934%201.71875%208.49121%201.71875C9.41309%201.71875%2010.2751%201.89062%2011.0771%202.23438C11.8844%202.57292%2012.5902%203.04688%2013.1943%203.65625C13.8037%204.26562%2014.2803%204.97135%2014.624%205.77344C14.9678%206.57552%2015.1396%207.4375%2015.1396%208.35938C15.1396%209.28125%2014.9678%2010.1432%2014.624%2010.9453C14.2855%2011.7474%2013.8115%2012.4531%2013.2021%2013.0625C12.5928%2013.6667%2011.887%2014.1406%2011.085%2014.4844C10.2829%2014.8281%209.4209%2015%208.49902%2015ZM4.87402%208.35938C4.87402%208.54688%204.93652%208.70052%205.06152%208.82031C5.18652%208.9401%205.34798%209%205.5459%209H7.84277V11.3047C7.84277%2011.5026%207.90267%2011.6641%208.02246%2011.7891C8.14225%2011.9089%208.2959%2011.9688%208.4834%2011.9688C8.68132%2011.9688%208.84017%2011.9089%208.95996%2011.7891C9.08496%2011.6641%209.14746%2011.5026%209.14746%2011.3047V9H11.4521C11.6501%209%2011.8089%208.9401%2011.9287%208.82031C12.0537%208.70052%2012.1162%208.54688%2012.1162%208.35938C12.1162%208.16146%2012.0537%208.0026%2011.9287%207.88281C11.8089%207.75781%2011.6501%207.69531%2011.4521%207.69531H9.14746V5.39844C9.14746%205.19531%209.08496%205.03385%208.95996%204.91406C8.84017%204.78906%208.68132%204.72656%208.4834%204.72656C8.2959%204.72656%208.14225%204.78906%208.02246%204.91406C7.90267%205.03906%207.84277%205.20052%207.84277%205.39844V7.69531H5.5459C5.34277%207.69531%205.17871%207.75781%205.05371%207.88281C4.93392%208.0026%204.87402%208.16146%204.87402%208.35938Z%22%20fill%3D%22currentcolor%22%2F%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block tag="div">{"Draft now"}</_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
      {isClGenerated ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "ai-content-wrap", "coverletter")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "ai-generate-icon-buttons-wrap")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "iconbutton", "fixed-hight")}
              tag="div"
              {...onClickCopy}
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "embed-flex")}
                value="%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M3.5%2010C3.77614%2010%204%2010.2239%204%2010.5C4%2010.7761%203.77614%2011%203.5%2011H1C0.447715%2011%200%2010.5523%200%2010V1C0%200.447715%200.447715%200%201%200H10C10.5523%200%2011%200.447715%2011%201V3.5C11%203.77614%2010.7761%204%2010.5%204C10.2239%204%2010%203.77614%2010%203.5V1H1V10H3.5ZM6%206V15H15V6H6ZM6%205H15C15.5523%205%2016%205.44772%2016%206V15C16%2015.5523%2015.5523%2016%2015%2016H6C5.44772%2016%205%2015.5523%205%2015V6C5%205.44772%205.44772%205%206%205Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "iconbutton", "fixed-hight")}
              tag="div"
              {...onClickEdit}
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "embed-flex")}
                value="%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M0%2012.9524V15.4921C0%2015.7726%200.227411%2016%200.507937%2016H3.04762C3.18233%2016%203.31153%2015.9465%203.40678%2015.8512L15.6988%203.55917C16.1004%203.15763%2016.1004%202.53126%2015.6988%202.12972L13.8703%200.301152C13.4687%20-0.100384%2012.8424%20-0.100384%2012.4408%200.301152L0.148771%2012.5932C0.0535146%2012.6885%200%2012.8177%200%2012.9524ZM2.83722%2014.9841H1.01587V13.1628L10.9206%203.25801L12.742%205.07937L2.83722%2014.9841ZM13.4603%204.36103L14.9769%202.84444L13.1556%201.02309L11.639%202.53968L13.4603%204.36103Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "text-md",
              "text-color-grey",
              "whitespace-pre"
            )}
            tag="div"
          >
            {aiGereratedContent}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "content-overlay")}
            tag="div"
          />
        </_Builtin.Block>
      ) : null}
      {isLoading ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "cl-is-loading")}
          tag="div"
        >
          <Loader />
        </_Builtin.Block>
      ) : null}
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "hide")}
        value="%3Cstyle%3E%0A.whitespace-pre%7B%0Awhite-space%3Apre-wrap%3B%0A%7D%0A%3C%2Fstyle%3E"
      />
      {isAiContentLoading ? (
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "generate-content-loader",
            "cover-letter"
          )}
          tag="div"
        >
          <LoaderSvg />
          <_Builtin.Block
            className={_utils.cx(_styles, "ai-content-loading")}
            tag="div"
          >
            {"Aglint can now help you draft your cover letter in seconds."}
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
    </_Component>
  );
}
