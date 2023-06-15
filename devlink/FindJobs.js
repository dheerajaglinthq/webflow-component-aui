import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./FindJobs.module.css";

export function FindJobs({
  as: _Component = _Builtin.Block,
  slotJobListingcard,
  slotFilter,
  skeletonVisibility = true,
}) {
  return (
    <_Component className={_utils.cx(_styles, "jobs-left-content")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "header-wrap")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "text-xxl-bold")}
          tag="div"
        >
          {"Find Jobs"}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "text-md", "text-color-grey")}
          tag="div"
        >
          {
            "Easily search and filter job opportunities by job title, location, job type, experience level, date posted, and remote or on-site work options."
          }
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "filters-slot")} tag="div">
        {slotFilter}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "job-listing-grid")}
        tag="div"
      >
        {slotJobListingcard}
      </_Builtin.Block>
      {skeletonVisibility ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "job-listing-grid")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "job-listingcard-skeleton")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "job-avatar-skeleton")}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "recently-viewed-card-content-wrap",
                "skeleton"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "flex-row")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-lg-skeleton")}
                  tag="div"
                >
                  {"Job Title"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "green-badge-skeleton")}
                  tag="div"
                >
                  {"New"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-md-skeleton")}
                tag="div"
              >
                {"Job Loon"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-md-skeleton")}
                tag="div"
              >
                {"Posted day"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "hide")}
              value="%3Cstyle%3E%0A.line-clamp-1%20%7B%0A%09display%3A%20-webkit-box%3B%0A%09overflow%3A%20hidden%3B%0A%09-webkit-line-clamp%3A%201%3B%0A%09-webkit-box-orient%3A%20vertical%3B%0A%7D%0A%3C%2Fstyle%3E"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "job-listingcard-skeleton")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "job-avatar-skeleton")}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "recently-viewed-card-content-wrap",
                "skeleton"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "flex-row")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-lg-skeleton")}
                  tag="div"
                >
                  {"Job Title"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "green-badge-skeleton")}
                  tag="div"
                >
                  {"New"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-md-skeleton")}
                tag="div"
              >
                {"Job Loon"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-md-skeleton")}
                tag="div"
              >
                {"Posted day"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "hide")}
              value="%3Cstyle%3E%0A.line-clamp-1%20%7B%0A%09display%3A%20-webkit-box%3B%0A%09overflow%3A%20hidden%3B%0A%09-webkit-line-clamp%3A%201%3B%0A%09-webkit-box-orient%3A%20vertical%3B%0A%7D%0A%3C%2Fstyle%3E"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "job-listingcard-skeleton")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "job-avatar-skeleton")}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "recently-viewed-card-content-wrap",
                "skeleton"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "flex-row")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-lg-skeleton")}
                  tag="div"
                >
                  {"Job Title"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "green-badge-skeleton")}
                  tag="div"
                >
                  {"New"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-md-skeleton")}
                tag="div"
              >
                {"Job Loon"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-md-skeleton")}
                tag="div"
              >
                {"Posted day"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "hide")}
              value="%3Cstyle%3E%0A.line-clamp-1%20%7B%0A%09display%3A%20-webkit-box%3B%0A%09overflow%3A%20hidden%3B%0A%09-webkit-line-clamp%3A%201%3B%0A%09-webkit-box-orient%3A%20vertical%3B%0A%7D%0A%3C%2Fstyle%3E"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "job-listingcard-skeleton")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "job-avatar-skeleton")}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "recently-viewed-card-content-wrap",
                "skeleton"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "flex-row")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-lg-skeleton")}
                  tag="div"
                >
                  {"Job Title"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "green-badge-skeleton")}
                  tag="div"
                >
                  {"New"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-md-skeleton")}
                tag="div"
              >
                {"Job Loon"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-md-skeleton")}
                tag="div"
              >
                {"Posted day"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "hide")}
              value="%3Cstyle%3E%0A.line-clamp-1%20%7B%0A%09display%3A%20-webkit-box%3B%0A%09overflow%3A%20hidden%3B%0A%09-webkit-line-clamp%3A%201%3B%0A%09-webkit-box-orient%3A%20vertical%3B%0A%7D%0A%3C%2Fstyle%3E"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "job-listingcard-skeleton")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "job-avatar-skeleton")}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "recently-viewed-card-content-wrap",
                "skeleton"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "flex-row")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-lg-skeleton")}
                  tag="div"
                >
                  {"Job Title"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "green-badge-skeleton")}
                  tag="div"
                >
                  {"New"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-md-skeleton")}
                tag="div"
              >
                {"Job Loon"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-md-skeleton")}
                tag="div"
              >
                {"Posted day"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "hide")}
              value="%3Cstyle%3E%0A.line-clamp-1%20%7B%0A%09display%3A%20-webkit-box%3B%0A%09overflow%3A%20hidden%3B%0A%09-webkit-line-clamp%3A%201%3B%0A%09-webkit-box-orient%3A%20vertical%3B%0A%7D%0A%3C%2Fstyle%3E"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "job-listingcard-skeleton")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "job-avatar-skeleton")}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "recently-viewed-card-content-wrap",
                "skeleton"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "flex-row")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-lg-skeleton")}
                  tag="div"
                >
                  {"Job Title"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "green-badge-skeleton")}
                  tag="div"
                >
                  {"New"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-md-skeleton")}
                tag="div"
              >
                {"Job Loon"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-md-skeleton")}
                tag="div"
              >
                {"Posted day"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "hide")}
              value="%3Cstyle%3E%0A.line-clamp-1%20%7B%0A%09display%3A%20-webkit-box%3B%0A%09overflow%3A%20hidden%3B%0A%09-webkit-line-clamp%3A%201%3B%0A%09-webkit-box-orient%3A%20vertical%3B%0A%7D%0A%3C%2Fstyle%3E"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "job-listingcard-skeleton")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "job-avatar-skeleton")}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "recently-viewed-card-content-wrap",
                "skeleton"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "flex-row")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-lg-skeleton")}
                  tag="div"
                >
                  {"Job Title"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "green-badge-skeleton")}
                  tag="div"
                >
                  {"New"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-md-skeleton")}
                tag="div"
              >
                {"Job Loon"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-md-skeleton")}
                tag="div"
              >
                {"Posted day"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "hide")}
              value="%3Cstyle%3E%0A.line-clamp-1%20%7B%0A%09display%3A%20-webkit-box%3B%0A%09overflow%3A%20hidden%3B%0A%09-webkit-line-clamp%3A%201%3B%0A%09-webkit-box-orient%3A%20vertical%3B%0A%7D%0A%3C%2Fstyle%3E"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "job-listingcard-skeleton")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "job-avatar-skeleton")}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "recently-viewed-card-content-wrap",
                "skeleton"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "flex-row")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-lg-skeleton")}
                  tag="div"
                >
                  {"Job Title"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "green-badge-skeleton")}
                  tag="div"
                >
                  {"New"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-md-skeleton")}
                tag="div"
              >
                {"Job Loon"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-md-skeleton")}
                tag="div"
              >
                {"Posted day"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "hide")}
              value="%3Cstyle%3E%0A.line-clamp-1%20%7B%0A%09display%3A%20-webkit-box%3B%0A%09overflow%3A%20hidden%3B%0A%09-webkit-line-clamp%3A%201%3B%0A%09-webkit-box-orient%3A%20vertical%3B%0A%7D%0A%3C%2Fstyle%3E"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "job-listingcard-skeleton")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "job-avatar-skeleton")}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "recently-viewed-card-content-wrap",
                "skeleton"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "flex-row")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-lg-skeleton")}
                  tag="div"
                >
                  {"Job Title"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "green-badge-skeleton")}
                  tag="div"
                >
                  {"New"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-md-skeleton")}
                tag="div"
              >
                {"Job Loon"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-md-skeleton")}
                tag="div"
              >
                {"Posted day"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "hide")}
              value="%3Cstyle%3E%0A.line-clamp-1%20%7B%0A%09display%3A%20-webkit-box%3B%0A%09overflow%3A%20hidden%3B%0A%09-webkit-line-clamp%3A%201%3B%0A%09-webkit-box-orient%3A%20vertical%3B%0A%7D%0A%3C%2Fstyle%3E"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "job-listingcard-skeleton")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "job-avatar-skeleton")}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "recently-viewed-card-content-wrap",
                "skeleton"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "flex-row")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-lg-skeleton")}
                  tag="div"
                >
                  {"Job Title"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "green-badge-skeleton")}
                  tag="div"
                >
                  {"New"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-md-skeleton")}
                tag="div"
              >
                {"Job Loon"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-md-skeleton")}
                tag="div"
              >
                {"Posted day"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "hide")}
              value="%3Cstyle%3E%0A.line-clamp-1%20%7B%0A%09display%3A%20-webkit-box%3B%0A%09overflow%3A%20hidden%3B%0A%09-webkit-line-clamp%3A%201%3B%0A%09-webkit-box-orient%3A%20vertical%3B%0A%7D%0A%3C%2Fstyle%3E"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
    </_Component>
  );
}
