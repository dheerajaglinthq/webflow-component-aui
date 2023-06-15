import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./AppNavigation.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-33":{"id":"e-33","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-10","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-34"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".coaching-price-card-wrapper","originalId":"82111d76-4463-1f07-af21-45601f24cd61","appliesTo":"CLASS"},"targets":[{"selector":".coaching-price-card-wrapper","originalId":"82111d76-4463-1f07-af21-45601f24cd61","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686056099616},"e-34":{"id":"e-34","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-33"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".coaching-price-card-wrapper","originalId":"82111d76-4463-1f07-af21-45601f24cd61","appliesTo":"CLASS"},"targets":[{"selector":".coaching-price-card-wrapper","originalId":"82111d76-4463-1f07-af21-45601f24cd61","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686056099617},"e-55":{"id":"e-55","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-96"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".dashboard-nav-link-2","originalId":"8a0b6e39-5699-2947-07af-a29294bcc272","appliesTo":"CLASS"},"targets":[{"selector":".dashboard-nav-link-2","originalId":"8a0b6e39-5699-2947-07af-a29294bcc272","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686136088723},"e-56":{"id":"e-56","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-100"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".dashboard-nav-link-2","originalId":"8a0b6e39-5699-2947-07af-a29294bcc272","appliesTo":"CLASS"},"targets":[{"selector":".dashboard-nav-link-2","originalId":"8a0b6e39-5699-2947-07af-a29294bcc272","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686136088724},"e-57":{"id":"e-57","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-99"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".dashboard-nav-link-2","originalId":"fd65d4c7-81c1-19b2-48fa-24a98bef6888","appliesTo":"CLASS"},"targets":[{"selector":".dashboard-nav-link-2","originalId":"fd65d4c7-81c1-19b2-48fa-24a98bef6888","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686156183325},"e-58":{"id":"e-58","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-92"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".dashboard-nav-link-2","originalId":"fd65d4c7-81c1-19b2-48fa-24a98bef6888","appliesTo":"CLASS"},"targets":[{"selector":".dashboard-nav-link-2","originalId":"fd65d4c7-81c1-19b2-48fa-24a98bef6888","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686156183325},"e-163":{"id":"e-163","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-61","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-164"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a43af581-69ea-7751-6580-b0549cf532c9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a43af581-69ea-7751-6580-b0549cf532c9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686504024367},"e-164":{"id":"e-164","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-62","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-163"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a43af581-69ea-7751-6580-b0549cf532c9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a43af581-69ea-7751-6580-b0549cf532c9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686504024369},"e-165":{"id":"e-165","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-61","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-166"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6480b3593ba5033c57263c59|55786dde-cf14-dd89-7d92-52293f1017f0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6480b3593ba5033c57263c59|55786dde-cf14-dd89-7d92-52293f1017f0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686504172218},"e-166":{"id":"e-166","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-62","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-165"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6480b3593ba5033c57263c59|55786dde-cf14-dd89-7d92-52293f1017f0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6480b3593ba5033c57263c59|55786dde-cf14-dd89-7d92-52293f1017f0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686504172218},"e-167":{"id":"e-167","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-61","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-168"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6480b3593ba5033c57263c59|9c0cec15-e25e-ead2-ee29-525fb147b16c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6480b3593ba5033c57263c59|9c0cec15-e25e-ead2-ee29-525fb147b16c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686504606777},"e-168":{"id":"e-168","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-62","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-167"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6480b3593ba5033c57263c59|9c0cec15-e25e-ead2-ee29-525fb147b16c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6480b3593ba5033c57263c59|9c0cec15-e25e-ead2-ee29-525fb147b16c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686504606777},"e-175":{"id":"e-175","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-69","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-176"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e273e4d9-4edb-6b61-35ab-339731b7c1e9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e273e4d9-4edb-6b61-35ab-339731b7c1e9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686511794193},"e-176":{"id":"e-176","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-70","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-175"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e273e4d9-4edb-6b61-35ab-339731b7c1e9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e273e4d9-4edb-6b61-35ab-339731b7c1e9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686511794194},"e-177":{"id":"e-177","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-71","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-178"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6cbe8d0e-6026-8b9c-68d4-70f9a436eca5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6cbe8d0e-6026-8b9c-68d4-70f9a436eca5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686512041301},"e-178":{"id":"e-178","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-72","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-177"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6cbe8d0e-6026-8b9c-68d4-70f9a436eca5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6cbe8d0e-6026-8b9c-68d4-70f9a436eca5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686512041302},"e-179":{"id":"e-179","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-73","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-180"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9c0290f2-230a-5f58-612b-2bb0a2b478c2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"9c0290f2-230a-5f58-612b-2bb0a2b478c2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686512246022},"e-180":{"id":"e-180","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-74","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-179"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9c0290f2-230a-5f58-612b-2bb0a2b478c2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"9c0290f2-230a-5f58-612b-2bb0a2b478c2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686512246056}},"actionLists":{"a-10":{"id":"a-10","title":"Coach Pricing Hover In","actionItemGroups":[{"actionItems":[{"id":"a-10-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"82111d76-4463-1f07-af21-45601f24cd61"},"globalSwatchId":"e42b2e06","rValue":47,"bValue":65,"gValue":57,"aValue":1}},{"id":"a-10-n-6","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".text-sm-default","selectorGuids":["6f00d157-c0f8-129f-d4e0-87ff1eea0754"]},"globalSwatchId":"e42b2e06","rValue":47,"bValue":65,"gValue":57,"aValue":1}},{"id":"a-10-n-5","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"82111d76-4463-1f07-af21-45601f24cd61"},"xValue":1.1,"yValue":1.1,"locked":true}},{"id":"a-10-n-4","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".coach-price-button","selectorGuids":["d4b8fba1-f8b8-1b1a-19ea-d7bea6a39ada"]},"globalSwatchId":"e42b2e06","rValue":47,"bValue":65,"gValue":57,"aValue":1}},{"id":"a-10-n-3","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".coach-price-button","selectorGuids":["d4b8fba1-f8b8-1b1a-19ea-d7bea6a39ada"]},"globalSwatchId":"80449ce7","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-10-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"82111d76-4463-1f07-af21-45601f24cd61"},"globalSwatchId":"80449ce7","rValue":255,"bValue":255,"gValue":255,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686056103359},"a-11":{"id":"a-11","title":"Coach Pricing Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-11-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"82111d76-4463-1f07-af21-45601f24cd61"},"globalSwatchId":"3a86b552","rValue":248,"bValue":249,"gValue":249,"aValue":1}},{"id":"a-11-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"82111d76-4463-1f07-af21-45601f24cd61"},"xValue":1,"yValue":1,"locked":true}},{"id":"a-11-n-3","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".coach-price-button","selectorGuids":["d4b8fba1-f8b8-1b1a-19ea-d7bea6a39ada"]},"globalSwatchId":"80449ce7","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-11-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".coach-price-button","selectorGuids":["d4b8fba1-f8b8-1b1a-19ea-d7bea6a39ada"]},"globalSwatchId":"e42b2e06","rValue":47,"bValue":65,"gValue":57,"aValue":1}},{"id":"a-11-n-5","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"82111d76-4463-1f07-af21-45601f24cd61"},"globalSwatchId":"e42b2e06","rValue":47,"bValue":65,"gValue":57,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686056103359},"a-21":{"id":"a-21","title":"Nav link Hover In","actionItemGroups":[{"actionItems":[{"id":"a-21-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"8a0b6e39-5699-2947-07af-a29294bcc272"},"value":1,"unit":""}},{"id":"a-21-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".dashboard-nav-icon.fill","selectorGuids":["d74d5f00-5c96-5a0c-b03b-e28c4931aba8","9e0971c9-a3aa-0d14-344b-5994f1575e58"]},"value":"flex"}},{"id":"a-21-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".dashboard-nav-icon","selectorGuids":["d74d5f00-5c96-5a0c-b03b-e28c4931aba8"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686136092829},"a-22":{"id":"a-22","title":"Nav link Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-22-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"58bd2bb4-d389-1a87-8b91-39dabf22447e"},"value":0.7,"unit":""}},{"id":"a-22-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".dashboard-nav-icon.fill","selectorGuids":["d74d5f00-5c96-5a0c-b03b-e28c4931aba8","9e0971c9-a3aa-0d14-344b-5994f1575e58"]},"value":"none"}},{"id":"a-22-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".dashboard-nav-icon","selectorGuids":["d74d5f00-5c96-5a0c-b03b-e28c4931aba8"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686136092829},"a-61":{"id":"a-61","title":"custom-dropdown[open]","actionItemGroups":[{"actionItems":[{"id":"a-61-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".custom-dropdown-list","selectorGuids":["cff6ac2a-ea2c-f38a-fbcd-193cb8a4c145"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-61-n-8","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"a3cd981d-b75b-18cf-c280-87650edd6780"},"value":"none"}},{"id":"a-61-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".more-listt","selectorGuids":["0748a301-605a-ad14-45fe-9b0b1f1876fb"]},"yValue":-20,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-61-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".more-listt","selectorGuids":["0748a301-605a-ad14-45fe-9b0b1f1876fb"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-61-n-9","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"a3cd981d-b75b-18cf-c280-87650edd6780"},"value":"block"}}]},{"actionItems":[{"id":"a-61-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"selector":".more-listt","selectorGuids":["0748a301-605a-ad14-45fe-9b0b1f1876fb"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-61-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"selector":".more-listt","selectorGuids":["0748a301-605a-ad14-45fe-9b0b1f1876fb"]},"value":1,"unit":""}},{"id":"a-61-n-6","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"SIBLINGS","selector":".custom-dropdown-list","selectorGuids":["cff6ac2a-ea2c-f38a-fbcd-193cb8a4c145"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686500570277},"a-62":{"id":"a-62","title":"custom-dropdown[close]","actionItemGroups":[{"actionItems":[{"id":"a-62-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"SIBLINGS","selector":".custom-dropdown-list","selectorGuids":["cff6ac2a-ea2c-f38a-fbcd-193cb8a4c145"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-62-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"selector":".more-listt","selectorGuids":["0748a301-605a-ad14-45fe-9b0b1f1876fb"]},"yValue":-20,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-62-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"selector":".more-listt","selectorGuids":["0748a301-605a-ad14-45fe-9b0b1f1876fb"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-62-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"a3cd981d-b75b-18cf-c280-87650edd6780"},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686500570277},"a-69":{"id":"a-69","title":"Notification[open]","actionItemGroups":[{"actionItems":[{"id":"a-69-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".notification-items-list.width-notifications","selectorGuids":["d7853bbc-5c78-e6a1-f708-5a48a5faff2f","1aa99091-6d8a-d15d-53d9-4e5554e30d04"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686511800457},"a-70":{"id":"a-70","title":"Notification [open]","actionItemGroups":[{"actionItems":[{"id":"a-70-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".notification-items-list.width-notifications","selectorGuids":["d7853bbc-5c78-e6a1-f708-5a48a5faff2f","1aa99091-6d8a-d15d-53d9-4e5554e30d04"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686511800457},"a-71":{"id":"a-71","title":"More [open]","actionItemGroups":[{"actionItems":[{"id":"a-71-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".more-list-wrapper.width-more","selectorGuids":["3411d8af-d2db-b950-e0c8-560e33a512fe","1d8a50ea-c847-230d-29d6-2daa0f3183c2"]},"value":"block"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686512051806},"a-72":{"id":"a-72","title":"More [close]","actionItemGroups":[{"actionItems":[{"id":"a-72-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".more-list-wrapper.width-more","selectorGuids":["3411d8af-d2db-b950-e0c8-560e33a512fe","1d8a50ea-c847-230d-29d6-2daa0f3183c2"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686512051806},"a-73":{"id":"a-73","title":"Avatar [open]","actionItemGroups":[{"actionItems":[{"id":"a-73-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".profile-items-list.width-profile","selectorGuids":["98c8bc0a-5b5e-05df-c590-fd77ce726e58","07a1fb61-89f8-5c8a-a6c0-5147bd7871f1"]},"value":"block"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686512102986},"a-74":{"id":"a-74","title":"Avatar [close]","actionItemGroups":[{"actionItems":[{"id":"a-74-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".profile-items-list.width-profile","selectorGuids":["98c8bc0a-5b5e-05df-c590-fd77ce726e58","07a1fb61-89f8-5c8a-a6c0-5147bd7871f1"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686512102986}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function AppNavigation({
  as: _Component = _Builtin.Block,
  onClickLogout = {},
  isNotificationEmpty = true,
  slotNotificationItem,
  isBadgeVisible = true,
  notificationCount = "1",
  slotAvatar,
  isDashboard = true,
  isJobs = true,
  isInterview = true,
  isResume = true,
  isCoaches = true,
  isNotification = true,
  onClickClearAll = {},
  isPro = true,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "app-navigation")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "navbars-dashboard", "new-nav")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "dashboard-containers")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "dashboard-nav-wrapper")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "brand")}
              button={false}
              options={{
                href: "/dashboard",
              }}
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "logo-dashboard")}
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/6480b3a820148285218fa52f_Frame%205.svg"
              />
            </_Builtin.Link>
            <_Builtin.Block
              className={_utils.cx(_styles, "dashboad-wrapp-nav")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "appnavigation-link")}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "dashboard-nav-links")}
                  button={false}
                  options={{
                    href: "/dashboard",
                  }}
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "nav-icon")}
                    tag="div"
                  >
                    {isDashboard ? (
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(
                          _styles,
                          "dashboard-nav-icon",
                          "fill"
                        )}
                        value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2013%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M1.6001%200C1.04781%200%200.600098%200.447715%200.600098%201V4.25C0.600098%204.80228%201.04781%205.25%201.6001%205.25H4.8501C5.40238%205.25%205.8501%204.80228%205.8501%204.25V1C5.8501%200.447715%205.40238%200%204.8501%200H1.6001ZM1.6001%206.75C1.04781%206.75%200.600098%207.19772%200.600098%207.75V11C0.600098%2011.5523%201.04781%2012%201.6001%2012H4.8501C5.40238%2012%205.8501%2011.5523%205.8501%2011V7.75C5.8501%207.19772%205.40238%206.75%204.8501%206.75H1.6001ZM7.3501%201C7.3501%200.447715%207.79781%200%208.3501%200H11.6001C12.1524%200%2012.6001%200.447715%2012.6001%201V4.25C12.6001%204.80228%2012.1524%205.25%2011.6001%205.25H8.3501C7.79781%205.25%207.3501%204.80228%207.3501%204.25V1ZM8.3501%206.75C7.79781%206.75%207.3501%207.19772%207.3501%207.75V11C7.3501%2011.5523%207.79781%2012%208.3501%2012H11.6001C12.1524%2012%2012.6001%2011.5523%2012.6001%2011V7.75C12.6001%207.19772%2012.1524%206.75%2011.6001%206.75H8.3501Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    ) : null}
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "dashboard-nav-icon")}
                      value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M1%201V6H6V1H1ZM1%200H6C6.55228%200%207%200.447715%207%201V6C7%206.55228%206.55228%207%206%207H1C0.447715%207%200%206.55228%200%206V1C0%200.447715%200.447715%200%201%200ZM1%2010V15H6V10H1ZM1%209H6C6.55228%209%207%209.44771%207%2010V15C7%2015.5523%206.55228%2016%206%2016H1C0.447715%2016%200%2015.5523%200%2015V10C0%209.44771%200.447715%209%201%209ZM10%201V6H15V1H10ZM10%200H15C15.5523%200%2016%200.447715%2016%201V6C16%206.55228%2015.5523%207%2015%207H10C9.44771%207%209%206.55228%209%206V1C9%200.447715%209.44771%200%2010%200ZM10%2010V15H15V10H10ZM10%209H15C15.5523%209%2016%209.44771%2016%2010V15C16%2015.5523%2015.5523%2016%2015%2016H10C9.44771%2016%209%2015.5523%209%2015V10C9%209.44771%209.44771%209%2010%209Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "nav-link-text")}
                    tag="div"
                  >
                    {"Dashboard"}
                  </_Builtin.Block>
                </_Builtin.Link>
                {isDashboard ? (
                  <_Builtin.Block
                    className={_utils.cx(_styles, "avtive-nav-pill")}
                    tag="div"
                  />
                ) : null}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "appnavigation-link")}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "dashboard-nav-links")}
                  button={false}
                  options={{
                    href: "/jobs",
                  }}
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "nav-icon")}
                    tag="div"
                  >
                    {isJobs ? (
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(
                          _styles,
                          "dashboard-nav-icon",
                          "fill"
                        )}
                        value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M0%206C0%209.31371%202.68629%2012%206%2012C7.29583%2012%208.49572%2011.5892%209.47653%2010.8907L14.2929%2015.7071C14.6834%2016.0976%2015.3166%2016.0976%2015.7071%2015.7071C16.0976%2015.3166%2016.0976%2014.6834%2015.7071%2014.2929L10.8907%209.47653C11.5892%208.49572%2012%207.29583%2012%206C12%202.68629%209.31371%200%206%200C2.68629%200%200%202.68629%200%206ZM6%2010C8.20914%2010%2010%208.20914%2010%206C10%203.79086%208.20914%202%206%202C3.79086%202%202%203.79086%202%206C2%208.20914%203.79086%2010%206%2010Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cmask%20id%3D%22mask0_2_3022%22%20style%3D%22mask-type%3Aluminance%22%20maskUnits%3D%22userSpaceOnUse%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2216%22%20height%3D%2216%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M0%206C0%209.31371%202.68629%2012%206%2012C7.29583%2012%208.49572%2011.5892%209.47653%2010.8907L14.2929%2015.7071C14.6834%2016.0976%2015.3166%2016.0976%2015.7071%2015.7071C16.0976%2015.3166%2016.0976%2014.6834%2015.7071%2014.2929L10.8907%209.47653C11.5892%208.49572%2012%207.29583%2012%206C12%202.68629%209.31371%200%206%200C2.68629%200%200%202.68629%200%206ZM6%2010C8.20914%2010%2010%208.20914%2010%206C10%203.79086%208.20914%202%206%202C3.79086%202%202%203.79086%202%206C2%208.20914%203.79086%2010%206%2010Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fmask%3E%0A%3Cg%20mask%3D%22url(%23mask0_2_3022)%22%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E"
                      />
                    ) : null}
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "dashboard-nav-icon")}
                      value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2013%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M0.600098%204.69565C0.600098%207.28899%202.70241%209.3913%205.29575%209.3913C6.40445%209.3913%207.42341%209.00706%208.22672%208.36447L11.7094%2011.8472C11.9132%2012.0509%2012.2435%2012.0509%2012.4473%2011.8472C12.651%2011.6434%2012.651%2011.3131%2012.4473%2011.1093L8.96457%207.62662C9.60715%206.82331%209.9914%205.80435%209.9914%204.69565C9.9914%202.10231%207.88909%200%205.29575%200C2.70241%200%200.600098%202.10231%200.600098%204.69565ZM5.29575%208.34783C7.31279%208.34783%208.94792%206.71269%208.94792%204.69565C8.94792%202.67861%207.31279%201.04348%205.29575%201.04348C3.27871%201.04348%201.64358%202.67861%201.64358%204.69565C1.64358%206.71269%203.27871%208.34783%205.29575%208.34783Z%22%20fill%3D%22white%22%2F%3E%0A%3Cmask%20id%3D%22mask0_1597_1819%22%20style%3D%22mask-type%3Aluminance%22%20maskUnits%3D%22userSpaceOnUse%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2213%22%20height%3D%2212%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M0.600098%204.69565C0.600098%207.28899%202.70241%209.3913%205.29575%209.3913C6.40445%209.3913%207.42341%209.00706%208.22672%208.36447L11.7094%2011.8472C11.9132%2012.0509%2012.2435%2012.0509%2012.4473%2011.8472C12.651%2011.6434%2012.651%2011.3131%2012.4473%2011.1093L8.96457%207.62662C9.60715%206.82331%209.9914%205.80435%209.9914%204.69565C9.9914%202.10231%207.88909%200%205.29575%200C2.70241%200%200.600098%202.10231%200.600098%204.69565ZM5.29575%208.34783C7.31279%208.34783%208.94792%206.71269%208.94792%204.69565C8.94792%202.67861%207.31279%201.04348%205.29575%201.04348C3.27871%201.04348%201.64358%202.67861%201.64358%204.69565C1.64358%206.71269%203.27871%208.34783%205.29575%208.34783Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fmask%3E%0A%3Cg%20mask%3D%22url(%23mask0_1597_1819)%22%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "nav-link-text")}
                    tag="div"
                  >
                    {"Jobs"}
                  </_Builtin.Block>
                </_Builtin.Link>
                {isJobs ? (
                  <_Builtin.Block
                    className={_utils.cx(_styles, "avtive-nav-pill")}
                    tag="div"
                  />
                ) : null}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "appnavigation-link")}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "dashboard-nav-links")}
                  button={false}
                  options={{
                    href: "/interview-preparation",
                  }}
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "nav-icon")}
                    tag="div"
                  >
                    {isInterview ? (
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(
                          _styles,
                          "dashboard-nav-icon",
                          "fill"
                        )}
                        value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2017%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M9.00157%200H3.16157C2.03157%200%200.931567%200.56%200.381567%201.54C-0.304459%202.75956%20-0.0461844%204.29254%201.00157%205.22V8.29C1.00157%208.74%201.54157%208.96%201.85157%208.64L4.50157%206H8.88157C10.3316%206%2011.6616%205.02%2011.9416%203.6C12.3116%201.68%2010.8516%200%209.00157%200ZM13.0016%207H7.12157C5.67157%207%204.33157%207.98%204.06157%209.4C3.88291%2010.2826%204.10959%2011.1987%204.67915%2011.8961C5.24872%2012.5936%206.10111%2012.9987%207.00157%2013H11.5016L14.1516%2015.65C14.2944%2015.7901%2014.507%2015.8315%2014.692%2015.7553C14.877%2015.6791%2014.9988%2015.5%2015.0016%2015.3V12.23C15.6316%2011.67%2016.0016%2010.86%2016.0016%2010.01C16.0016%208.35152%2014.66%207.00551%2013.0016%207Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    ) : null}
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "dashboard-nav-icon")}
                      value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2013%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M0.605187%201.88835C0.786486%200.800557%201.77384%200%202.92509%200H7.35009C8.84062%200%209.94466%201.40244%209.51187%202.87367C9.2485%203.83937%208.29719%204.5%207.27508%204.5H4.50512L2.62509%206.375C2.09287%206.77416%201.35009%206.40277%201.35009%205.775V3.85758C0.798379%203.38721%200.523628%202.69654%200.605187%201.88835ZM7.35009%200.75H2.92509C2.13383%200.75%201.46486%201.29241%201.34822%201.98731C1.28921%202.57746%201.50611%203.05775%201.94305%203.36985L2.10009%203.48202V5.775C2.10009%205.78473%202.1373%205.80334%202.13492%205.80983L4.19475%203.75H7.27508C7.97198%203.75%208.61779%203.30152%208.79032%202.66919C9.0812%201.6802%208.34891%200.75%207.35009%200.75ZM5.85009%206C4.85126%206%204.11897%206.9302%204.41187%207.92633C4.58238%208.55152%205.22819%209%205.92509%209H9.00541L9.11525%209.10983L11.0251%2011.025C11.0629%2011.0533%2011.1001%2011.0347%2011.1001%2011.025V8.73202L11.2571%208.61985C11.6941%208.30775%2011.911%207.82746%2011.8552%207.26165C11.7353%206.54241%2011.0663%206%2010.2751%206H5.85009ZM5.92509%209.75C4.90298%209.75%203.95167%209.08937%203.69032%208.13081C3.25551%206.65244%204.35955%205.25%205.85009%205.25H10.2751C11.4263%205.25%2012.4137%206.05056%2012.5982%207.16269C12.6768%207.94857%2012.4018%208.63738%2011.8501%209.10759V11.025C11.8501%2011.6528%2011.1073%2012.0242%2010.5349%2011.5902L8.69476%209.75H5.92509Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "nav-link-text")}
                    tag="div"
                  >
                    {"Interview"}
                  </_Builtin.Block>
                </_Builtin.Link>
                {isInterview ? (
                  <_Builtin.Block
                    className={_utils.cx(_styles, "avtive-nav-pill")}
                    tag="div"
                  />
                ) : null}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "appnavigation-link")}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "dashboard-nav-links")}
                  button={false}
                  options={{
                    href: "/resume-builder",
                  }}
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "nav-icon")}
                    tag="div"
                  >
                    {isResume ? (
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(
                          _styles,
                          "dashboard-nav-icon",
                          "fill"
                        )}
                        value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2015%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M9%203.5V0.5C9%200.22%208.78%200%208.5%200H1C0.45%200%200%200.45%200%201V15C0%2015.55%200.45%2016%201%2016H13C13.55%2016%2014%2015.55%2014%2015V5.5C14%205.22%2013.78%205%2013.5%205H10.5C9.67%205%209%204.33%209%203.5ZM10%200.5V3C10%203.55%2010.45%204%2011%204H13.5C13.95%204%2014.17%203.46%2013.85%203.15L10.85%200.15C10.54%20-0.17%2010%200.06%2010%200.5Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    ) : null}
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "dashboard-nav-icon")}
                      value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2013%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M7.6001%201.00003H2.6001V11H10.6001V4.00003H8.6001C8.04396%204.00003%207.6001%203.55617%207.6001%203.00003V1.00003ZM11.6001%203.52801V11C11.6001%2011.5562%2011.1562%2012%2010.6001%2012H2.6001C2.04396%2012%201.6001%2011.5562%201.6001%2011V1.00003C1.6001%200.443883%202.04396%202.58214e-05%202.6001%202.58214e-05H8.07212C8.09305%20-0.00130174%208.11412%20-0.00131961%208.13519%202.58214e-05H8.3901C8.6627%202.58214e-05%208.92683%200.11008%209.09365%200.296472L11.2846%202.48838C11.4914%202.67452%2011.6001%202.92994%2011.6001%203.21003V3.46493C11.6014%203.486%2011.6014%203.50707%2011.6001%203.52801ZM8.6001%203.00003H9.89299L8.6001%201.70713V3.00003Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "nav-link-text")}
                    tag="div"
                  >
                    {"Resumes"}
                  </_Builtin.Block>
                </_Builtin.Link>
                {isResume ? (
                  <_Builtin.Block
                    className={_utils.cx(_styles, "avtive-nav-pill")}
                    tag="div"
                  />
                ) : null}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "appnavigation-link")}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "dashboard-nav-links")}
                  button={false}
                  options={{
                    href: "/career-coaches",
                  }}
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "nav-icon")}
                    tag="div"
                  >
                    {isCoaches ? (
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(
                          _styles,
                          "dashboard-nav-icon",
                          "fill"
                        )}
                        value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2011%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M5.99995%206C7.65681%206%208.99995%204.65685%208.99995%203C8.99995%201.34315%207.65681%200%205.99995%200C4.3431%200%202.99995%201.34315%202.99995%203C2.99995%204.65685%204.3431%206%205.99995%206ZM0.999951%2011.42C1.29569%208.88723%203.45003%206.98279%205.99995%207C8.52698%207.01327%2010.6468%208.91%2010.94%2011.42C10.9601%2011.5652%2010.9168%2011.712%2010.8211%2011.823C10.7254%2011.934%2010.5865%2011.9985%2010.44%2012H1.49995C1.35339%2011.9985%201.21454%2011.934%201.11884%2011.823C1.02314%2011.712%200.979825%2011.5652%200.999951%2011.42Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    ) : null}
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "dashboard-nav-icon")}
                      value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2013%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.59825%2011.5433C2.57433%2011.8184%202.33192%2012.022%202.05681%2011.9981C1.78171%2011.9742%201.57809%2011.7318%201.60201%2011.4567C1.82237%208.92255%204.01474%207%206.60013%207C9.18551%207%2011.3779%208.92255%2011.5982%2011.4567C11.6222%2011.7318%2011.4185%2011.9742%2011.1434%2011.9981C10.8683%2012.022%2010.6259%2011.8184%2010.602%2011.5433C10.4274%209.53574%208.67615%208%206.60013%208C4.52411%208%202.77282%209.53574%202.59825%2011.5433ZM6.60013%206C4.94327%206%203.60013%204.65685%203.60013%203C3.60013%201.34315%204.94327%200%206.60013%200C8.25698%200%209.60013%201.34315%209.60013%203C9.60013%204.65685%208.25698%206%206.60013%206ZM6.60013%205C7.7047%205%208.60013%204.10457%208.60013%203C8.60013%201.89543%207.7047%201%206.60013%201C5.49556%201%204.60013%201.89543%204.60013%203C4.60013%204.10457%205.49556%205%206.60013%205Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "nav-link-text")}
                    tag="div"
                  >
                    {"Coaches"}
                  </_Builtin.Block>
                </_Builtin.Link>
                {isCoaches ? (
                  <_Builtin.Block
                    className={_utils.cx(_styles, "avtive-nav-pill")}
                    tag="div"
                  />
                ) : null}
                {isPro ? (
                  <_Builtin.Block
                    className={_utils.cx(_styles, "badge-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-badge")}
                      tag="div"
                    >
                      {"Pro"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                ) : null}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "more-dropdown")}
                data-w-id="6cbe8d0e-6026-8b9c-68d4-70f9a436eca5"
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "more-dropdown-toggle")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "dashboard-nav-links",
                      "is-dropdown"
                    )}
                    tag="div"
                  >
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "dashboard-more-icon")}
                      value="%3Csvg%20width%3D%224%22%20height%3D%2212%22%20viewBox%3D%220%200%204%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M2.0001%206.39998C2.22098%206.39998%202.4001%206.22086%202.4001%205.99998C2.4001%205.7791%202.22098%205.59998%202.0001%205.59998C1.77922%205.59998%201.6001%205.7791%201.6001%205.99998C1.6001%206.22086%201.77922%206.39998%202.0001%206.39998Z%22%20fill%3D%22currentColor%22%20stroke%3D%22white%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3Cpath%20d%3D%22M2.0001%2011.2C2.22098%2011.2%202.4001%2011.0208%202.4001%2010.8C2.4001%2010.5791%202.22098%2010.4%202.0001%2010.4C1.77922%2010.4%201.6001%2010.5791%201.6001%2010.8C1.6001%2011.0208%201.77922%2011.2%202.0001%2011.2Z%22%20fill%3D%22currentColor%22%20stroke%3D%22white%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3Cpath%20d%3D%22M2.0001%201.59999C2.22098%201.59999%202.4001%201.4209%202.4001%201.19999C2.4001%200.979076%202.22098%200.799988%202.0001%200.799988C1.77922%200.799988%201.6001%200.979076%201.6001%201.19999C1.6001%201.4209%201.77922%201.59999%202.0001%201.59999Z%22%20fill%3D%22currentColor%22%20stroke%3D%22white%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "nav-link-text")}
                      tag="div"
                    >
                      {"More"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "more-list-wrapper",
                    "width-more"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "more-listt")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "dashboard-more-wrapper")}
                      tag="div"
                    >
                      <_Builtin.Link
                        className={_utils.cx(_styles, "more-link-wrapper")}
                        button={false}
                        options={{
                          href: "/network-builder",
                        }}
                      >
                        <_Builtin.HtmlEmbed
                          className={_utils.cx(_styles, "more-icon")}
                          value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M11.9967%2011.4416C12.0289%2011.7158%2011.8328%2011.9643%2011.5585%2011.9966C11.2843%2012.0288%2011.0358%2011.8327%2011.0035%2011.5584C10.8329%2010.1083%209.54422%209%208.00009%209C6.45596%209%205.16727%2010.1083%204.99666%2011.5584C4.9644%2011.8327%204.71592%2012.0288%204.44167%2011.9966C4.16742%2011.9643%203.97125%2011.7158%204.00351%2011.4416C4.23421%209.4806%205.95585%208%208.00009%208C10.0443%208%2011.766%209.4806%2011.9967%2011.4416ZM0.992022%207.58944C0.942624%207.86113%200.682332%208.04133%200.410644%207.99193C0.138956%207.94254%20-0.0412461%207.68225%200.00815173%207.41056C0.253525%206.061%201.57063%205%203.00009%205C4.42954%205%205.74665%206.061%205.99202%207.41056C6.04142%207.68225%205.86122%207.94254%205.58953%207.99193C5.31784%208.04133%205.05755%207.86113%205.00815%207.58944C4.85057%206.72272%203.95339%206%203.00009%206C2.04678%206%201.14961%206.72272%200.992022%207.58944ZM3.00009%204C1.89552%204%201.00009%203.10457%201.00009%202C1.00009%200.89543%201.89552%200%203.00009%200C4.10466%200%205.00009%200.89543%205.00009%202C5.00009%203.10457%204.10466%204%203.00009%204ZM3.00009%203C3.55237%203%204.00009%202.55228%204.00009%202C4.00009%201.44772%203.55237%201%203.00009%201C2.4478%201%202.00009%201.44772%202.00009%202C2.00009%202.55228%202.4478%203%203.00009%203ZM8.00009%207C6.61937%207%205.50009%205.88071%205.50009%204.5C5.50009%203.11929%206.61937%202%208.00009%202C9.3808%202%2010.5001%203.11929%2010.5001%204.5C10.5001%205.88071%209.3808%207%208.00009%207ZM8.00009%206C8.82851%206%209.50009%205.32843%209.50009%204.5C9.50009%203.67157%208.82851%203%208.00009%203C7.17166%203%206.50009%203.67157%206.50009%204.5C6.50009%205.32843%207.17166%206%208.00009%206Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                        <_Builtin.Block
                          className={_utils.cx(_styles, "text-md-bold")}
                          tag="div"
                        >
                          {"Network Builder"}
                        </_Builtin.Block>
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "more-link-wrapper")}
                        button={false}
                        options={{
                          href: "/job-tracker",
                        }}
                      >
                        <_Builtin.HtmlEmbed
                          className={_utils.cx(_styles, "more-icon")}
                          value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M5.50013%200H10C10.5761%200%2011%200.423858%2011%201V3.49948C11%203.49983%2011%203.50017%2011%203.50052V11C11%2011.5761%2010.5761%2012%2010%2012H5.50052H5.49948H2C1.42386%2012%201%2011.5761%201%2011V8.50013V8.49987V1C1%200.423858%201.42386%200%202%200H5.49987H5.50013ZM10%203V1H6V3H10ZM6%204H10V11H6V4ZM5%203.50026C5%203.50009%205%203.49991%205%203.49974V1H2V8H5V3.50026ZM2%2011V9H5V11H2Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                        <_Builtin.Block
                          className={_utils.cx(_styles, "text-md-bold")}
                          tag="div"
                        >
                          {"Job Tracker"}
                        </_Builtin.Block>
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={_utils.cx(
                          _styles,
                          "more-link-wrapper",
                          "hide"
                        )}
                        button={false}
                        options={{
                          href: "#",
                        }}
                      >
                        <_Builtin.HtmlEmbed
                          className={_utils.cx(_styles, "more-icon")}
                          value="%3Csvg%20width%3D%2214%22%20height%3D%2212%22%20viewBox%3D%220%200%2014%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M11.6667%2011.466H2.33333C1.59695%2011.466%201%2010.869%201%2010.1326V4.13265C1%203.39627%201.59695%202.79932%202.33333%202.79932H11.6667C12.4031%202.79932%2013%203.39627%2013%204.13265V10.1326C13%2010.869%2012.4031%2011.466%2011.6667%2011.466Z%22%20stroke%3D%22%232F3941%22%2F%3E%0A%3Cpath%20d%3D%22M10.0001%207.46598C9.81601%207.46598%209.66675%207.31672%209.66675%207.13265C9.66675%206.94858%209.81601%206.79932%2010.0001%206.79932C10.1841%206.79932%2010.3334%206.94858%2010.3334%207.13265C10.3334%207.31672%2010.1841%207.46598%2010.0001%207.46598Z%22%20fill%3D%22currentColor%22%20stroke%3D%22%232F3941%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3Cpath%20d%3D%22M11%202.79931V1.86812C11%200.992078%2010.1696%200.354085%209.32313%200.579805L1.98978%202.53537C1.40611%202.69101%201%203.21961%201%203.82368V4.13264%22%20stroke%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                        <_Builtin.Block
                          className={_utils.cx(_styles, "text-md-bold")}
                          tag="div"
                        >
                          {"Salary Negotiation"}
                        </_Builtin.Block>
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "more-link-wrapper")}
                        button={false}
                        options={{
                          href: "/coverletter",
                        }}
                      >
                        <_Builtin.HtmlEmbed
                          className={_utils.cx(_styles, "more-icon")}
                          value="%3Csvg%20width%3D%2212%22%20height%3D%2210%22%20viewBox%3D%220%200%2012%2010%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M11%200H1C0.447715%200%200%200.447715%200%201V9C0%209.55229%200.447715%2010%201%2010H11C11.5523%2010%2012%209.55229%2012%209V1C12%200.447715%2011.5523%200%2011%200ZM1%208.29289V1.70711L5.29645%206.00355C5.48277%206.19141%205.73836%206.2979%206.005%206.2979C6.27164%206.2979%206.52723%206.19141%206.715%206.0021L11%201.70787V8.29289L8.85355%206.14645C8.65829%205.95118%208.34171%205.95118%208.14645%206.14645C7.95118%206.34171%207.95118%206.65829%208.14645%206.85355L10.2929%209H1.70711L3.85355%206.85355C4.04882%206.65829%204.04882%206.34171%203.85355%206.14645C3.65829%205.95118%203.34171%205.95118%203.14645%206.14645L1%208.29289ZM10.2937%201H1.70711L6.005%205.2979L10.2937%201Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                        <_Builtin.Block
                          className={_utils.cx(_styles, "text-md-bold")}
                          tag="div"
                        >
                          {"Cover Letter"}
                        </_Builtin.Block>
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "view-tool-wrapper")}
                        button={false}
                        options={{
                          href: "/toolbox",
                        }}
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "text-md-default")}
                          tag="div"
                        >
                          {"View Toolbox"}
                        </_Builtin.Block>
                        <_Builtin.HtmlEmbed
                          className={_utils.cx(_styles, "more-icon")}
                          value="%3Csvg%20width%3D%228%22%20height%3D%225%22%20viewBox%3D%220%200%208%205%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M7.85355%202.14645C8.04882%202.34172%208.04882%202.6583%207.85355%202.85356L5.85355%204.85355C5.65829%205.04882%205.34171%205.04882%205.14645%204.85355C4.95119%204.65829%204.95119%204.34171%205.14645%204.14645L6.29289%203.00001L0.5%203C0.223858%203%204.76837e-07%202.77614%204.76837e-07%202.5C4.76837e-07%202.22386%200.223858%202%200.5%202L6.29289%202.00001L5.14645%200.853562C4.95118%200.6583%204.95118%200.341718%205.14645%200.146456C5.34171%20-0.0488064%205.65829%20-0.0488064%205.85355%200.146456L7.85355%202.14645Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                      </_Builtin.Link>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className={_utils.cx(_styles, "nav-end")} tag="div">
              <_Builtin.Block
                className={_utils.cx(_styles, "notification-dropdown")}
                data-w-id="e273e4d9-4edb-6b61-35ab-339731b7c1e9"
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "notification-toggle")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "dashboard-nav-links",
                      "is-dropdown"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "bell-button")}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(
                          _styles,
                          "dashboard-nav-icon-copy"
                        )}
                        value="%3Csvg%20width%3D%2216%22%20height%3D%2215%22%20viewBox%3D%220%200%2016%2015%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M13.9466%2012C14.7502%2012%2015.3806%2011.2844%2015.2741%2010.4852C15.0618%208.91451%2014.4812%207.72396%2013.3103%207.41313C13.2977%207.21592%2013.2801%207.00535%2013.2566%206.78385C13.1611%205.88288%2012.9888%204.98064%2012.7185%204.1312C11.9111%201.59359%2010.39%200%207.99992%200C5.60987%200%204.08872%201.59359%203.2813%204.1312C3.01102%204.98064%202.83878%205.88288%202.74322%206.78385C2.71973%207.00535%202.70213%207.21592%202.68958%207.41313C1.51859%207.72394%200.938046%208.91434%200.725923%2010.4841C0.619205%2011.2844%201.24959%2012%202.05325%2012H5.33325C5.33325%2013.4749%206.52506%2014.6667%207.99992%2014.6667C9.47477%2014.6667%2010.6666%2013.4749%2010.6666%2012H13.9466ZM11.9307%206.92448C11.9827%207.41491%2011.9999%207.79294%2011.9999%208C11.9999%208.36819%2012.2984%208.66667%2012.6666%208.66667C13.3529%208.66667%2013.7853%209.42448%2013.9466%2010.6667C13.9466%2010.6667%202.04767%2010.6594%202.0474%2010.6614C2.21456%209.42448%202.6469%208.66667%203.33325%208.66667C3.70144%208.66667%203.99992%208.36819%203.99992%208C3.99992%207.79294%204.0171%207.41491%204.06912%206.92448C4.15585%206.1067%204.31173%205.29019%204.55187%204.53547C5.20278%202.48975%206.30663%201.33333%207.99992%201.33333C9.6932%201.33333%2010.7971%202.48975%2011.448%204.53547C11.6881%205.29019%2011.844%206.1067%2011.9307%206.92448ZM7.99992%2013.3333C8.49523%2013.3333%208.92593%2013.0657%209.15587%2012.6667H6.84396C7.0739%2013.0657%207.5046%2013.3333%207.99992%2013.3333Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                      {isBadgeVisible ? (
                        <_Builtin.Block
                          className={_utils.cx(_styles, "notification-count")}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "notification-text-badge"
                            )}
                            tag="div"
                          >
                            {notificationCount}
                          </_Builtin.Block>
                        </_Builtin.Block>
                      ) : null}
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "notification-items-list",
                    "width-notifications"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "notifications-list")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "notification-list-wrapper"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "notifications-wrapper")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "notification-title-wrapper"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "text-sm-default")}
                            tag="div"
                          >
                            {"Notifications"}
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(_styles, "clear-all-link")}
                            tag="div"
                            {...onClickClearAll}
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "text-sm-default")}
                              tag="div"
                            >
                              {"Clear all"}
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        {isNotificationEmpty ? (
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "slot-notification-wrapper",
                              "flex-notifications-copy"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "slots-notifiaction"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(_styles, "tick-wrapper")}
                                tag="div"
                              >
                                <_Builtin.HtmlEmbed
                                  className={_utils.cx(_styles, "tick-icons")}
                                  value="%3Csvg%20width%3D%228%22%20height%3D%226%22%20viewBox%3D%220%200%208%206%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M3%204.11612L6.55806%200.558058C6.80214%200.313981%207.19786%200.313981%207.44194%200.558058C7.68602%200.802136%207.68602%201.19786%207.44194%201.44194L3.44194%205.44194C3.19786%205.68602%202.80214%205.68602%202.55806%205.44194L0.558058%203.44194C0.313981%203.19786%200.313981%202.80214%200.558058%202.55806C0.802136%202.31398%201.19786%202.31398%201.44194%202.55806L3%204.11612Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                />
                              </_Builtin.Block>
                              <_Builtin.Block tag="div">
                                {"Great Job!"}
                                <br />
                                {" You’ve caught up on all your notifications"}
                              </_Builtin.Block>
                              <_Builtin.Link
                                className={_utils.cx(
                                  _styles,
                                  "notification-link"
                                )}
                                button={false}
                                options={{
                                  href: "/notifications",
                                }}
                              >
                                {"View All Notifications"}
                              </_Builtin.Link>
                            </_Builtin.Block>
                          </_Builtin.Block>
                        ) : null}
                        {isNotification ? (
                          <_Builtin.Block tag="div">
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "slot-notification-wrapper"
                              )}
                              tag="div"
                            >
                              {slotNotificationItem}
                            </_Builtin.Block>
                            <_Builtin.Link
                              className={_utils.cx(
                                _styles,
                                "notification-link",
                                "padding"
                              )}
                              button={false}
                              options={{
                                href: "/notifications",
                              }}
                            >
                              {"View all notifications"}
                            </_Builtin.Link>
                          </_Builtin.Block>
                        ) : null}
                        <_Builtin.Block tag="div" />
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "avatar-dropdown")}
                data-w-id="9c0290f2-230a-5f58-612b-2bb0a2b478c2"
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "avatar-dropdown-toggle")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "profile-image-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "profile-image")}
                      tag="div"
                    >
                      {slotAvatar}
                    </_Builtin.Block>
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(
                        _styles,
                        "dashboard-nav-icon",
                        "color-grey-400"
                      )}
                      value="%3Csvg%20width%3D%2212%22%20height%3D%226%22%20viewBox%3D%220%200%2012%206%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M10.3753%200.219107C10.8066%20-0.125903%2011.4359%20-0.0559812%2011.7809%200.375281C12.0994%200.773369%2012.0643%201.34019%2011.7178%201.6964L11.6247%201.78084L6.62473%205.78084C6.29272%206.04646%205.83364%206.0706%205.47853%205.85328L5.37534%205.78084L0.375342%201.78084C-0.0559202%201.43584%20-0.125842%200.806543%200.219168%200.375281C0.537638%20-0.0228072%201.09834%20-0.113007%201.52191%200.146831L1.62473%200.219107L6.00004%203.71898L10.3753%200.219107Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "profile-items-list",
                    "width-profile"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "profile-list")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "dashboard-more-wrapper",
                        "copy-right-text"
                      )}
                      tag="div"
                    >
                      <_Builtin.Link
                        className={_utils.cx(_styles, "more-link-wrapper")}
                        button={false}
                        options={{
                          href: "/profile",
                        }}
                      >
                        <_Builtin.HtmlEmbed
                          className={_utils.cx(_styles, "more-icon")}
                          value="%3Csvg%20width%3D%2212%22%20height%3D%2210%22%20viewBox%3D%220%200%2012%2010%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M7.99662%209.44158C8.02889%209.71583%207.83272%209.96431%207.55847%209.99658C7.28422%2010.0288%207.03574%209.83267%207.00347%209.55842C6.83287%208.10827%205.54418%207%204.00005%207C2.45592%207%201.16723%208.10827%200.996623%209.55842C0.964359%209.83267%200.715878%2010.0288%200.441627%209.99658C0.167377%209.96431%20-0.028792%209.71583%200.0034728%209.44158C0.234176%207.4806%201.95581%206%204.00005%206C6.04429%206%207.76592%207.4806%207.99662%209.44158ZM8.00005%203C7.72391%203%207.50005%202.77614%207.50005%202.5C7.50005%202.22386%207.72391%202%208.00005%202H11.5C11.7762%202%2012%202.22386%2012%202.5C12%202.77614%2011.7762%203%2011.5%203H8.00005ZM8.50005%206C8.22391%206%208.00005%205.77614%208.00005%205.5C8.00005%205.22386%208.22391%205%208.50005%205H11.5C11.7762%205%2012%205.22386%2012%205.5C12%205.77614%2011.7762%206%2011.5%206H8.50005ZM10%209C9.72391%209%209.50005%208.77614%209.50005%208.5C9.50005%208.22386%209.72391%208%2010%208H11.5C11.7762%208%2012%208.22386%2012%208.5C12%208.77614%2011.7762%209%2011.5%209H10ZM4.00005%205C2.61934%205%201.50005%203.88071%201.50005%202.5C1.50005%201.11929%202.61934%200%204.00005%200C5.38076%200%206.50005%201.11929%206.50005%202.5C6.50005%203.88071%205.38076%205%204.00005%205ZM4.00005%204C4.82848%204%205.50005%203.32843%205.50005%202.5C5.50005%201.67157%204.82848%201%204.00005%201C3.17162%201%202.50005%201.67157%202.50005%202.5C2.50005%203.32843%203.17162%204%204.00005%204Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                        <_Builtin.Block
                          className={_utils.cx(_styles, "text-md-bold")}
                          tag="div"
                        >
                          {"View Profile"}
                        </_Builtin.Block>
                      </_Builtin.Link>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "more-link-wrapper")}
                        tag="div"
                        {...onClickLogout}
                      >
                        <_Builtin.HtmlEmbed
                          className={_utils.cx(_styles, "more-icon")}
                          value="%3Csvg%20width%3D%2212%22%20height%3D%2214%22%20viewBox%3D%220%200%2012%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M6%207.00003H11M11%207.00003L8.85714%209.14289M11%207.00003L8.85714%204.85718%22%20stroke%3D%22%23D93F4C%22%20stroke-width%3D%221.07143%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3Cpath%20d%3D%22M11%202.7143V2.00001C11%201.21103%2010.3604%200.571442%209.57143%200.571442H2.42857C1.63959%200.571442%201%201.21103%201%202.00001V12C1%2012.789%201.63959%2013.4286%202.42857%2013.4286H9.57143C10.3604%2013.4286%2011%2012.789%2011%2012V11.2857%22%20stroke%3D%22%23D93F4C%22%20stroke-width%3D%221.07143%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "text-md-bold",
                            "color-red-500"
                          )}
                          tag="div"
                        >
                          {"Logout"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "copyright-text")}
                        tag="div"
                      >
                        {"© 2023 Aglint Inc. "}
                        <br />
                        {"All Rights Reserved"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
