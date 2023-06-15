import * as React from "react";
import * as Types from "./types";

declare function SignUpPage(props: {
  as?: React.ElementType;
  slotSignUpForm?: Types.Devlink.Slot;
  onClickLinkedInButton?: Types.Devlink.RuntimeProps;
  onClickGoogleButton?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
