import * as React from "react";
import * as Types from "./types";

declare function TonePill(props: {
  as?: React.ElementType;
  isActive?: Types.Visibility.VisibilityConditions;
  text?: React.ReactNode;
  onClickTone?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
