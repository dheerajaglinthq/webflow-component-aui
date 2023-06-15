import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./TermsModal.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-103":{"id":"e-103","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-36","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-104"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e148b7cd-17c2-f5be-2df8-5c35704412d6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e148b7cd-17c2-f5be-2df8-5c35704412d6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686315461966},"e-232":{"id":"e-232","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-111","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-233"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4722c42d-6350-873a-5cf0-2cbf29527a22","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4722c42d-6350-873a-5cf0-2cbf29527a22","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686830376325},"e-233":{"id":"e-233","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-112","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-232"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4722c42d-6350-873a-5cf0-2cbf29527a22","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4722c42d-6350-873a-5cf0-2cbf29527a22","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686830376326}},"actionLists":{"a-36":{"id":"a-36","title":"Terms Modal Close","actionItemGroups":[{"actionItems":[{"id":"a-36-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"PARENT","selector":".terms-modal-wrapper","selectorGuids":["2e7812a4-1017-1b8e-20f0-8f511a71cb0d"]},"value":0,"unit":""}},{"id":"a-36-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".terms-modal-wrapper","selectorGuids":["2e7812a4-1017-1b8e-20f0-8f511a71cb0d"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686315465270},"a-111":{"id":"a-111","title":"PRO-FEATURE","actionItemGroups":[{"actionItems":[{"id":"a-111-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".primary-button.book-a-call-btn","selectorGuids":["ceb0f0d4-02c9-a28d-0553-ef569b624fe5","4f6c5085-8a96-f3a6-77ae-884f831bc9ef"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-111-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".primary-button.book-a-call-btn","selectorGuids":["ceb0f0d4-02c9-a28d-0553-ef569b624fe5","4f6c5085-8a96-f3a6-77ae-884f831bc9ef"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686830379350},"a-112":{"id":"a-112","title":"PRO-FEATURE 2","actionItemGroups":[{"actionItems":[{"id":"a-112-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".primary-button.book-a-call-btn","selectorGuids":["ceb0f0d4-02c9-a28d-0553-ef569b624fe5","4f6c5085-8a96-f3a6-77ae-884f831bc9ef"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686830379350}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function TermsModal({
  as: _Component = _Builtin.Block,
  onClickAccept = {},
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "terms-modal-wrapper")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "terms-container")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "text-md-bold")}
          tag="div"
        >
          {"Terms and Conditions"}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "terms-rich-text-wrapper")}
          tag="div"
        >
          <_Builtin.RichText
            className={_utils.cx(_styles, "terms-rich-text")}
            tag="div"
          >
            <_Builtin.Paragraph>
              {
                "Here you'll find the fine print about the use of our site, app, and other services. Apologies for all the dense legal jargon, but there are several things we need to explain in detail:"
              }
            </_Builtin.Paragraph>
            <_Builtin.Paragraph>
              {
                'Welcome to Aglint, Inc.\'s career transition platform located at www.aglinthq.com ("the Application"). These terms and conditions ("Terms") govern your use of the Application and any services (Services), so please read them carefully. By using the Application, you agree to be bound by these Terms. If you do not agree to these Terms, you may not use the Application.'
              }
            </_Builtin.Paragraph>
            <_Builtin.Paragraph>
              {
                'By using the Application, its related services, and features, as well as all content and software associated with it, and the Services and their related content, software, applications, widgets, materials, and/or services, you agree to be bound by these terms, conditions, covenants, policies, notices, and our privacy policy. You must be at least 13 years old to visit or use any Application or Service, and if you are under 18 years old or the age of majority in your jurisdiction, you must be under the direct supervision of a parent, legal guardian, or other responsible adult. By clicking "I Agree", "I Accept", or a similar button expressing your consent during registration or accessing, visiting, browsing, using, signing in, or attempting to interact with any part of the Application or Services, you acknowledge that you have read, understand, and agree to be bound by this Terms of Service. If you do not agree to this Terms of Service, do not access or use any part of the Application or Services.We reserve the right to change this Terms of Service at any time without specific notice to you. The latest version of the Terms of Service will be posted on the Application, and you should review it before using the Application or Services. By continuing to use any part of the Application or Services, you agree to accept any changes made to the Terms of Service.'
              }
            </_Builtin.Paragraph>
            <_Builtin.List tag="ol" unstyled={false}>
              <_Builtin.ListItem>
                {
                  "License. Aglint, Inc. grants you a limited, non-exclusive, non-transferable, revocable license to use the Application solely for your personal or business use, subject to these Terms. You may not use the Application for any other purpose."
                }
              </_Builtin.ListItem>
              <_Builtin.ListItem>
                {
                  "Ownership. The Application, and all intellectual property rights related to it, including but not limited to copyrights, trademarks, patents, and trade secrets, are owned by Aglint, Inc. or its licensors. You may not copy, modify, distribute, sell, or transfer any part of the Application without Aglint, Inc.'s prior written consent."
                }
              </_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.Paragraph>
              {"‍"}
              <br />
              {
                "The Application and Services contain Third Party Content, which includes content and material from third parties, as well as links and references to third party websites, content, and material that are not controlled by us. You acknowledge and agree that we do not endorse nor are responsible or liable for the availability, accuracy, currency, or reliability of any Third Party Content. If you have any concerns regarding such Third Party Content, you should direct them to the third party. We will not be liable for any loss or damage caused by any use or reliance on Third Party Content or any purchase or use of goods or services from any third party referenced on the Application or through the Services. The Application or Services do not recommend any third party, Third Party Content, or third party products or services, nor do they constitute any representation or warranty as to a third party's qualifications, services, products, offerings, information, or any other content."
              }
              <br />
              {
                "If you have purchased a subscription, the Third Party Content that is provided through our database search products may be used during the subscription period. You may make one copy of such information for personal use and use the information for internal purposes related to internships, career opportunities, career services, career information, and employment. When your subscription expires or terminates, you must destroy all originals and copies of such information, unless we or the third party instruct you otherwise. Upon request, you must provide us or the third party with certification that you have done so."
              }
              <br />
              {
                "Limitation of Liability. Aglint, Inc. shall not be liable for any damages arising from your use of the Application or your inability to use the Application, including but not limited to direct, indirect, incidental, consequential, or punitive damages. In no event shall Aglint, Inc.'s liability exceed the amount you paid (if any) for access to the Application."
              }
              <br />
              {
                'Disclaimer of Warranties. The Application is provided "as is" and without warranties of any kind, whether express or implied. Aglint, Inc. does not warrant that the Application will be error-free or uninterrupted, or that it will meet your specific requirements.'
              }
              <br />
              {
                'Release. If you have a dispute with one or more Users, you release us (and our officers, directors, agents, affiliates, subsidiaries, Licensors, joint ventures, and employees) from claims, demands, and damages (actual and consequential) of every kind and nature, known and unknown, arising out of or in any way connected with such disputes. If you are a California resident, you waive California Civil Code §1542, which says: "A general release does not extend to claims which the creditor does not know or suspect to exist in his favor at the time of executing the release, which if known by him must have materially affected his settlement with the debtor."'
              }
              <br />
              {
                "Termination. Aglint, Inc. may terminate your access to the Application at any time, without notice, for any reason or no reason."
              }
              <br />
              {
                "Governing Law. These Terms shall be governed by and construed in accordance with the laws of the State of California, without giving effect to any principles of conflicts of law."
              }
              <br />
              {
                "Entire Agreement. These Terms constitute the entire agreement between you and Aglint, Inc. regarding your use of the Application, and supersede all prior or contemporaneous communications and proposals, whether oral or written."
              }
              <br />
              {
                "If you have any questions or concerns about these Terms, please contact us at support@aglinthq.com"
              }
            </_Builtin.Paragraph>
          </_Builtin.RichText>
        </_Builtin.Block>
        <_Builtin.Link
          className={_utils.cx(_styles, "primary-button")}
          button={true}
          options={{
            href: "#",
          }}
          {...onClickAccept}
        >
          {"Accept and Continue"}
        </_Builtin.Link>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "overlay-black")}
        data-w-id="e148b7cd-17c2-f5be-2df8-5c35704412d6"
        tag="div"
      />
    </_Component>
  );
}
