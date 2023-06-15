import * as React from "react";
import * as Types from "./types";

declare function Dashboard(props: {
  as?: React.ElementType;
  isInterviewPrep?: Types.Visibility.VisibilityConditions;
  isBookcall?: Types.Visibility.VisibilityConditions;
  isCreateResume?: Types.Visibility.VisibilityConditions;
  isReviewResume?: Types.Visibility.VisibilityConditions;
  isCoverLetter?: Types.Visibility.VisibilityConditions;
  showJobs?: Types.Visibility.VisibilityConditions;
  isLoading?: Types.Visibility.VisibilityConditions;
  slotRecommendedJobs?: Types.Devlink.Slot;
  isRecentjobs?: Types.Visibility.VisibilityConditions;
  slotRecentJobcards?: Types.Devlink.Slot;
  onClickRequestresume?: Types.Devlink.RuntimeProps;
  onClickInterviewPrep?: Types.Devlink.RuntimeProps;
  onClickBookCall?: Types.Devlink.RuntimeProps;
  onClickCreateResume?: Types.Devlink.RuntimeProps;
  onClickReviewResume?: Types.Devlink.RuntimeProps;
  onClickReviewCv?: Types.Devlink.RuntimeProps;
  isJobEmpty?: Types.Visibility.VisibilityConditions;
  userName?: React.ReactNode;
  onClickShowMore?: Types.Devlink.RuntimeProps;
  isShowMore?: Types.Visibility.VisibilityConditions;
  isNetwork?: Types.Visibility.VisibilityConditions;
  onClickNetwork?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
