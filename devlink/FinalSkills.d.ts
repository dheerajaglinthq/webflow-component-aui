import * as React from "react";
import * as Types from "./types";

declare function FinalSkills(props: {
  as?: React.ElementType;
  onClickCloseSkills?: Types.Devlink.RuntimeProps;
  onClickFinalSkill?: Types.Devlink.RuntimeProps;
  skillText?: React.ReactNode;
}): React.JSX.Element;
