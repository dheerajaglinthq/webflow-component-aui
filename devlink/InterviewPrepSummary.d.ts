import * as React from "react";
import * as Types from "./types";

declare function InterviewPrepSummary(props: {
  as?: React.ElementType;
  timeText?: React.ReactNode;
  slotSkills?: Types.Devlink.Slot;
  onClickBegin?: Types.Devlink.RuntimeProps;
  jobTittle?: React.ReactNode;
  company?: React.ReactNode;
  summarySkills?: React.ReactNode;
  summaryJobTittle?: React.ReactNode;
}): React.JSX.Element;
