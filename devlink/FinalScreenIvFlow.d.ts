import * as React from "react";
import * as Types from "./types";

declare function FinalScreenIvFlow(props: {
  as?: React.ElementType;
  finalTitle?: React.ReactNode;
  finalDescrition?: React.ReactNode;
  onClickBegin?: Types.Devlink.RuntimeProps;
  slotSkills?: Types.Devlink.Slot;
  onClickBack?: Types.Devlink.RuntimeProps;
  showSkillWarning?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
