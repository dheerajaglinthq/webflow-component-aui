import * as React from "react";
import * as Types from "./types";

declare function JobTracker(props: {
  as?: React.ElementType;
  slotTracker?: Types.Devlink.Slot;
  slotFirstTime?: Types.Devlink.Slot;
  slotEmpty?: Types.Devlink.Slot;
  isLoading?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
