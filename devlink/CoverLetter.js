import React from "react";
import * as _Builtin from "./_Builtin";
import { Loader } from "./Loader";
import { CoverLetterListingCard } from "./CoverLetterListingCard";
import * as _utils from "./utils";
import _styles from "./CoverLetter.module.css";

export function CoverLetter({
  as: _Component = _Builtin.Block,
  slotCoverLetter,
  isLoading = true,
  onClickCreate = {},
  showCoverletter = true,
}) {
  return (
    <_Component className={_utils.cx(_styles, "cover-letter")} tag="div">
      {isLoading ? (
        <_Builtin.Block className={_utils.cx(_styles, "loader")} tag="div">
          <Loader />
        </_Builtin.Block>
      ) : null}
      <_Builtin.Block
        className={_utils.cx(_styles, "cover-letter-emptyblock")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "container-1280", "no-min-height")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "cover-letter-empty")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "cover-letter-empty-wrapper")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "empty-cover-header-wrapper")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "empty-coverletter-title")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-xxl-default")}
                    tag="div"
                  >
                    {"Build your cover letter with AI"}
                  </_Builtin.Block>
                  <_Builtin.Image
                    loading="lazy"
                    width="auto"
                    height="auto"
                    src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/6481f83ba39a651e06949b53_Ai%20Glitter%20-%2016px%20icon.svg"
                  />
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
                    "Let us help you draft your cover letter faster. We will use the job description and your profile data to create the perfect cover letter for your job. Review and edit it to make sure it's correct for the job role and contains all required information."
                  }
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "cover-leeter-illustration-wrapper"
                )}
                tag="div"
              >
                <_Builtin.Image
                  loading="lazy"
                  width="auto"
                  height="auto"
                  src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/6481f66282b7ed6451d19d4e_Illustration%2021.svg"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "cover-empty-button")}
                  tag="div"
                  {...onClickCreate}
                >
                  <_Builtin.Block tag="div">{"Draft Now"}</_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      {showCoverletter ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "cover-letter-dashboard")}
          tag="div"
        >
          <_Builtin.Container
            className={_utils.cx(_styles, "container-1280", "no-min-height")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "slot-cover-letter")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "header-with-button")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "header-wrap")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-xxl-default")}
                    tag="div"
                  >
                    {"My Cover Letters Just updated from Webflow"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-md", "color-grey-600")}
                    tag="div"
                  >
                    {
                      "Let our AI help you create a personalized cover letter for your dream job. Simply provide your job requirements and our AI will generate a tailored cover letter for you to edit and perfect."
                    }
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "cover-empty-button")}
                  tag="div"
                  {...onClickCreate}
                >
                  <_Builtin.Block tag="div">{"Create"}</_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "coverletter-grid")}
                tag="div"
              >
                {slotCoverLetter ?? <CoverLetterListingCard />}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Container>
        </_Builtin.Block>
      ) : null}
    </_Component>
  );
}
