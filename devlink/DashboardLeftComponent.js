import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { DashboardOnboardCard } from "./DashboardOnboardCard";
import * as _utils from "./utils";
import _styles from "./DashboardLeftComponent.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-79":{"id":"e-79","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-27","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-80"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".dashboard-card","originalId":"98e33a39-4df4-52f0-82a5-20a0af68e155","appliesTo":"CLASS"},"targets":[{"selector":".dashboard-card","originalId":"98e33a39-4df4-52f0-82a5-20a0af68e155","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686136182879},"e-80":{"id":"e-80","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-28","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-79"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".dashboard-card","originalId":"98e33a39-4df4-52f0-82a5-20a0af68e155","appliesTo":"CLASS"},"targets":[{"selector":".dashboard-card","originalId":"98e33a39-4df4-52f0-82a5-20a0af68e155","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686136182880}},"actionLists":{"a-27":{"id":"a-27","title":"dashboard card hover","actionItemGroups":[{"actionItems":[{"id":"a-27-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".arrowhide","selectorGuids":["630ea08f-55b3-a76d-5fe3-c2317298c45d"]},"value":"none"}}]},{"actionItems":[{"id":"a-27-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":200,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".arrowhide","selectorGuids":["630ea08f-55b3-a76d-5fe3-c2317298c45d"]},"value":"block"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1685683811847},"a-28":{"id":"a-28","title":"dashboard card hover out","actionItemGroups":[{"actionItems":[{"id":"a-28-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".arrowhide","selectorGuids":["630ea08f-55b3-a76d-5fe3-c2317298c45d"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1685683811847}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function DashboardLeftComponent({
  as: _Component = _Builtin.Block,
  onClickResume = {},
  onClickInterview = {},
  onClickCall = {},
  onClickNetwork = {},
  onClickCover = {},
  onClickJobTracker = {},
  slotRecentlyViewJob,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "dashboard-left-wrapper")}
      id={_utils.cx(
        _styles,
        "w-node-_005930a1-841b-3b3a-4230-2a9ff91f6b57-f91f6b57"
      )}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "dashboard-welcome-wrapper")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "dashboard-left-title-wrapper")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "dash-heading-wrapper")}
            tag="div"
          >
            <_Builtin.Heading tag="h2">{"Welcome John Snow!"}</_Builtin.Heading>
            <_Builtin.Image
              loading="lazy"
              width="auto"
              height="auto"
              src="https://uploads-ssl.webflow.com/64802f1cace35ab762b8c563/64802f1cace35ab762b8c58e_hands.clap.svg"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "dashboard-heading-lead-2")}
            tag="div"
          >
            {
              "Let's get started! Transform your career transition journey with these recommended steps."
            }
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "all-dashboard-card-wrapper")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "dashboard-card")}
            tag="div"
            {...onClickResume}
          >
            <_Builtin.Image
              loading="lazy"
              width="auto"
              height="auto"
              src="https://uploads-ssl.webflow.com/64802f1cace35ab762b8c563/64802f1cace35ab762b8c591_Frame.svg"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "dashboard-card-content")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "dashboard-card-heading")}
                tag="div"
              >
                {"Request Resume Review"}
              </_Builtin.Block>
              <_Builtin.Paragraph>
                {
                  "Get your resume reviewed by our expert coaches and take the first step towards landing your dream job."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "cardarrow")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "arrowhide")}
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/64802f1cace35ab762b8c563/64802f1cace35ab762b8c592_chevron.forward.svg"
              />
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "dashboard-card")}
            tag="div"
            {...onClickInterview}
          >
            <_Builtin.Image
              loading="lazy"
              width="auto"
              height="auto"
              src="https://uploads-ssl.webflow.com/64802f1cace35ab762b8c563/64802f1cace35ab762b8c596_Frame%20514.svg"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "dashboard-card-content")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "dashboard-card-heading")}
                tag="div"
              >
                {"Interview Preparation"}
              </_Builtin.Block>
              <_Builtin.Paragraph>
                {
                  "Prepare for interviews like a pro with Aglint’s user-friendly platform and advanced AI technology."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "cardarrow")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "arrowhide")}
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/64802f1cace35ab762b8c563/64802f1cace35ab762b8c592_chevron.forward.svg"
              />
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "dashboard-card")}
            tag="div"
            {...onClickCall}
          >
            <_Builtin.Image
              loading="lazy"
              width="auto"
              height="auto"
              src="https://uploads-ssl.webflow.com/64802f1cace35ab762b8c563/64802f1cace35ab762b8c597_Frame%20(2).svg"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "dashboard-card-content")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "dashboard-card-heading")}
                tag="div"
              >
                {"Book a Call with a Coach"}
              </_Builtin.Block>
              <_Builtin.Paragraph>
                {
                  "Book a call with our expert coaches today and take the first step towards achieving your career goals."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "cardarrow")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "arrowhide")}
                loading="lazy"
                width={10}
                height="auto"
                src="https://uploads-ssl.webflow.com/64802f1cace35ab762b8c563/64802f1cace35ab762b8c592_chevron.forward.svg"
              />
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <DashboardOnboardCard />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "explore-toolbox-wrapper")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "dashboard-subhead-wrapper")}
          tag="div"
        >
          <_Builtin.Heading tag="h3">{"Explore our Toolbox"}</_Builtin.Heading>
          <_Builtin.Block
            className={_utils.cx(_styles, "dashboard-heading-lead-2")}
            tag="div"
          >
            {
              "Our job seeker toolbox includes a cover letter writer, mock interview simulator, resume builder, salary negotiation guide, and email sequence to simplify your job search."
            }
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "explore-tool-wrapper")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "toolbox-card-block")}
            tag="div"
            {...onClickNetwork}
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "toolbox-image")}
              loading="lazy"
              width="auto"
              height="auto"
              src="https://uploads-ssl.webflow.com/64802f1cace35ab762b8c563/648074f46f305f28b6beb2ed_networkbuilder.svg"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "toolbox-content-wrapper-3")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "toolbox-content-block")}
                tag="div"
              >
                <_Builtin.Heading
                  className={_utils.cx(_styles, "toolbox-heading-small")}
                  tag="h1"
                >
                  {"Network Builder"}
                </_Builtin.Heading>
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "toolbox-text-small")}
                >
                  {
                    "Get personalized suggestions for connecting with the right people, along with the option to use AI-generated messages to initiate those connections."
                  }
                </_Builtin.Paragraph>
              </_Builtin.Block>
              <_Builtin.Link
                className={_utils.cx(_styles, "toolbox-button")}
                id={_utils.cx(
                  _styles,
                  "w-node-_005930a1-841b-3b3a-4230-2a9ff91f6b88-f91f6b57"
                )}
                button={true}
                options={{
                  href: "#",
                }}
              >
                {"Let’s Write"}
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "toolbox-card-block")}
            tag="div"
            {...onClickCover}
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "toolbox-image")}
              loading="lazy"
              width="auto"
              height="auto"
              src="https://uploads-ssl.webflow.com/64789588b938260cf0ada6ff/64789acdfcbf2bc14cb634cf_toolbox-image-1.png"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "toolbox-content-wrapper-3")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "toolbox-content-block")}
                tag="div"
              >
                <_Builtin.Heading
                  className={_utils.cx(_styles, "toolbox-heading-small")}
                  tag="h1"
                >
                  {"Craft Perfect Cover Letters"}
                </_Builtin.Heading>
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "toolbox-text-small")}
                >
                  {
                    "Easily craft the ideal cover letter with our AI-powered software that generates personalized letters in minutes."
                  }
                </_Builtin.Paragraph>
              </_Builtin.Block>
              <_Builtin.Link
                className={_utils.cx(_styles, "toolbox-button")}
                id={_utils.cx(
                  _styles,
                  "w-node-_005930a1-841b-3b3a-4230-2a9ff91f6b92-f91f6b57"
                )}
                button={true}
                options={{
                  href: "#",
                }}
              >
                {"Let’s Write"}
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "toolbox-card-block")}
            tag="div"
            {...onClickJobTracker}
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "toolbox-image")}
              loading="lazy"
              width="auto"
              height="auto"
              src="https://uploads-ssl.webflow.com/64802f1cace35ab762b8c563/6480744dd6ea3885364efa6c_perfect-resume.svg"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "toolbox-content-wrapper-3")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "toolbox-content-block")}
                tag="div"
              >
                <_Builtin.Heading
                  className={_utils.cx(_styles, "toolbox-heading-small")}
                  tag="h1"
                >
                  {"Job Tracker"}
                </_Builtin.Heading>
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "toolbox-text-small")}
                >
                  {
                    "Never miss a deadline or opportunity. Keep track of your job applications, interviews, and follow-ups all in one place."
                  }
                </_Builtin.Paragraph>
              </_Builtin.Block>
              <_Builtin.Link
                className={_utils.cx(_styles, "toolbox-button")}
                id={_utils.cx(
                  _styles,
                  "w-node-_005930a1-841b-3b3a-4230-2a9ff91f6b9c-f91f6b57"
                )}
                button={true}
                options={{
                  href: "#",
                }}
              >
                {"Let’s Write"}
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "recent-jobs-wrapper")}
        tag="div"
      >
        {slotRecentlyViewJob}
      </_Builtin.Block>
    </_Component>
  );
}
