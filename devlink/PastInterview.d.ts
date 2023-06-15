import * as React from "react";
import * as Types from "./types";

declare function PastInterview(props: {
  as?: React.ElementType;
  onClickPastInterview?: Types.Devlink.RuntimeProps;
  company?: React.ReactNode;
  jobTitle?: React.ReactNode;
  isComplete?: Types.Visibility.VisibilityConditions;
  slotCompanyAvatar?: Types.Devlink.Slot;
}): React.JSX.Element;
