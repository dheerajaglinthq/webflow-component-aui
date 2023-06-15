import * as React from "react";
import * as Types from "./types";

declare function CaqItem(props: {
  as?: React.ElementType;
  questionText?: React.ReactNode;
  numberText?: React.ReactNode;
  onClickQuestion?: Types.Devlink.RuntimeProps;
  isActive?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
