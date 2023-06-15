import * as React from "react";
import * as Types from "./types";

declare function SuggestedSkills(props: {
  as?: React.ElementType;
  slotSkills?: Types.Devlink.Slot;
  onClickNext?: Types.Devlink.RuntimeProps;
  onClickPrev?: Types.Devlink.RuntimeProps;
  isActiveNext?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
