import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./NetworkBuilder.module.css";

export function NetworkBuilder({
  as: _Component = _Builtin.Block,
  slotCompanyGrid,
  slotProfileList,
  slotPeopleSearch,
  slotPeopleGrid,
  isEmpty = true,
  onClickAdd = {},
}) {
  return (
    <_Component className={_utils.cx(_styles, "netwrok-builder")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "network-builder-block")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "container-1280")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "network-builder-wrap")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "header-wrap")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text-xxl-bold")}
                tag="div"
              >
                {"Network Builder"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "text-md",
                  "text-color-grey",
                  "more-grey"
                )}
                tag="div"
              >
                {
                  "Optimize your job hunt by skillfully networking and systematically arranging your job search outreach, thereby guaranteeing that you remain in the loop with all potential opportunities and promising connections."
                }
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.TabsWrapper
              className={_utils.cx(_styles, "tabs")}
              current="Tab 1"
              easing="ease"
              fadeIn={300}
              fadeOut={100}
            >
              <_Builtin.TabsMenu
                className={_utils.cx(_styles, "tabs-menu")}
                tag="div"
              >
                <_Builtin.TabsLink
                  className={_utils.cx(_styles, "tablink")}
                  data-w-tab="Tab 1"
                >
                  <_Builtin.Block tag="div">{"People"}</_Builtin.Block>
                </_Builtin.TabsLink>
                <_Builtin.TabsLink
                  className={_utils.cx(_styles, "tablink")}
                  data-w-tab="Tab 2"
                >
                  <_Builtin.Block tag="div">{"Company"}</_Builtin.Block>
                </_Builtin.TabsLink>
              </_Builtin.TabsMenu>
              <_Builtin.TabsContent tag="div">
                <_Builtin.TabsPane tag="div" data-w-tab="Tab 1">
                  <_Builtin.Block
                    className={_utils.cx(_styles, "people-block")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "people-tab-content")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "people-left")}
                        id={_utils.cx(
                          _styles,
                          "w-node-be16cad2-5a56-57bd-0752-6264c7ae3b6e-edc95240"
                        )}
                        tag="div"
                      >
                        {isEmpty ? (
                          <_Builtin.Block
                            className={_utils.cx(_styles, "empty-people-block")}
                            tag="div"
                          >
                            <_Builtin.Image
                              className={_utils.cx(_styles, "image-4-copy")}
                              width="auto"
                              height="auto"
                              loading="lazy"
                              src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/6485e5d072c765b773723a10_Vectors-Wrapper.svg"
                            />
                            <_Builtin.Block tag="div">
                              {"Add people to expand your network."}
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "loadmore-btn",
                                "margin-top-10"
                              )}
                              tag="div"
                              {...onClickAdd}
                            >
                              <_Builtin.Block tag="div">
                                {"Add People"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                        ) : null}
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "people-tab-content-left"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_30b9676f-8c4e-0139-fabb-c8c3655532c3-edc95240"
                          )}
                          tag="div"
                        >
                          {slotPeopleGrid ?? (
                            <_Builtin.Block tag="div">
                              {"This is some text inside of a div block."}
                            </_Builtin.Block>
                          )}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "people-tab-content-right"
                        )}
                        id={_utils.cx(
                          _styles,
                          "w-node-_81140f2e-2d84-8039-a2cd-c7777761974b-edc95240"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block tag="div">
                          {slotPeopleSearch}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "network-profiles-stack"
                          )}
                          tag="div"
                        >
                          {slotProfileList}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.TabsPane>
                <_Builtin.TabsPane tag="div" data-w-tab="Tab 2">
                  <_Builtin.Block
                    className={_utils.cx(_styles, "company-tab-content")}
                    tag="div"
                  >
                    {slotCompanyGrid ?? (
                      <>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "add-company-header")}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="auto"
                            height="auto"
                            loading="lazy"
                            src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/64815fedc8e2ed2234d0411e_company.svg"
                          />
                          <_Builtin.Block
                            className={_utils.cx(_styles, "text-lg-bold")}
                            tag="div"
                          >
                            {"Add your prefered companies"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "max-width-420")}
                          tag="div"
                        />
                      </>
                    )}
                  </_Builtin.Block>
                </_Builtin.TabsPane>
              </_Builtin.TabsContent>
            </_Builtin.TabsWrapper>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
