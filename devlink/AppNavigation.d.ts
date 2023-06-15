import * as React from "react";
import * as Types from "./types";

declare function AppNavigation(props: {
  as?: React.ElementType;
  onClickLogout?: Types.Devlink.RuntimeProps;
  isNotificationEmpty?: Types.Visibility.VisibilityConditions;
  slotNotificationItem?: Types.Devlink.Slot;
  isBadgeVisible?: Types.Visibility.VisibilityConditions;
  notificationCount?: React.ReactNode;
  slotAvatar?: Types.Devlink.Slot;
  isDashboard?: Types.Visibility.VisibilityConditions;
  isJobs?: Types.Visibility.VisibilityConditions;
  isInterview?: Types.Visibility.VisibilityConditions;
  isResume?: Types.Visibility.VisibilityConditions;
  isCoaches?: Types.Visibility.VisibilityConditions;
  isNotification?: Types.Visibility.VisibilityConditions;
  onClickClearAll?: Types.Devlink.RuntimeProps;
  isPro?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
