import * as React from "react";
import * as Types from "./types";

declare function SuggetionCheckbox(props: {
  as?: React.ElementType;
  suggetionText?: React.ReactNode;
  isActive?: Types.Visibility.VisibilityConditions;
  onClickChip?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
