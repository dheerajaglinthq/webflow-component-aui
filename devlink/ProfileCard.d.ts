import * as React from "react";
import * as Types from "./types";

declare function ProfileCard(props: {
  as?: React.ElementType;
  name?: React.ReactNode;
  jobTittle?: React.ReactNode;
  onClickAddToContact?: Types.Devlink.RuntimeProps;
  isAdded?: Types.Visibility.VisibilityConditions;
  onClickLinkedin?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
