import * as React from "react";
import * as Types from "./types";

declare function JobListingCard(props: {
  as?: React.ElementType;
  jobtitle?: React.ReactNode;
  jobLocation?: React.ReactNode;
  posted?: React.ReactNode;
  isNew?: Types.Visibility.VisibilityConditions;
  jobType?: React.ReactNode;
  onClickJobCard?: Types.Devlink.RuntimeProps;
  jobTypeVisibility?: Types.Visibility.VisibilityConditions;
  postedTimeVisibility?: Types.Visibility.VisibilityConditions;
  slotCompanyIcon?: Types.Devlink.Slot;
}): React.JSX.Element;
