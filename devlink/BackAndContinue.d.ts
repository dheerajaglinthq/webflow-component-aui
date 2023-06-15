import * as React from "react";
import * as Types from "./types";

declare function BackAndContinue(props: {
  as?: React.ElementType;
  isActivateNextButton?: Types.Visibility.VisibilityConditions;
  isSkipButton?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
