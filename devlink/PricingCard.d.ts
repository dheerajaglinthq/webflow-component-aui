import * as React from "react";
import * as Types from "./types";

declare function PricingCard(props: {
  as?: React.ElementType;
  isEssential?: Types.Visibility.VisibilityConditions;
  isAdvanced?: Types.Visibility.VisibilityConditions;
  isUltimate?: Types.Visibility.VisibilityConditions;
  name?: React.ReactNode;
  desc?: React.ReactNode;
  slotPriceFeature?: Types.Devlink.Slot;
  onClickChoosePlan?: Types.Devlink.RuntimeProps;
  price?: React.ReactNode;
  isActivePlan?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
