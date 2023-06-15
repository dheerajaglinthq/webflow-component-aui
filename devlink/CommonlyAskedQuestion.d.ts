import * as React from "react";
import * as Types from "./types";

declare function CommonlyAskedQuestion(props: {
  as?: React.ElementType;
  slotQuestion?: Types.Devlink.Slot;
  numberOfQuestion?: React.ReactNode;
  tipsText?: React.ReactNode;
  answer2?: React.ReactNode;
  answer3?: React.ReactNode;
  answer1?: React.ReactNode;
  isQuestionLoading?: Types.Visibility.VisibilityConditions;
  onClickBack?: Types.Devlink.RuntimeProps;
  isAnswerLoading?: Types.Visibility.VisibilityConditions;
  isAnswerEmpty?: Types.Visibility.VisibilityConditions;
  slotDifficultyLevel?: Types.Devlink.Slot;
  titleText?: React.ReactNode;
  textActiveQuestion?: React.ReactNode;
  tip1?: React.ReactNode;
  tip2?: React.ReactNode;
  tip3?: React.ReactNode;
}): React.JSX.Element;
