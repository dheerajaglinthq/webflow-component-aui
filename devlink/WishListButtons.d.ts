import * as React from "react";
import * as Types from "./types";

declare function WishListButtons(props: {
  as?: React.ElementType;
  isLoading?: Types.Visibility.VisibilityConditions;
  isTracked?: Types.Visibility.VisibilityConditions;
  onClickViewWishlist?: Types.Devlink.RuntimeProps;
  onClickAddWishlist?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
