import * as React from "react";
import * as Types from "./types";

declare function CoachPage(props: {
  as?: React.ElementType;
  isEmpty?: Types.Visibility.VisibilityConditions;
  isLoading?: Types.Visibility.VisibilityConditions;
  slotDashboardLeft?: Types.Devlink.Slot;
  isOnboarding?: Types.Visibility.VisibilityConditions;
  isDashboard?: Types.Visibility.VisibilityConditions;
  slotOnboarding?: Types.Devlink.Slot;
  slotDashboardRight?: Types.Devlink.Slot;
  onClickViewPlans?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
