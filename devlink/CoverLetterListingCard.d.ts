import * as React from "react";
import * as Types from "./types";

declare function CoverLetterListingCard(props: {
  as?: React.ElementType;
  name?: React.ReactNode;
  onClickLike?: Types.Devlink.RuntimeProps;
  onClickDelete?: Types.Devlink.RuntimeProps;
  onClickCopy?: Types.Devlink.RuntimeProps;
  onClickEdit?: Types.Devlink.RuntimeProps;
  coverletterContent?: React.ReactNode;
  isFavorite?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
