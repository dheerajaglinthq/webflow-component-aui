import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SignInPage.module.css";

export function SignInPage({
  as: _Component = _Builtin.Section,
  slotSignIn,
  slotSignInForm,
  onClickLinkedInButton = {},
  onClickGoogleButton = {},
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section", "login")}
      tag="section"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "container-1280")}
        tag="div"
      >
        <_Builtin.Grid className={_utils.cx(_styles, "grid-login")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "left-login-wrapper")}
            id={_utils.cx(
              _styles,
              "w-node-e201d7f9-4a57-7261-435b-61198958a97e-8958a97c"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "login-left-padding")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "all-left-contetn-wrapper")}
                tag="div"
              >
                <_Builtin.Heading
                  className={_utils.cx(
                    _styles,
                    "text-xxxl-bold",
                    "color-black"
                  )}
                  tag="h1"
                >
                  {"Accelerate your career shifts and boost your confidence."}
                </_Builtin.Heading>
                <_Builtin.Block
                  className={_utils.cx(_styles, "header-points")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-lg-bold")}
                    tag="div"
                  >
                    {"We support your career journey with:"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "all-login-points-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "login-points-wrapper")}
                      tag="div"
                    >
                      <_Builtin.Image
                        loading="lazy"
                        width="auto"
                        height="auto"
                        src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/647ff5fb374a40bef3d73afe_Vector.svg"
                      />
                      <_Builtin.Block tag="div">
                        {"Personalized Career Coaching"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "login-points-wrapper")}
                      tag="div"
                    >
                      <_Builtin.Image
                        loading="lazy"
                        width="auto"
                        height="auto"
                        src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/647ff5fb374a40bef3d73afe_Vector.svg"
                      />
                      <_Builtin.Block tag="div">
                        {"Tailored Job Recommendations"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "login-points-wrapper")}
                      tag="div"
                    >
                      <_Builtin.Image
                        loading="lazy"
                        width="auto"
                        height="auto"
                        src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/647ff5fb374a40bef3d73afe_Vector.svg"
                      />
                      <_Builtin.Block tag="div">
                        {"Interview Preparation"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "login-points-wrapper")}
                      tag="div"
                    >
                      <_Builtin.Image
                        loading="lazy"
                        width="auto"
                        height="auto"
                        src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/647ff5fb374a40bef3d73afe_Vector.svg"
                      />
                      <_Builtin.Block tag="div">
                        {"Grow Your Network"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-md-bold")}
                    tag="div"
                  >
                    {"Take the first step towards a smooth career transition."}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "login-image-wrapper")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "login-illustration")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/647ff5fb374a40bef3d73b03_Group%2095.png"
                />
                <_Builtin.Image
                  className={_utils.cx(_styles, "image")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/647ff5fb374a40bef3d73b2d_bottom%20illustration.png"
                />
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "right-form-wrapper")}
            id={_utils.cx(
              _styles,
              "w-node-e201d7f9-4a57-7261-435b-61198958a99e-8958a97c"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "login-form-wrapper")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "sign-in-form")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-xl-bold-3")}
                  tag="div"
                >
                  {"Welcome back!"}
                  <br />
                  {"Please log in to your account."}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "login-form-slots")}
                  tag="div"
                >
                  {slotSignInForm}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "alternate-login-option")}
                  tag="div"
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "forgot-link")}
                    button={false}
                    options={{
                      href: "/forgot-password",
                    }}
                  >
                    <_Builtin.Heading
                      className={_utils.cx(_styles, "forget-text")}
                      tag="h6"
                    >
                      {"Forgot password?"}
                    </_Builtin.Heading>
                  </_Builtin.Link>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "signup-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "forget-text")}
                      tag="div"
                    >
                      {"Don't have an account?"}
                    </_Builtin.Block>
                    <_Builtin.Link
                      className={_utils.cx(_styles, "signup-link")}
                      button={false}
                      options={{
                        href: "/signup",
                      }}
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-md-default")}
                        tag="div"
                      >
                        {"Sign Up"}
                      </_Builtin.Block>
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "form-line")}
                  tag="div"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "login-option-wrapper")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "login-alternate-wrapper")}
                    tag="div"
                    {...onClickLinkedInButton}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "login-alternate-text")}
                      tag="div"
                    >
                      {"Log in with LinkedIn"}
                    </_Builtin.Block>
                    <_Builtin.Image
                      className={_utils.cx(_styles, "login-icon")}
                      loading="lazy"
                      width="auto"
                      height="auto"
                      src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/647ff5fb374a40bef3d73b01_linkedin.png"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "login-alternate-wrapper")}
                    tag="div"
                    {...onClickGoogleButton}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "login-alternate-text")}
                      tag="div"
                    >
                      {"Log in with Google"}
                    </_Builtin.Block>
                    <_Builtin.Image
                      className={_utils.cx(_styles, "login-icon")}
                      loading="lazy"
                      width="auto"
                      height="auto"
                      src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/647ff5fb374a40bef3d73b02_search.png"
                    />
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Grid>
      </_Builtin.Block>
    </_Component>
  );
}
