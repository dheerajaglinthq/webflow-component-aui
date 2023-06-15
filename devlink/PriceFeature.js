import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./PriceFeature.module.css";

export function PriceFeature({
  as: _Component = _Builtin.Block,
  feature = "This is some text inside of a div block.",
  isMostPopular = true,
}) {
  return (
    <_Component className={_utils.cx(_styles, "price-feature")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "coaching-price-list-wrapper")}
        tag="div"
      >
        <_Builtin.HtmlEmbed
          className={_utils.cx(_styles, "tick-icon")}
          value="%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20opacity%3D%220.1%22%20d%3D%22M10%200C4.47715%200%200%204.47715%200%2010C0%2015.5228%204.47715%2020%2010%2020C15.5228%2020%2020%2015.5228%2020%2010C19.9936%204.47982%2015.5202%200.00642897%2010%200Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3Cpath%20d%3D%22M14.3291%206.65951L9.3547%2013.41C9.23607%2013.5674%209.05917%2013.6705%208.86375%2013.6962C8.66833%2013.7219%208.47078%2013.668%208.3155%2013.5466L4.7633%2010.7066C4.44984%2010.4558%204.39908%209.9983%204.64993%209.68484C4.90078%209.37138%205.35824%209.32062%205.6717%209.57147L8.6338%2011.9413L13.1591%205.7998C13.3075%205.57713%2013.5662%205.45402%2013.8326%205.47935C14.099%205.50468%2014.3299%205.67435%2014.4337%205.921C14.5374%206.16765%2014.4973%206.45137%2014.3291%206.65951Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "text-sm-bold", "margin-top-2")}
          tag="div"
        >
          {feature}
        </_Builtin.Block>
      </_Builtin.Block>
      {isMostPopular ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "price-grey-list")}
          tag="div"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "tick-icon")}
            value="%3Csvg%20width%3D%2223%22%20height%3D%2223%22%20viewBox%3D%220%200%2023%2023%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20opacity%3D%220.1%22%20d%3D%22M11.8768%200.712402C5.82432%200.712402%200.917847%205.61887%200.917847%2011.6713C0.917847%2017.7237%205.82432%2022.6302%2011.8768%2022.6302C17.9292%2022.6302%2022.8357%2017.7237%2022.8357%2011.6713C22.8286%205.62179%2017.9263%200.719448%2011.8768%200.712402Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M16.6211%208.01127L11.1698%2015.4091C11.0398%2015.5816%2010.8459%2015.6946%2010.6317%2015.7227C10.4176%2015.7509%2010.2011%2015.6918%2010.0309%2015.5588L6.13809%2012.4464C5.79457%2012.1715%205.73895%2011.6702%206.01385%2011.3267C6.28875%2010.9832%206.79007%2010.9276%207.13359%2011.2025L10.3797%2013.7995L15.3389%207.06913C15.5016%206.8251%2015.7851%206.69018%2016.0771%206.71794C16.369%206.7457%2016.622%206.93164%2016.7358%207.20194C16.8495%207.47225%2016.8054%207.78317%2016.6211%208.01127Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "text-sm-bold",
              "margin-top-2",
              "text-is-white"
            )}
            tag="div"
          >
            {feature}
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
    </_Component>
  );
}
