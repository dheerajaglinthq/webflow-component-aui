import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./CoverletterCreate.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-73":{"id":"e-73","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-23","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-74"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"647ffce5e7e2792ad45d0f6d|d8d1e289-3034-4182-7a90-5e7693a5800a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"647ffce5e7e2792ad45d0f6d|d8d1e289-3034-4182-7a90-5e7693a5800a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686203414618},"e-83":{"id":"e-83","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-30","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-84"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"647ff5fb374a40bef3d73ae9|5496a19e-e4cc-2e77-f695-55f709ff12ec","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"647ff5fb374a40bef3d73ae9|5496a19e-e4cc-2e77-f695-55f709ff12ec","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686312525061},"e-85":{"id":"e-85","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-31","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-86"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"976defe7-d106-5ebb-ce11-2124b9370887","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"976defe7-d106-5ebb-ce11-2124b9370887","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686322124869},"e-202":{"id":"e-202","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-94","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-203"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9add077a-4bcb-be31-5e19-97a27cbdfd05","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"9add077a-4bcb-be31-5e19-97a27cbdfd05","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686598984347}},"actionLists":{"a-23":{"id":"a-23","title":"job-card-add-to-tracker-click 2","actionItemGroups":[{"actionItems":[{"id":"a-23-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".button.is-kale","selectorGuids":["861c86f9-b47b-5623-6db9-1058bb3a74e2","317567eb-f14f-90d8-0f95-b870950c338f"]},"value":"none"}},{"id":"a-23-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".recentlyviewedjobcard","selectorGuids":["b006c486-288d-037c-67cf-bea0d618fe89"]},"globalSwatchId":"3a86b552","rValue":248,"bValue":249,"gValue":249,"aValue":1}}]},{"actionItems":[{"id":"a-23-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"647ffce5e7e2792ad45d0f6d|d8d1e289-3034-4182-7a90-5e7693a5800a"},"value":"none"}},{"id":"a-23-n-4","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"PARENT","selector":".recentlyviewedjobcard","selectorGuids":["b006c486-288d-037c-67cf-bea0d618fe89"]},"globalSwatchId":"027c1f43","rValue":174,"bValue":194,"gValue":207,"aValue":1}},{"id":"a-23-n-5","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"PARENT","selector":".recentlyviewedjobcard","selectorGuids":["b006c486-288d-037c-67cf-bea0d618fe89"]},"globalSwatchId":"3c062f81","rValue":209,"bValue":223,"gValue":232,"aValue":1}},{"id":"a-23-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".button.is-kale","selectorGuids":["861c86f9-b47b-5623-6db9-1058bb3a74e2","317567eb-f14f-90d8-0f95-b870950c338f"]},"value":"block"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686127541696},"a-30":{"id":"a-30","title":"job-card-add-to-tracker-click 3","actionItemGroups":[{"actionItems":[{"id":"a-30-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".button.is-kale","selectorGuids":["861c86f9-b47b-5623-6db9-1058bb3a74e2","317567eb-f14f-90d8-0f95-b870950c338f"]},"value":"none"}},{"id":"a-30-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".recentlyviewedjobcard","selectorGuids":["b006c486-288d-037c-67cf-bea0d618fe89"]},"globalSwatchId":"3a86b552","rValue":248,"bValue":249,"gValue":249,"aValue":1}}]},{"actionItems":[{"id":"a-30-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"647ff5fb374a40bef3d73ae9|5496a19e-e4cc-2e77-f695-55f709ff12ec"},"value":"none"}},{"id":"a-30-n-4","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"PARENT","selector":".recentlyviewedjobcard","selectorGuids":["b006c486-288d-037c-67cf-bea0d618fe89"]},"globalSwatchId":"027c1f43","rValue":174,"bValue":194,"gValue":207,"aValue":1}},{"id":"a-30-n-5","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"PARENT","selector":".recentlyviewedjobcard","selectorGuids":["b006c486-288d-037c-67cf-bea0d618fe89"]},"globalSwatchId":"3c062f81","rValue":209,"bValue":223,"gValue":232,"aValue":1}},{"id":"a-30-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".button.is-kale","selectorGuids":["861c86f9-b47b-5623-6db9-1058bb3a74e2","317567eb-f14f-90d8-0f95-b870950c338f"]},"value":"block"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686127541696},"a-31":{"id":"a-31","title":"job-card-add-to-tracker-click 4","actionItemGroups":[{"actionItems":[{"id":"a-31-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".button.is-kale","selectorGuids":["861c86f9-b47b-5623-6db9-1058bb3a74e2","317567eb-f14f-90d8-0f95-b870950c338f"]},"value":"none"}},{"id":"a-31-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".recentlyviewedjobcard","selectorGuids":["b006c486-288d-037c-67cf-bea0d618fe89"]},"globalSwatchId":"3a86b552","rValue":248,"bValue":249,"gValue":249,"aValue":1}}]},{"actionItems":[{"id":"a-31-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"976defe7-d106-5ebb-ce11-2124b9370887"},"value":"none"}},{"id":"a-31-n-4","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"PARENT","selector":".recentlyviewedjobcard","selectorGuids":["b006c486-288d-037c-67cf-bea0d618fe89"]},"globalSwatchId":"027c1f43","rValue":174,"bValue":194,"gValue":207,"aValue":1}},{"id":"a-31-n-5","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"PARENT","selector":".recentlyviewedjobcard","selectorGuids":["b006c486-288d-037c-67cf-bea0d618fe89"]},"globalSwatchId":"3c062f81","rValue":209,"bValue":223,"gValue":232,"aValue":1}},{"id":"a-31-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".button.is-kale","selectorGuids":["861c86f9-b47b-5623-6db9-1058bb3a74e2","317567eb-f14f-90d8-0f95-b870950c338f"]},"value":"block"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686127541696},"a-94":{"id":"a-94","title":"view-in-tracker","actionItemGroups":[{"actionItems":[{"id":"a-94-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".button.view-in-tracker","selectorGuids":["861c86f9-b47b-5623-6db9-1058bb3a74e2","ac6ffcc3-ef2a-e870-f748-4d2a3882fe71"]},"value":"none"}}]},{"actionItems":[{"id":"a-94-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".button.view-in-tracker","selectorGuids":["861c86f9-b47b-5623-6db9-1058bb3a74e2","ac6ffcc3-ef2a-e870-f748-4d2a3882fe71"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686598987806}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function CoverletterCreate({
  as: _Component = _Builtin.Block,
  slotForm,
  onClickRewrite = {},
  isDownloadable = true,
  onClickDownload = {},
  onClickImproveWriting = {},
  onClickMakeShorter = {},
  onClickMakeLonger = {},
  onClickSimplifyLanguage = {},
  onClickProfessional = {},
  onClickCasual = {},
  onClickStraightForward = {},
  onClickConfident = {},
  onClickFriendly = {},
  tone = "",
  onClickCopy = {},
  slotEditor,
  isUndoActive = true,
  isRedoActive = true,
  onClickUndo = {},
  onClickRedo = {},
  isLoading = true,
  isRewrite = true,
  onClickDraft = {},
  isCopyButton = true,
  slotTones,
  isTonePills = true,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component tag="div">
      <_Builtin.Block tag="div">
        <_Builtin.Block tag="div" />
        <_Builtin.Block
          className={_utils.cx(_styles, "coverletter-content-grid")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "coverletter-left-component",
              "create"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "cover-letter-create")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "cover-letter-stack",
                  "initial-state"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "cv-empty-state-title")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-xl-bold")}
                    tag="div"
                  >
                    {"AI-Generated Cover Letter"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-md")}
                    tag="div"
                  >
                    {
                      "In today's competitive job market, standing out with a well-written cover letter is crucial to landing your dream job. But what if you struggle with writing or don't have the time to create a compelling cover letter? Enter AI-generated cover letters."
                    }
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "slot-cover-letter-form")}
                  tag="div"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "slot-select-tone")}
                  tag="div"
                />
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "coverletter-header-buttons-wrap"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "coverletter-header-buttons-wrap"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "button-relative")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "button", "draft-now")}
                        tag="div"
                      >
                        <_Builtin.Image
                          className={_utils.cx(_styles, "glitter-16")}
                          loading="lazy"
                          width="auto"
                          height="auto"
                          src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/648715fa93d22a50714c30d6_glitter.png"
                        />
                        <_Builtin.Block tag="div">{"Draft Now"}</_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "coverletter-content-right")}
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
                {
                  "How to effectively utilize Aglint AI to generate your cover letter?"
                }
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-md")}
                tag="div"
              >
                {
                  "Our AI technology can assist you in creating a polished, professional cover letter that reflects your skills and experience. The AI can prompt you to improve your writing by suggesting alternative words and phrases, correcting spelling and grammar errors and even shortening or lengthening your text as needed."
                }
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "coverletter-content-block")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "feature-badge")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "feature-icon")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64846aa51f5331b6fbcf35e3_magic.svg"
                />
                <_Builtin.Block tag="div">{"Improve Writing"}</_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-md")}
                tag="div"
              >
                {
                  "Aglint AI generates suggestions and corrections to improve the quality of written text based on language patterns and grammar rules."
                }
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "coverletter-content-block")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "feature-badge")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "feature-icon")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64846aa48dbd81f6444c3082_shorter.svg"
                />
                <_Builtin.Block tag="div">{"Make Shorter"}</_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-md")}
                tag="div"
              >
                {
                  "Aglint AI generates a shorter version of the given input text while preserving its meaning and intent."
                }
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "coverletter-content-block")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "feature-badge")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "feature-icon")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64846aa5aa6428f1917080a4_longer.svg"
                />
                <_Builtin.Block tag="div">{"Make Longer"}</_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-md")}
                tag="div"
              >
                {
                  "Aglint AI generates longer responses to a given text input based on its understanding and prediction of the continuation of the input."
                }
                <br />
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "coverletter-content-block")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "feature-badge")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "feature-icon")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64846aa4ba6758954127b1b3_simplify.svg"
                />
                <_Builtin.Block tag="div">{"Simplify Language"}</_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-md")}
                tag="div"
              >
                {
                  "Aglint AI uses natural language processing to simplify complex sentences and rephrase them in a more straightforward manner."
                }
                <br />
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "coverletter-content-block")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "feature-badge")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "feature-icon")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64846bd5f9e4c202cb101069_changeTone.svg"
                />
                <_Builtin.Block tag="div">{"Change Tone"}</_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-md")}
                tag="div"
              >
                {
                  "Aglint AI helps to generate responses with a different tone or mood. It does this by adjusting the language patterns used in the generated response to reflect the desired tone, such as more formal or informal language, positive or negative, sentiment serious or lighthearted tone."
                }
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
