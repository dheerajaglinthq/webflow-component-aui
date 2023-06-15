import * as React from "react";
import * as Types from "./types";

declare function PlanList(props: {
  as?: React.ElementType;
  slotCurrentPlan?: Types.Devlink.Slot;
  slotUpgradeablePlan?: Types.Devlink.Slot;
  isUpgradeablePlans?: Types.Visibility.VisibilityConditions;
  onClickUpgrade?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
