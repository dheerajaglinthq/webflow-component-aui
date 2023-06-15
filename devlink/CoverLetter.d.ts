import * as React from "react";
import * as Types from "./types";

declare function CoverLetter(props: {
  as?: React.ElementType;
  slotCoverLetter?: Types.Devlink.Slot;
  isLoading?: Types.Visibility.VisibilityConditions;
  onClickCreate?: Types.Devlink.RuntimeProps;
  showCoverletter?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
