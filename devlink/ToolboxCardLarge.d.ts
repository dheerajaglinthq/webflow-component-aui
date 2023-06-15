import * as React from "react";
import * as Types from "./types";

declare function ToolboxCardLarge(props: {
  as?: React.ElementType;
  toolboxImageImage?: Types.Asset.Image;
  toolboxHeadingSmall?: React.ReactNode;
  description?: React.ReactNode;
  toolboxButtonLink?: Types.Basic.Link;
  toolboxButtonText?: React.ReactNode;
}): React.JSX.Element;
