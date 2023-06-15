import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./CoachOnboarding.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-109":{"id":"e-109","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-41","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-110"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"841ee67d-759c-ce20-419c-3b9a0c11e20f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"841ee67d-759c-ce20-419c-3b9a0c11e20f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686395128250},"e-110":{"id":"e-110","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-42","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-109"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"841ee67d-759c-ce20-419c-3b9a0c11e20f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"841ee67d-759c-ce20-419c-3b9a0c11e20f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686395128251}},"actionLists":{"a-41":{"id":"a-41","title":"profile [expand]","actionItemGroups":[{"actionItems":[{"id":"a-41-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".profile-desccription","selectorGuids":["4542c770-9604-d6de-f50e-1a41462c4c54"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-41-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".embed-flex","selectorGuids":["52fed630-20a7-0da5-bc89-35c4f4847d44"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-41-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".profile-desccription","selectorGuids":["4542c770-9604-d6de-f50e-1a41462c4c54"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-41-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".embed-flex","selectorGuids":["52fed630-20a7-0da5-bc89-35c4f4847d44"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686395132149},"a-42":{"id":"a-42","title":"profile [collapse]","actionItemGroups":[{"actionItems":[{"id":"a-42-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".profile-desccription","selectorGuids":["4542c770-9604-d6de-f50e-1a41462c4c54"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-42-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".embed-flex","selectorGuids":["52fed630-20a7-0da5-bc89-35c4f4847d44"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686395132149}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function CoachOnboarding({
  as: _Component = _Builtin.Block,
  isStepOne = true,
  isStepTwo = true,
  slotCoachCards,
  isButtonDIsabled = true,
  slotPickdate,
  selectedCoachImage = "",
  selectedCoachName = "",
  selectedCoachDesc = "",
  onClickViewProfile = {},
  onClickChangeCoach = {},
  onClickContinue = {},
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "container-1280")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "onboarding-wrapper")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "payment-success")}
          tag="div"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "embed-flex")}
            value="%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Ccircle%20cx%3D%2220%22%20cy%3D%2220%22%20r%3D%2220%22%20fill%3D%22%2323A26D%22%20fill-opacity%3D%220.12%22%2F%3E%0A%3Cpath%20d%3D%22M19.643%2010.4761C14.3953%2010.4761%2010.1191%2014.7523%2010.1191%2019.9999C10.1191%2025.2475%2014.3953%2029.5237%2019.643%2029.5237C24.8906%2029.5237%2029.1668%2025.2475%2029.1668%2019.9999C29.1668%2014.7523%2024.8906%2010.4761%2019.643%2010.4761ZM24.1953%2017.8094L18.7953%2023.2094C18.662%2023.3427%2018.481%2023.4189%2018.2906%2023.4189C18.1001%2023.4189%2017.9191%2023.3427%2017.7858%2023.2094L15.0906%2020.5142C14.8144%2020.238%2014.8144%2019.7808%2015.0906%2019.5046C15.3668%2019.2285%2015.8239%2019.2285%2016.1001%2019.5046L18.2906%2021.6951L23.1858%2016.7999C23.462%2016.5237%2023.9191%2016.5237%2024.1953%2016.7999C24.4715%2017.0761%2024.4715%2017.5237%2024.1953%2017.8094Z%22%20fill%3D%22%2323A26D%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "text-lg-bold")}
            tag="div"
          >
            {"Payment Successful"}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "step-1")} tag="div">
          {isStepOne ? (
            <_Builtin.Block
              className={_utils.cx(_styles, "coach-selection")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "coach-selection-header")}
                tag="div"
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "embed-flex")}
                  value="%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Ccircle%20cx%3D%2220%22%20cy%3D%2220%22%20r%3D%2220%22%20fill%3D%22%23CEE2F2%22%2F%3E%0A%3Ccircle%20cx%3D%2220.0001%22%20cy%3D%2220%22%20r%3D%229%22%20fill%3D%22%235293C7%22%2F%3E%0A%3C%2Fsvg%3E"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "cards-wrapper")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "header-text")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "text-lg-bold",
                        "text-grey-600"
                      )}
                      tag="div"
                    >
                      {"Step 1"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-xl-bold")}
                      tag="div"
                    >
                      {
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                      }
                    </_Builtin.Block>
                    <_Builtin.Paragraph
                      className={_utils.cx(_styles, "text-lg", "text-grey-600")}
                    >
                      {
                        "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
                      }
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "coach-cards-slot")}
                    tag="div"
                  >
                    {slotCoachCards}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "button-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "green-button")}
                      tag="div"
                      {...onClickContinue}
                    >
                      <_Builtin.Block tag="div">{"Continue"}</_Builtin.Block>
                    </_Builtin.Block>
                    {isButtonDIsabled ? (
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "green-button",
                          "is-disabled"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block tag="div">{"Continue"}</_Builtin.Block>
                      </_Builtin.Block>
                    ) : null}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          ) : null}
          {isStepTwo ? (
            <_Builtin.Block
              className={_utils.cx(_styles, "coach-selected-step")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "coach-selection-header")}
                tag="div"
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "embed-flex")}
                  value="%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Ccircle%20cx%3D%2220%22%20cy%3D%2220%22%20r%3D%2220%22%20fill%3D%22%2323A26D%22%20fill-opacity%3D%220.12%22%2F%3E%0A%3Cpath%20d%3D%22M19.643%2010.4761C14.3953%2010.4761%2010.1191%2014.7523%2010.1191%2019.9999C10.1191%2025.2475%2014.3953%2029.5237%2019.643%2029.5237C24.8906%2029.5237%2029.1668%2025.2475%2029.1668%2019.9999C29.1668%2014.7523%2024.8906%2010.4761%2019.643%2010.4761ZM24.1953%2017.8094L18.7953%2023.2094C18.662%2023.3427%2018.481%2023.4189%2018.2906%2023.4189C18.1001%2023.4189%2017.9191%2023.3427%2017.7858%2023.2094L15.0906%2020.5142C14.8144%2020.238%2014.8144%2019.7808%2015.0906%2019.5046C15.3668%2019.2285%2015.8239%2019.2285%2016.1001%2019.5046L18.2906%2021.6951L23.1858%2016.7999C23.462%2016.5237%2023.9191%2016.5237%2024.1953%2016.7999C24.4715%2017.0761%2024.4715%2017.5237%2024.1953%2017.8094Z%22%20fill%3D%22%2323A26D%22%2F%3E%0A%3C%2Fsvg%3E"
                />
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "cards-wrapper",
                    "after-selection"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "coach-image")}
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(
                        _styles,
                        "cover-image",
                        "whith-border-8"
                      )}
                      loading="lazy"
                      width="auto"
                      height="auto"
                      src={selectedCoachImage}
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "header-text")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-xl-bold")}
                      tag="div"
                    >
                      {selectedCoachName}
                    </_Builtin.Block>
                    <_Builtin.Paragraph
                      className={_utils.cx(_styles, "text-lg", "text-grey-600")}
                    >
                      {selectedCoachDesc}
                    </_Builtin.Paragraph>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "coach-buttons-wrap")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "green-button")}
                        tag="div"
                        {...onClickViewProfile}
                      >
                        <_Builtin.Block tag="div">
                          {"View Profile"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "green-button",
                          "with-border"
                        )}
                        tag="div"
                        {...onClickChangeCoach}
                      >
                        <_Builtin.Block tag="div">
                          {"Change Coach"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          ) : null}
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "choose-date")} tag="div">
          {isStepOne ? (
            <_Builtin.Block
              className={_utils.cx(_styles, "choose-date-disabled-wrapper")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "choose-date-disabled")}
                tag="div"
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "embed-flex")}
                  value="%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Ccircle%20cx%3D%2220%22%20cy%3D%2220%22%20r%3D%2220%22%20fill%3D%22%23E9EBED%22%2F%3E%0A%3Ccircle%20cx%3D%2220.0001%22%20cy%3D%2220.0002%22%20r%3D%2210%22%20fill%3D%22%23C2C8CC%22%2F%3E%0A%3C%2Fsvg%3E"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "header-text")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "text-lg-bold",
                      "text-grey-600"
                    )}
                    tag="div"
                  >
                    {"Step 2"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-xl-bold")}
                    tag="div"
                  >
                    {"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          ) : null}
          {isStepTwo ? (
            <_Builtin.Block
              className={_utils.cx(_styles, "choose-date-activated")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "coach-selection-header")}
                tag="div"
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "embed-flex")}
                  value="%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Ccircle%20cx%3D%2220%22%20cy%3D%2220%22%20r%3D%2220%22%20fill%3D%22%23CEE2F2%22%2F%3E%0A%3Ccircle%20cx%3D%2220.0001%22%20cy%3D%2220%22%20r%3D%229%22%20fill%3D%22%235293C7%22%2F%3E%0A%3C%2Fsvg%3E"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "cards-wrapper")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "header-text")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "text-lg-bold",
                        "text-grey-600"
                      )}
                      tag="div"
                    >
                      {"Step 2"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-xl-bold")}
                      tag="div"
                    >
                      {
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                      }
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "coach-date-pick")}
                tag="div"
              >
                {slotPickdate}
              </_Builtin.Block>
            </_Builtin.Block>
          ) : null}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "coach-details")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "popup-card")}
          tag="div"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "popup-overlay")}
          tag="div"
        />
      </_Builtin.Block>
    </_Component>
  );
}
