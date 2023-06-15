import * as React from "react";
import * as Types from "./types";

declare function CompanyItem(props: {
  as?: React.ElementType;
  onClickCompanyItem?: Types.Devlink.RuntimeProps;
  name?: React.ReactNode;
  jobTittle?: React.ReactNode;
  isActive?: Types.Visibility.VisibilityConditions;
  slotCompnayImage?: Types.Devlink.Slot;
}): React.JSX.Element;
