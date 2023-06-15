import * as React from "react";
import * as Types from "./types";

declare function TrackerTour(props: {
  as?: React.ElementType;
  onCickSearch?: Types.Devlink.RuntimeProps;
  onClickAdd?: Types.Devlink.RuntimeProps;
  onClickDismiss?: Types.Devlink.RuntimeProps;
  onClickDone?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
