import * as React from "react";
import * as Types from "./types";

declare function SkillComponent(props: {
  as?: React.ElementType;
  onClickClose?: Types.Devlink.RuntimeProps;
  name?: React.ReactNode;
}): React.JSX.Element;
