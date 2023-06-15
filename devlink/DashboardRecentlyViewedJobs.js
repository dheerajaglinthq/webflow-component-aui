import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./DashboardRecentlyViewedJobs.module.css";

export function DashboardRecentlyViewedJobs({
  as: _Component = _Builtin.Block,
  slide2,
  slide1,
  slide3,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "dashboard-recent-viewed-jobs")}
      tag="div"
    >
      <_Builtin.Block className={_utils.cx(_styles, "header-wrap")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "text-lg-bold")}
          tag="div"
        >
          {"Recently Viewed Jobs"}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "text-md", "text-color-grey")}
          tag="div"
        >
          {
            "Never lose track of the jobs you're interested in. Take it a step further by adding them to your job tracker and keeping your job search organized and efficient."
          }
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.SliderWrapper
        className={_utils.cx(_styles, "slider")}
        navSpacing={3}
        navShadow={false}
        autoplay={false}
        delay={4000}
        iconArrows={true}
        animation="slide"
        navNumbers={false}
        easing="ease"
        navRound={true}
        hideArrows={false}
        disableSwipe={false}
        duration={500}
        infinite={true}
        autoMax={0}
        navInvert={true}
      >
        <_Builtin.SliderMask className={_utils.cx(_styles, "mask")}>
          <_Builtin.SliderSlide
            className={_utils.cx(_styles, "slide")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "slider-grid")}
              tag="div"
            >
              {slide1 ?? <_Builtin.Block tag="div">{"slide 1"}</_Builtin.Block>}
            </_Builtin.Block>
          </_Builtin.SliderSlide>
          <_Builtin.SliderSlide
            className={_utils.cx(_styles, "slide")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "slider-grid")}
              tag="div"
            >
              {slide2 ?? <_Builtin.Block tag="div">{"slide 2"}</_Builtin.Block>}
            </_Builtin.Block>
          </_Builtin.SliderSlide>
          <_Builtin.SliderSlide
            className={_utils.cx(_styles, "slide")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "slider-grid")}
              tag="div"
            >
              {slide3 ?? <_Builtin.Block tag="div">{"slide 3"}</_Builtin.Block>}
            </_Builtin.Block>
          </_Builtin.SliderSlide>
        </_Builtin.SliderMask>
        <_Builtin.SliderArrow
          className={_utils.cx(_styles, "slider-arrow")}
          dir="left"
        >
          <_Builtin.Image
            loading="lazy"
            width="auto"
            height="auto"
            src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64807ac548e07cea39f6bb51_chevron-left.svg"
          />
        </_Builtin.SliderArrow>
        <_Builtin.SliderArrow
          className={_utils.cx(_styles, "slider-arrow")}
          dir="right"
        >
          <_Builtin.Image
            loading="lazy"
            width="auto"
            height="auto"
            src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64807a692063c9f8e5a2adb5_chevron-right.svg"
          />
        </_Builtin.SliderArrow>
        <_Builtin.SliderNav className={_utils.cx(_styles, "hide")} />
      </_Builtin.SliderWrapper>
    </_Component>
  );
}
