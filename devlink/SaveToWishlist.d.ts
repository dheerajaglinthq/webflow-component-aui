import * as React from "react";
import * as Types from "./types";

declare function SaveToWishlist(props: {
  as?: React.ElementType;
  onClickViewWishlist?: Types.Devlink.RuntimeProps;
  onClickSavetoWishlist?: Types.Devlink.RuntimeProps;
  isLoading?: Types.Visibility.VisibilityConditions;
  isTracked?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
