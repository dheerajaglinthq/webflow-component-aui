import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./JobWishList.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-33":{"id":"e-33","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-10","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-34"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".coaching-price-card-wrapper","originalId":"82111d76-4463-1f07-af21-45601f24cd61","appliesTo":"CLASS"},"targets":[{"selector":".coaching-price-card-wrapper","originalId":"82111d76-4463-1f07-af21-45601f24cd61","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686056099616},"e-34":{"id":"e-34","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-33"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".coaching-price-card-wrapper","originalId":"82111d76-4463-1f07-af21-45601f24cd61","appliesTo":"CLASS"},"targets":[{"selector":".coaching-price-card-wrapper","originalId":"82111d76-4463-1f07-af21-45601f24cd61","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686056099617}},"actionLists":{"a-10":{"id":"a-10","title":"Coach Pricing Hover In","actionItemGroups":[{"actionItems":[{"id":"a-10-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"82111d76-4463-1f07-af21-45601f24cd61"},"globalSwatchId":"e42b2e06","rValue":47,"bValue":65,"gValue":57,"aValue":1}},{"id":"a-10-n-6","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".text-sm-default","selectorGuids":["6f00d157-c0f8-129f-d4e0-87ff1eea0754"]},"globalSwatchId":"e42b2e06","rValue":47,"bValue":65,"gValue":57,"aValue":1}},{"id":"a-10-n-5","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"82111d76-4463-1f07-af21-45601f24cd61"},"xValue":1.1,"yValue":1.1,"locked":true}},{"id":"a-10-n-4","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".coach-price-button","selectorGuids":["d4b8fba1-f8b8-1b1a-19ea-d7bea6a39ada"]},"globalSwatchId":"e42b2e06","rValue":47,"bValue":65,"gValue":57,"aValue":1}},{"id":"a-10-n-3","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".coach-price-button","selectorGuids":["d4b8fba1-f8b8-1b1a-19ea-d7bea6a39ada"]},"globalSwatchId":"80449ce7","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-10-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"82111d76-4463-1f07-af21-45601f24cd61"},"globalSwatchId":"80449ce7","rValue":255,"bValue":255,"gValue":255,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686056103359},"a-11":{"id":"a-11","title":"Coach Pricing Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-11-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"82111d76-4463-1f07-af21-45601f24cd61"},"globalSwatchId":"3a86b552","rValue":248,"bValue":249,"gValue":249,"aValue":1}},{"id":"a-11-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"82111d76-4463-1f07-af21-45601f24cd61"},"xValue":1,"yValue":1,"locked":true}},{"id":"a-11-n-3","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".coach-price-button","selectorGuids":["d4b8fba1-f8b8-1b1a-19ea-d7bea6a39ada"]},"globalSwatchId":"80449ce7","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-11-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".coach-price-button","selectorGuids":["d4b8fba1-f8b8-1b1a-19ea-d7bea6a39ada"]},"globalSwatchId":"e42b2e06","rValue":47,"bValue":65,"gValue":57,"aValue":1}},{"id":"a-11-n-5","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"82111d76-4463-1f07-af21-45601f24cd61"},"globalSwatchId":"e42b2e06","rValue":47,"bValue":65,"gValue":57,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686056103359}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function JobWishList({
  as: _Component = _Builtin.Block,
  slotProfile,
  slotJobInfo,
  slotReminders,
  slotNotes,
  slotCoverLetterResume,
  slotJobWishlist,
  jobTitle = "Software Engineer, Cloud /",
  jobCompany = "DocuSign",
  jobLocation = "San Francisco, CA, US",
  jobPostedTime = (
    <>
      {"Posted on : Jun 09, 2023"}
      <br />
    </>
  ),
  jobTag = "Fulltime",
  jobTag2 = "Fulltime",
  isTimeline = true,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "job-wishlist-section")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "container-1280")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "job-wishlist-tab")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "job-wishlist-tab-wrapper-left")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "wishlist-detail-wrapper")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "image-slots-wishlist")}
                tag="div"
              >
                {slotProfile}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "wishlist-description-wrapper")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "jobs-title-wrappers")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-md-bold")}
                    tag="div"
                  >
                    {jobTitle}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "wishlist-tag")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-sm-default")}
                      tag="div"
                    >
                      {jobTag}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "wishlist-tag")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-sm-default")}
                      tag="div"
                    >
                      {jobTag2}
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-sm-bold")}
                  tag="div"
                >
                  {jobCompany}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "location-wrapper")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-sm-default")}
                    tag="div"
                  >
                    {jobLocation}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "publish-text")}
                    tag="div"
                  >
                    {jobPostedTime}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "tab-wrappers")}
              tag="div"
            >
              <_Builtin.TabsWrapper
                className={_utils.cx(_styles, "job-tab")}
                current="Tab 1"
                easing="ease"
                fadeIn={300}
                fadeOut={100}
              >
                <_Builtin.TabsMenu
                  className={_utils.cx(_styles, "job-tab-menu")}
                  tag="div"
                >
                  <_Builtin.TabsLink
                    className={_utils.cx(_styles, "job-tab-link")}
                    data-w-tab="Tab 1"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-md-bold")}
                      tag="div"
                    >
                      {"Job Info"}
                    </_Builtin.Block>
                  </_Builtin.TabsLink>
                  <_Builtin.TabsLink
                    className={_utils.cx(_styles, "job-tab-link")}
                    data-w-tab="Tab 2"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-md-bold")}
                      tag="div"
                    >
                      {"Reminders"}
                    </_Builtin.Block>
                  </_Builtin.TabsLink>
                  <_Builtin.TabsLink
                    className={_utils.cx(_styles, "job-tab-link")}
                    data-w-tab="Tab 3"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-md-bold")}
                      tag="div"
                    >
                      {"Notes"}
                    </_Builtin.Block>
                  </_Builtin.TabsLink>
                  <_Builtin.TabsLink
                    className={_utils.cx(_styles, "job-tab-link")}
                    data-w-tab="Tab 4"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-md-bold")}
                      tag="div"
                    >
                      {"Cover letter &Resumes"}
                    </_Builtin.Block>
                  </_Builtin.TabsLink>
                </_Builtin.TabsMenu>
                <_Builtin.TabsContent tag="div">
                  <_Builtin.TabsPane tag="div" data-w-tab="Tab 1">
                    <_Builtin.Block
                      className={_utils.cx(_styles, "tab-content-wrapper")}
                      tag="div"
                    >
                      {slotJobInfo ?? (
                        <_Builtin.Block tag="div">{"Slots"}</_Builtin.Block>
                      )}
                    </_Builtin.Block>
                  </_Builtin.TabsPane>
                  <_Builtin.TabsPane tag="div" data-w-tab="Tab 2">
                    <_Builtin.Block
                      className={_utils.cx(_styles, "tab-content-wrapper")}
                      tag="div"
                    >
                      {slotReminders ?? (
                        <_Builtin.Block tag="div">{"Slots"}</_Builtin.Block>
                      )}
                    </_Builtin.Block>
                  </_Builtin.TabsPane>
                  <_Builtin.TabsPane tag="div" data-w-tab="Tab 3">
                    <_Builtin.Block
                      className={_utils.cx(_styles, "tab-content-wrapper")}
                      tag="div"
                    >
                      {slotNotes ?? (
                        <_Builtin.Block tag="div">{"Slots"}</_Builtin.Block>
                      )}
                    </_Builtin.Block>
                  </_Builtin.TabsPane>
                  <_Builtin.TabsPane tag="div" data-w-tab="Tab 4">
                    <_Builtin.Block
                      className={_utils.cx(_styles, "tab-content-wrapper")}
                      tag="div"
                    >
                      {slotCoverLetterResume ?? (
                        <_Builtin.Block tag="div">{"Slots"}</_Builtin.Block>
                      )}
                    </_Builtin.Block>
                  </_Builtin.TabsPane>
                </_Builtin.TabsContent>
              </_Builtin.TabsWrapper>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "job-activity-timeline-right")}
            tag="div"
          >
            {isTimeline ? (
              <_Builtin.Block
                className={_utils.cx(_styles, "job-activity-header")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-lg-bold")}
                  tag="div"
                >
                  {"Job Activity Timeline"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "text-md-default",
                    "color-grey-600"
                  )}
                  tag="div"
                >
                  {
                    "Get an overview of all your job related activities in a clear and concise timeline view."
                  }
                </_Builtin.Block>
              </_Builtin.Block>
            ) : null}
            <_Builtin.Block
              className={_utils.cx(_styles, "job-activity-slots")}
              tag="div"
            >
              {slotJobWishlist ?? (
                <_Builtin.Block tag="div">
                  <_Builtin.Block tag="div">{"Slot Wishlist "}</_Builtin.Block>
                </_Builtin.Block>
              )}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
