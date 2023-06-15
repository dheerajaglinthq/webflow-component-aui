import * as React from "react";
import * as Types from "./types";

declare function DashboardCard(props: {
  as?: React.ElementType;
  header?: React.ReactNode;
  description?: React.ReactNode;
  image?: Types.Asset.Image;
}): React.JSX.Element;
