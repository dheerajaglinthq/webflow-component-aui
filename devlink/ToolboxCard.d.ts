import * as React from "react";
import * as Types from "./types";

declare function ToolboxCard(props: {
  as?: React.ElementType;
  image?: Types.Asset.Image;
  header?: React.ReactNode;
  description?: React.ReactNode;
  toolboxButtonLink?: Types.Basic.Link;
  toolboxButtonText?: React.ReactNode;
}): React.JSX.Element;
