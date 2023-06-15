import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./CoverLetterListingCard.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-75":{"id":"e-75","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-24","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-76"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"dae345aa-7813-5b4a-9ece-1c1689388cbf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"dae345aa-7813-5b4a-9ece-1c1689388cbf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686207286594},"e-76":{"id":"e-76","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-25","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-75"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"dae345aa-7813-5b4a-9ece-1c1689388cbf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"dae345aa-7813-5b4a-9ece-1c1689388cbf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686207286595}},"actionLists":{"a-24":{"id":"a-24","title":"coverletter-hover","actionItemGroups":[{"actionItems":[{"id":"a-24-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".coverletter-overlay","selectorGuids":["4990f65e-979b-ac9d-bf58-e564dc7b0f4f"]},"value":1,"unit":""}},{"id":"a-24-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":true,"id":"dae345aa-7813-5b4a-9ece-1c1689388cbf"},"xValue":1.03,"yValue":1.03,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686207291217},"a-25":{"id":"a-25","title":"coverletter-hover-out","actionItemGroups":[{"actionItems":[{"id":"a-25-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".coverletter-overlay","selectorGuids":["4990f65e-979b-ac9d-bf58-e564dc7b0f4f"]},"value":0,"unit":""}},{"id":"a-25-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":true,"id":"dae345aa-7813-5b4a-9ece-1c1689388cbf"},"xValue":1,"yValue":1,"locked":true}},{"id":"a-25-n-3","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"dae345aa-7813-5b4a-9ece-1c1689388cbf"},"globalSwatchId":"ea561a79","rValue":216,"bValue":222,"gValue":220,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686207291217}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function CoverLetterListingCard({
  as: _Component = _Builtin.Block,
  name = "Cover letter for SERVPRO of Northeast Wichita",
  onClickLike = {},
  onClickDelete = {},
  onClickCopy = {},
  onClickEdit = {},
  coverletterContent = "",
  isFavorite = true,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "coverletter-content-wrap")}
      id={_utils.cx(
        _styles,
        "w-node-dae345aa-7813-5b4a-9ece-1c1689388cbf-89388cbf"
      )}
      data-w-id="dae345aa-7813-5b4a-9ece-1c1689388cbf"
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "coverletter-generated-content-wrap")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "coverletter-overlay")}
          tag="div"
        >
          <_Builtin.Block tag="div" {...onClickEdit}>
            <_Builtin.Image
              loading="lazy"
              width="auto"
              height="auto"
              src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64807eaf2d16a205e8f79bda_draft.svg"
            />
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "coverletter-content")}
          tag="div"
        >
          {coverletterContent}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "coverletter-gradient")}
          tag="div"
        />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "coverletter-buttons-wrap")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "text-md-bold", "one-line-clamp")}
          tag="div"
        >
          {name}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "icon-buttons-flex")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "iconbutton", "heart")}
            tag="div"
            {...onClickLike}
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "heart-icon", "disabled")}
              value="%3Csvg%20width%3D%2216%22%20height%3D%2215%22%20viewBox%3D%220%200%2016%2015%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M11.5%200C13.9761%200%2016%202.02386%2016%204.5C16%205.24597%2015.7997%206.01872%2015.4341%206.74807C15.0747%207.37704%2014.6115%208.05634%2014.0563%208.77967C13.534%209.45998%2012.9366%2010.171%2012.2781%2010.9036C11.4153%2011.8634%2010.4921%2012.812%209.56899%2013.7082C9.24592%2014.0219%208.94581%2014.3067%208.67627%2014.5575C8.51397%2014.7085%208.39751%2014.8149%208.33448%2014.8716C8.14433%2015.0428%207.85567%2015.0428%207.66552%2014.8716C7.60249%2014.8149%207.48603%2014.7085%207.32373%2014.5575C7.05419%2014.3067%206.75408%2014.0219%206.43101%2013.7082C5.50789%2012.812%204.58468%2011.8634%203.7219%2010.9036C3.06342%2010.171%202.46599%209.45998%201.94374%208.77967C1.38845%208.05634%200.92529%207.37704%200.552786%206.72361C0.200344%206.01872%200%205.24597%200%204.5C0%202.02386%202.02386%200%204.5%200C5.86405%200%207.13877%200.664062%208%201.72375C8.86123%200.664062%2010.1359%200%2011.5%200ZM8%2013.8208C8.26326%2013.5758%208.55657%2013.2974%208.87242%2012.9907C9.78036%2012.1093%2010.6882%2011.1765%2011.5344%2010.2351C12.1766%209.52063%2012.7577%208.82898%2013.263%208.17074C13.7927%207.48084%2014.2311%206.83784%2014.5528%206.27639C14.8388%205.70436%2015%205.0826%2015%204.5C15%202.57614%2013.4239%201%2011.5%201C10.2554%201%209.08577%201.731%208.43189%202.85194C8.23895%203.18269%207.76105%203.18269%207.56811%202.85194C6.91423%201.731%205.74463%201%204.5%201C2.57614%201%201%202.57614%201%204.5C1%205.0826%201.16119%205.70436%201.43412%206.25193C1.76892%206.83784%202.20734%207.48084%202.73696%208.17074C3.24227%208.82898%203.8234%209.52063%204.4656%2010.2351C5.3118%2011.1765%206.21964%2012.1093%207.12758%2012.9907C7.44343%2013.2974%207.73674%2013.5758%208%2013.8208Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "heart-circle", "hide")}
              tag="div"
            />
            {isFavorite ? (
              <_Builtin.Block
                className={_utils.cx(_styles, "heart-icon-active-wrap")}
                tag="div"
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "heart-icon", "active")}
                  value="%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M8%2016C7.87704%2016.0025%207.7582%2015.9557%207.67%2015.87C7.46%2015.68%202.59%2011.27%200.6%207.74C0.2%207.04%200%206.28%200%205.5C0%203.02%202.02%201%204.5%201C5.87%201%207.15%201.64%208%202.7C8.85%201.64%2010.13%201%2011.5%201C13.98%201%2016%203.02%2016%205.5C16%206.28%2015.8%207.04%2015.4%207.75C13.42%2011.28%208.54%2015.69%208.33%2015.88C8.24%2015.96%208.12%2016%208%2016Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                />
              </_Builtin.Block>
            ) : null}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "iconbutton")}
            tag="div"
            {...onClickDelete}
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "delete-icon")}
              value="%3Csvg%20width%3D%2212%22%20height%3D%2216%22%20viewBox%3D%220%200%2012%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M5.33334%202H7.33334V1H5.33334V2ZM8.33334%202V1C8.33334%200.423858%207.90949%200%207.33334%200H5.33334C4.7572%200%204.33334%200.423858%204.33334%201V2H1.33334C1.0572%202%200.833344%202.22386%200.833344%202.5C0.833344%202.77614%201.0572%203%201.33334%203H4.83334H7.83334H11.3333C11.6095%203%2011.8333%202.77614%2011.8333%202.5C11.8333%202.22386%2011.6095%202%2011.3333%202H8.33334ZM4.83334%2014C5.10949%2014%205.33334%2013.7761%205.33334%2013.5V5.5C5.33334%205.22386%205.10949%205%204.83334%205C4.5572%205%204.33334%205.22386%204.33334%205.5V13.5C4.33334%2013.7761%204.5572%2014%204.83334%2014ZM7.83334%2014C8.10949%2014%208.33334%2013.7761%208.33334%2013.5V5.5C8.33334%205.22386%208.10949%205%207.83334%205C7.5572%205%207.33334%205.22386%207.33334%205.5V13.5C7.33334%2013.7761%207.5572%2014%207.83334%2014ZM1.83334%204C1.5572%204%201.33334%204.22386%201.33334%204.5V15C1.33334%2015.5761%201.7572%2016%202.33334%2016H10.3333C10.9095%2016%2011.3333%2015.5761%2011.3333%2015V4.5C11.3333%204.22386%2011.1095%204%2010.8333%204C10.5572%204%2010.3333%204.22386%2010.3333%204.5V15H2.33334V4.5C2.33334%204.22386%202.10949%204%201.83334%204Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
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
        <_Builtin.HtmlEmbed
          className={_utils.cx(_styles, "hide")}
          value="%3Cstyle%3E%0A.line-clamp-1%20%7B%0A%09display%3A%20-webkit-box%3B%0A%09overflow%3A%20hidden%3B%0A%09-webkit-line-clamp%3A%201%3B%0A%09-webkit-box-orient%3A%20vertical%3B%0A%7D%0A%3C%2Fstyle%3E"
        />
      </_Builtin.Block>
    </_Component>
  );
}
