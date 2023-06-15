import React from "react";
import * as _Builtin from "./_Builtin";
import { Loader } from "./Loader";
import * as _utils from "./utils";
import _styles from "./CoachPage.module.css";

export function CoachPage({
  as: _Component = _Builtin.Block,
  isEmpty = true,
  isLoading = true,
  slotDashboardLeft,
  isOnboarding = true,
  isDashboard = true,
  slotOnboarding,
  slotDashboardRight,
  onClickViewPlans = {},
}) {
  return (
    <_Component className={_utils.cx(_styles, "coach-page")} tag="div">
      {isLoading ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "coach-loading")}
          tag="div"
        >
          <Loader />
        </_Builtin.Block>
      ) : null}
      {isEmpty ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "coach-page-empty")}
          tag="div"
        >
          <_Builtin.Container
            className={_utils.cx(_styles, "container-1280")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "coach-hero-wrapper")}
              tag="div"
            >
              <_Builtin.Grid
                className={_utils.cx(_styles, "coach-hero-grid")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "coach-hero-left")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_82111d76-4463-1f07-af21-45601f24cd10-1f24cd0d"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-xxl-bold")}
                    tag="div"
                  >
                    <_Builtin.Span
                      className={_utils.cx(_styles, "color-green-500")}
                    >
                      {"Supercharge your career"}
                    </_Builtin.Span>
                    {" with personalized coaching!"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "coach-hero-all-point-wrapper"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-md-bold")}
                      tag="div"
                    >
                      {"Why a Career Coach is Essential?"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "coach-hero-point-wrapper")}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed value="%3Csvg%20width%3D%2214%22%20height%3D%2214%22%20viewbox%3D%220%200%2014%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M11.2167%206.47002C9.78002%206.11002%209.06002%205.93335%208.56335%205.43669C8.06669%204.93669%207.89002%204.22002%207.53002%202.78335L7.00002%200.666687L6.47002%202.78335C6.11002%204.22002%205.93335%204.94002%205.43669%205.43669C4.93669%205.93335%204.22002%206.11002%202.78335%206.47002L0.666687%207.00002L2.78335%207.53002C4.22002%207.89002%204.94002%208.06669%205.43669%208.56335C5.93335%209.06335%206.11002%209.78002%206.47002%2011.2167L7.00002%2013.3334L7.53002%2011.2167C7.89002%209.78002%208.06669%209.06002%208.56335%208.56335C9.06335%208.06669%209.78002%207.89002%2011.2167%207.53002L13.3334%207.00002L11.2167%206.47002Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E" />
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "caoch-hero-point-context"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "text-md-bold")}
                          tag="div"
                        >
                          {"Personalized Guidance"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "text-md-default",
                            "color-grey-700"
                          )}
                          tag="div"
                        >
                          {
                            "Benefit from one-on-one career coaching tailored to your unique goals and aspirations"
                          }
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "coach-hero-point-wrapper")}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed value="%3Csvg%20width%3D%2214%22%20height%3D%2214%22%20viewbox%3D%220%200%2014%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M11.2167%206.47002C9.78002%206.11002%209.06002%205.93335%208.56335%205.43669C8.06669%204.93669%207.89002%204.22002%207.53002%202.78335L7.00002%200.666687L6.47002%202.78335C6.11002%204.22002%205.93335%204.94002%205.43669%205.43669C4.93669%205.93335%204.22002%206.11002%202.78335%206.47002L0.666687%207.00002L2.78335%207.53002C4.22002%207.89002%204.94002%208.06669%205.43669%208.56335C5.93335%209.06335%206.11002%209.78002%206.47002%2011.2167L7.00002%2013.3334L7.53002%2011.2167C7.89002%209.78002%208.06669%209.06002%208.56335%208.56335C9.06335%208.06669%209.78002%207.89002%2011.2167%207.53002L13.3334%207.00002L11.2167%206.47002Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E" />
                      <_Builtin.Block tag="div">
                        <_Builtin.Block
                          className={_utils.cx(_styles, "text-md-bold")}
                          tag="div"
                        >
                          {"Tailored Job Recommendations"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "text-md-default",
                            "color-grey-700"
                          )}
                          tag="div"
                        >
                          {
                            "Receive targeted job recommendations based on your skills, interests, and career objectives."
                          }
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "coach-hero-point-wrapper")}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed value="%3Csvg%20width%3D%2214%22%20height%3D%2214%22%20viewbox%3D%220%200%2014%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M11.2167%206.47002C9.78002%206.11002%209.06002%205.93335%208.56335%205.43669C8.06669%204.93669%207.89002%204.22002%207.53002%202.78335L7.00002%200.666687L6.47002%202.78335C6.11002%204.22002%205.93335%204.94002%205.43669%205.43669C4.93669%205.93335%204.22002%206.11002%202.78335%206.47002L0.666687%207.00002L2.78335%207.53002C4.22002%207.89002%204.94002%208.06669%205.43669%208.56335C5.93335%209.06335%206.11002%209.78002%206.47002%2011.2167L7.00002%2013.3334L7.53002%2011.2167C7.89002%209.78002%208.06669%209.06002%208.56335%208.56335C9.06335%208.06669%209.78002%207.89002%2011.2167%207.53002L13.3334%207.00002L11.2167%206.47002Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E" />
                      <_Builtin.Block tag="div">
                        <_Builtin.Block
                          className={_utils.cx(_styles, "text-md-bold")}
                          tag="div"
                        >
                          {"Interview Preparation"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "text-md-default",
                            "color-grey-700"
                          )}
                          tag="div"
                        >
                          {
                            "Master the art of interviewing with personalized coaching, practice sessions, and valuable insights."
                          }
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "coach-hero-point-wrapper")}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed value="%3Csvg%20width%3D%2214%22%20height%3D%2214%22%20viewbox%3D%220%200%2014%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M11.2167%206.47002C9.78002%206.11002%209.06002%205.93335%208.56335%205.43669C8.06669%204.93669%207.89002%204.22002%207.53002%202.78335L7.00002%200.666687L6.47002%202.78335C6.11002%204.22002%205.93335%204.94002%205.43669%205.43669C4.93669%205.93335%204.22002%206.11002%202.78335%206.47002L0.666687%207.00002L2.78335%207.53002C4.22002%207.89002%204.94002%208.06669%205.43669%208.56335C5.93335%209.06335%206.11002%209.78002%206.47002%2011.2167L7.00002%2013.3334L7.53002%2011.2167C7.89002%209.78002%208.06669%209.06002%208.56335%208.56335C9.06335%208.06669%209.78002%207.89002%2011.2167%207.53002L13.3334%207.00002L11.2167%206.47002Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E" />
                      <_Builtin.Block tag="div">
                        <_Builtin.Block
                          className={_utils.cx(_styles, "text-md-bold")}
                          tag="div"
                        >
                          {"Grow your network"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "text-md-default",
                            "color-grey-700"
                          )}
                          tag="div"
                        >
                          {
                            "Learn effective networking strategies to grow and leverage your professional connections for career advancement."
                          }
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "coach-hero-button",
                      "bg-green-500"
                    )}
                    tag="div"
                    {...onClickViewPlans}
                  >
                    <_Builtin.Block tag="div">
                      {"View all Plans"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "text-md-default",
                      "color-grey-700"
                    )}
                    tag="div"
                  >
                    {
                      "Unleash your full potential with personalized career coaching, empowering you to excel in your professional journey. Our expert coaches provide tailored guidance, comprehensive interview preparation, and valuable insights to expand and nurture your network."
                    }
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "coach-hero-right-wrapper")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_82111d76-4463-1f07-af21-45601f24cd38-1f24cd0d"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "coach-hero-image")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/647ff5fb374a40bef3d73b2b_Illustration%2007.svg"
                  />
                </_Builtin.Block>
              </_Builtin.Grid>
            </_Builtin.Block>
          </_Builtin.Container>
        </_Builtin.Block>
      ) : null}
      {isOnboarding ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "coach-onboarding")}
          tag="div"
        >
          {slotOnboarding}
        </_Builtin.Block>
      ) : null}
      {isDashboard ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "coach-dashboard")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "container-1280")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "coach-dashboard-wrapper")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "relative-block")}
                id={_utils.cx(
                  _styles,
                  "w-node-fb4a77e3-c5e7-5db3-1d45-591f431dc85f-1f24cd0d"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "coachdashboardleft")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_0b1ecee9-9793-eeb7-e8c9-dc217e4c96a8-1f24cd0d"
                  )}
                  tag="div"
                >
                  {slotDashboardLeft}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "coachdashboardright")}
                id={_utils.cx(
                  _styles,
                  "w-node-d1687b22-c905-3a0a-dcee-8331cc978e60-1f24cd0d"
                )}
                tag="div"
              >
                {slotDashboardRight}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
    </_Component>
  );
}
