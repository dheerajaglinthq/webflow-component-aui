import * as React from "react";
import * as Types from "./types";

declare function GetFeedback(props: {
  as?: React.ElementType;
  isActive?: Types.Visibility.VisibilityConditions;
  onClickFeedback?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
