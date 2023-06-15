import * as React from "react";
import * as Types from "./types";

declare function CompanyDetailHeader(props: {
  as?: React.ElementType;
  companyLogo?: Types.Asset.Image;
  jobTitle?: React.ReactNode;
  companyName?: React.ReactNode;
  jobLocation?: React.ReactNode;
  jobPostedDate?: React.ReactNode;
  jobTypeFullPartTime?: React.ReactNode;
  jobTypeOnsiteRemote?: React.ReactNode;
}): React.JSX.Element;
