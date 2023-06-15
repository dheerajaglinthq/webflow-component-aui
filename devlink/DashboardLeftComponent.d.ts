import * as React from "react";
import * as Types from "./types";

declare function DashboardLeftComponent(props: {
  as?: React.ElementType;
  onClickResume?: Types.Devlink.RuntimeProps;
  onClickInterview?: Types.Devlink.RuntimeProps;
  onClickCall?: Types.Devlink.RuntimeProps;
  onClickNetwork?: Types.Devlink.RuntimeProps;
  onClickCover?: Types.Devlink.RuntimeProps;
  onClickJobTracker?: Types.Devlink.RuntimeProps;
  slotRecentlyViewJob?: Types.Devlink.Slot;
}): React.JSX.Element;
