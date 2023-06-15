import * as React from "react";
import * as Types from "./types";

declare function FeedbackComponent(props: {
  as?: React.ElementType;
  slotForm?: Types.Devlink.Slot;
  onClickSubmit?: Types.Devlink.RuntimeProps;
  isSuccess?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
