import * as React from "react";
import * as Types from "./types";

declare function CallCta(props: {
  as?: React.ElementType;
  onClickBookACall?: Types.Devlink.RuntimeProps;
  meetingInfo?: React.ReactNode;
  onClickJoin?: Types.Devlink.RuntimeProps;
  isBookAMeeting?: Types.Visibility.VisibilityConditions;
  meetingName?: React.ReactNode;
}): React.JSX.Element;
