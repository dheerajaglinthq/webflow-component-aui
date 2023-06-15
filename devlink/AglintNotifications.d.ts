import * as React from "react";
import * as Types from "./types";

declare function AglintNotifications(props: {
  as?: React.ElementType;
  isEmpty?: Types.Visibility.VisibilityConditions;
  slotNotificationItem?: Types.Devlink.Slot;
  onClickClearAll?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
