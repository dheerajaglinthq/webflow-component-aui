import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SignInForm.module.css";

export function SignInForm({ as: _Component = _Builtin.FormWrapper }) {
  return (
    <_Component className={_utils.cx(_styles, "login-form-block")}>
      <_Builtin.FormForm
        className={_utils.cx(_styles, "form")}
        name="email-form"
        data-name="Email Form"
        method="get"
        id="email-form"
      >
        <_Builtin.FormTextInput
          className={_utils.cx(_styles, "text-field")}
          autoFocus={false}
          maxLength={256}
          name="Email-3"
          data-name="Email 3"
          placeholder="Email Address*"
          type="email"
          disabled={false}
          required={false}
          id="Email-3"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "input-wrapper")}
          tag="div"
        >
          <_Builtin.FormTextInput
            className={_utils.cx(_styles, "text-field")}
            autoFocus={false}
            maxLength={256}
            name="password-2"
            data-name="Password 2"
            placeholder="Password*"
            type="password"
            disabled={false}
            required={true}
            id="password-2"
          />
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "login-form-btn-wrapper")}
          tag="div"
        >
          <_Builtin.FormCheckboxWrapper
            className={_utils.cx(_styles, "checkbox-field")}
          >
            <_Builtin.FormCheckboxInput
              className={_utils.cx(_styles, "checkbox")}
              inputType="custom"
              type="checkbox"
              name="checkbox-2"
              data-name="Checkbox 2"
              checked={true}
              required={false}
              id="checkbox-2"
            />
            <_Builtin.FormInlineLabel
              className={_utils.cx(_styles, "checkbox-label", "color-grey-600")}
            >
              {"Remember me"}
            </_Builtin.FormInlineLabel>
          </_Builtin.FormCheckboxWrapper>
          <_Builtin.Link
            className={_utils.cx(_styles, "submit-btn", "hide")}
            button={false}
            options={{
              href: "#",
            }}
          >
            <_Builtin.Block tag="div">{"Sign In"}</_Builtin.Block>
            <_Builtin.Image
              loading="lazy"
              width="auto"
              height="auto"
              src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/647ff5fb374a40bef3d73b00_arrow.right.svg"
            />
          </_Builtin.Link>
          <_Builtin.FormButton
            className={_utils.cx(_styles, "sign-in-btn")}
            type="submit"
            value="Sign In"
            data-wait="Please wait..."
          />
        </_Builtin.Block>
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
    </_Component>
  );
}
