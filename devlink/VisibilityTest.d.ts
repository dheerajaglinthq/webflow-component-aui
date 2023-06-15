import * as React from "react";
import * as Types from "./types";

declare function VisibilityTest(props: {
  as?: React.ElementType;
  isShow?: Types.Visibility.VisibilityConditions;
  isHide?: Types.Builtin.Text;
}): React.JSX.Element;
