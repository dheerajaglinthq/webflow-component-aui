import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Toolbox.module.css";

export function Toolbox({ as: _Component = _Builtin.Section }) {
  return (
    <_Component className={_utils.cx(_styles, "section-toolbox")} tag="section">
      <_Builtin.Block
        className={_utils.cx(_styles, "padding-global")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "container-1280")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "toolbox-wrapper-2")}
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
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-xlarge")}
                  tag="div"
                >
                  {"Toolbox"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-grey-600")}
                tag="div"
              >
                {
                  "Our job seeker toolbox includes a cover letter writer, mock interview simulator, resume builder, salary negotiation guide, and email sequence to simplify your job search."
                }
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "toobox-card-wrapper-2")}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "toolbox-card-block")}
                button={false}
                options={{
                  href: "/coverletter",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "toolbox-image")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/6488f79ef8e53c13c87ab0df_Illustration%2021.png"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "toolbox-content-wrapper-2")}
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
                      "w-node-_066d6e95-7a75-8c45-9d56-acc89641f219-412e5626"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "toolbox-button")}
                      tag="div"
                    >
                      <_Builtin.Block tag="div">{"Let's Write"}</_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "toolbox-card-block")}
                button={false}
                options={{
                  href: "/interview-preparation",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "toolbox-image")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64847176a7baf73f869bfde8_Frame%2043.png"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "toolbox-content-wrapper-2")}
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
                      {"Interview Preparation"}
                    </_Builtin.Heading>
                    <_Builtin.Paragraph
                      className={_utils.cx(_styles, "toolbox-text-small")}
                    >
                      {
                        "Prepare for interviews like a pro with Aglint’s user-friendly platform and advanced AI technology."
                      }
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "cta-button-ondashboard")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_7d481f70-2bb5-fe8e-0102-af39d5aa5d21-412e5626"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "toolbox-button")}
                      tag="div"
                    >
                      <_Builtin.Block tag="div">
                        {"Let’s Get Ready"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "toolbox-card-block")}
                button={false}
                options={{
                  href: "/resume?context=linkedin",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "toolbox-image")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64897968dcc3977ac06bbbf6_648074514781c626848ae5a7_linkedin.svg"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "toolbox-content-wrapper-2")}
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
                      {"Convert LinkedIn Profile into Resume"}
                    </_Builtin.Heading>
                    <_Builtin.Paragraph
                      className={_utils.cx(_styles, "toolbox-text-small")}
                    >
                      {
                        "Instantly convert your LinkedIn profile into a polished resume with our simple solution."
                      }
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "cta-button-ondashboard")}
                    id={_utils.cx(
                      _styles,
                      "w-node-ee29e69b-ed8f-b867-e3e8-b2e26f2814f5-412e5626"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "toolbox-button")}
                      tag="div"
                    >
                      <_Builtin.Block tag="div">{"Let’s Write"}</_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "toolbox-card-block")}
                button={false}
                options={{
                  href: "/resume-builder",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "toolbox-image")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  src="https://uploads-ssl.webflow.com/64802f1cace35ab762b8c563/6480744dd6ea3885364efa6c_perfect-resume.svg"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "toolbox-content-wrapper-2")}
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
                      {"Perfect Your Resume"}
                    </_Builtin.Heading>
                    <_Builtin.Paragraph
                      className={_utils.cx(_styles, "toolbox-text-small")}
                    >
                      {
                        "Stand out from the competition with our AI-assisted resume writing technology, and perfect your resume with ease."
                      }
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "cta-button-ondashboard")}
                    id={_utils.cx(
                      _styles,
                      "w-node-f7148daf-c2f4-14b4-1adc-7c176a7b6a27-412e5626"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "toolbox-button")}
                      tag="div"
                    >
                      <_Builtin.Block tag="div">{"Upload"}</_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Block
                className={_utils.cx(_styles, "toolbox-card-block", "hide")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "toolbox-image")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  src="https://uploads-ssl.webflow.com/64802f1cace35ab762b8c563/648074faa17e7f2920f6d49b_emailsequence.svg"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "toolbox-content-wrapper-2")}
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
                      {"Follow-up Email Sequence"}
                    </_Builtin.Heading>
                    <_Builtin.Paragraph
                      className={_utils.cx(_styles, "toolbox-text-small")}
                    >
                      {
                        "Stay top of mind during your job search with our follow-up email sequence delivered straight to your inbox. Get noticed today."
                      }
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "cta-button-ondashboard")}
                    id={_utils.cx(
                      _styles,
                      "w-node-efab18b0-3a58-ed71-8ea6-8640e98f7917-412e5626"
                    )}
                    tag="div"
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "toolbox-button")}
                      id={_utils.cx(
                        _styles,
                        "w-node-_3bb6a728-1ac8-f1bd-5ebd-2756412e5661-412e5626"
                      )}
                      button={true}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Let’s Setup"}
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "toolbox-card-block", "hide")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "toolbox-image")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  src="https://uploads-ssl.webflow.com/64802f1cace35ab762b8c563/648074f70a92ccf74983580a_salarynego.svg"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "toolbox-content-wrapper-2")}
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
                      {"Salary Negotiation"}
                    </_Builtin.Heading>
                    <_Builtin.Paragraph
                      className={_utils.cx(_styles, "toolbox-text-small")}
                    >
                      {
                        "Negotiate with confidence and ease using our salary negotiation solution that streamlines the process."
                      }
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "cta-button-ondashboard")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_4db683b3-27d8-5192-6414-db2f50112707-412e5626"
                    )}
                    tag="div"
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "toolbox-button")}
                      id={_utils.cx(
                        _styles,
                        "w-node-_3bb6a728-1ac8-f1bd-5ebd-2756412e566b-412e5626"
                      )}
                      button={true}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Let’s begin"}
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
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
                  src="https://uploads-ssl.webflow.com/64802f1cace35ab762b8c563/648074f46f305f28b6beb2ed_networkbuilder.svg"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "toolbox-content-wrapper-2")}
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
                      "w-node-e6c963b9-8a7d-60e7-6aa0-d2089517bf3b-412e5626"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "toolbox-button")}
                      tag="div"
                    >
                      <_Builtin.Block tag="div">{"Let’s Begin"}</_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
