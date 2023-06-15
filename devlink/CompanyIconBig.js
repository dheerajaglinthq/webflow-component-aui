import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CompanyIconBig.module.css";

export function CompanyIconBig({
  as: _Component = _Builtin.Block,
  isBig = true,
  isSmall = true,
}) {
  return (
    <_Component className={_utils.cx(_styles, "company-icon-16")} tag="div">
      {isBig ? (
        <_Builtin.HtmlEmbed value="%3Csvg%20width%3D%2250%22%20height%3D%2250%22%20viewBox%3D%220%200%2050%2050%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M9.61536%207.6923C9.61536%206.63022%2010.4763%205.76923%2011.5384%205.76923H38.4615C39.5236%205.76923%2040.3846%206.63022%2040.3846%207.6923V42.3077C40.3846%2043.3698%2039.5236%2044.2308%2038.4615%2044.2308H32.6923C31.6302%2044.2308%2030.7692%2043.3698%2030.7692%2042.3077V34.6154C30.7692%2033.5533%2029.9082%2032.6923%2028.8461%2032.6923H21.1538C20.0917%2032.6923%2019.2307%2033.5533%2019.2307%2034.6154V42.3077C19.2307%2043.3698%2018.3697%2044.2308%2017.3077%2044.2308H11.5384C10.4763%2044.2308%209.61536%2043.3698%209.61536%2042.3077V7.6923ZM17.3077%2011.5385V17.3077H23.0769V11.5385H17.3077ZM17.3077%2021.1538V26.9231H23.0769V21.1538H17.3077ZM26.9231%2011.5385V17.3077H32.6923V11.5385H26.9231ZM26.9231%2021.1538V26.9231H32.6923V21.1538H26.9231Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E" />
      ) : null}
    </_Component>
  );
}