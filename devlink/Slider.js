import React from "react";
import * as _Builtin from "./_Builtin";

export function Slider({ as: _Component = _Builtin.SliderWrapper }) {
  return (
    <_Component
      navSpacing={4}
      navShadow={false}
      autoplay={false}
      delay={4000}
      iconArrows={true}
      animation="slide"
      navNumbers={false}
      easing="ease"
      navRound={false}
      hideArrows={false}
      disableSwipe={false}
      duration={500}
      infinite={false}
      autoMax={0}
      navInvert={false}
    >
      <_Builtin.SliderMask>
        <_Builtin.SliderSlide tag="div">
          <_Builtin.Image
            loading="lazy"
            width="auto"
            height="auto"
            src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64820ff84e6c35a26e842ad8_Illustration%2008.png"
          />
        </_Builtin.SliderSlide>
        <_Builtin.SliderSlide tag="div">
          <_Builtin.Image
            loading="lazy"
            width="auto"
            height="auto"
            src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64820ff84e6c35a26e842ad1_Illustration%2013.png"
          />
        </_Builtin.SliderSlide>
      </_Builtin.SliderMask>
      <_Builtin.SliderArrow dir="left">
        <_Builtin.Block tag="div">{"Continue"}</_Builtin.Block>
        <_Builtin.Icon
          widget={{
            type: "icon",
            icon: "slider-left",
          }}
        />
      </_Builtin.SliderArrow>
      <_Builtin.SliderArrow dir="right">
        <_Builtin.Block tag="div">{"Back"}</_Builtin.Block>
        <_Builtin.Icon
          widget={{
            type: "icon",
            icon: "slider-right",
          }}
        />
      </_Builtin.SliderArrow>
    </_Component>
  );
}
