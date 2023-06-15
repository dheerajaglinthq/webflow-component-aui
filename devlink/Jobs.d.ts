import * as React from "react";
import * as Types from "./types";

declare function Jobs(props: {
  as?: React.ElementType;
  slotFilter?: Types.Devlink.Slot;
  showJobcards?: Types.Visibility.VisibilityConditions;
  slotJobcards?: Types.Devlink.Slot;
  isLoading?: Types.Visibility.VisibilityConditions;
  isloadMorevisible?: Types.Visibility.VisibilityConditions;
  zeroJobs?: Types.Visibility.VisibilityConditions;
  isEndofJobs?: Types.Visibility.VisibilityConditions;
  onClickLoadmore?: Types.Devlink.RuntimeProps;
  slotRecentJobs?: Types.Devlink.Slot;
  isLoadingRight?: Types.Visibility.VisibilityConditions;
  isrecentJobs?: Types.Visibility.VisibilityConditions;
  isJobTracker?: Types.Visibility.VisibilityConditions;
  isLoadmoreRecent?: Types.Visibility.VisibilityConditions;
  onClickLoadMoreRecent?: Types.Devlink.RuntimeProps;
  styleSticky?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
