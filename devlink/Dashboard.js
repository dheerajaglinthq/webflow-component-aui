import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { LoaderSvg } from "./LoaderSvg";
import * as _utils from "./utils";
import _styles from "./Dashboard.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-79":{"id":"e-79","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-27","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-80"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".dashboard-card","originalId":"98e33a39-4df4-52f0-82a5-20a0af68e155","appliesTo":"CLASS"},"targets":[{"selector":".dashboard-card","originalId":"98e33a39-4df4-52f0-82a5-20a0af68e155","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686136182879},"e-80":{"id":"e-80","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-28","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-79"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".dashboard-card","originalId":"98e33a39-4df4-52f0-82a5-20a0af68e155","appliesTo":"CLASS"},"targets":[{"selector":".dashboard-card","originalId":"98e33a39-4df4-52f0-82a5-20a0af68e155","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686136182880},"e-232":{"id":"e-232","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-111","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-233"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4722c42d-6350-873a-5cf0-2cbf29527a22","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4722c42d-6350-873a-5cf0-2cbf29527a22","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686830376325},"e-233":{"id":"e-233","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-112","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-232"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4722c42d-6350-873a-5cf0-2cbf29527a22","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4722c42d-6350-873a-5cf0-2cbf29527a22","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686830376326}},"actionLists":{"a-27":{"id":"a-27","title":"dashboard card hover","actionItemGroups":[{"actionItems":[{"id":"a-27-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".arrowhide","selectorGuids":["630ea08f-55b3-a76d-5fe3-c2317298c45d"]},"value":"none"}}]},{"actionItems":[{"id":"a-27-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":200,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".arrowhide","selectorGuids":["630ea08f-55b3-a76d-5fe3-c2317298c45d"]},"value":"block"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1685683811847},"a-28":{"id":"a-28","title":"dashboard card hover out","actionItemGroups":[{"actionItems":[{"id":"a-28-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".arrowhide","selectorGuids":["630ea08f-55b3-a76d-5fe3-c2317298c45d"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1685683811847},"a-111":{"id":"a-111","title":"PRO-FEATURE","actionItemGroups":[{"actionItems":[{"id":"a-111-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".primary-button.book-a-call-btn","selectorGuids":["ceb0f0d4-02c9-a28d-0553-ef569b624fe5","4f6c5085-8a96-f3a6-77ae-884f831bc9ef"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-111-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".primary-button.book-a-call-btn","selectorGuids":["ceb0f0d4-02c9-a28d-0553-ef569b624fe5","4f6c5085-8a96-f3a6-77ae-884f831bc9ef"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686830379350},"a-112":{"id":"a-112","title":"PRO-FEATURE 2","actionItemGroups":[{"actionItems":[{"id":"a-112-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".primary-button.book-a-call-btn","selectorGuids":["ceb0f0d4-02c9-a28d-0553-ef569b624fe5","4f6c5085-8a96-f3a6-77ae-884f831bc9ef"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686830379350}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Dashboard({
  as: _Component = _Builtin.Block,
  isInterviewPrep = true,
  isBookcall = true,
  isCreateResume = true,
  isReviewResume = true,
  isCoverLetter = true,
  showJobs = true,
  isLoading = true,
  slotRecommendedJobs,
  isRecentjobs = true,
  slotRecentJobcards,
  onClickRequestresume = {},
  onClickInterviewPrep = {},
  onClickBookCall = {},
  onClickCreateResume = {},
  onClickReviewResume = {},
  onClickReviewCv = {},
  isJobEmpty = true,
  userName = "Welcome ",
  onClickShowMore = {},
  isShowMore = true,
  isNetwork = true,
  onClickNetwork = {},
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "dashboard")} tag="div">
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "hidescrollbar")}
        value="%3Cstyle%3E%0A.hidescrollbar%3A%3A-webkit-scrollbar%20%7B%0A%20%20display%3A%20none%3B%0A%20%20%2F*%20for%20Chrome%2C%20Safari%2C%20and%20Opera%20*%2F%0A%7D%0A%3C%2Fstyle%3E"
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "container-1280")}
        tag="div"
      >
        <_Builtin.Grid
          className={_utils.cx(_styles, "dashboard-grid")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "dashboard-left")}
            id={_utils.cx(
              _styles,
              "w-node-_1931ee46-bd28-2552-b769-97b9cbc06125-cbc06122"
            )}
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
                <_Builtin.Heading tag="h2">{"Welcome "}</_Builtin.Heading>
                <_Builtin.Heading tag="h2">{userName}</_Builtin.Heading>
                <_Builtin.Heading tag="h2">{"!"}</_Builtin.Heading>
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
              {isCreateResume ? (
                <_Builtin.Block
                  className={_utils.cx(_styles, "dashboard-card")}
                  tag="div"
                  {...onClickCreateResume}
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "image-width")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64889eedde1048c8f197ba97_createresume.png"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "onboard-card-content")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "dashboard-card-content")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "dashboard-card-heading")}
                        tag="div"
                      >
                        {"Create your resume with Aglint AI"}
                      </_Builtin.Block>
                      <_Builtin.Paragraph>
                        {
                          "Manage and create resumes with our user-friendly builder. Import your LinkedIn profile or upload an existing resume, and let our AI generate a professional summary, work experience, and skills for a standout resume."
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
              ) : null}
              {isReviewResume ? (
                <_Builtin.Block
                  className={_utils.cx(_styles, "dashboard-card-copy")}
                  data-w-id="4722c42d-6350-873a-5cf0-2cbf29527a22"
                  tag="div"
                  {...onClickReviewResume}
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "image-width")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64889f7eb56405002e7ee5e8_Illustration%2004.png"
                  />
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "onboard-card-content",
                      "vertical"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "dashboard-card-content")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "dashboard-card-heading")}
                        tag="div"
                      >
                        {"Book a job Strategy Call with Coach"}
                      </_Builtin.Block>
                      <_Builtin.Paragraph
                        className={_utils.cx(_styles, "maxwidth-custom")}
                      >
                        {
                          "Aglint AI has done the heavy lifting for you. Now, it's your turn to take a quick look at your professionally generated resume and ensure that it meets your expectations."
                        }
                      </_Builtin.Paragraph>
                    </_Builtin.Block>
                    <_Builtin.Link
                      className={_utils.cx(
                        _styles,
                        "primary-button",
                        "book-a-call-btn"
                      )}
                      button={true}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Book a Call"}
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
              ) : null}
              {isNetwork ? (
                <_Builtin.Block
                  className={_utils.cx(_styles, "dashboard-card")}
                  tag="div"
                  {...onClickNetwork}
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "image-width")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/6485e5d072c765b773723a10_Vectors-Wrapper.svg"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "onboard-card-content")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "dashboard-card-content")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "dashboard-card-heading")}
                        tag="div"
                      >
                        {"Grow Your Network"}
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
              ) : null}
              {isCoverLetter ? (
                <_Builtin.Block
                  className={_utils.cx(_styles, "dashboard-card")}
                  tag="div"
                  {...onClickReviewCv}
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "image-width")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64889f54b73a2b6e9729c977_coverleetr.png"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "onboard-card-content")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "dashboard-card-content")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "dashboard-card-heading")}
                        tag="div"
                      >
                        {"Review Your Personalized Cover Letter"}
                      </_Builtin.Block>
                      <_Builtin.Paragraph>
                        {
                          "Take a moment to review your personalized cover letter created by Aglint AI and ensure it perfectly showcases your skills and experience."
                        }
                        <br />
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
              ) : null}
              <_Builtin.Block
                className={_utils.cx(_styles, "dashboard-card", "hide")}
                tag="div"
                {...onClickRequestresume}
              >
                <_Builtin.Image
                  loading="lazy"
                  width="auto"
                  height="auto"
                  src="https://uploads-ssl.webflow.com/64802f1cace35ab762b8c563/64802f1cace35ab762b8c591_Frame.svg"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "onboard-card-content")}
                  tag="div"
                >
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
              </_Builtin.Block>
              {isInterviewPrep ? (
                <_Builtin.Block
                  className={_utils.cx(_styles, "dashboard-card")}
                  tag="div"
                  {...onClickInterviewPrep}
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "image-width")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64847176a7baf73f869bfde8_Frame%2043.png"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "onboard-card-content")}
                    tag="div"
                  >
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
                </_Builtin.Block>
              ) : null}
              {isBookcall ? (
                <_Builtin.Block
                  className={_utils.cx(_styles, "dashboard-card")}
                  tag="div"
                  {...onClickBookCall}
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "image-width")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64897868eeb35be0c51037a9_Illustration%2020.png"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "onboard-card-content")}
                    tag="div"
                  >
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
              ) : null}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "dashboard-toolbox")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "dashboard-subhead-wrapper")}
                tag="div"
              >
                <_Builtin.Heading tag="h3">
                  {"Explore our Toolbox"}
                </_Builtin.Heading>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "dashboard-heading-lead-2-copy"
                  )}
                  tag="div"
                >
                  {
                    "Our job seeker toolbox includes a cover letter writer, mock interview simulator, resume builder, and email sequence to simplify your job search."
                  }
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "explore-tool-wrapper",
                  "hidescrollbar"
                )}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "toolbox-card-block")}
                  button={false}
                  options={{
                    href: "/network-builder",
                  }}
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "toolbox-image")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/6485e5d072c765b773723a10_Vectors-Wrapper.svg"
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
                    <_Builtin.Block
                      className={_utils.cx(_styles, "cta-button-ondashboard")}
                      id={_utils.cx(
                        _styles,
                        "w-node-_43f7f588-a929-a153-cd93-deb50459a1d8-cbc06122"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "toolbox-button")}
                        tag="div"
                      >
                        <_Builtin.Block tag="div">
                          {"Let's Write"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "toolbox-card-block")}
                  button={false}
                  options={{
                    href: "/coverletter",
                  }}
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "toolbox-image", "fixed")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/6488f79ef8e53c13c87ab0df_Illustration%2021.png"
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
                    <_Builtin.Block
                      className={_utils.cx(_styles, "cta-button-ondashboard")}
                      id={_utils.cx(
                        _styles,
                        "w-node-b026109e-75c8-5b6c-1c58-5c79bcfd1b44-cbc06122"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "toolbox-button")}
                        tag="div"
                      >
                        <_Builtin.Block tag="div">
                          {"Let's Write"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "toolbox-card-block")}
                  button={false}
                  options={{
                    href: "/job-tracker",
                  }}
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "toolbox-image")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/6489789fcd994ba4017b4bd5_Illustration%2016.png"
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
                    <_Builtin.Block
                      className={_utils.cx(_styles, "cta-button-ondashboard")}
                      id={_utils.cx(
                        _styles,
                        "w-node-aa4121b4-1ff1-d770-be12-716d6fab561b-cbc06122"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "toolbox-button")}
                        tag="div"
                      >
                        <_Builtin.Block tag="div">
                          {"Get Started"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "toolbox-shadow")}
                tag="div"
              >
                <_Builtin.HtmlEmbed value="%3Cstyle%3E%0A.toolbox-shadow%7B%0Apointer-events%3Anone%3B%0A%7D%0A%3C%2Fstyle%3E" />
              </_Builtin.Block>
            </_Builtin.Block>
            {isRecentjobs ? (
              <_Builtin.Block
                className={_utils.cx(_styles, "recentjobs-dashboard")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "dashboard-subhead-wrapper")}
                  tag="div"
                >
                  <_Builtin.Heading tag="h3">
                    {"Recently Viewed Jobs"}
                  </_Builtin.Heading>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "dashboard-heading-lead-2")}
                    tag="div"
                  >
                    {
                      "Never lose track of the jobs you're interested in. Take it a step further by adding them to your job tracker and keeping your job search organized and efficient."
                    }
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "div-block-18")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "recent-jobs-scroll",
                      "recent-jobs-grid"
                    )}
                    tag="div"
                  >
                    {slotRecentJobcards}
                  </_Builtin.Block>
                  {isShowMore ? (
                    <_Builtin.Block
                      className={_utils.cx(_styles, "loadmore-btn")}
                      tag="div"
                      {...onClickShowMore}
                    >
                      <_Builtin.Block tag="div">{"Show More"}</_Builtin.Block>
                    </_Builtin.Block>
                  ) : null}
                </_Builtin.Block>
              </_Builtin.Block>
            ) : null}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "dashboard-right")}
            id={_utils.cx(
              _styles,
              "w-node-_1931ee46-bd28-2552-b769-97b9cbc0616e-cbc06122"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "right-contents")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "dashboard-subhead-wrapper")}
                tag="div"
              >
                <_Builtin.Heading
                  className={_utils.cx(_styles, "recommened-jobs-title")}
                  tag="h3"
                >
                  {"Recommended Jobs"}
                </_Builtin.Heading>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "job-contents")}
                tag="div"
              >
                {isJobEmpty ? (
                  <_Builtin.Block
                    className={_utils.cx(_styles, "job-empty")}
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "image-6")}
                      loading="lazy"
                      width="auto"
                      height="auto"
                      src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/6489cb9686612e6400e36cb8_Illustration%2001.svg"
                    />
                    <_Builtin.Block tag="div">{"No jobs found"}</_Builtin.Block>
                    <_Builtin.Link
                      className={_utils.cx(_styles, "loadmore-btn")}
                      button={false}
                      options={{
                        href: "/jobs",
                      }}
                    >
                      <_Builtin.Block tag="div">{"Search Jobs"}</_Builtin.Block>
                    </_Builtin.Link>
                  </_Builtin.Block>
                ) : null}
                {showJobs ? (
                  <_Builtin.Block
                    className={_utils.cx(_styles, "job-success")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "job-success-copy")}
                      tag="div"
                    >
                      {slotRecommendedJobs}
                    </_Builtin.Block>
                    <_Builtin.Link
                      className={_utils.cx(_styles, "loadmore-btn")}
                      button={false}
                      options={{
                        href: "/jobs",
                      }}
                    >
                      <_Builtin.Block tag="div">{"View Jobs"}</_Builtin.Block>
                    </_Builtin.Link>
                  </_Builtin.Block>
                ) : null}
                {isLoading ? (
                  <_Builtin.Block
                    className={_utils.cx(_styles, "job-loading")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "default-loader",
                        "in-jobs"
                      )}
                      tag="div"
                    >
                      <LoaderSvg />
                    </_Builtin.Block>
                  </_Builtin.Block>
                ) : null}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Grid>
      </_Builtin.Block>
    </_Component>
  );
}
