import * as React from "react";
import * as Types from "./types";

declare function ResumeEmptyState(props: {
  as?: React.ElementType;
  onClickOwnResume?: Types.Devlink.RuntimeProps;
  onClickImportFromLinkedIn?: Types.Devlink.RuntimeProps;
  onClickImportFromFile?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
