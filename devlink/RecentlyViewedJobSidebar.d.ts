import * as React from "react";
import * as Types from "./types";

declare function RecentlyViewedJobSidebar(props: {
  as?: React.ElementType;
  slotRecentJobCard?: Types.Devlink.Slot;
  skeletonVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
