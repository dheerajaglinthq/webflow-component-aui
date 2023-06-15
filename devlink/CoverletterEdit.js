import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { Loader } from "./Loader";
import * as _utils from "./utils";
import _styles from "./CoverletterEdit.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-73":{"id":"e-73","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-23","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-74"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"647ffce5e7e2792ad45d0f6d|d8d1e289-3034-4182-7a90-5e7693a5800a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"647ffce5e7e2792ad45d0f6d|d8d1e289-3034-4182-7a90-5e7693a5800a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686203414618},"e-83":{"id":"e-83","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-30","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-84"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"647ff5fb374a40bef3d73ae9|5496a19e-e4cc-2e77-f695-55f709ff12ec","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"647ff5fb374a40bef3d73ae9|5496a19e-e4cc-2e77-f695-55f709ff12ec","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686312525061},"e-85":{"id":"e-85","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-31","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-86"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"976defe7-d106-5ebb-ce11-2124b9370887","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"976defe7-d106-5ebb-ce11-2124b9370887","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686322124869},"e-194":{"id":"e-194","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-84","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-195"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"503b3571-dee9-8791-8889-63d0a10fd13f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"503b3571-dee9-8791-8889-63d0a10fd13f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686565419016},"e-195":{"id":"e-195","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-85","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-194"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"503b3571-dee9-8791-8889-63d0a10fd13f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"503b3571-dee9-8791-8889-63d0a10fd13f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686565419017},"e-202":{"id":"e-202","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-94","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-203"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9add077a-4bcb-be31-5e19-97a27cbdfd05","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"9add077a-4bcb-be31-5e19-97a27cbdfd05","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686598984347}},"actionLists":{"a-23":{"id":"a-23","title":"job-card-add-to-tracker-click 2","actionItemGroups":[{"actionItems":[{"id":"a-23-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".button.is-kale","selectorGuids":["861c86f9-b47b-5623-6db9-1058bb3a74e2","317567eb-f14f-90d8-0f95-b870950c338f"]},"value":"none"}},{"id":"a-23-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".recentlyviewedjobcard","selectorGuids":["b006c486-288d-037c-67cf-bea0d618fe89"]},"globalSwatchId":"3a86b552","rValue":248,"bValue":249,"gValue":249,"aValue":1}}]},{"actionItems":[{"id":"a-23-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"647ffce5e7e2792ad45d0f6d|d8d1e289-3034-4182-7a90-5e7693a5800a"},"value":"none"}},{"id":"a-23-n-4","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"PARENT","selector":".recentlyviewedjobcard","selectorGuids":["b006c486-288d-037c-67cf-bea0d618fe89"]},"globalSwatchId":"027c1f43","rValue":174,"bValue":194,"gValue":207,"aValue":1}},{"id":"a-23-n-5","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"PARENT","selector":".recentlyviewedjobcard","selectorGuids":["b006c486-288d-037c-67cf-bea0d618fe89"]},"globalSwatchId":"3c062f81","rValue":209,"bValue":223,"gValue":232,"aValue":1}},{"id":"a-23-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".button.is-kale","selectorGuids":["861c86f9-b47b-5623-6db9-1058bb3a74e2","317567eb-f14f-90d8-0f95-b870950c338f"]},"value":"block"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686127541696},"a-30":{"id":"a-30","title":"job-card-add-to-tracker-click 3","actionItemGroups":[{"actionItems":[{"id":"a-30-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".button.is-kale","selectorGuids":["861c86f9-b47b-5623-6db9-1058bb3a74e2","317567eb-f14f-90d8-0f95-b870950c338f"]},"value":"none"}},{"id":"a-30-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".recentlyviewedjobcard","selectorGuids":["b006c486-288d-037c-67cf-bea0d618fe89"]},"globalSwatchId":"3a86b552","rValue":248,"bValue":249,"gValue":249,"aValue":1}}]},{"actionItems":[{"id":"a-30-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"647ff5fb374a40bef3d73ae9|5496a19e-e4cc-2e77-f695-55f709ff12ec"},"value":"none"}},{"id":"a-30-n-4","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"PARENT","selector":".recentlyviewedjobcard","selectorGuids":["b006c486-288d-037c-67cf-bea0d618fe89"]},"globalSwatchId":"027c1f43","rValue":174,"bValue":194,"gValue":207,"aValue":1}},{"id":"a-30-n-5","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"PARENT","selector":".recentlyviewedjobcard","selectorGuids":["b006c486-288d-037c-67cf-bea0d618fe89"]},"globalSwatchId":"3c062f81","rValue":209,"bValue":223,"gValue":232,"aValue":1}},{"id":"a-30-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".button.is-kale","selectorGuids":["861c86f9-b47b-5623-6db9-1058bb3a74e2","317567eb-f14f-90d8-0f95-b870950c338f"]},"value":"block"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686127541696},"a-31":{"id":"a-31","title":"job-card-add-to-tracker-click 4","actionItemGroups":[{"actionItems":[{"id":"a-31-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".button.is-kale","selectorGuids":["861c86f9-b47b-5623-6db9-1058bb3a74e2","317567eb-f14f-90d8-0f95-b870950c338f"]},"value":"none"}},{"id":"a-31-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".recentlyviewedjobcard","selectorGuids":["b006c486-288d-037c-67cf-bea0d618fe89"]},"globalSwatchId":"3a86b552","rValue":248,"bValue":249,"gValue":249,"aValue":1}}]},{"actionItems":[{"id":"a-31-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"976defe7-d106-5ebb-ce11-2124b9370887"},"value":"none"}},{"id":"a-31-n-4","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"PARENT","selector":".recentlyviewedjobcard","selectorGuids":["b006c486-288d-037c-67cf-bea0d618fe89"]},"globalSwatchId":"027c1f43","rValue":174,"bValue":194,"gValue":207,"aValue":1}},{"id":"a-31-n-5","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"PARENT","selector":".recentlyviewedjobcard","selectorGuids":["b006c486-288d-037c-67cf-bea0d618fe89"]},"globalSwatchId":"3c062f81","rValue":209,"bValue":223,"gValue":232,"aValue":1}},{"id":"a-31-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".button.is-kale","selectorGuids":["861c86f9-b47b-5623-6db9-1058bb3a74e2","317567eb-f14f-90d8-0f95-b870950c338f"]},"value":"block"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686127541696},"a-84":{"id":"a-84","title":"Changetone[open]","actionItemGroups":[{"actionItems":[{"id":"a-84-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".changetone-dropdown-list","selectorGuids":["69d82102-6674-13e8-7a8a-ea819004bcc2"]},"value":"none"}}]},{"actionItems":[{"id":"a-84-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".changetone-dropdown-list","selectorGuids":["69d82102-6674-13e8-7a8a-ea819004bcc2"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686565421497},"a-85":{"id":"a-85","title":"Changetone[close]","actionItemGroups":[{"actionItems":[{"id":"a-85-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".changetone-dropdown-list","selectorGuids":["69d82102-6674-13e8-7a8a-ea819004bcc2"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686565421497},"a-94":{"id":"a-94","title":"view-in-tracker","actionItemGroups":[{"actionItems":[{"id":"a-94-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".button.view-in-tracker","selectorGuids":["861c86f9-b47b-5623-6db9-1058bb3a74e2","ac6ffcc3-ef2a-e870-f748-4d2a3882fe71"]},"value":"none"}}]},{"actionItems":[{"id":"a-94-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".button.view-in-tracker","selectorGuids":["861c86f9-b47b-5623-6db9-1058bb3a74e2","ac6ffcc3-ef2a-e870-f748-4d2a3882fe71"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686598987806}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function CoverletterEdit({
  as: _Component = _Builtin.Block,
  slotForm,
  onClickImproveWriting = {},
  onClickMakeShorter = {},
  onClickMakeLonger = {},
  onClickSimplifyLanguage = {},
  onClickUndo = {},
  onClickRedo = {},
  onClickDownload = {},
  onClickRewrite = {},
  onClickProfessional = {},
  onClickCasual = {},
  onClickStraightForward = {},
  onClickConfident = {},
  onClickFriendly = {},
  isLoading = true,
  slotEditor,
  isDownloadAble = true,
  onClickCopy = {},
  isUndoActive = true,
  isRedoActive = true,
  tone = "",
  onClickDraft = {},
  isMainLoading = true,
  isCreate = true,
  slotEmptyForm,
  slotTones,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "height-100")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "coverletter-content-grid")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "cover-letter-states")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "cover-letter-edit")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "cover-letter-stack",
                "single-line-grid"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "slot-cover-letter-form")}
                tag="div"
              >
                {slotForm}
              </_Builtin.Block>
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
                    className={_utils.cx(
                      _styles,
                      "button",
                      "is-blue",
                      "height-100"
                    )}
                    tag="div"
                    {...onClickRewrite}
                  >
                    <_Builtin.Image
                      loading="lazy"
                      width="auto"
                      height="auto"
                      src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64846c58f9e4c202cb10858f_wand.svg"
                    />
                    <_Builtin.Block tag="div">{"Rewrite"}</_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "cover-letter-stack")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "button-outlined-blue")}
                tag="div"
                {...onClickImproveWriting}
              >
                <_Builtin.Image
                  loading="lazy"
                  width="auto"
                  height="auto"
                  src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64846aa51f5331b6fbcf35e3_magic.svg"
                />
                <_Builtin.Block tag="div">{"Improve writing"}</_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "button-outlined-blue")}
                tag="div"
                {...onClickMakeShorter}
              >
                <_Builtin.Image
                  loading="lazy"
                  width="auto"
                  height="auto"
                  src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64846aa48dbd81f6444c3082_shorter.svg"
                />
                <_Builtin.Block tag="div">{"Make shorter"}</_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "button-outlined-blue")}
                tag="div"
                {...onClickMakeLonger}
              >
                <_Builtin.Image
                  loading="lazy"
                  width="auto"
                  height="auto"
                  src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64846aa5aa6428f1917080a4_longer.svg"
                />
                <_Builtin.Block tag="div">{"Make longer"}</_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "button-outlined-blue")}
                tag="div"
                {...onClickSimplifyLanguage}
              >
                <_Builtin.Image
                  loading="lazy"
                  width="auto"
                  height="auto"
                  src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64846aa4ba6758954127b1b3_simplify.svg"
                />
                <_Builtin.Block tag="div">{"Simplify language"}</_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "changetone-dropdown")}
                data-w-id="503b3571-dee9-8791-8889-63d0a10fd13f"
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "change-tone-dropdown-toggle")}
                  tag="div"
                >
                  <_Builtin.Image
                    loading="lazy"
                    width="auto"
                    height="auto"
                    src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64846bd5f9e4c202cb101069_changeTone.svg"
                  />
                  <_Builtin.Block tag="div">{"Change tone"}</_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "changetone-dropdown-list")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "change-tone-links")}
                    tag="div"
                    {...onClickProfessional}
                  >
                    {"Professional"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "change-tone-links")}
                    tag="div"
                    {...onClickCasual}
                  >
                    {"Casual"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "change-tone-links")}
                    tag="div"
                    {...onClickStraightForward}
                  >
                    {"Straight-forward"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "change-tone-links")}
                    tag="div"
                    {...onClickConfident}
                  >
                    {"Confident"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "change-tone-links")}
                    tag="div"
                    {...onClickFriendly}
                  >
                    {"Friendly"}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "coverletter-content-wrapper")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "coverletter-generated-content-wrapper"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "slots-coverletter")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "coverletter-text-slot")}
                    tag="div"
                  >
                    {slotEditor}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "coverletter-copy")}
                  tag="div"
                  {...onClickCopy}
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "iconbutton")}
                    tag="div"
                    {...onClickDownload}
                  >
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "copy-icon")}
                      value="%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M8.5%2011.6929L12.0464%208.14645C12.2417%207.95118%2012.5583%207.95118%2012.7536%208.14645C12.9488%208.34171%2012.9488%208.65829%2012.7536%208.85355L8.65355%2012.9536C8.25829%2013.3488%207.64171%2013.3488%207.24645%2012.9536L3.14645%208.85355C2.95118%208.65829%202.95118%208.34171%203.14645%208.14645C3.34171%207.95118%203.65829%207.95118%203.85355%208.14645L7.5%2011.7929V0.5C7.5%200.223858%207.72386%200%208%200C8.27614%200%208.5%200.223858%208.5%200.5V11.6929ZM1.5%2016C1.22386%2016%201%2015.7761%201%2015.5C1%2015.2239%201.22386%2015%201.5%2015H14.5C14.7761%2015%2015%2015.2239%2015%2015.5C15%2015.7761%2014.7761%2016%2014.5%2016H1.5Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "iconbutton")}
                    tag="div"
                    {...onClickCopy}
                  >
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "copy-icon")}
                      value="%3Csvg%20width%3D%2217%22%20height%3D%2216%22%20viewBox%3D%220%200%2017%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M3.83334%2010C4.10949%2010%204.33334%2010.2239%204.33334%2010.5C4.33334%2010.7761%204.10949%2011%203.83334%2011H1.33334C0.781059%2011%200.333344%2010.5523%200.333344%2010V1C0.333344%200.447715%200.781059%200%201.33334%200H10.3333C10.8856%200%2011.3333%200.447715%2011.3333%201V3.5C11.3333%203.77614%2011.1095%204%2010.8333%204C10.5572%204%2010.3333%203.77614%2010.3333%203.5V1H1.33334V10H3.83334ZM6.33334%206V15H15.3333V6H6.33334ZM6.33334%205H15.3333C15.8856%205%2016.3333%205.44772%2016.3333%206V15C16.3333%2015.5523%2015.8856%2016%2015.3333%2016H6.33334C5.78106%2016%205.33334%2015.5523%205.33334%2015V6C5.33334%205.44772%205.78106%205%206.33334%205Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "edit-butons-flex")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "tone-text")}
                  tag="div"
                >
                  {tone}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "button-relative")}
                  tag="div"
                >
                  {isUndoActive ? (
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "button",
                        "is-light-green",
                        "activbe-btn"
                      )}
                      tag="div"
                      {...onClickUndo}
                    >
                      <_Builtin.Image
                        loading="lazy"
                        width="auto"
                        height="auto"
                        src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64846cf5dbce6ce560a0d1ce_undo.svg"
                      />
                      <_Builtin.Block tag="div">{"Undo"}</_Builtin.Block>
                    </_Builtin.Block>
                  ) : null}
                  <_Builtin.Block
                    className={_utils.cx(_styles, "button", "disabled")}
                    tag="div"
                  >
                    <_Builtin.Image
                      loading="lazy"
                      width="auto"
                      height="auto"
                      src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64846cf5dbce6ce560a0d1ce_undo.svg"
                    />
                    <_Builtin.Block tag="div">{"Undo"}</_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "button-relative")}
                  tag="div"
                >
                  {isRedoActive ? (
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "button",
                        "is-light-green",
                        "activbe-btn"
                      )}
                      tag="div"
                      {...onClickRedo}
                    >
                      <_Builtin.Image
                        loading="lazy"
                        width="auto"
                        height="auto"
                        src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64846cf53cbfcd23c794fdb4_redo.svg"
                      />
                      <_Builtin.Block tag="div">{"Redo"}</_Builtin.Block>
                    </_Builtin.Block>
                  ) : null}
                  <_Builtin.Block
                    className={_utils.cx(_styles, "button", "disabled")}
                    tag="div"
                  >
                    <_Builtin.Image
                      loading="lazy"
                      width="auto"
                      height="auto"
                      src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64846cf53cbfcd23c794fdb4_redo.svg"
                    />
                    <_Builtin.Block tag="div">{"Undo"}</_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              {isLoading ? (
                <_Builtin.Block
                  className={_utils.cx(_styles, "coverlettr-loading")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "loader-icon")}
                    tag="div"
                  >
                    <Loader />
                  </_Builtin.Block>
                </_Builtin.Block>
              ) : null}
            </_Builtin.Block>
          </_Builtin.Block>
          {isCreate ? (
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
                    {"AI-Generated Cover Letter "}
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
                >
                  {slotEmptyForm}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "choose-tone")}
                  tag="div"
                >
                  <_Builtin.Block tag="div">{"Choose tone"}</_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "slot-select-tone")}
                    tag="div"
                  >
                    {slotTones}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block tag="div">
                  <_Builtin.Block
                    className={_utils.cx(_styles, "slot-select-tone")}
                    tag="div"
                  />
                </_Builtin.Block>
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
                        {...onClickDraft}
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
          ) : null}
          {isMainLoading ? (
            <_Builtin.Block
              className={_utils.cx(_styles, "coverletter-loading")}
              tag="div"
            >
              <Loader />
            </_Builtin.Block>
          ) : null}
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
            <_Builtin.Block className={_utils.cx(_styles, "text-md")} tag="div">
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
            <_Builtin.Block className={_utils.cx(_styles, "text-md")} tag="div">
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
            <_Builtin.Block className={_utils.cx(_styles, "text-md")} tag="div">
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
            <_Builtin.Block className={_utils.cx(_styles, "text-md")} tag="div">
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
            <_Builtin.Block className={_utils.cx(_styles, "text-md")} tag="div">
              {
                "Aglint AI uses natural language processing to simplify complex sentences and rephrase them in a more straightforward manner."
              }
              <br />
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "coverletter-content-block",
              "margin-bottom-40"
            )}
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
            <_Builtin.Block className={_utils.cx(_styles, "text-md")} tag="div">
              {
                "Aglint AI helps to generate responses with a different tone or mood. It does this by adjusting the language patterns used in the generated response to reflect the desired tone, such as more formal or informal language, positive or negative, sentiment serious or lighthearted tone."
              }
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
