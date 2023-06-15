import * as React from "react";
import * as Types from "./types";

declare function NetworkBuilder(props: {
  as?: React.ElementType;
  slotCompanyGrid?: Types.Devlink.Slot;
  slotProfileList?: Types.Devlink.Slot;
  slotPeopleSearch?: Types.Devlink.Slot;
  slotPeopleGrid?: Types.Devlink.Slot;
  isEmpty?: Types.Visibility.VisibilityConditions;
  onClickAdd?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
