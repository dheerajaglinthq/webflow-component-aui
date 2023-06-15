import * as React from "react";
import * as Types from "./types";

declare function ResumeComp(props: {
  as?: React.ElementType;
  onClickResume?: Types.Devlink.RuntimeProps;
  isActiveResume?: Types.Visibility.VisibilityConditions;
  image?: Types.Asset.Image;
  name?: React.ReactNode;
  position?: React.ReactNode;
}): React.JSX.Element;
