import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./DashboardProfile.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-109":{"id":"e-109","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-41","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-110"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"841ee67d-759c-ce20-419c-3b9a0c11e20f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"841ee67d-759c-ce20-419c-3b9a0c11e20f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686395128250},"e-110":{"id":"e-110","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-42","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-109"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"841ee67d-759c-ce20-419c-3b9a0c11e20f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"841ee67d-759c-ce20-419c-3b9a0c11e20f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686395128251}},"actionLists":{"a-41":{"id":"a-41","title":"profile [expand]","actionItemGroups":[{"actionItems":[{"id":"a-41-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".profile-desccription","selectorGuids":["4542c770-9604-d6de-f50e-1a41462c4c54"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-41-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".embed-flex","selectorGuids":["52fed630-20a7-0da5-bc89-35c4f4847d44"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-41-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".profile-desccription","selectorGuids":["4542c770-9604-d6de-f50e-1a41462c4c54"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-41-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".embed-flex","selectorGuids":["52fed630-20a7-0da5-bc89-35c4f4847d44"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686395132149},"a-42":{"id":"a-42","title":"profile [collapse]","actionItemGroups":[{"actionItems":[{"id":"a-42-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".profile-desccription","selectorGuids":["4542c770-9604-d6de-f50e-1a41462c4c54"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-42-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".embed-flex","selectorGuids":["52fed630-20a7-0da5-bc89-35c4f4847d44"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686395132149}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function DashboardProfile({
  as: _Component = _Builtin.Block,
  profileDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  slotTags,
  coachName = "Steven Starks",
  coachImage = "https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64845620917e8c64f08aa2cd_Vectors-Wrapper.svg",
  coachSubtext = "Career Coach based in Phoenix, Arizona",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "profile")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "main-top")} tag="div">
        <_Builtin.Block className={_utils.cx(_styles, "coach")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "coach-image-in-dashbpard")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "cover-image")}
              loading="lazy"
              width={100}
              height={101.69491577148438}
              src={coachImage}
            />
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "frame-620")} tag="div">
          <_Builtin.Block className={_utils.cx(_styles, "frame-654")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "frame-631")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "medium-bold-2")}
                tag="div"
              >
                {coachName}
              </_Builtin.Block>
              <_Builtin.Image
                className={_utils.cx(_styles, "vectors-wrapper-4")}
                loading="lazy"
                width={12}
                height={12}
                src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64845621b2eeded95ba050fb_Vectors-Wrapper.svg"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "drop-arrow")}
              data-w-id="841ee67d-759c-ce20-419c-3b9a0c11e20f"
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "embed-flex")}
                value="%3Csvg%20width%3D%2210%22%20height%3D%2210%22%20viewBox%3D%220%200%2010%2010%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M8.62796%203.03903C8.48332%202.89439%208.2588%202.87832%208.09641%202.99082L8.03871%203.03903L5%206.07783L1.9613%203.03903C1.81666%202.89439%201.59214%202.87832%201.42975%202.99082L1.37204%203.03903C1.2274%203.18367%201.21133%203.40819%201.32383%203.57058L1.37204%203.62829L4.70537%206.96162C4.85001%207.10626%205.07453%207.12233%205.23692%207.00983L5.29463%206.96162L8.62796%203.62829C8.79068%203.46557%208.79068%203.20175%208.62796%203.03903Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "expertise-pills")}
            tag="div"
          >
            {slotTags}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "profile-desccription")}
        tag="div"
      >
        <_Builtin.Paragraph className={_utils.cx(_styles, "profile-para")}>
          {profileDescription}
        </_Builtin.Paragraph>
      </_Builtin.Block>
    </_Component>
  );
}
