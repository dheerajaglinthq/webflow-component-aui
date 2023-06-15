import * as React from "react";
import * as Types from "./types";

declare function JobWishList(props: {
  as?: React.ElementType;
  slotProfile?: Types.Devlink.Slot;
  slotJobInfo?: Types.Devlink.Slot;
  slotReminders?: Types.Devlink.Slot;
  slotNotes?: Types.Devlink.Slot;
  slotCoverLetterResume?: Types.Devlink.Slot;
  slotJobWishlist?: Types.Devlink.Slot;
  jobTitle?: React.ReactNode;
  jobCompany?: React.ReactNode;
  jobLocation?: React.ReactNode;
  jobPostedTime?: React.ReactNode;
  jobTag?: React.ReactNode;
  jobTag2?: React.ReactNode;
  isTimeline?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
