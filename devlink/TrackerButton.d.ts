import * as React from "react";
import * as Types from "./types";

declare function TrackerButton(props: {
  as?: React.ElementType;
  buttonText?: React.ReactNode;
  buttonIcon?: Types.Asset.Image;
}): React.JSX.Element;
