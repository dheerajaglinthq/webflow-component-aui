import * as React from "react";
import * as Types from "./types";

declare function DashboardNav(props: {
  as?: React.ElementType;
  onClickJobs?: Types.Devlink.RuntimeProps;
  onClickInterview?: Types.Devlink.RuntimeProps;
  onClickResume?: Types.Devlink.RuntimeProps;
  onClickCoaches?: Types.Devlink.RuntimeProps;
  onClickNetwork?: Types.Devlink.RuntimeProps;
  onClickJobTracker?: Types.Devlink.RuntimeProps;
  onClickSalary?: Types.Devlink.RuntimeProps;
  onClickToolBox?: Types.Devlink.RuntimeProps;
  onClickProfile?: Types.Devlink.RuntimeProps;
  onClickLogout?: Types.Devlink.RuntimeProps;
  onClickLogo?: Types.Devlink.RuntimeProps;
  onClickDashboard?: Types.Devlink.RuntimeProps;
  slotEmptyNotification?: Types.Devlink.Slot;
  isEmptyStateVisible?: Types.Visibility.VisibilityConditions;
  noticationNo?: React.ReactNode;
  isBadgeVisible?: Types.Visibility.VisibilityConditions;
  slotAvatar?: Types.Devlink.Slot;
  onClickClear?: Types.Devlink.RuntimeProps;
  onClickCoverLetter?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
