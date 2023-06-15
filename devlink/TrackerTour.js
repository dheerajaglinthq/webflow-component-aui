import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./TrackerTour.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-88":{"id":"e-88","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-32","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-98"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"515ce44d-fc64-4f83-14b1-6da747942dd4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"515ce44d-fc64-4f83-14b1-6da747942dd4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1686296820779},"e-89":{"id":"e-89","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-32","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-95"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"515ce44d-fc64-4f83-14b1-6da747942de9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"515ce44d-fc64-4f83-14b1-6da747942de9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1686297164844},"e-91":{"id":"e-91","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-32","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-97"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"515ce44d-fc64-4f83-14b1-6da747942dfa","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"515ce44d-fc64-4f83-14b1-6da747942dfa","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1686300918392},"e-92":{"id":"e-92","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-32","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-99"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"515ce44d-fc64-4f83-14b1-6da747942e0b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"515ce44d-fc64-4f83-14b1-6da747942e0b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1686301361978},"e-101":{"id":"e-101","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-32","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-102"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4ed1f407-f739-8a9e-a683-1098f3260077","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4ed1f407-f739-8a9e-a683-1098f3260077","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1686315634576},"e-204":{"id":"e-204","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-33","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-205"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e851a504-8485-e9b2-6d28-59bf7d61a88f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e851a504-8485-e9b2-6d28-59bf7d61a88f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686647072819},"e-206":{"id":"e-206","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-34","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-207"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"648341dc1b63be0f501f34c3|29f88e3a-76b8-1f41-fb8a-84dfdd6fb951","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"648341dc1b63be0f501f34c3|29f88e3a-76b8-1f41-fb8a-84dfdd6fb951","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686647177715},"e-208":{"id":"e-208","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-35","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-209"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"648341dc1b63be0f501f34c3|24550576-f90b-6558-1c23-e682c1d41395","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"648341dc1b63be0f501f34c3|24550576-f90b-6558-1c23-e682c1d41395","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686647232372},"e-210":{"id":"e-210","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-33","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-211"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"648341dc1b63be0f501f34c3|6a047880-9fba-56cd-f3d5-60e57f5ac1eb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"648341dc1b63be0f501f34c3|6a047880-9fba-56cd-f3d5-60e57f5ac1eb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686647281452}},"actionLists":{"a-32":{"id":"a-32","title":"Track Tour Step1","actionItemGroups":[{"actionItems":[{"id":"a-32-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".tracker-image","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1cc"]},"value":0,"unit":""}},{"id":"a-32-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".tour-track-card","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1da"]},"value":0,"unit":""}},{"id":"a-32-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".tour-tracker-image-card","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1d0"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-32-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutExpo","duration":600,"target":{"selector":".tracker-image","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1cc"]},"value":1,"unit":""}},{"id":"a-32-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"selector":".tour-track-card","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1da"]},"value":1,"unit":""}},{"id":"a-32-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":300,"easing":"inOutExpo","duration":600,"target":{"selector":".tour-tracker-image-card","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1d0"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686296830164},"a-33":{"id":"a-33","title":"Track Tour Step2","actionItemGroups":[{"actionItems":[{"id":"a-33-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".tour-guide-wrapper.step1","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1c4","ab51eaf5-e927-a5a6-6112-aae32ad2f1e1"]},"value":"flex"}},{"id":"a-33-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".tour-track-card-2","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1c2"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-33-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".tour-track-card-2","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1c2"]},"value":"none"}},{"id":"a-33-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".tour-track-card-2","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1c2"]},"value":0,"unit":""}},{"id":"a-33-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".arrow-icon-guide-step2","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1be"]},"value":0,"unit":""}},{"id":"a-33-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".tracker-image-step2","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1bd"]},"yValue":-50,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-33-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".tracker-image-step2","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1bd"]},"value":0,"unit":""}},{"id":"a-33-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".tour-tracker-image-card-step2","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1d2"]},"yValue":-50,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-33-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".tour-tracker-image-card-step2","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1d2"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-33-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"PARENT","selector":".tour-guide-wrapper.step1","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1c4","ab51eaf5-e927-a5a6-6112-aae32ad2f1e1"]},"value":0,"unit":""}},{"id":"a-33-n-21","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".tour-guide-wrapper-step2","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1dd"]},"value":"flex"}},{"id":"a-33-n-11","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".tour-track-card-2","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1c2"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-33-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".tour-track-card-2","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1c2"]},"value":1,"unit":""}},{"id":"a-33-n-14","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".tour-track-card","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1da"]},"globalSwatchId":"3a86b552","rValue":248,"bValue":249,"gValue":249,"aValue":1}},{"id":"a-33-n-12","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".tour-track-card-2","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1c2"]},"value":"flex"}},{"id":"a-33-n-17","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":600,"target":{"selector":".tour-tracker-image-card-step2","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1d2"]},"value":1,"unit":""}},{"id":"a-33-n-18","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":600,"target":{"selector":".tracker-image-step2","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1bd"]},"value":1,"unit":""}},{"id":"a-33-n-19","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":800,"target":{"selector":".tracker-image-step2","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1bd"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-33-n-20","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":800,"target":{"selector":".tour-tracker-image-card-step2","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1d2"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-33-n-15","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".tour-guide-wrapper.step1","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1c4","ab51eaf5-e927-a5a6-6112-aae32ad2f1e1"]},"value":"none"}},{"id":"a-33-n-16","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".arrow-icon-guide-step2","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1be"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686297729752},"a-34":{"id":"a-34","title":"Track Tour Step3","actionItemGroups":[{"actionItems":[{"id":"a-34-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".tracker-image-step3","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1d6"]},"yValue":-50,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-34-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".tour-track-card-2","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1c2"]},"value":"none"}},{"id":"a-34-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".tour-track-card-2","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1c2"]},"value":0,"unit":""}},{"id":"a-34-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".tour-track-card-2","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1c2"]},"xValue":0.5,"yValue":0.5,"locked":true}},{"id":"a-34-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".tour-track-card","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1da"]},"value":"none"}},{"id":"a-34-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".tour-track-card","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1da"]},"value":0,"unit":""}},{"id":"a-34-n-7","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".tour-track-card","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1da"]},"xValue":0.5,"yValue":0.5,"locked":true}},{"id":"a-34-n-8","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".tour-track-card","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1da"]},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":0}},{"id":"a-34-n-9","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".tour-track-card-2","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1c2"]},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":0}},{"id":"a-34-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".arrow-icon-guide-step3","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1bc"]},"value":0,"unit":""}},{"id":"a-34-n-11","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".tour-guide-wrapper-step2","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1dd"]},"value":"flex"}},{"id":"a-34-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".tour-guide-wrapper-step2","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1dd"]},"value":1,"unit":""}},{"id":"a-34-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".tracker-image-step3","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1d6"]},"value":0,"unit":""}},{"id":"a-34-n-14","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".tour-tracker-image-card-step3","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1c7"]},"yValue":-50,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-34-n-15","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".tour-tracker-image-card-step3","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1c7"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-34-n-16","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"PARENT","selector":".tour-guide-wrapper-step2","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1dd"]},"value":0,"unit":""}},{"id":"a-34-n-17","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".tour-track-card","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1da"]},"value":1,"unit":""}},{"id":"a-34-n-18","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".tour-track-card","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1da"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-34-n-19","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".tour-track-card","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1da"]},"value":"flex"}},{"id":"a-34-n-20","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"ease","duration":400,"target":{"selector":".tour-track-card","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1da"]},"globalSwatchId":"3a86b552","rValue":248,"bValue":249,"gValue":249,"aValue":1}},{"id":"a-34-n-31","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".tour-guide-wrapper-step3","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1d3"]},"value":"flex"}},{"id":"a-34-n-21","actionTypeId":"TRANSFORM_SCALE","config":{"delay":200,"easing":"ease","duration":500,"target":{"selector":".tour-track-card-2","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1c2"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-34-n-22","actionTypeId":"GENERAL_DISPLAY","config":{"delay":200,"easing":"","duration":0,"target":{"selector":".tour-track-card-2","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1c2"]},"value":"flex"}},{"id":"a-34-n-23","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"ease","duration":500,"target":{"selector":".tour-track-card-2","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1c2"]},"value":1,"unit":""}},{"id":"a-34-n-24","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":200,"easing":"","duration":500,"target":{"selector":".tour-track-card-2","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1c2"]},"globalSwatchId":"3a86b552","rValue":248,"bValue":249,"gValue":249,"aValue":1}},{"id":"a-34-n-32","actionTypeId":"GENERAL_DISPLAY","config":{"delay":200,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".tour-guide-wrapper-step2","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1dd"]},"value":"none"}}]},{"actionItems":[{"id":"a-34-n-25","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".tour-guide-wrapper-step2","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1dd"]},"value":"none"}},{"id":"a-34-n-26","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".arrow-icon-guide-step3","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1bc"]},"value":1,"unit":""}},{"id":"a-34-n-27","actionTypeId":"STYLE_OPACITY","config":{"delay":300,"easing":"ease","duration":600,"target":{"selector":".tour-tracker-image-card-step3","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1c7"]},"value":1,"unit":""}},{"id":"a-34-n-28","actionTypeId":"STYLE_OPACITY","config":{"delay":300,"easing":"ease","duration":600,"target":{"selector":".tracker-image-step3","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1d6"]},"value":1,"unit":""}},{"id":"a-34-n-29","actionTypeId":"TRANSFORM_MOVE","config":{"delay":300,"easing":"outExpo","duration":800,"target":{"selector":".tracker-image-step3","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1d6"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-34-n-30","actionTypeId":"TRANSFORM_MOVE","config":{"delay":300,"easing":"outExpo","duration":800,"target":{"selector":".tour-tracker-image-card-step3","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1c7"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686297729752},"a-35":{"id":"a-35","title":"Track Tour Step4","actionItemGroups":[{"actionItems":[{"id":"a-35-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".tracker-image-step4","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1cd"]},"yValue":-50,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-35-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".tour-track-card-2-next","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1c5"]},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":0}},{"id":"a-35-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".tour-track-card-2-next","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1c5"]},"xValue":0.5,"yValue":0.5,"locked":true}},{"id":"a-35-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".tour-track-card-2-next","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1c5"]},"value":"none"}},{"id":"a-35-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".tour-track-card-2-next","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1c5"]},"value":0,"unit":""}},{"id":"a-35-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".tour-track-card-4","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1d4"]},"value":"none"}},{"id":"a-35-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".tour-track-card-4","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1d4"]},"value":0,"unit":""}},{"id":"a-35-n-8","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".tour-track-card3","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1ba"]},"xValue":0.5,"yValue":0.5,"locked":true}},{"id":"a-35-n-9","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".tour-track-card3","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1ba"]},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":0}},{"id":"a-35-n-10","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".tour-track-card3","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1ba"]},"value":"none"}},{"id":"a-35-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".tour-track-card3","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1ba"]},"value":0,"unit":""}},{"id":"a-35-n-12","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".tour-track-card-next","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1dc"]},"xValue":0.5,"yValue":0.5,"locked":true}},{"id":"a-35-n-13","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".tour-track-card-next","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1dc"]},"value":"none"}},{"id":"a-35-n-14","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".tour-track-card-next","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1dc"]},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":0}},{"id":"a-35-n-15","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".tour-track-card-next","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1dc"]},"value":0,"unit":""}},{"id":"a-35-n-16","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".tour-guide-wrapper-step3","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1d3"]},"value":"flex"}},{"id":"a-35-n-17","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".tour-guide-wrapper-step3","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1d3"]},"value":1,"unit":""}},{"id":"a-35-n-18","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".arrow-icon-guide-step4","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1c8"]},"value":0,"unit":""}},{"id":"a-35-n-19","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".tracker-image-step4","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1cd"]},"value":0,"unit":""}},{"id":"a-35-n-20","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".tour-tracker-image-card-step4","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1d7"]},"yValue":-50,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-35-n-21","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".tour-tracker-image-card-step4","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1d7"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-35-n-22","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".tour-guide-wrapper-step3","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1d3"]},"value":0,"unit":""}},{"id":"a-35-n-44","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".tour-guide-wrapper-step4","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1ce"]},"value":"flex"}},{"id":"a-35-n-23","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".tour-track-card-next","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1dc"]},"value":1,"unit":""}},{"id":"a-35-n-24","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".tour-track-card-next","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1dc"]},"globalSwatchId":"3a86b552","rValue":248,"bValue":249,"gValue":249,"aValue":1}},{"id":"a-35-n-25","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".tour-track-card-next","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1dc"]},"value":"flex"}},{"id":"a-35-n-26","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".tour-track-card-next","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1dc"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-35-n-27","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"ease","duration":500,"target":{"selector":".tour-track-card-2-next","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1c5"]},"value":1,"unit":""}},{"id":"a-35-n-28","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":200,"easing":"ease","duration":300,"target":{"selector":".tour-track-card-2-next","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1c5"]},"globalSwatchId":"3a86b552","rValue":248,"bValue":249,"gValue":249,"aValue":1}},{"id":"a-35-n-29","actionTypeId":"TRANSFORM_SCALE","config":{"delay":200,"easing":"ease","duration":500,"target":{"selector":".tour-track-card-2-next","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1c5"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-35-n-30","actionTypeId":"GENERAL_DISPLAY","config":{"delay":200,"easing":"","duration":0,"target":{"selector":".tour-track-card-2-next","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1c5"]},"value":"flex"}},{"id":"a-35-n-37","actionTypeId":"GENERAL_DISPLAY","config":{"delay":200,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".tour-guide-wrapper-step3","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1d3"]},"value":"none"}},{"id":"a-35-n-31","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"ease","duration":500,"target":{"selector":".tour-track-card3","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1ba"]},"value":1,"unit":""}},{"id":"a-35-n-32","actionTypeId":"GENERAL_DISPLAY","config":{"delay":400,"easing":"","duration":0,"target":{"selector":".tour-track-card3","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1ba"]},"value":"flex"}},{"id":"a-35-n-33","actionTypeId":"TRANSFORM_SCALE","config":{"delay":400,"easing":"ease","duration":500,"target":{"selector":".tour-track-card3","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1ba"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-35-n-34","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":400,"easing":"ease","duration":400,"target":{"selector":".tour-track-card3","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1ba"]},"globalSwatchId":"3a86b552","rValue":248,"bValue":249,"gValue":249,"aValue":1}},{"id":"a-35-n-35","actionTypeId":"STYLE_OPACITY","config":{"delay":600,"easing":"ease","duration":500,"target":{"selector":".tour-track-card-4","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1d4"]},"value":1,"unit":""}},{"id":"a-35-n-36","actionTypeId":"GENERAL_DISPLAY","config":{"delay":600,"easing":"","duration":0,"target":{"selector":".tour-track-card-4","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1d4"]},"value":"flex"}}]},{"actionItems":[{"id":"a-35-n-38","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".arrow-icon-guide-step4","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1c8"]},"value":1,"unit":""}},{"id":"a-35-n-39","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"ease","duration":600,"target":{"selector":".tracker-image-step4","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1cd"]},"value":1,"unit":""}},{"id":"a-35-n-40","actionTypeId":"TRANSFORM_MOVE","config":{"delay":400,"easing":"outExpo","duration":800,"target":{"selector":".tracker-image-step4","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1cd"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-35-n-41","actionTypeId":"TRANSFORM_MOVE","config":{"delay":400,"easing":"outExpo","duration":800,"target":{"selector":".tour-tracker-image-card-step4","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1d7"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-35-n-42","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"ease","duration":600,"target":{"selector":".tour-tracker-image-card-step4","selectorGuids":["ab51eaf5-e927-a5a6-6112-aae32ad2f1d7"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686297729752}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function TrackerTour({
  as: _Component = _Builtin.Block,
  onCickSearch = {},
  onClickAdd = {},
  onClickDismiss = {},
  onClickDone = {},
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "tour-track-wrapper")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "track-tour-grid")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "track-tour-column-wrapper")}
          id={_utils.cx(
            _styles,
            "w-node-_515ce44d-fc64-4f83-14b1-6da747942db4-47942db2"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "track-tour-header-wrapper")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "text-lg-bold")}
              tag="div"
            >
              {"New Wishlist"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "icon-wrapper-2")}
              tag="div"
            >
              <_Builtin.Block className={_utils.cx(_styles, "link")} tag="div">
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "track-tour-icon")}
                  value="%3Csvg%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M0%208C0%2012.4183%203.58172%2016%208%2016C9.84871%2016%2011.551%2015.3729%2012.9056%2014.3199L18.2929%2019.7071C18.6834%2020.0976%2019.3166%2020.0976%2019.7071%2019.7071C20.0976%2019.3166%2020.0976%2018.6834%2019.7071%2018.2929L14.3199%2012.9056C15.3729%2011.551%2016%209.84871%2016%208C16%203.58172%2012.4183%200%208%200C3.58172%200%200%203.58172%200%208ZM8%2014C11.3137%2014%2014%2011.3137%2014%208C14%204.68629%2011.3137%202%208%202C4.68629%202%202%204.68629%202%208C2%2011.3137%204.68629%2014%208%2014Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  {...onCickSearch}
                />
              </_Builtin.Block>
              <_Builtin.Block className={_utils.cx(_styles, "link")} tag="div">
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "track-tour-icon")}
                  value="%3Csvg%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2011%2011%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M5.5%202C5.22386%202%205%202.22386%205%202.5V5H2.5C2.22386%205%202%205.22386%202%205.5C2%205.77614%202.22386%206%202.5%206H5V8.5C5%208.77614%205.22386%209%205.5%209C5.77614%209%206%208.77614%206%208.5V6H8.5C8.77614%206%209%205.77614%209%205.5C9%205.22386%208.77614%205%208.5%205H6V2.5C6%202.22386%205.77614%202%205.5%202ZM5.5%2011C2.46243%2011%200%208.53757%200%205.5C0%202.46243%202.46243%200%205.5%200C8.53757%200%2011%202.46243%2011%205.5C11%208.53757%208.53757%2011%205.5%2011ZM5.5%2010C7.98528%2010%2010%207.98528%2010%205.5C10%203.01472%207.98528%201%205.5%201C3.01472%201%201%203.01472%201%205.5C1%207.98528%203.01472%2010%205.5%2010Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  {...onClickAdd}
                />
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "tour-track-card-next")}
            tag="div"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "tour-track-card")}
            tag="div"
          />
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "track-tour-column-wrapper")}
          id={_utils.cx(
            _styles,
            "w-node-_515ce44d-fc64-4f83-14b1-6da747942dbd-47942db2"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "track-tour-header-wrapper")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "text-lg-bold")}
              tag="div"
            >
              {"Applied"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "tour-track-card-2-next")}
            tag="div"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "tour-track-card-2")}
            tag="div"
          />
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "track-tour-column-wrapper")}
          id={_utils.cx(
            _styles,
            "w-node-_515ce44d-fc64-4f83-14b1-6da747942dc3-47942db2"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "track-tour-header-wrapper")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "text-lg-bold")}
              tag="div"
            >
              {"Interview"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "tour-track-card3")}
            tag="div"
          />
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "track-tour-column-wrapper")}
          id={_utils.cx(
            _styles,
            "w-node-_515ce44d-fc64-4f83-14b1-6da747942dc8-47942db2"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "track-tour-header-wrapper")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "text-lg-bold")}
              tag="div"
            >
              {"Offered"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "tour-track-card-4")}
            tag="div"
          />
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "track-tour-column-wrapper", "last")}
          id={_utils.cx(
            _styles,
            "w-node-_515ce44d-fc64-4f83-14b1-6da747942dcd-47942db2"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "track-tour-header-wrapper")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "text-lg-bold")}
              tag="div"
            >
              {"Declined"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "tour-track-card-5")}
            tag="div"
          />
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "guide-animation-wrapper")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "div-block-6")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "tour-guide-wrapper", "step1")}
            data-w-id="515ce44d-fc64-4f83-14b1-6da747942dd4"
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "tracker-image")}
              loading="lazy"
              height="auto"
              width="auto"
              src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/648341dffd3b2affb8ce6cef_wishlist-tour-image.svg"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "tour-tracker-image-card")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "sentence-icon-wrapper")}
                tag="div"
              >
                <_Builtin.Block tag="div">
                  {"Use "}
                  <_Builtin.Span
                    className={_utils.cx(_styles, "text-after-icon")}
                  >
                    {
                      "to discover job openings that match your skills and interests with customizable filters."
                    }
                  </_Builtin.Span>
                </_Builtin.Block>
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "track-tour-icon", "animation")}
                  value="%3Csvg%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M0%208C0%2012.4183%203.58172%2016%208%2016C9.84871%2016%2011.551%2015.3729%2012.9056%2014.3199L18.2929%2019.7071C18.6834%2020.0976%2019.3166%2020.0976%2019.7071%2019.7071C20.0976%2019.3166%2020.0976%2018.6834%2019.7071%2018.2929L14.3199%2012.9056C15.3729%2011.551%2016%209.84871%2016%208C16%203.58172%2012.4183%200%208%200C3.58172%200%200%203.58172%200%208ZM8%2014C11.3137%2014%2014%2011.3137%2014%208C14%204.68629%2011.3137%202%208%202C4.68629%202%202%204.68629%202%208C2%2011.3137%204.68629%2014%208%2014Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "sentence-icon-wrapper")}
                tag="div"
              >
                <_Builtin.Block tag="div">
                  {"Use "}
                  <_Builtin.Span
                    className={_utils.cx(_styles, "text-after-icon")}
                  >
                    {
                      "to keep track of your job applications and stay organized."
                    }
                  </_Builtin.Span>
                </_Builtin.Block>
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "track-tour-icon", "animation")}
                  value="%3Csvg%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2011%2011%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M5.5%202C5.22386%202%205%202.22386%205%202.5V5H2.5C2.22386%205%202%205.22386%202%205.5C2%205.77614%202.22386%206%202.5%206H5V8.5C5%208.77614%205.22386%209%205.5%209C5.77614%209%206%208.77614%206%208.5V6H8.5C8.77614%206%209%205.77614%209%205.5C9%205.22386%208.77614%205%208.5%205H6V2.5C6%202.22386%205.77614%202%205.5%202ZM5.5%2011C2.46243%2011%200%208.53757%200%205.5C0%202.46243%202.46243%200%205.5%200C8.53757%200%2011%202.46243%2011%205.5C11%208.53757%208.53757%2011%205.5%2011ZM5.5%2010C7.98528%2010%2010%207.98528%2010%205.5C10%203.01472%207.98528%201%205.5%201C3.01472%201%201%203.01472%201%205.5C1%207.98528%203.01472%2010%205.5%2010Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "tour-button-wrapper")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "dismiss-link")}
                  tag="div"
                  {...onClickDismiss}
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-md-bold")}
                    tag="div"
                  >
                    {"Dismiss"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "next-button-tour")}
                  data-w-id="e851a504-8485-e9b2-6d28-59bf7d61a88f"
                  tag="div"
                >
                  <_Builtin.Block tag="div">{"Next"}</_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "tour-guide-wrapper-step2")}
            data-w-id="515ce44d-fc64-4f83-14b1-6da747942de9"
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "arrow-wrapper-overlay", "step-2")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "arrow-icon-guide-step2")}
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/648341dffd3b2affb8ce6cf1_wishlist-tour-direction.svg"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "tour-tracker-image-card-step2")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "sentence-icon-wrapper")}
                tag="div"
              >
                <_Builtin.Block tag="div">
                  {"Track your job by dragging it to the "}
                  <_Builtin.Strong>{" Applied"}</_Builtin.Strong>
                  {" column and receive follow-up emails."}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "tour-button-wrapper", "step2")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "next-button-2")}
                  data-w-id="29f88e3a-76b8-1f41-fb8a-84dfdd6fb951"
                  tag="div"
                >
                  <_Builtin.Block tag="div">{"Next"}</_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "dismiss-link")}
                  tag="div"
                  {...onClickDismiss}
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-md-bold")}
                    tag="div"
                  >
                    {"Dismiss"}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Image
              className={_utils.cx(_styles, "tracker-image-step2")}
              loading="lazy"
              height="auto"
              width="auto"
              src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/648341dffd3b2affb8ce6cf0_apply-tour-image.svg"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "tour-guide-wrapper-step3")}
            data-w-id="515ce44d-fc64-4f83-14b1-6da747942dfa"
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "arrow-wrapper-overlay", "step-3")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "arrow-icon-guide-step3")}
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/648341dffd3b2affb8ce6cf1_wishlist-tour-direction.svg"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "tour-tracker-image-card-step3")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "sentence-icon-wrapper")}
                tag="div"
              >
                <_Builtin.Block tag="div">
                  {
                    "Get interview-ready with Aglint AI assistance. Move your job to the "
                  }
                  <_Builtin.Strong>{"Interview"}</_Builtin.Strong>
                  {" column and let us help!"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "tour-button-wrapper", "step2")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "next-button-3")}
                  data-w-id="24550576-f90b-6558-1c23-e682c1d41395"
                  tag="div"
                >
                  <_Builtin.Block tag="div">{"Next"}</_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "dismiss-link")}
                  tag="div"
                  {...onClickDismiss}
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-md-bold")}
                    tag="div"
                  >
                    {"Dismiss"}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Image
              className={_utils.cx(_styles, "tracker-image-step3")}
              loading="lazy"
              height="auto"
              width="auto"
              src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/648341dffd3b2affb8ce6cf2_apply-tour-image1.svg"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "tour-guide-wrapper-step4")}
            data-w-id="515ce44d-fc64-4f83-14b1-6da747942e0b"
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "arrow-wrapper-overlay", "step-4")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "arrow-icon-guide-step4")}
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/648341dffd3b2affb8ce6cf1_wishlist-tour-direction.svg"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "tour-tracker-image-card-step4")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "sentence-icon-wrapper")}
                tag="div"
              >
                <_Builtin.Block tag="div">
                  {"Move your job to the "}
                  <_Builtin.Strong>{"Offered"}</_Builtin.Strong>
                  {
                    " column and with the help of Aglint AI, let us negotiate the salary for the job that has been offered!"
                  }
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "tour-button-wrapper", "step2")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "next-button-4")}
                  data-w-id="6a047880-9fba-56cd-f3d5-60e57f5ac1eb"
                  tag="div"
                  {...onClickDone}
                >
                  <_Builtin.Block tag="div">{"Done"}</_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Image
              className={_utils.cx(_styles, "tracker-image-step4")}
              loading="lazy"
              height="auto"
              width="auto"
              src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/648341dffd3b2affb8ce6cf3_interview-tour-image.svg"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
