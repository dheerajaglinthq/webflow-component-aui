import * as React from "react";
import * as Types from "./types";

declare function CoverletterEdit(props: {
  as?: React.ElementType;
  slotForm?: Types.Devlink.Slot;
  onClickImproveWriting?: Types.Devlink.RuntimeProps;
  onClickMakeShorter?: Types.Devlink.RuntimeProps;
  onClickMakeLonger?: Types.Devlink.RuntimeProps;
  onClickSimplifyLanguage?: Types.Devlink.RuntimeProps;
  onClickUndo?: Types.Devlink.RuntimeProps;
  onClickRedo?: Types.Devlink.RuntimeProps;
  onClickDownload?: Types.Devlink.RuntimeProps;
  onClickRewrite?: Types.Devlink.RuntimeProps;
  onClickProfessional?: Types.Devlink.RuntimeProps;
  onClickCasual?: Types.Devlink.RuntimeProps;
  onClickStraightForward?: Types.Devlink.RuntimeProps;
  onClickConfident?: Types.Devlink.RuntimeProps;
  onClickFriendly?: Types.Devlink.RuntimeProps;
  isLoading?: Types.Visibility.VisibilityConditions;
  slotEditor?: Types.Devlink.Slot;
  isDownloadAble?: Types.Visibility.VisibilityConditions;
  onClickCopy?: Types.Devlink.RuntimeProps;
  isUndoActive?: Types.Visibility.VisibilityConditions;
  isRedoActive?: Types.Visibility.VisibilityConditions;
  tone?: React.ReactNode;
  onClickDraft?: Types.Devlink.RuntimeProps;
  isMainLoading?: Types.Visibility.VisibilityConditions;
  isCreate?: Types.Visibility.VisibilityConditions;
  slotEmptyForm?: Types.Devlink.Slot;
  slotTones?: Types.Devlink.Slot;
}): React.JSX.Element;