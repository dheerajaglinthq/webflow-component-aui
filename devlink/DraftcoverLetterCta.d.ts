import * as React from "react";
import * as Types from "./types";

declare function DraftcoverLetterCta(props: {
  as?: React.ElementType;
  onClickEdit?: Types.Devlink.RuntimeProps;
  onClickCopy?: Types.Devlink.RuntimeProps;
  isAiContentLoading?: Types.Visibility.VisibilityConditions;
  onClickDraftNow?: Types.Devlink.RuntimeProps;
  isClGenerated?: Types.Visibility.VisibilityConditions;
  isLoading?: Types.Visibility.VisibilityConditions;
  showDraft?: Types.Visibility.VisibilityConditions;
  aiGereratedContent?: React.ReactNode;
}): React.JSX.Element;
