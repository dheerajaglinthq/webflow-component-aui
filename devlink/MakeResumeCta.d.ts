import * as React from "react";
import * as Types from "./types";

declare function MakeResumeCta(props: {
  as?: React.ElementType;
  onClickCreateResume?: Types.Devlink.RuntimeProps;
  onClickApply?: Types.Devlink.RuntimeProps;
  slotSetReminder?: Types.Devlink.Slot;
  textReminderInstruction?: React.ReactNode;
  slotResumes?: Types.Devlink.Slot;
  newShowCreate?: Types.Visibility.VisibilityConditions;
  headerText?: React.ReactNode;
  isLoading?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
