import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./AuiDropdown.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-163":{"id":"e-163","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-61","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-164"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a43af581-69ea-7751-6580-b0549cf532c9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a43af581-69ea-7751-6580-b0549cf532c9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686504024367},"e-164":{"id":"e-164","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-62","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-163"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a43af581-69ea-7751-6580-b0549cf532c9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a43af581-69ea-7751-6580-b0549cf532c9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686504024369},"e-165":{"id":"e-165","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-61","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-166"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6480b3593ba5033c57263c59|55786dde-cf14-dd89-7d92-52293f1017f0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6480b3593ba5033c57263c59|55786dde-cf14-dd89-7d92-52293f1017f0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686504172218},"e-166":{"id":"e-166","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-62","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-165"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6480b3593ba5033c57263c59|55786dde-cf14-dd89-7d92-52293f1017f0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6480b3593ba5033c57263c59|55786dde-cf14-dd89-7d92-52293f1017f0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686504172218},"e-167":{"id":"e-167","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-61","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-168"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6480b3593ba5033c57263c59|9c0cec15-e25e-ead2-ee29-525fb147b16c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6480b3593ba5033c57263c59|9c0cec15-e25e-ead2-ee29-525fb147b16c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686504606777},"e-168":{"id":"e-168","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-62","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-167"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6480b3593ba5033c57263c59|9c0cec15-e25e-ead2-ee29-525fb147b16c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6480b3593ba5033c57263c59|9c0cec15-e25e-ead2-ee29-525fb147b16c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686504606777}},"actionLists":{"a-61":{"id":"a-61","title":"custom-dropdown[open]","actionItemGroups":[{"actionItems":[{"id":"a-61-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".custom-dropdown-list","selectorGuids":["cff6ac2a-ea2c-f38a-fbcd-193cb8a4c145"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-61-n-8","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"a3cd981d-b75b-18cf-c280-87650edd6780"},"value":"none"}},{"id":"a-61-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".more-listt","selectorGuids":["0748a301-605a-ad14-45fe-9b0b1f1876fb"]},"yValue":-20,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-61-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".more-listt","selectorGuids":["0748a301-605a-ad14-45fe-9b0b1f1876fb"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-61-n-9","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"a3cd981d-b75b-18cf-c280-87650edd6780"},"value":"block"}}]},{"actionItems":[{"id":"a-61-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"selector":".more-listt","selectorGuids":["0748a301-605a-ad14-45fe-9b0b1f1876fb"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-61-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"selector":".more-listt","selectorGuids":["0748a301-605a-ad14-45fe-9b0b1f1876fb"]},"value":1,"unit":""}},{"id":"a-61-n-6","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"SIBLINGS","selector":".custom-dropdown-list","selectorGuids":["cff6ac2a-ea2c-f38a-fbcd-193cb8a4c145"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686500570277},"a-62":{"id":"a-62","title":"custom-dropdown[close]","actionItemGroups":[{"actionItems":[{"id":"a-62-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"SIBLINGS","selector":".custom-dropdown-list","selectorGuids":["cff6ac2a-ea2c-f38a-fbcd-193cb8a4c145"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-62-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"selector":".more-listt","selectorGuids":["0748a301-605a-ad14-45fe-9b0b1f1876fb"]},"yValue":-20,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-62-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"selector":".more-listt","selectorGuids":["0748a301-605a-ad14-45fe-9b0b1f1876fb"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-62-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"a3cd981d-b75b-18cf-c280-87650edd6780"},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686500570277}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function AuiDropdown({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "custom-dropdown", "hide")}
      data-w-id="a43af581-69ea-7751-6580-b0549cf532c9"
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "cutstom-dropdown-toggle")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "paste-your-items")}
          tag="div"
        >
          <_Builtin.Block tag="div">
            {"This is some text inside of a div block."}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "custom-dropdown-list")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "more-listt")} tag="div">
          <_Builtin.Block tag="div">
            {"This is some text inside of a div block."}
          </_Builtin.Block>
          <_Builtin.Block tag="div">
            {"This is some text inside of a div block."}
          </_Builtin.Block>
          <_Builtin.Block tag="div">
            {"This is some text inside of a div block."}
          </_Builtin.Block>
          <_Builtin.Block tag="div">
            {"This is some text inside of a div block."}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
