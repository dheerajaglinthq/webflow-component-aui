import * as React from "react";
import * as Types from "./types";

declare function ResumeListItem(props: {
  as?: React.ElementType;
  resumeName?: React.ReactNode;
  position?: React.ReactNode;
  slotSkills?: Types.Devlink.Slot;
  onClickEditResume?: Types.Devlink.RuntimeProps;
  onClickSwitchTemplate?: Types.Devlink.RuntimeProps;
  onClickDownload?: Types.Devlink.RuntimeProps;
  onClickDelete?: Types.Devlink.RuntimeProps;
  templateImage?: Types.Asset.Image;
  slotResumeProgress?: Types.Devlink.Slot;
}): React.JSX.Element;
