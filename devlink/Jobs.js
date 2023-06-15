import React from "react";
import * as _Builtin from "./_Builtin";
import { Loader } from "./Loader";
import * as _utils from "./utils";
import _styles from "./Jobs.module.css";

export function Jobs({
  as: _Component = _Builtin.Block,
  slotFilter,
  showJobcards = true,
  slotJobcards,
  isLoading = true,
  isloadMorevisible = true,
  zeroJobs = true,
  isEndofJobs = true,
  onClickLoadmore = {},
  slotRecentJobs,
  isLoadingRight = true,
  isrecentJobs = true,
  isJobTracker = true,
  isLoadmoreRecent = true,
  onClickLoadMoreRecent = {},
  styleSticky = {},
}) {
  return (
    <_Component className={_utils.cx(_styles, "jobs")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "container-1280")}
        tag="div"
      >
        <_Builtin.Grid className={_utils.cx(_styles, "jobs-grid")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "jobs-left")}
            id={_utils.cx(
              _styles,
              "w-node-ed1117c3-3252-a0ae-3b66-e07bb4ee0507-b4ee0504"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "jobs-left-content")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "header-wrap", "hide")}
                tag="div"
              >
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
              <_Builtin.Block
                className={_utils.cx(_styles, "filters-slot")}
                tag="div"
              >
                {slotFilter}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "jobs-content")}
                tag="div"
              >
                {showJobcards ? (
                  <_Builtin.Block
                    className={_utils.cx(_styles, "job-cards")}
                    tag="div"
                  >
                    {slotJobcards}
                  </_Builtin.Block>
                ) : null}
                {isloadMorevisible ? (
                  <_Builtin.Block
                    className={_utils.cx(_styles, "job-loadmore")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "loadmore-btn")}
                      tag="div"
                      {...onClickLoadmore}
                    >
                      <_Builtin.Block tag="div">{"Load More"}</_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                ) : null}
                {zeroJobs ? (
                  <_Builtin.Block
                    className={_utils.cx(_styles, "nojobs")}
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "job-empty-image")}
                      loading="lazy"
                      width="auto"
                      height="auto"
                      src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/648adbc1137ed0a59f370f5d_Illustration%2002.svg"
                    />
                    <_Builtin.Block tag="div">
                      {"There are no jobs found. Try changing your preference"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                ) : null}
                {isEndofJobs ? (
                  <_Builtin.Block
                    className={_utils.cx(_styles, "endofjobs")}
                    tag="div"
                  >
                    <_Builtin.Block tag="div">
                      {"No more jobs match your search criteria."}
                      <br />
                      {
                        "Please broaden your search to discover additional opportunities."
                      }
                    </_Builtin.Block>
                  </_Builtin.Block>
                ) : null}
                {isLoading ? (
                  <_Builtin.Block
                    className={_utils.cx(_styles, "jobs-loading")}
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
                            className={_utils.cx(
                              _styles,
                              "green-badge-skeleton"
                            )}
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
                            className={_utils.cx(
                              _styles,
                              "green-badge-skeleton"
                            )}
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
                            className={_utils.cx(
                              _styles,
                              "green-badge-skeleton"
                            )}
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
                            className={_utils.cx(
                              _styles,
                              "green-badge-skeleton"
                            )}
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
                            className={_utils.cx(
                              _styles,
                              "green-badge-skeleton"
                            )}
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
                            className={_utils.cx(
                              _styles,
                              "green-badge-skeleton"
                            )}
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
                            className={_utils.cx(
                              _styles,
                              "green-badge-skeleton"
                            )}
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
                            className={_utils.cx(
                              _styles,
                              "green-badge-skeleton"
                            )}
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
                            className={_utils.cx(
                              _styles,
                              "green-badge-skeleton"
                            )}
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
                            className={_utils.cx(
                              _styles,
                              "green-badge-skeleton"
                            )}
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
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "jobs-right")}
            id={_utils.cx(
              _styles,
              "w-node-ed1117c3-3252-a0ae-3b66-e07bb4ee0594-b4ee0504"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "jobs-left-wrapper")}
              tag="div"
              {...styleSticky}
            >
              {isLoadingRight ? (
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "loading-initial",
                    "margin-top-100"
                  )}
                  tag="div"
                >
                  <_Builtin.Block tag="div">
                    <Loader />
                  </_Builtin.Block>
                </_Builtin.Block>
              ) : null}
              {isrecentJobs ? (
                <_Builtin.Block
                  className={_utils.cx(_styles, "recentjobs-jobs")}
                  tag="div"
                >
                  <_Builtin.Heading
                    className={_utils.cx(_styles, "large-bold")}
                    tag="h3"
                  >
                    {"Recently Viewed Jobs"}
                  </_Builtin.Heading>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "recent-jobs-onjobs")}
                    tag="div"
                  >
                    {slotRecentJobs}
                  </_Builtin.Block>
                  {isLoadmoreRecent ? (
                    <_Builtin.Block
                      className={_utils.cx(_styles, "flex-left")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "loadmore-btn",
                          "negative-margin"
                        )}
                        tag="div"
                        {...onClickLoadMoreRecent}
                      >
                        <_Builtin.Block tag="div">{"Load More"}</_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  ) : null}
                </_Builtin.Block>
              ) : null}
              {isJobTracker ? (
                <_Builtin.Block
                  className={_utils.cx(_styles, "jobtracker-cta")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "organize-card-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "organize-header-wrapper")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-lg-bold")}
                        tag="div"
                      >
                        {"Organize your job search with Job Tracker"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "text-md-default",
                          "color-grey-600",
                          "maxwidth"
                        )}
                        tag="div"
                      >
                        {
                          "Never miss a deadline or opportunity. Keep track of your job applications, interviews and follow-ups all in one place with Job Tracker."
                        }
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block tag="div">
                      <_Builtin.Image
                        className={_utils.cx(_styles, "job-tracker-imab")}
                        loading="lazy"
                        width="auto"
                        height="auto"
                        src="https://uploads-ssl.webflow.com/6487159923fa782f5c3c201b/648829ee10b6f4115b3049d3_Illustration%2006.svg"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "wishlist-wrapper")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "text-md-default",
                          "color-grey-600",
                          "text-align-left"
                        )}
                        tag="div"
                      >
                        {'Click "'}
                        <_Builtin.Link
                          className={_utils.cx(
                            _styles,
                            "text-md-bold",
                            "color-grey-600"
                          )}
                          button={false}
                          options={{
                            href: "#",
                          }}
                        >
                          {"Add to Wishlist"}
                        </_Builtin.Link>
                        {
                          '" in job details to track your favourite jobs and make your job search easier.'
                        }
                      </_Builtin.Block>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "learn-button", "small")}
                        button={false}
                        options={{
                          href: "/job-tracker",
                        }}
                      >
                        <_Builtin.Block tag="div">
                          {"Explore Job Tracker"}
                        </_Builtin.Block>
                      </_Builtin.Link>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              ) : null}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Grid>
      </_Builtin.Block>
    </_Component>
  );
}
