import * as React from "react";
import * as Types from "./types";

declare function CoachOnboarding(props: {
  as?: React.ElementType;
  isStepOne?: Types.Visibility.VisibilityConditions;
  isStepTwo?: Types.Visibility.VisibilityConditions;
  slotCoachCards?: Types.Devlink.Slot;
  isButtonDIsabled?: Types.Visibility.VisibilityConditions;
  slotPickdate?: Types.Devlink.Slot;
  selectedCoachImage?: Types.Asset.Image;
  selectedCoachName?: React.ReactNode;
  selectedCoachDesc?: React.ReactNode;
  onClickViewProfile?: Types.Devlink.RuntimeProps;
  onClickChangeCoach?: Types.Devlink.RuntimeProps;
  onClickContinue?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
