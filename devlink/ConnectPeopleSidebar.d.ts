import * as React from "react";
import * as Types from "./types";

declare function ConnectPeopleSidebar(props: {
  as?: React.ElementType;
  slotProfiles?: Types.Devlink.Slot;
  skeletonVisibility?: Types.Visibility.VisibilityConditions;
  onClickGrowNetwork?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
