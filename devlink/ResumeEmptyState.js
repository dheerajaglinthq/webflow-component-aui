import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ResumeEmptyState.module.css";

export function ResumeEmptyState({
  as: _Component = _Builtin.Block,
  onClickOwnResume = {},
  onClickImportFromLinkedIn = {},
  onClickImportFromFile = {},
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "resume-empty-state-wrapper")}
      tag="div"
    >
      <_Builtin.Block className={_utils.cx(_styles, "container-940")} tag="div">
        <_Builtin.Block tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "resume-empty-state-header-wrapper")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "header-wrapper")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text-xxl-default")}
                tag="div"
              >
                {"Build your resume with AI"}
              </_Builtin.Block>
              <_Builtin.HtmlEmbed />
            </_Builtin.Block>
            <_Builtin.Paragraph
              className={_utils.cx(
                _styles,
                "text-md-default",
                "color-grey-600"
              )}
            >
              {
                "Manage your resumes and create new ones with our easy-to-use resume builder. Import your LinkedIn profile or upload your existing resume. Let our AI generate your professional summary, work experience, and skills for a standout resume."
              }
            </_Builtin.Paragraph>
          </_Builtin.Block>
          <_Builtin.Grid
            className={_utils.cx(_styles, "resume-empty-state-grid")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "resume-empty-state-card",
                "bg-kale-200"
              )}
              id={_utils.cx(
                _styles,
                "w-node-b24d5e08-1380-9cba-74bc-7a336e38d576-6e38d56f"
              )}
              tag="nav"
              {...onClickOwnResume}
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "file-document-icon")}
                value="%3Csvg%20width%3D%2232%22%20height%3D%2233%22%20viewbox%3D%220%200%2032%2033%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M20%203.00419C15.5559%203.00076%204%203.00002%204%203.00002V31H28V11H22C20.8877%2011%2020%2010.1123%2020%208.99999V3.00419ZM30%2010.0553V31C30%2032.1123%2029.1123%2033%2028%2033H4.00003C2.88775%2033%202.00003%2032.1123%202.00003%2031V2.99999C2.00003%201.8877%202.88775%200.999989%204.00003%200.999989H20.9441C20.9859%200.997336%2021.028%200.9973%2021.0701%200.999989H21.7C22.2309%200.999989%2022.7434%201.20919%2023.1327%201.59847L29.4633%208.03102C29.8073%208.41318%2030%208.89002%2030%209.39999V9.9305C30.0027%209.97218%2030.0026%2010.0138%2030%2010.0553ZM22%204.41422V9H26.5858L22%204.41422ZM9.00005%2015H23.0001C24.3334%2015%2024.3334%2017%2023.0001%2017H9.00005C7.66672%2017%207.66672%2015%209.00005%2015ZM9.00005%2018.94H23.0001C24.3334%2018.94%2024.3334%2020.94%2023.0001%2020.94H9.00005C7.66672%2020.94%207.66672%2018.94%209.00005%2018.94ZM9.00005%2022.94H23.0001C24.3334%2022.94%2024.3334%2024.94%2023.0001%2024.94H9.00005C7.66672%2024.94%207.66672%2022.94%209.00005%2022.94Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "resume-emty-state-card-context")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "text-lg-default",
                    "color-kale-800"
                  )}
                  tag="div"
                >
                  {"Design Your Own Resume"}
                </_Builtin.Block>
                <_Builtin.Paragraph
                  className={_utils.cx(
                    _styles,
                    "text-md-default",
                    "color-grey-600"
                  )}
                >
                  {
                    "Choose from our collection of professionally designed templates and personalize them with your own details and preferences."
                  }
                </_Builtin.Paragraph>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "resume-empty-state-card",
                "bg-blue-200"
              )}
              id={_utils.cx(
                _styles,
                "w-node-b24d5e08-1380-9cba-74bc-7a336e38d57d-6e38d56f"
              )}
              tag="div"
              {...onClickImportFromLinkedIn}
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "file-document-icon")}
                value="%3Csvg%20width%3D%2233%22%20height%3D%2232%22%20viewbox%3D%220%200%2033%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M30.6667%200C31.6923%200%2032.5377%200.77208%2032.6532%201.76676L32.6667%202V30C32.6667%2031.0257%2031.8946%2031.871%2030.8999%2031.9865L30.6667%2032H2.66666C1.64098%2032%200.795642%2031.2279%200.680112%2030.2332L0.666656%2030V2C0.666656%200.974328%201.43874%200.128986%202.43341%200.0134555L2.66666%200H30.6667ZM30.6667%202.00003H2.66665V30H30.6667V2.00003ZM21.5455%2012.1641C25.6103%2012.1641%2026.4702%2014.7486%2026.523%2018.1712L26.524%2025.8578H22.3753L22.373%2018.9288C22.3528%2017.4651%2022.1539%2015.8168%2020.2175%2015.8168C18.1596%2015.8168%2017.7617%2017.3479%2017.7285%2018.9993L17.7261%2025.8573H13.5774V12.4964H17.5601V14.3223H17.6159C18.428%2012.9338%2019.938%2012.1044%2021.5455%2012.1641ZM10.9706%2012.4964V25.8578H6.81754V12.4964H10.9706ZM8.89536%205.85486C10.225%205.85462%2011.3031%206.93235%2011.3034%208.26203C11.3035%208.90057%2011.0499%209.513%2010.5985%209.96459C10.1471%2010.4162%209.53475%2010.67%208.89623%2010.6701C7.56657%2010.6703%206.48848%209.59258%206.48824%208.2629C6.488%206.93321%207.56571%205.85509%208.89536%205.85486Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "resume-emty-state-card-context")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "text-lg-default",
                    "color-blue-800"
                  )}
                  tag="div"
                >
                  {"Import from LinkedIn"}
                </_Builtin.Block>
                <_Builtin.Paragraph
                  className={_utils.cx(
                    _styles,
                    "text-md-default",
                    "color-grey-600"
                  )}
                >
                  {
                    "Easily import your LinkedIn profile and turn it into a polished, professional resume."
                  }
                </_Builtin.Paragraph>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "resume-empty-state-card",
                "bg-grey-200"
              )}
              id={_utils.cx(
                _styles,
                "w-node-b24d5e08-1380-9cba-74bc-7a336e38d584-6e38d56f"
              )}
              tag="div"
              {...onClickImportFromFile}
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "file-document-icon")}
                value="%3Csvg%20width%3D%2233%22%20height%3D%2226%22%20viewbox%3D%220%200%2033%2026%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M22.3333%206C27.8656%206%2032.3333%2010.4677%2032.3333%2016C32.3333%2021.5323%2027.8656%2026%2022.3333%2026C21.781%2026%2021.3333%2025.5523%2021.3333%2025C21.3333%2024.4477%2021.781%2024%2022.3333%2024C26.761%2024%2030.3333%2020.4277%2030.3333%2016C30.3333%2011.5723%2026.761%208%2022.3333%208C22.0443%208%2021.7685%208.02991%2021.2417%208.10894L20.3398%208.24421L20.1222%207.35862C19.3553%204.23771%2016.5646%202%2013.3333%202C9.4656%202%206.33331%205.13228%206.33331%209C6.33331%209.69245%206.46294%2010.3866%206.72435%2011.1909L7.01594%2012.0881L6.13721%2012.4314C3.84365%2013.3275%202.33382%2015.5378%202.33331%2018C2.33331%2021.3077%205.0256%2024%208.33331%2024H12.3333C12.8856%2024%2013.3333%2024.4477%2013.3333%2025C13.3333%2025.5523%2012.8856%2026%2012.3333%2026H8.33331C3.92103%2026%200.333313%2022.4123%200.333313%2017.9998C0.33393%2015.0219%201.98875%2012.3202%204.57709%2010.9499C4.41604%2010.2854%204.33331%209.6497%204.33331%209C4.33331%204.02772%208.36103%200%2013.3333%200C17.1905%200%2020.5531%202.47028%2021.8078%206.02219C21.9883%206.00694%2022.1546%206%2022.3333%206ZM18.3333%2025C18.3333%2025.5523%2017.8856%2026%2017.3333%2026C16.781%2026%2016.3333%2025.5523%2016.3333%2025V15.4102C15.0604%2016.6809%2013.0404%2018.7071%2013.0404%2018.7071C12.6499%2019.0976%2012.0167%2019.0976%2011.6262%2018.7071C11.2357%2018.3166%2011.2357%2017.6834%2011.6262%2017.2929L15.9262%2012.9929C16.7167%2012.2023%2017.9699%2012.2023%2018.7621%2012.9945L23.0421%2017.2945C23.4317%2017.686%2023.4302%2018.3191%2023.0388%2018.7087C22.6473%2019.0983%2022.0142%2019.0969%2021.6246%2018.7054L18.3333%2015.3988V25Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "resume-emty-state-card-context")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "text-lg-default",
                    "color-grey-800"
                  )}
                  tag="div"
                >
                  {"Upload Existing Resume"}
                </_Builtin.Block>
                <_Builtin.Paragraph
                  className={_utils.cx(
                    _styles,
                    "text-md-default",
                    "color-grey-600"
                  )}
                >
                  {
                    "Upload your current resume and use our tools to improve its layout, formatting, and content to make it more effective"
                  }
                </_Builtin.Paragraph>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Grid>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
