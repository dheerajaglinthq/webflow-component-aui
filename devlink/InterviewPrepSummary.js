import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./InterviewPrepSummary.module.css";

export function InterviewPrepSummary({
  as: _Component = _Builtin.Block,
  timeText = "30 minutes",
  slotSkills,
  onClickBegin = {},
  jobTittle = "Estimated Time",
  company = "Estimated Time",
  summarySkills = "During this session, you'll be asked questions about your UI/UX skills, including proficiency in Figma, Wireframing, and Miro, as well as your past project experiences.",
  summaryJobTittle = "During this session, you'll be asked questions about your UI/UX skills, including proficiency in Figma, Wireframing, and Miro, as well as your past project experiences.",
}) {
  return (
    <_Component className={_utils.cx(_styles, "container-960")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "position-component")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "position-left-wrapper")}
          id={_utils.cx(
            _styles,
            "w-node-c910136e-a4d5-ab23-04f8-7c9833dace93-33dace91"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "heading-wrapper")}
            tag="div"
          >
            <_Builtin.Block tag="div">
              {
                "Let's begin your interview preparation for the UI/UX Designer position at Google."
              }
            </_Builtin.Block>
            <_Builtin.Block className={_utils.cx(_styles, "title")} tag="div">
              {jobTittle}
            </_Builtin.Block>
            <_Builtin.Block className={_utils.cx(_styles, "title")} tag="div">
              {company}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "est-wrapper")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "est-item")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "est-time")}
                tag="div"
              >
                <_Builtin.Image
                  loading="lazy"
                  width="auto"
                  height="auto"
                  src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64820ff84e6c35a26e842ada_Time%20Zone%20token.svg"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "title")}
                  tag="div"
                >
                  {"Estimated Time"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block tag="div">{timeText}</_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "est-item")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "est-time")}
                tag="div"
              >
                <_Builtin.Image
                  loading="lazy"
                  width="auto"
                  height="auto"
                  src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64820ff84e6c35a26e842adb_Flag%20-%2016px%20icon.svg"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "title")}
                  tag="div"
                >
                  {"Skills"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "slot-skills")}
                tag="div"
              >
                {slotSkills}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "position-description-wrapper")}
            tag="div"
          >
            <_Builtin.Paragraph>
              {
                "During this session, you'll be asked questions about your UI/UX skills, including proficiency in Figma, Wireframing, and Miro, as well as your past project experiences."
              }
            </_Builtin.Paragraph>
            <_Builtin.Paragraph>{summarySkills}</_Builtin.Paragraph>
            <_Builtin.Paragraph>{summaryJobTittle}</_Builtin.Paragraph>
          </_Builtin.Block>
          <_Builtin.FormWrapper
            className={_utils.cx(_styles, "form-block", "hide-form")}
          >
            <_Builtin.FormForm
              name="email-form"
              data-name="Email Form"
              method="get"
              id="email-form"
            >
              <_Builtin.FormBlockLabel htmlFor="field-2">
                {"Describe what you are looking for in this job"}
              </_Builtin.FormBlockLabel>
              <_Builtin.FormTextarea
                className={_utils.cx(_styles, "textarea")}
                required={false}
                autoFocus={false}
                placeholder="eg : I’m looking for great entusiatic design team to work for that will provide me challenging and interesting work that I can lern from and contribute to."
                maxLength={5000}
                name="field-2"
                data-name="Field 2"
                id="field-2"
              />
              <_Builtin.FormButton
                className={_utils.cx(_styles, "begin-button")}
                type="submit"
                value="Let's Begin"
                data-wait="Please wait..."
                {...onClickBegin}
              />
            </_Builtin.FormForm>
            <_Builtin.FormSuccessMessage>
              <_Builtin.Block tag="div">
                {"Thank you! Your submission has been received!"}
              </_Builtin.Block>
            </_Builtin.FormSuccessMessage>
            <_Builtin.FormErrorMessage>
              <_Builtin.Block tag="div">
                {"Oops! Something went wrong while submitting the form."}
              </_Builtin.Block>
            </_Builtin.FormErrorMessage>
          </_Builtin.FormWrapper>
          <_Builtin.Link
            className={_utils.cx(_styles, "begin-button")}
            button={false}
            options={{
              href: "#",
            }}
            {...onClickBegin}
          >
            {"Lets Begin"}
          </_Builtin.Link>
          <_Builtin.Block
            className={_utils.cx(_styles, "tips-wrapper")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "tips-title")}
              tag="div"
            >
              {"Tips"}
            </_Builtin.Block>
            <_Builtin.List
              className={_utils.cx(_styles, "list")}
              tag="ul"
              unstyled={false}
            >
              <_Builtin.ListItem>
                {"Norem ipsum dolor sit amet, consectetur adipiscing elit."}
              </_Builtin.ListItem>
              <_Builtin.ListItem>
                {"Rorem ipsum dolor sit amet, consectetur"}
              </_Builtin.ListItem>
              <_Builtin.ListItem>
                {
                  "Borem ipsum dolor sit amet adipiscing elit., consectetur adipiscing elit."
                }
              </_Builtin.ListItem>
            </_Builtin.List>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "position-image-wrapper")}
          id={_utils.cx(
            _styles,
            "w-node-c910136e-a4d5-ab23-04f8-7c9833dacebf-33dace91"
          )}
          tag="div"
        >
          <_Builtin.Image
            loading="lazy"
            width="auto"
            height="auto"
            src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/6484baef04d267c20f95ee59_lastlillus.png"
          />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
