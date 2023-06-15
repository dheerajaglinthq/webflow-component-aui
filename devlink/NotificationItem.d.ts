import * as React from "react";
import * as Types from "./types";

declare function NotificationItem(props: {
  as?: React.ElementType;
  title?: React.ReactNode;
  content?: React.ReactNode;
  posted?: React.ReactNode;
  onClickNotificationClose?: Types.Devlink.RuntimeProps;
  isActive?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
