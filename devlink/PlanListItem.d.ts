import * as React from "react";
import * as Types from "./types";

declare function PlanListItem(props: {
  as?: React.ElementType;
  isActive?: Types.Visibility.VisibilityConditions;
  itemText?: React.ReactNode;
  isNotActive?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
