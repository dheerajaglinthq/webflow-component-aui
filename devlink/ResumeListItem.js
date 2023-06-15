import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { ResumeSkill } from "./ResumeSkill";
import * as _utils from "./utils";
import _styles from "./ResumeListItem.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-33":{"id":"e-33","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-10","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-34"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".coaching-price-card-wrapper","originalId":"82111d76-4463-1f07-af21-45601f24cd61","appliesTo":"CLASS"},"targets":[{"selector":".coaching-price-card-wrapper","originalId":"82111d76-4463-1f07-af21-45601f24cd61","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686056099616},"e-34":{"id":"e-34","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-33"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".coaching-price-card-wrapper","originalId":"82111d76-4463-1f07-af21-45601f24cd61","appliesTo":"CLASS"},"targets":[{"selector":".coaching-price-card-wrapper","originalId":"82111d76-4463-1f07-af21-45601f24cd61","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686056099617},"e-111":{"id":"e-111","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-43","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-112"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"36dc8e83-c5a8-280e-7f57-b8c26c173ab1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"36dc8e83-c5a8-280e-7f57-b8c26c173ab1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686397994259},"e-112":{"id":"e-112","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-44","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-111"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"36dc8e83-c5a8-280e-7f57-b8c26c173ab1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"36dc8e83-c5a8-280e-7f57-b8c26c173ab1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686397994260},"e-113":{"id":"e-113","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-45","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-114"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"36dc8e83-c5a8-280e-7f57-b8c26c173ae2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"36dc8e83-c5a8-280e-7f57-b8c26c173ae2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686396865955},"e-114":{"id":"e-114","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-46","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-113"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"36dc8e83-c5a8-280e-7f57-b8c26c173ae2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"36dc8e83-c5a8-280e-7f57-b8c26c173ae2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686396865955}},"actionLists":{"a-10":{"id":"a-10","title":"Coach Pricing Hover In","actionItemGroups":[{"actionItems":[{"id":"a-10-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"82111d76-4463-1f07-af21-45601f24cd61"},"globalSwatchId":"e42b2e06","rValue":47,"bValue":65,"gValue":57,"aValue":1}},{"id":"a-10-n-6","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".text-sm-default","selectorGuids":["6f00d157-c0f8-129f-d4e0-87ff1eea0754"]},"globalSwatchId":"e42b2e06","rValue":47,"bValue":65,"gValue":57,"aValue":1}},{"id":"a-10-n-5","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"82111d76-4463-1f07-af21-45601f24cd61"},"xValue":1.1,"yValue":1.1,"locked":true}},{"id":"a-10-n-4","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".coach-price-button","selectorGuids":["d4b8fba1-f8b8-1b1a-19ea-d7bea6a39ada"]},"globalSwatchId":"e42b2e06","rValue":47,"bValue":65,"gValue":57,"aValue":1}},{"id":"a-10-n-3","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".coach-price-button","selectorGuids":["d4b8fba1-f8b8-1b1a-19ea-d7bea6a39ada"]},"globalSwatchId":"80449ce7","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-10-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"82111d76-4463-1f07-af21-45601f24cd61"},"globalSwatchId":"80449ce7","rValue":255,"bValue":255,"gValue":255,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686056103359},"a-11":{"id":"a-11","title":"Coach Pricing Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-11-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"82111d76-4463-1f07-af21-45601f24cd61"},"globalSwatchId":"3a86b552","rValue":248,"bValue":249,"gValue":249,"aValue":1}},{"id":"a-11-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"82111d76-4463-1f07-af21-45601f24cd61"},"xValue":1,"yValue":1,"locked":true}},{"id":"a-11-n-3","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".coach-price-button","selectorGuids":["d4b8fba1-f8b8-1b1a-19ea-d7bea6a39ada"]},"globalSwatchId":"80449ce7","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-11-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".coach-price-button","selectorGuids":["d4b8fba1-f8b8-1b1a-19ea-d7bea6a39ada"]},"globalSwatchId":"e42b2e06","rValue":47,"bValue":65,"gValue":57,"aValue":1}},{"id":"a-11-n-5","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"82111d76-4463-1f07-af21-45601f24cd61"},"globalSwatchId":"e42b2e06","rValue":47,"bValue":65,"gValue":57,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686056103359},"a-43":{"id":"a-43","title":"resume-listing-card-hover","actionItemGroups":[{"actionItems":[{"id":"a-43-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".resume-listing-edit-options","selectorGuids":["05a88040-624d-f6cb-f6e0-9d671d08367f"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-43-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".resume-listing-edit-options","selectorGuids":["05a88040-624d-f6cb-f6e0-9d671d08367f"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686397998009},"a-44":{"id":"a-44","title":"resume-listing-card-hover-out","actionItemGroups":[{"actionItems":[{"id":"a-44-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".resume-listing-edit-options","selectorGuids":["05a88040-624d-f6cb-f6e0-9d671d08367f"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686397998009},"a-45":{"id":"a-45","title":"resume-info-iconhover","actionItemGroups":[{"actionItems":[{"id":"a-45-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":700,"target":{"useEventTarget":"SIBLINGS","selector":".resume-progress-info-content","selectorGuids":["05a88040-624d-f6cb-f6e0-9d671d083677"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686396783498},"a-46":{"id":"a-46","title":"resume-info-iconhover-out","actionItemGroups":[{"actionItems":[{"id":"a-46-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"SIBLINGS","selector":".resume-progress-info-content","selectorGuids":["05a88040-624d-f6cb-f6e0-9d671d083677"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686396783498}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ResumeListItem({
  as: _Component = _Builtin.Block,
  resumeName = "Career Adventure Log",
  position = "UI / UX Designer",
  slotSkills,
  onClickEditResume = {},
  onClickSwitchTemplate = {},
  onClickDownload = {},
  onClickDelete = {},
  templateImage = "",
  slotResumeProgress,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "resume-listing-card")}
      data-w-id="36dc8e83-c5a8-280e-7f57-b8c26c173ab1"
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "resume-listing-content-left")}
        id={_utils.cx(
          _styles,
          "w-node-_36dc8e83-c5a8-280e-7f57-b8c26c173ab2-6c173ab1"
        )}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "resume-template-image")}
          loading="lazy"
          width="auto"
          height="auto"
          src={templateImage}
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "resume-listing-edit-options")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "option-stack")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "resume-edit-option")}
              tag="div"
              {...onClickEditResume}
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icon-16x16")}
                value="%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M0.121338%2012.5616V15.2025C0.121338%2015.5671%200.416925%2015.8627%200.781551%2015.8627H3.4224C3.5975%2015.8627%203.76543%2015.7931%203.88925%2015.6693L15.2449%204.31363C15.7668%203.79171%2015.7668%202.97756%2015.2449%202.45565L13.5284%200.739092C13.0064%200.217178%2012.1923%200.217178%2011.6704%200.739092L9.58088%202.8286C9.56503%202.84312%209.54982%202.85833%209.5353%202.87418L0.31471%2012.0948C0.190896%2012.2186%200.121338%2012.3865%200.121338%2012.5616ZM10.0243%204.25127L1.44203%2012.8335V14.5407H3.1492L11.7315%205.95844L10.0243%204.25127ZM12.6651%205.02476L14.3068%203.3831L12.5996%201.67593L10.958%203.31759L12.6651%205.02476Z%22%20fill%3D%22currentcolor%22%2F%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block tag="div">{"Edit"}</_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "resume-edit-option")}
              tag="div"
              {...onClickSwitchTemplate}
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icon-16x16")}
                value="%3Csvg%20width%3D%2219%22%20height%3D%2219%22%20viewBox%3D%220%200%2019%2019%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_2139_14553)%22%3E%0A%3Cpath%20d%3D%22M3.25341%202.38535L3.33216%202.44948L5.58216%204.69948C5.68182%204.79869%205.7407%204.93163%205.7472%205.0721C5.7537%205.21257%205.70735%205.35039%205.61729%205.45838C5.52722%205.56638%205.39997%205.63672%205.26061%205.65555C5.12126%205.67438%204.9799%205.64032%204.86441%205.5601L4.78566%205.49598L3.49753%204.20785L3.49641%2012.9727C3.49643%2013.3922%203.65269%2013.7967%203.93473%2014.1072C4.21677%2014.4177%204.60435%2014.6121%205.02191%2014.6524L5.18391%2014.6602H8.55891C8.69947%2014.66%208.83504%2014.7123%208.93892%2014.807C9.04279%2014.9018%209.10744%2015.0319%209.12014%2015.1719C9.13284%2015.3119%209.09267%2015.4516%209.00754%2015.5634C8.9224%2015.6753%208.79847%2015.7512%208.66016%2015.7762L8.55891%2015.7852H5.18391C4.46985%2015.7853%203.78248%2015.5138%203.26123%2015.0258C2.73998%2014.5378%202.42388%2013.8697%202.37703%2013.1572L2.37141%2012.9727L2.37253%204.2056L1.08216%205.49598C0.988945%205.58899%200.866056%205.64635%200.7349%205.65806C0.603743%205.66978%200.472632%205.63511%200.364408%205.5601L0.285658%205.49598C0.192648%205.40276%200.135288%205.27987%200.12357%205.14872C0.111853%205.01756%200.14652%204.88645%200.221533%204.77823L0.285658%204.69948L2.53566%202.44948C2.62887%202.35647%202.75176%202.29911%202.88292%202.28739C3.01407%202.27567%203.14518%202.31034%203.25341%202.38535ZM13.0589%202.28523C13.773%202.28512%2014.4603%202.55661%2014.9816%203.04465C15.5028%203.53268%2015.8189%204.20071%2015.8658%204.91323L15.8714%205.09773L15.8703%2013.8649L17.1607%2012.5745C17.2539%2012.4815%2017.3768%2012.4241%2017.5079%2012.4124C17.6391%2012.4007%2017.7702%2012.4353%2017.8784%2012.5104L17.9572%2012.5745C18.0502%2012.6677%2018.1075%2012.7906%2018.1192%2012.9217C18.131%2013.0529%2018.0963%2013.184%2018.0213%2013.2922L17.9572%2013.371L15.7072%2015.621C15.6139%2015.714%2015.4911%2015.7713%2015.3599%2015.7831C15.2287%2015.7948%2015.0976%2015.7601%2014.9894%2015.6851L14.9107%2015.621L12.6607%2013.371C12.561%2013.2718%2012.5021%2013.1388%2012.4956%2012.9984C12.4891%2012.8579%2012.5355%2012.7201%2012.6255%2012.6121C12.7156%2012.5041%2012.8428%2012.4337%2012.9822%2012.4149C13.1216%2012.3961%2013.2629%2012.4301%2013.3784%2012.5104L13.4572%2012.5745L14.7453%2013.8626L14.7464%205.09773C14.7464%204.67823%2014.5901%204.27379%2014.3081%203.96326C14.0261%203.65272%2013.6385%203.45837%2013.2209%203.4181L13.0589%203.41023H9.68391C9.54334%203.41048%209.40778%203.35811%209.3039%203.2634C9.20003%203.1687%209.13537%203.03854%209.12267%202.89855C9.10997%202.75856%209.15015%202.61889%209.23528%202.50704C9.32042%202.39519%209.44434%202.31927%209.58266%202.29423L9.68391%202.28523H13.0589Z%22%20fill%3D%22currentcolor%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_2139_14553%22%3E%0A%3Crect%20width%3D%2218%22%20height%3D%2218%22%20fill%3D%22white%22%20transform%3D%22translate(0.121338%200.0351562)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block tag="div">{"Switch Template"}</_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "resume-edit-option", "hide")}
              tag="div"
              {...onClickDownload}
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icon-16x16")}
                value="%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M8.52535%2010.1533L11.8177%206.86096C12.0702%206.60851%2012.4795%206.60851%2012.7319%206.86096C12.9844%207.11342%2012.9844%207.52274%2012.7319%207.77519L8.72389%2011.7832C8.21285%2012.2943%207.41565%2012.2943%206.90461%2011.7832L2.89657%207.77519C2.64411%207.52274%202.64411%207.11342%202.89657%206.86096C3.14903%206.60851%203.55834%206.60851%203.8108%206.86096L7.23244%2010.2826V0.85349C7.23244%200.496461%207.52187%200.207031%207.8789%200.207031C8.23593%200.207031%208.52535%200.496461%208.52535%200.85349V10.1533ZM2.06077%2015.722C1.70374%2015.722%201.41431%2015.4326%201.41431%2015.0756C1.41431%2014.7186%201.70374%2014.4291%202.06077%2014.4291H13.697C14.0541%2014.4291%2014.3435%2014.7186%2014.3435%2015.0756C14.3435%2015.4326%2014.0541%2015.722%2013.697%2015.722H2.06077Z%22%20fill%3D%22currentcolor%22%2F%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block tag="div">{"Download"}</_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "resume-edit-option")}
              tag="div"
              {...onClickDelete}
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icon-16x16")}
                value="%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M6.586%202.72255H9.17184V1.42964H6.586V2.72255ZM10.4648%202.72255V1.42964C10.4648%200.684732%209.91674%200.136719%209.17184%200.136719H6.586C5.8411%200.136719%205.29309%200.684732%205.29309%201.42964V2.72255H2.70725C2.35022%202.72255%202.06079%203.01198%202.06079%203.36901C2.06079%203.72604%202.35022%204.01547%202.70725%204.01547H5.93954H9.8183H13.0506C13.4076%204.01547%2013.6971%203.72604%2013.6971%203.36901C13.6971%203.01198%2013.4076%202.72255%2013.0506%202.72255H10.4648ZM6.58593%2012.4194C6.58593%2012.7765%206.2965%2013.0659%205.93947%2013.0659C5.58244%2013.0659%205.29301%2012.7765%205.29301%2012.4194V6.60131C5.29301%206.24428%205.58244%205.95485%205.93947%205.95485C6.2965%205.95485%206.58593%206.24428%206.58593%206.60131V12.4194ZM10.4647%2012.4194C10.4647%2012.7765%2010.1753%2013.0659%209.81822%2013.0659C9.46119%2013.0659%209.17176%2012.7765%209.17176%2012.4194V6.60131C9.17176%206.24428%209.46119%205.95485%209.81822%205.95485C10.1753%205.95485%2010.4647%206.24428%2010.4647%206.60131V12.4194ZM2.70717%205.95485C2.70717%205.59782%202.9966%205.30839%203.35363%205.30839C3.71066%205.30839%204.00009%205.59782%204.00009%205.95485V14.3588H11.7576V5.95485C11.7576%205.59782%2012.047%205.30839%2012.4041%205.30839C12.7611%205.30839%2013.0505%205.59782%2013.0505%205.95485V14.3588C13.0505%2015.1037%2012.5025%2015.6517%2011.7576%2015.6517H4.00009C3.25519%2015.6517%202.70717%2015.1037%202.70717%2014.3588V5.95485Z%22%20fill%3D%22currentcolor%22%2F%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block tag="div">{"Delete"}</_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "resume-listing-content-right")}
        id={_utils.cx(
          _styles,
          "w-node-_36dc8e83-c5a8-280e-7f57-b8c26c173ac6-6c173ab1"
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "resume-listing-content-wrap")}
          id={_utils.cx(
            _styles,
            "w-node-_36dc8e83-c5a8-280e-7f57-b8c26c173ac7-6c173ab1"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "text-xl-bold")}
            tag="div"
          >
            {resumeName}
          </_Builtin.Block>
          <_Builtin.Block tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "resume-content-detail-header")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "icon-12x12")}
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64849e60dbce6ce560c79d9f_User%20list%20-%2012px%20icon.svg"
              />
              <_Builtin.Block tag="div">{"Position"}</_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "text-md-bold")}
              tag="div"
            >
              {position}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "resume-listing-content-block")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "resume-content-detail-header")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "icon-12x12")}
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64849e613cbfcd23c7baf932_Flag%20-%2012px%20icon.svg"
              />
              <_Builtin.Block tag="div">{"Key Skills"}</_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "key-skills-stack")}
              tag="div"
            >
              {slotSkills ?? (
                <>
                  <ResumeSkill />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "key-skill-text")}
                    tag="div"
                  >
                    {"skill"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "key-skill-text")}
                    tag="div"
                  >
                    {"skill"}
                  </_Builtin.Block>
                </>
              )}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "resume-progress-wrap")}
          tag="div"
        >
          {slotResumeProgress ?? (
            <>
              <_Builtin.Block
                className={_utils.cx(_styles, "progress-header")}
                tag="div"
              >
                <_Builtin.Block tag="div">{"Progress"}</_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "resume-progress-info-icon")}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "icon-12x12")}
                    data-w-id="36dc8e83-c5a8-280e-7f57-b8c26c173ae2"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64849f4ca7baf73f86bf586f_Info%20-%2012px%20icon.svg"
                  />
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "resume-progress-info-content"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-sm-default")}
                      tag="div"
                    >
                      <_Builtin.Span
                        className={_utils.cx(_styles, "text-color-green")}
                      >
                        {"+25%"}
                      </_Builtin.Span>
                      {" Add employement history"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-sm-default")}
                      tag="div"
                    >
                      <_Builtin.Span
                        className={_utils.cx(_styles, "text-color-green")}
                      >
                        {"+15%"}
                      </_Builtin.Span>
                      {" Add profile summary"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-sm-default")}
                      tag="div"
                    >
                      <_Builtin.Span
                        className={_utils.cx(_styles, "text-color-green")}
                      >
                        {"+15%"}
                      </_Builtin.Span>
                      {" Add education"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-sm-default")}
                      tag="div"
                    >
                      <_Builtin.Span
                        className={_utils.cx(_styles, "text-color-green")}
                      >
                        {"+10%"}
                      </_Builtin.Span>
                      {" Add job title"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-sm-default")}
                      tag="div"
                    >
                      <_Builtin.Span
                        className={_utils.cx(_styles, "text-color-green")}
                      >
                        {"+04%"}
                      </_Builtin.Span>
                      {" Add skills"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-sm-default")}
                      tag="div"
                    >
                      <_Builtin.Span
                        className={_utils.cx(_styles, "text-color-green")}
                      >
                        {"+03%"}
                      </_Builtin.Span>
                      {" Add experience"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "info-pointer")}
                      id={_utils.cx(
                        _styles,
                        "w-node-_36dc8e83-c5a8-280e-7f57-b8c26c173afc-6c173ab1"
                      )}
                      tag="div"
                    />
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "progress-bar", "hide")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "progress-fill")}
                  tag="div"
                />
              </_Builtin.Block>
              <_Builtin.Block tag="div">{slotResumeProgress}</_Builtin.Block>
            </>
          )}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
