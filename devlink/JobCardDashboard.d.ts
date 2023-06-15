import * as React from "react";
import * as Types from "./types";

declare function JobCardDashboard(props: {
  as?: React.ElementType;
  slotCompanyLogo?: Types.Devlink.Slot;
  jobTitle?: React.ReactNode;
  jobDesc?: React.ReactNode;
  isNew?: Types.Visibility.VisibilityConditions;
  onClickJob?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
