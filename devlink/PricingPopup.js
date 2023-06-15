import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./PricingPopup.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-109":{"id":"e-109","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-41","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-110"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"841ee67d-759c-ce20-419c-3b9a0c11e20f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"841ee67d-759c-ce20-419c-3b9a0c11e20f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686395128250},"e-110":{"id":"e-110","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-42","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-109"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"841ee67d-759c-ce20-419c-3b9a0c11e20f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"841ee67d-759c-ce20-419c-3b9a0c11e20f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686395128251},"e-153":{"id":"e-153","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-59","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-154"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"647ff5fb374a40bef3d73ae7|95d5f131-33ef-e609-7a42-6e464d40b0c9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"647ff5fb374a40bef3d73ae7|95d5f131-33ef-e609-7a42-6e464d40b0c9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686493471494},"e-212":{"id":"e-212","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-99","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-213"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"96845a09-b109-557c-9eb4-dea14d119569","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"96845a09-b109-557c-9eb4-dea14d119569","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686664576470},"e-214":{"id":"e-214","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-101","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-215"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"96845a09-b109-557c-9eb4-dea14d11956d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"96845a09-b109-557c-9eb4-dea14d11956d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686665038771},"e-216":{"id":"e-216","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-101","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-217"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"96845a09-b109-557c-9eb4-dea14d119577","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"96845a09-b109-557c-9eb4-dea14d119577","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686665047646}},"actionLists":{"a-41":{"id":"a-41","title":"profile [expand]","actionItemGroups":[{"actionItems":[{"id":"a-41-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".profile-desccription","selectorGuids":["4542c770-9604-d6de-f50e-1a41462c4c54"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-41-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".embed-flex","selectorGuids":["52fed630-20a7-0da5-bc89-35c4f4847d44"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-41-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".profile-desccription","selectorGuids":["4542c770-9604-d6de-f50e-1a41462c4c54"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-41-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".embed-flex","selectorGuids":["52fed630-20a7-0da5-bc89-35c4f4847d44"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686395132149},"a-42":{"id":"a-42","title":"profile [collapse]","actionItemGroups":[{"actionItems":[{"id":"a-42-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".profile-desccription","selectorGuids":["4542c770-9604-d6de-f50e-1a41462c4c54"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-42-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".embed-flex","selectorGuids":["52fed630-20a7-0da5-bc89-35c4f4847d44"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686395132149},"a-59":{"id":"a-59","title":"Coach Pricing Close [Dashboard]","actionItemGroups":[{"actionItems":[{"id":"a-59-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"PARENT","selector":".coach-pricing-pop-up","selectorGuids":["8b04e05a-8dbb-7db3-40c7-457a87e4d4be"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-59-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".coach-pricing-pop-up","selectorGuids":["8b04e05a-8dbb-7db3-40c7-457a87e4d4be"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686056388397},"a-99":{"id":"a-99","title":"Coach popup [open]","actionItemGroups":[{"actionItems":[{"id":"a-99-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".coach-pricing-pop-up","selectorGuids":["8b04e05a-8dbb-7db3-40c7-457a87e4d4be"]},"value":"none"}}]},{"actionItems":[{"id":"a-99-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".coach-pricing-pop-up","selectorGuids":["8b04e05a-8dbb-7db3-40c7-457a87e4d4be"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686664587279},"a-101":{"id":"a-101","title":"coach popup [close]","actionItemGroups":[{"actionItems":[{"id":"a-101-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".coach-pricing-pop-up","selectorGuids":["8b04e05a-8dbb-7db3-40c7-457a87e4d4be"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686665089209}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function PricingPopup({
  as: _Component = _Builtin.Block,
  slotPopupCard,
  identifier,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "coach-popup")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "popup-trigger")}
        data-w-id="96845a09-b109-557c-9eb4-dea14d119569"
        tag="div"
        id={identifier}
      >
        <_Builtin.HtmlEmbed value="%3Cstyle%3E%0A.popup-trigger%7B%0Apointer-events%3Anone%3B%0A%7D%0A%3C%2Fstyle%3E" />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "coach-pricing-pop-up")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "coach-pricing-bg")}
          data-w-id="96845a09-b109-557c-9eb4-dea14d11956d"
          tag="div"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "popup-padding")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "coach-pricing-wrapper")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "coach-pricing-heading-wrapper")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text-xxxl-default")}
                tag="div"
              >
                {"Simple, transparent pricing."}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "coaching-price-grid")}
              tag="div"
            >
              {slotPopupCard}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "popup-close")}
              data-w-id="96845a09-b109-557c-9eb4-dea14d119577"
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "embed-flex")}
                value="%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.64645%2013.3536C2.84171%2013.5488%203.15829%2013.5488%203.35355%2013.3536L8%208.70711L12.6464%2013.3536C12.8417%2013.5488%2013.1583%2013.5488%2013.3536%2013.3536C13.5488%2013.1583%2013.5488%2012.8417%2013.3536%2012.6464L8.70711%208L13.3536%203.35355C13.5488%203.15829%2013.5488%202.84171%2013.3536%202.64645C13.1583%202.45118%2012.8417%202.45118%2012.6464%202.64645L8%207.29289L3.35355%202.64645C3.15829%202.45118%202.84171%202.45118%202.64645%202.64645C2.45118%202.84171%202.45118%203.15829%202.64645%203.35355L7.29289%208L2.64645%2012.6464C2.45118%2012.8417%202.45118%2013.1583%202.64645%2013.3536Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3Cmask%20id%3D%22mask0_2526_201540%22%20style%3D%22mask-type%3Aluminance%22%20maskUnits%3D%22userSpaceOnUse%22%20x%3D%222%22%20y%3D%222%22%20width%3D%2212%22%20height%3D%2212%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.64645%2013.3536C2.84171%2013.5488%203.15829%2013.5488%203.35355%2013.3536L8%208.70711L12.6464%2013.3536C12.8417%2013.5488%2013.1583%2013.5488%2013.3536%2013.3536C13.5488%2013.1583%2013.5488%2012.8417%2013.3536%2012.6464L8.70711%208L13.3536%203.35355C13.5488%203.15829%2013.5488%202.84171%2013.3536%202.64645C13.1583%202.45118%2012.8417%202.45118%2012.6464%202.64645L8%207.29289L3.35355%202.64645C3.15829%202.45118%202.84171%202.45118%202.64645%202.64645C2.45118%202.84171%202.45118%203.15829%202.64645%203.35355L7.29289%208L2.64645%2012.6464C2.45118%2012.8417%202.45118%2013.1583%202.64645%2013.3536Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fmask%3E%0A%3Cg%20mask%3D%22url(%23mask0_2526_201540)%22%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
