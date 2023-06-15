import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CommonlyAskedQuestion.module.css";

export function CommonlyAskedQuestion({
  as: _Component = _Builtin.Block,
  slotQuestion,
  numberOfQuestion = "46 Questions",
  tipsText = "Tips",
  answer2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis...",
  answer3 = (
    <>
      {
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis..."
      }
      <br />
    </>
  ),
  answer1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis...",
  isQuestionLoading = true,
  onClickBack = {},
  isAnswerLoading = true,
  isAnswerEmpty = true,
  slotDifficultyLevel,
  titleText = "Commonly Asked Questions",
  textActiveQuestion = "Tell Me about yourself",
  tip1 = "Tips 1",
  tip2 = "Tips 2",
  tip3 = "Tips 3",
}) {
  return (
    <_Component className={_utils.cx(_styles, "feedback-component")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "container-1120")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "caq-title-wrapper")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "feedback-back")}
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
          </_Builtin.Block>
          <_Builtin.Block className={_utils.cx(_styles, "caq-title")} tag="div">
            <_Builtin.Block tag="div">{titleText}</_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "feedback-content-wrapper")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "feedback-left-block")}
            id={_utils.cx(
              _styles,
              "w-node-_9bb8f3e3-ceb7-5603-1af7-bf0aeb0e81b6-eb0e81af"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "questions-block")}
              id={_utils.cx(
                _styles,
                "w-node-_9bb8f3e3-ceb7-5603-1af7-bf0aeb0e81b7-eb0e81af"
              )}
              tag="div"
            >
              <_Builtin.Block tag="div">{numberOfQuestion}</_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "difficulty-level")}
                tag="div"
              >
                {slotDifficultyLevel}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "questions-list")}
              tag="div"
            >
              {slotQuestion}
            </_Builtin.Block>
            {isQuestionLoading ? (
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "stack-column",
                  "padding-horizontal"
                )}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "questions-item", "skeleton")}
                  button={false}
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "iconbutton-skeleton")}
                    tag="div"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-md-skeleton")}
                    tag="div"
                  >
                    {"Tell me about yourself"}
                  </_Builtin.Block>
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "questions-item", "skeleton")}
                  button={false}
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "iconbutton-skeleton")}
                    tag="div"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-md-skeleton")}
                    tag="div"
                  >
                    {"Tell me about yourself"}
                  </_Builtin.Block>
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "questions-item", "skeleton")}
                  button={false}
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "iconbutton-skeleton")}
                    tag="div"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-md-skeleton")}
                    tag="div"
                  >
                    {"Tell me about yourself"}
                  </_Builtin.Block>
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "questions-item", "skeleton")}
                  button={false}
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "iconbutton-skeleton")}
                    tag="div"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-md-skeleton")}
                    tag="div"
                  >
                    {"Tell me about yourself"}
                  </_Builtin.Block>
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "questions-item", "skeleton")}
                  button={false}
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "iconbutton-skeleton")}
                    tag="div"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-md-skeleton")}
                    tag="div"
                  >
                    {"Tell me about yourself"}
                  </_Builtin.Block>
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "questions-item", "skeleton")}
                  button={false}
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "iconbutton-skeleton")}
                    tag="div"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-md-skeleton")}
                    tag="div"
                  >
                    {"Tell me about yourself"}
                  </_Builtin.Block>
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "questions-item", "skeleton")}
                  button={false}
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "iconbutton-skeleton")}
                    tag="div"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-md-skeleton")}
                    tag="div"
                  >
                    {"Tell me about yourself"}
                  </_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.Block>
            ) : null}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "border-line")}
            id={_utils.cx(
              _styles,
              "w-node-_9bb8f3e3-ceb7-5603-1af7-bf0aeb0e81ea-eb0e81af"
            )}
            tag="div"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "relative-sample-answers")}
            id={_utils.cx(
              _styles,
              "w-node-_1512b087-bde0-b0df-e539-03405b772f5f-eb0e81af"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "feedback-right-block-wrapper")}
              id={_utils.cx(
                _styles,
                "w-node-_0f6c0266-b36f-c125-c569-0a8ee92e7987-eb0e81af"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "feedback-right-block")}
                id={_utils.cx(
                  _styles,
                  "w-node-_9bb8f3e3-ceb7-5603-1af7-bf0aeb0e81eb-eb0e81af"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "caqanswer")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "about-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "about-list")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "question-title")}
                        tag="div"
                      >
                        {textActiveQuestion}
                      </_Builtin.Block>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "button-2", "hide")}
                        button={true}
                        options={{
                          href: "#",
                        }}
                      >
                        {"Practice and get feedback"}
                      </_Builtin.Link>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "tips-list")}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M1%204.5C1%202.01472%203.01472%200%205.5%200C7.98528%200%2010%202.01472%2010%204.5C10%206.02983%209.2293%207.42083%208%208.2424V10H3V8.2424C1.7707%207.42083%201%206.02983%201%204.5ZM4%207.66318V9H7V7.66318C8.18247%207.10145%209%205.8962%209%204.5C9%202.567%207.433%201%205.5%201C3.567%201%202%202.567%202%204.5C2%205.8962%202.81753%207.10145%204%207.66318ZM3%2011H8C8%2011.5523%207.55228%2012%207%2012H4C3.44772%2012%203%2011.5523%203%2011ZM6%206V7.5C6%208.16667%205%208.16667%205%207.5V6H4.5C3.83333%206%203.83333%205%204.5%205H6.5C7.16667%205%207.16667%206%206.5%206H6Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E" />
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-medium")}
                        tag="div"
                      >
                        {"Tips"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "tips-item")}
                      tag="div"
                    >
                      <_Builtin.List
                        className={_utils.cx(_styles, "tips-list-comp")}
                        tag="ul"
                        unstyled={false}
                      >
                        <_Builtin.ListItem>{tip1}</_Builtin.ListItem>
                        <_Builtin.ListItem>{tip2}</_Builtin.ListItem>
                        <_Builtin.ListItem>{tip3}</_Builtin.ListItem>
                      </_Builtin.List>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "sample-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "sample-questions")}
                      tag="div"
                    >
                      <_Builtin.Block tag="div">
                        {"Sample Answers"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "sample-question-wrapper")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "question-item")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "sample-answer")}
                          tag="div"
                        >
                          {"Sample Answer 1"}
                        </_Builtin.Block>
                        <_Builtin.Paragraph
                          className={_utils.cx(_styles, "text-md-default")}
                        >
                          {answer1}
                        </_Builtin.Paragraph>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "question-item")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "sample-answer")}
                          tag="div"
                        >
                          {"Sample Answer 2"}
                        </_Builtin.Block>
                        <_Builtin.Paragraph
                          className={_utils.cx(_styles, "text-md-default")}
                        >
                          {answer2}
                        </_Builtin.Paragraph>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "question-item")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "sample-answer")}
                          tag="div"
                        >
                          {"Sample Answer 3"}
                        </_Builtin.Block>
                        <_Builtin.Paragraph
                          className={_utils.cx(_styles, "text-md-default")}
                        >
                          {answer3}
                        </_Builtin.Paragraph>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              {isAnswerLoading ? (
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "feedback-right-block",
                    "skeleton"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "caqanswer")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "about-wrapper")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "about-list")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "text-md-skeleton")}
                          tag="div"
                        >
                          {"Tell Me about yourself"}
                        </_Builtin.Block>
                        <_Builtin.Link
                          className={_utils.cx(
                            _styles,
                            "button-skeleton",
                            "hide"
                          )}
                          button={true}
                          options={{
                            href: "#",
                          }}
                        >
                          {"Practice and get feedback"}
                        </_Builtin.Link>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "tips-list")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "text-md-skeleton")}
                          tag="div"
                        >
                          {"Tips"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "tips-item")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "text-md-skeleton")}
                          tag="div"
                        >
                          {tipsText}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "sample-wrapper")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "sample-questions")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "text-md-skeleton")}
                          tag="div"
                        >
                          {"Sample Answers"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "sample-question-wrapper"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "question-item",
                            "skeleton"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "text-lg-skeleton")}
                            tag="div"
                          >
                            {"Sample Answer 1"}
                          </_Builtin.Block>
                          <_Builtin.Paragraph
                            className={_utils.cx(_styles, "text-lg-skeleton")}
                          >
                            {
                              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent "
                            }
                          </_Builtin.Paragraph>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "question-item",
                            "skeleton"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "text-lg-skeleton")}
                            tag="div"
                          >
                            {"Sample Answer 1"}
                          </_Builtin.Block>
                          <_Builtin.Paragraph
                            className={_utils.cx(_styles, "text-lg-skeleton")}
                          >
                            {
                              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent "
                            }
                          </_Builtin.Paragraph>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "question-item",
                            "skeleton"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "text-lg-skeleton")}
                            tag="div"
                          >
                            {"Sample Answer 1"}
                          </_Builtin.Block>
                          <_Builtin.Paragraph
                            className={_utils.cx(_styles, "text-lg-skeleton")}
                          >
                            {
                              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit "
                            }
                          </_Builtin.Paragraph>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              ) : null}
              {isAnswerEmpty ? (
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "feedback-right-block",
                    "skeleton",
                    "empty"
                  )}
                  tag="div"
                />
              ) : null}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
