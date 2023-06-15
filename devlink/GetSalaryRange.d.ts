import * as React from "react";
import * as Types from "./types";

declare function GetSalaryRange(props: {
  as?: React.ElementType;
  slotSalary?: Types.Devlink.Slot;
  isLoading?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
