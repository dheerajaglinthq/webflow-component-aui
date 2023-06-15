import * as React from "react";
import * as Types from "./types";

declare function CaqLanding(props: {
  as?: React.ElementType;
  slotFilters?: Types.Devlink.Slot;
  onClickBack?: Types.Devlink.RuntimeProps;
  onClickContunue?: Types.Devlink.RuntimeProps;
  isButtonDisabled?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
