import * as React from "react";
import * as Types from "./types";

declare function SelectResume(props: {
  as?: React.ElementType;
  slotResume?: Types.Devlink.Slot;
  onClickNext?: Types.Devlink.RuntimeProps;
  onClickPrev?: Types.Devlink.RuntimeProps;
  isActiveNext?: Types.Visibility.VisibilityConditions;
  onClickSkip?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
