import * as React from "react";
import * as Types from "./types";

declare function FindJobs(props: {
  as?: React.ElementType;
  slotJobListingcard?: Types.Devlink.Slot;
  slotFilter?: Types.Devlink.Slot;
  skeletonVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
