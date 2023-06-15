import * as React from "react";
import * as Types from "./types";

declare function RecentJobCard(props: {
  as?: React.ElementType;
  onClickViewTracker?: Types.Devlink.RuntimeProps;
  jobtitle?: React.ReactNode;
  jobLocation?: React.ReactNode;
  onClickAddToTracker?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
