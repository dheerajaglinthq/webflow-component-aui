import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./JobListingCard.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-222":{"id":"e-222","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-223"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"608460ae-3ead-e5af-d7b2-5654a5234370","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"608460ae-3ead-e5af-d7b2-5654a5234370","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":1000,"direction":null,"effectIn":true},"createdOn":1686818288405}},"actionLists":{"fadeIn":{"id":"fadeIn","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function JobListingCard({
  as: _Component = _Builtin.Block,
  jobtitle = "Job Title",
  jobLocation = "Job Location",
  posted = "Posted day",
  isNew = true,
  jobType = "Full-time",
  onClickJobCard = {},
  jobTypeVisibility = true,
  postedTimeVisibility = true,
  slotCompanyIcon,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "job-card-component")}
      tag="div"
      {...onClickJobCard}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "company-icon-slot")}
        tag="div"
      >
        {slotCompanyIcon}
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "job-card-text")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "job-card-header")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "job-title-text", "one-line-clamp")}
            tag="div"
          >
            {jobtitle}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "job-location", "one-line-clamp")}
            tag="div"
          >
            {jobLocation}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "job-card-footer")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "job-tags-slot")}
            tag="div"
          >
            {jobTypeVisibility ? (
              <_Builtin.Block
                className={_utils.cx(_styles, "job-tag")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "medium-default")}
                  tag="div"
                >
                  {jobType}
                </_Builtin.Block>
              </_Builtin.Block>
            ) : null}
            <_Builtin.Block
              className={_utils.cx(_styles, "few-seconds")}
              tag="div"
            >
              {posted}
            </_Builtin.Block>
          </_Builtin.Block>
          {isNew ? (
            <_Builtin.Block
              className={_utils.cx(_styles, "new-tag")}
              data-w-id="608460ae-3ead-e5af-d7b2-5654a5234370"
              tag="div"
            >
              <_Builtin.Block tag="div">{"New"}</_Builtin.Block>
            </_Builtin.Block>
          ) : null}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "hide")}
        value="%3Cstyle%3E%0A.line-clamp-1%20%7B%0A%09display%3A%20-webkit-box%3B%0A%09overflow%3A%20hidden%3B%0A%09-webkit-line-clamp%3A%201%3B%0A%09-webkit-box-orient%3A%20vertical%3B%0A%7D%0A%3C%2Fstyle%3E"
      />
    </_Component>
  );
}
