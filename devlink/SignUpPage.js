import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SignUpPage.module.css";

export function SignUpPage({
  as: _Component = _Builtin.Section,
  slotSignUpForm,
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
              "w-node-_3f8027ba-8901-285a-2fb7-3526f7615fbc-f7615fba"
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
                  <_Builtin.Strong>
                    {
                      "Unleash your potential with Aglint AI tailored to elevate your career."
                    }
                  </_Builtin.Strong>
                </_Builtin.Heading>
                <_Builtin.Block
                  className={_utils.cx(_styles, "header-points")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-lg-bold")}
                    tag="div"
                  >
                    {
                      "By signing up, you’ll gain access to key tools that include:"
                    }
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
                        {"AI-powered Resume and Cover Letter"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-md-bold")}
                    tag="div"
                  >
                    {
                      "Experience a seamless career transition with Aglint’s all-in-one platform. Sign up now and embark on the path to success!"
                    }
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
              "w-node-_3f8027ba-8901-285a-2fb7-3526f7615fdc-f7615fba"
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
                  {"Welcome to Aglint"}
                  <br />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "login-form-slots-2")}
                  tag="div"
                >
                  {slotSignUpForm}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "alternate-login-option")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "signup-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "forget-text-2")}
                      tag="div"
                    >
                      {"Already have an account?"}
                    </_Builtin.Block>
                    <_Builtin.Link
                      className={_utils.cx(_styles, "signup-link")}
                      button={false}
                      options={{
                        href: "/login",
                      }}
                    >
                      <_Builtin.Block tag="div">{"Sign In"}</_Builtin.Block>
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
                      {"Sign Up with LinkedIn"}
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
                      {"Sign Up with Google"}
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
