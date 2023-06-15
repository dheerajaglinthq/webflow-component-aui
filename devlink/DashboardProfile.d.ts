import * as React from "react";
import * as Types from "./types";

declare function DashboardProfile(props: {
  as?: React.ElementType;
  profileDescription?: React.ReactNode;
  slotTags?: Types.Devlink.Slot;
  coachName?: React.ReactNode;
  coachImage?: Types.Asset.Image;
  coachSubtext?: React.ReactNode;
}): React.JSX.Element;
