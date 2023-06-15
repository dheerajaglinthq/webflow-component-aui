import * as React from "react";
import * as Types from "./types";

declare function PriceFeature(props: {
  as?: React.ElementType;
  feature?: React.ReactNode;
  isMostPopular?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
