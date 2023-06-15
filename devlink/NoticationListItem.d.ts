import * as React from "react";
import * as Types from "./types";

declare function NoticationListItem(props: {
  as?: React.ElementType;
  onClickNotification?: Types.Devlink.RuntimeProps;
  onClickCloseNotification?: Types.Devlink.RuntimeProps;
  textTitle?: React.ReactNode;
  textDesc?: React.ReactNode;
  textTime?: React.ReactNode;
}): React.JSX.Element;
