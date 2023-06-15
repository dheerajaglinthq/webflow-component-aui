import * as React from "react";
import * as Types from "./types";

declare function CoachCard(props: {
  as?: React.ElementType;
  coachImage?: Types.Asset.Image;
  coachName?: React.ReactNode;
  isSelected?: Types.Visibility.VisibilityConditions;
  isImage?: Types.Visibility.VisibilityConditions;
  onClickViewProfile?: Types.Devlink.RuntimeProps;
  onClickCoach?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
