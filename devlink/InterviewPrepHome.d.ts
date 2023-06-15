import * as React from "react";
import * as Types from "./types";

declare function InterviewPrepHome(props: {
  as?: React.ElementType;
  onClickMockTest?: Types.Devlink.RuntimeProps;
  onClickCaq?: Types.Devlink.RuntimeProps;
  slotAll?: Types.Devlink.Slot;
  slotComplete?: Types.Devlink.Slot;
  slotIncomplete?: Types.Devlink.Slot;
  skeletonVisibility?: Types.Visibility.VisibilityConditions;
  isInterviewHistoryVisible?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
