import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./MainNav.module.css";

export function MainNav({
  as: _Component = _Builtin.NavbarWrapper,
  signVisibility = false,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "navbar-login")}
      tag="div"
      config={{
        animation: "default",
        collapse: "medium",
        docHeight: false,
        duration: 400,
        easing: "ease",
        easing2: "ease",
        noScroll: false,
      }}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "nav-containers")}
        tag="div"
      >
        <_Builtin.NavbarBrand
          options={{
            href: "#",
          }}
        >
          <_Builtin.Image
            loading="lazy"
            width="auto"
            height="auto"
            src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/647ff5fb374a40bef3d73b2c_Frame%205.svg"
          />
        </_Builtin.NavbarBrand>
        {signVisibility ? (
          <_Builtin.Link
            className={_utils.cx(_styles, "sign-slots")}
            button={false}
            options={{
              href: "#",
            }}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "text-md-bold", "color-black")}
              tag="div"
            >
              {"Logout"}
            </_Builtin.Block>
          </_Builtin.Link>
        ) : null}
      </_Builtin.Block>
    </_Component>
  );
}
