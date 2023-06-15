import * as React from "react";
import * as Types from "./types";

declare function InterviewPrepSelectCompany(props: {
  as?: React.ElementType;
  slotCompanyList?: Types.Devlink.Slot;
  onClickNext?: Types.Devlink.RuntimeProps;
  isActiveNext?: Types.Visibility.VisibilityConditions;
  onClickPrev?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
