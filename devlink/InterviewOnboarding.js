import React from "react";
import * as _Builtin from "./_Builtin";
import { Loader } from "./Loader";
import * as _utils from "./utils";
import _styles from "./InterviewOnboarding.module.css";

export function InterviewOnboarding({
  as: _Component = _Builtin.Block,
  slotResumeCard,
  slotCompanyCard,
  slotSkill,
  isSelectRole = true,
  isSelectResume = true,
  isSelectSkills = true,
  onClickNext = {},
  onClickSkip = {},
  onClickBack = {},
  isActiveButton = true,
  isSkillsLoading = true,
  slotSkillInput,
  finalTitle = "Let's begin your interview preparation for the UI/UX Designer position at Google.",
  finalDescription = "During this session, you'll be asked questions about your UI/UX skills, including proficiency in Figma, Wireframing, and Miro, as well as your past project experiences.",
  onClickBegin = {},
  slotFinalSkills,
  isSummary = true,
  onClickFinal = {},
}) {
  return (
    <_Component className={_utils.cx(_styles, "interviewonboarding")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "flow-custom-container")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "flow-jobtitle-and-company")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "flow-layout")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "flow-change-control")}
              id={_utils.cx(
                _styles,
                "w-node-_1037f1f2-e981-6157-e729-0c506ce01e33-6ce01e2f"
              )}
              tag="div"
            >
              {isSelectRole ? (
                <_Builtin.Block
                  className={_utils.cx(_styles, "select-role")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_1037f1f2-e981-6157-e729-0c506ce01e34-6ce01e2f"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "min-height-300")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "selectcompany-lauyot")}
                      tag="div"
                    >
                      {slotCompanyCard}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "back-continue-wrapper",
                      "max-width-670"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "back-button")}
                      tag="div"
                      {...onClickBack}
                    >
                      <_Builtin.Image
                        loading="lazy"
                        width="auto"
                        height="auto"
                        src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64820ff84e6c35a26e842ad5_Start%20icon%20-%2016px.svg"
                      />
                      <_Builtin.Block tag="div">{"Back"}</_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "skip")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "button-wrapper-next")}
                        tag="div"
                      >
                        {isActiveButton ? (
                          <_Builtin.Block
                            className={_utils.cx(_styles, "active-button")}
                            tag="div"
                            {...onClickNext}
                          >
                            <_Builtin.Block tag="div">
                              {"continue"}
                            </_Builtin.Block>
                          </_Builtin.Block>
                        ) : null}
                        <_Builtin.Block
                          className={_utils.cx(_styles, "disabled-button")}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"continue"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              ) : null}
              {isSelectResume ? (
                <_Builtin.Block
                  className={_utils.cx(_styles, "select-resume-comp")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "select-resume-wrap")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "selct-resume-layout",
                        "hidescrollbar"
                      )}
                      tag="div"
                    >
                      {slotResumeCard}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "back-continue-wrapper",
                        "max-width-670"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "back-button")}
                        tag="div"
                        {...onClickBack}
                      >
                        <_Builtin.Image
                          loading="lazy"
                          width="auto"
                          height="auto"
                          src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64820ff84e6c35a26e842ad5_Start%20icon%20-%2016px.svg"
                        />
                        <_Builtin.Block tag="div">{"Back"}</_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "skip")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "back-button")}
                          tag="div"
                          {...onClickSkip}
                        >
                          <_Builtin.Block tag="div">{"Skip"}</_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "button-wrapper-next")}
                          tag="div"
                        >
                          {isActiveButton ? (
                            <_Builtin.Block
                              className={_utils.cx(_styles, "active-button")}
                              tag="div"
                              {...onClickNext}
                            >
                              <_Builtin.Block tag="div">
                                {"continue"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          ) : null}
                          <_Builtin.Block
                            className={_utils.cx(_styles, "disabled-button")}
                            tag="div"
                          >
                            <_Builtin.Block tag="div">
                              {"continue"}
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "rdesume-white-overlay")}
                    tag="div"
                  />
                </_Builtin.Block>
              ) : null}
              {isSelectSkills ? (
                <_Builtin.Block
                  className={_utils.cx(_styles, "select-skills")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "select-resume-wrap")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "select-skills-layout")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "suggested-skills-wrap")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "suggested-skill-title"
                          )}
                          tag="div"
                        >
                          {"Suggested Skills"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "ai-suggetion")}
                          tag="div"
                        >
                          {isSkillsLoading ? (
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "suggetionbox-loading"
                              )}
                              tag="div"
                            >
                              <Loader />
                            </_Builtin.Block>
                          ) : null}
                          <_Builtin.Block
                            className={_utils.cx(_styles, "ai-suggetion-box")}
                            tag="div"
                          >
                            {slotSkill}
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "user-input-field")}
                        tag="div"
                      >
                        {slotSkillInput}
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "back-continue-wrapper",
                        "max-width-670"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "back-button")}
                        tag="div"
                        {...onClickBack}
                      >
                        <_Builtin.Image
                          loading="lazy"
                          width="auto"
                          height="auto"
                          src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64820ff84e6c35a26e842ad5_Start%20icon%20-%2016px.svg"
                        />
                        <_Builtin.Block tag="div">{"Back"}</_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "skip")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "button-wrapper-next")}
                          tag="div"
                        >
                          {isActiveButton ? (
                            <_Builtin.Block
                              className={_utils.cx(_styles, "active-button")}
                              tag="div"
                              {...onClickNext}
                            >
                              <_Builtin.Block tag="div">
                                {"continue"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          ) : null}
                          <_Builtin.Block
                            className={_utils.cx(_styles, "disabled-button")}
                            tag="div"
                          >
                            <_Builtin.Block tag="div">
                              {"continue"}
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              ) : null}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "onboarding-image")}
          tag="div"
        >
          <_Builtin.Image
            loading="lazy"
            width="auto"
            height="auto"
            src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/6484767b3422cd6b71f0e616_Illustration%2013.png"
          />
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "onboarding-comments")}
          tag="div"
        >
          {isSelectRole ? (
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "tooltip-wrapper",
                "not-absolue",
                "_1"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "tooltip")}
                tag="div"
              >
                <_Builtin.Image
                  loading="lazy"
                  width="auto"
                  height="auto"
                  src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64820ff84e6c35a26e842ad3_Nubbin.svg"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "select-title")}
                tag="div"
              >
                {"Select Job Tittle & Company."}
              </_Builtin.Block>
              <_Builtin.Paragraph>
                {
                  "Hello! I'm your Interview Assistant Bot, here to help you prepare effectively. To get started, please tell me the company and job position you're interviewing for."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
          ) : null}
          {isSelectResume ? (
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "tooltip-wrapper",
                "not-absolue",
                "_2"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "tooltip")}
                tag="div"
              >
                <_Builtin.Image
                  loading="lazy"
                  width="auto"
                  height="auto"
                  src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64820ff84e6c35a26e842ad3_Nubbin.svg"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "select-title")}
                tag="div"
              >
                {"Select your resume"}
              </_Builtin.Block>
              <_Builtin.Paragraph>
                {
                  "Thank you for taking the time to join us for this interview. May I kindly request a copy of your resume, please?"
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
          ) : null}
          {isSelectSkills ? (
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "tooltip-wrapper",
                "not-absolue",
                "_3"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "tooltip")}
                tag="div"
              >
                <_Builtin.Image
                  loading="lazy"
                  width="auto"
                  height="auto"
                  src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64820ff84e6c35a26e842ad3_Nubbin.svg"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "select-title")}
                tag="div"
              >
                {"Choose your skils"}
              </_Builtin.Block>
              <_Builtin.Paragraph>
                {
                  "Thank you for taking the time to join us for this interview. May I kindly request a copy of your resume, please?"
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
          ) : null}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "hidescrollbar")}
        value="%3Cstyle%3E%0A.hidescrollbar%3A%3A-webkit-scrollbar%20%7B%0A%20%20display%3A%20none%3B%0A%20%20%2F*%20for%20Chrome%2C%20Safari%2C%20and%20Opera%20*%2F%0A%7D%0A%3C%2Fstyle%3E"
      />
    </_Component>
  );
}
