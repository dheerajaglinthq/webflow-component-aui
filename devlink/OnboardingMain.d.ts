import * as React from "react";
import * as Types from "./types";

declare function OnboardingMain(props: {
  as?: React.ElementType;
  onClickAccept?: Types.Devlink.RuntimeProps;
  isTermsvisible?: Types.Visibility.VisibilityConditions;
  onClickFormSubmit?: Types.Devlink.RuntimeProps;
  onClickLogout?: Types.Devlink.RuntimeProps;
  slotOnboardingForm?: Types.Devlink.Slot;
  isLoading?: Types.Visibility.VisibilityConditions;
  isOnboarding?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
