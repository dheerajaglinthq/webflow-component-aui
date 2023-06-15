import * as React from "react";
import * as Types from "./types";

declare function InterviewOnboarding(props: {
  as?: React.ElementType;
  slotResumeCard?: Types.Devlink.Slot;
  slotCompanyCard?: Types.Devlink.Slot;
  slotSkill?: Types.Devlink.Slot;
  isSelectRole?: Types.Visibility.VisibilityConditions;
  isSelectResume?: Types.Visibility.VisibilityConditions;
  isSelectSkills?: Types.Visibility.VisibilityConditions;
  onClickNext?: Types.Devlink.RuntimeProps;
  onClickSkip?: Types.Devlink.RuntimeProps;
  onClickBack?: Types.Devlink.RuntimeProps;
  isActiveButton?: Types.Visibility.VisibilityConditions;
  isSkillsLoading?: Types.Visibility.VisibilityConditions;
  slotSkillInput?: Types.Devlink.Slot;
  finalTitle?: React.ReactNode;
  finalDescription?: React.ReactNode;
  onClickBegin?: Types.Devlink.RuntimeProps;
  slotFinalSkills?: Types.Devlink.Slot;
  isSummary?: Types.Visibility.VisibilityConditions;
  onClickFinal?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
