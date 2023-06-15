import * as React from "react";
import * as Types from "./types";

declare function PriceCard(props: {
  as?: React.ElementType;
  onClick?: Types.Devlink.RuntimeProps;
  slotPriceFeature?: Types.Devlink.Slot;
  price?: React.ReactNode;
  name?: React.ReactNode;
  desc?: React.ReactNode;
  isPopular?: Types.Visibility.VisibilityConditions;
  isSelectable?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
