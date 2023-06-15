import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { LoaderSvg } from "./LoaderSvg";
import * as _utils from "./utils";
import _styles from "./OnboardingMain.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-103":{"id":"e-103","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-36","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-104"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e148b7cd-17c2-f5be-2df8-5c35704412d6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e148b7cd-17c2-f5be-2df8-5c35704412d6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686315461966},"e-109":{"id":"e-109","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-41","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-110"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"841ee67d-759c-ce20-419c-3b9a0c11e20f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"841ee67d-759c-ce20-419c-3b9a0c11e20f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686395128250},"e-110":{"id":"e-110","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-42","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-109"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"841ee67d-759c-ce20-419c-3b9a0c11e20f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"841ee67d-759c-ce20-419c-3b9a0c11e20f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686395128251},"e-226":{"id":"e-226","name":"","animationType":"custom","eventTypeId":"PAGE_START","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-110","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-227"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686824342305},"e-230":{"id":"e-230","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-110","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-231"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b71ab539-ff00-25f1-0397-6f363b03ee79","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b71ab539-ff00-25f1-0397-6f363b03ee79","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686826984597},"e-232":{"id":"e-232","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-111","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-233"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4722c42d-6350-873a-5cf0-2cbf29527a22","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4722c42d-6350-873a-5cf0-2cbf29527a22","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686830376325},"e-233":{"id":"e-233","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-112","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-232"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4722c42d-6350-873a-5cf0-2cbf29527a22","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4722c42d-6350-873a-5cf0-2cbf29527a22","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686830376326}},"actionLists":{"a-36":{"id":"a-36","title":"Terms Modal Close","actionItemGroups":[{"actionItems":[{"id":"a-36-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"PARENT","selector":".terms-modal-wrapper","selectorGuids":["2e7812a4-1017-1b8e-20f0-8f511a71cb0d"]},"value":0,"unit":""}},{"id":"a-36-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".terms-modal-wrapper","selectorGuids":["2e7812a4-1017-1b8e-20f0-8f511a71cb0d"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686315465270},"a-41":{"id":"a-41","title":"profile [expand]","actionItemGroups":[{"actionItems":[{"id":"a-41-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".profile-desccription","selectorGuids":["4542c770-9604-d6de-f50e-1a41462c4c54"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-41-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".embed-flex","selectorGuids":["52fed630-20a7-0da5-bc89-35c4f4847d44"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-41-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".profile-desccription","selectorGuids":["4542c770-9604-d6de-f50e-1a41462c4c54"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-41-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".embed-flex","selectorGuids":["52fed630-20a7-0da5-bc89-35c4f4847d44"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686395132149},"a-42":{"id":"a-42","title":"profile [collapse]","actionItemGroups":[{"actionItems":[{"id":"a-42-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".profile-desccription","selectorGuids":["4542c770-9604-d6de-f50e-1a41462c4c54"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-42-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".embed-flex","selectorGuids":["52fed630-20a7-0da5-bc89-35c4f4847d44"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686395132149},"a-110":{"id":"a-110","title":"onBoarding loader","actionItemGroups":[{"actionItems":[{"id":"a-110-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":1000,"target":{"selector":".loading-text-wrapper","selectorGuids":["7399eb91-b55e-d0a5-4969-78df3525e6e1"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-110-n-11","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".loading-text._2","selectorGuids":["722a5b08-ed55-4e31-0fc8-4f6afb82eec7","48499a27-3291-9e22-d496-3ebb3b3849e2"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-110-n-9","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".loading-text._1","selectorGuids":["722a5b08-ed55-4e31-0fc8-4f6afb82eec7","5d41dda8-cd4f-8a71-2ea1-d7592ee0b7f2"]},"xValue":1.1,"yValue":1.1,"locked":true}}]},{"actionItems":[{"id":"a-110-n-10","actionTypeId":"TRANSFORM_SCALE","config":{"delay":1000,"easing":"outExpo","duration":1000,"target":{"selector":".loading-text._1","selectorGuids":["722a5b08-ed55-4e31-0fc8-4f6afb82eec7","5d41dda8-cd4f-8a71-2ea1-d7592ee0b7f2"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-110-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1000,"easing":"outExpo","duration":1500,"target":{"selector":".loading-text-wrapper","selectorGuids":["7399eb91-b55e-d0a5-4969-78df3525e6e1"]},"yValue":-50,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-110-n-13","actionTypeId":"TRANSFORM_SCALE","config":{"delay":1000,"easing":"","duration":500,"target":{"selector":".loading-text._3","selectorGuids":["722a5b08-ed55-4e31-0fc8-4f6afb82eec7","d13d198f-4f71-2621-e5cb-b7fc0cf12f32"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-110-n-12","actionTypeId":"TRANSFORM_SCALE","config":{"delay":1000,"easing":"outExpo","duration":1000,"target":{"selector":".loading-text._2","selectorGuids":["722a5b08-ed55-4e31-0fc8-4f6afb82eec7","48499a27-3291-9e22-d496-3ebb3b3849e2"]},"xValue":1.1,"yValue":1.1,"locked":true}}]},{"actionItems":[{"id":"a-110-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":500,"easing":"outExpo","duration":1500,"target":{"selector":".loading-text-wrapper","selectorGuids":["7399eb91-b55e-d0a5-4969-78df3525e6e1"]},"yValue":-100,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-110-n-16","actionTypeId":"TRANSFORM_SCALE","config":{"delay":500,"easing":"","duration":500,"target":{"selector":".loading-text._4","selectorGuids":["722a5b08-ed55-4e31-0fc8-4f6afb82eec7","7363d04a-80e8-a5d0-5b00-cc8235fab7b3"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-110-n-14","actionTypeId":"TRANSFORM_SCALE","config":{"delay":500,"easing":"outExpo","duration":1000,"target":{"selector":".loading-text._3","selectorGuids":["722a5b08-ed55-4e31-0fc8-4f6afb82eec7","d13d198f-4f71-2621-e5cb-b7fc0cf12f32"]},"xValue":1.1,"yValue":1.1,"locked":true}}]},{"actionItems":[{"id":"a-110-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":500,"easing":"outExpo","duration":1500,"target":{"selector":".loading-text-wrapper","selectorGuids":["7399eb91-b55e-d0a5-4969-78df3525e6e1"]},"yValue":-150,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-110-n-17","actionTypeId":"TRANSFORM_SCALE","config":{"delay":500,"easing":"outExpo","duration":1000,"target":{"selector":".loading-text._4","selectorGuids":["722a5b08-ed55-4e31-0fc8-4f6afb82eec7","7363d04a-80e8-a5d0-5b00-cc8235fab7b3"]},"xValue":1.1,"yValue":1.1,"locked":true}},{"id":"a-110-n-15","actionTypeId":"TRANSFORM_SCALE","config":{"delay":500,"easing":"outExpo","duration":1000,"target":{"selector":".loading-text._3","selectorGuids":["722a5b08-ed55-4e31-0fc8-4f6afb82eec7","d13d198f-4f71-2621-e5cb-b7fc0cf12f32"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-110-n-19","actionTypeId":"TRANSFORM_SCALE","config":{"delay":500,"easing":"","duration":500,"target":{"selector":".loading-text._5","selectorGuids":["722a5b08-ed55-4e31-0fc8-4f6afb82eec7","90251e87-3d3d-2105-581b-de6960b159f7"]},"xValue":1,"yValue":1,"locked":true}}]},{"actionItems":[{"id":"a-110-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":500,"easing":"outExpo","duration":1500,"target":{"selector":".loading-text-wrapper","selectorGuids":["7399eb91-b55e-d0a5-4969-78df3525e6e1"]},"yValue":-200,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-110-n-22","actionTypeId":"TRANSFORM_SCALE","config":{"delay":500,"easing":"","duration":500,"target":{"selector":".loading-text._6","selectorGuids":["722a5b08-ed55-4e31-0fc8-4f6afb82eec7","a63cc0cd-2781-5a97-f475-c8218a6bb865"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-110-n-18","actionTypeId":"TRANSFORM_SCALE","config":{"delay":500,"easing":"outExpo","duration":1000,"target":{"selector":".loading-text._4","selectorGuids":["722a5b08-ed55-4e31-0fc8-4f6afb82eec7","7363d04a-80e8-a5d0-5b00-cc8235fab7b3"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-110-n-20","actionTypeId":"TRANSFORM_SCALE","config":{"delay":500,"easing":"outExpo","duration":1000,"target":{"selector":".loading-text._5","selectorGuids":["722a5b08-ed55-4e31-0fc8-4f6afb82eec7","90251e87-3d3d-2105-581b-de6960b159f7"]},"xValue":1.1,"yValue":1.1,"locked":true}}]},{"actionItems":[{"id":"a-110-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":500,"easing":"outExpo","duration":1500,"target":{"selector":".loading-text-wrapper","selectorGuids":["7399eb91-b55e-d0a5-4969-78df3525e6e1"]},"yValue":-250,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-110-n-25","actionTypeId":"TRANSFORM_SCALE","config":{"delay":500,"easing":"outExpo","duration":0,"target":{"selector":".loading-text._7","selectorGuids":["722a5b08-ed55-4e31-0fc8-4f6afb82eec7","b0b0eab2-3997-b22c-9bac-04ce03eaff98"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-110-n-23","actionTypeId":"TRANSFORM_SCALE","config":{"delay":500,"easing":"outExpo","duration":1000,"target":{"selector":".loading-text._6","selectorGuids":["722a5b08-ed55-4e31-0fc8-4f6afb82eec7","a63cc0cd-2781-5a97-f475-c8218a6bb865"]},"xValue":1.1,"yValue":1.1,"locked":true}},{"id":"a-110-n-21","actionTypeId":"TRANSFORM_SCALE","config":{"delay":500,"easing":"outExpo","duration":1000,"target":{"selector":".loading-text._5","selectorGuids":["722a5b08-ed55-4e31-0fc8-4f6afb82eec7","90251e87-3d3d-2105-581b-de6960b159f7"]},"xValue":1,"yValue":1,"locked":true}}]},{"actionItems":[{"id":"a-110-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":500,"easing":"outExpo","duration":1500,"target":{"selector":".loading-text-wrapper","selectorGuids":["7399eb91-b55e-d0a5-4969-78df3525e6e1"]},"yValue":-300,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-110-n-28","actionTypeId":"TRANSFORM_SCALE","config":{"delay":500,"easing":"","duration":500,"target":{"selector":".loading-text._8","selectorGuids":["722a5b08-ed55-4e31-0fc8-4f6afb82eec7","8c227294-cc05-8110-7b16-500a057fd6db"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-110-n-26","actionTypeId":"TRANSFORM_SCALE","config":{"delay":500,"easing":"outExpo","duration":1000,"target":{"selector":".loading-text._7","selectorGuids":["722a5b08-ed55-4e31-0fc8-4f6afb82eec7","b0b0eab2-3997-b22c-9bac-04ce03eaff98"]},"xValue":1.1,"yValue":1.1,"locked":true}},{"id":"a-110-n-24","actionTypeId":"TRANSFORM_SCALE","config":{"delay":500,"easing":"outExpo","duration":1000,"target":{"selector":".loading-text._6","selectorGuids":["722a5b08-ed55-4e31-0fc8-4f6afb82eec7","a63cc0cd-2781-5a97-f475-c8218a6bb865"]},"xValue":1,"yValue":1,"locked":true}}]},{"actionItems":[{"id":"a-110-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":500,"easing":"outExpo","duration":1500,"target":{"selector":".loading-text-wrapper","selectorGuids":["7399eb91-b55e-d0a5-4969-78df3525e6e1"]},"yValue":-350,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-110-n-29","actionTypeId":"TRANSFORM_SCALE","config":{"delay":500,"easing":"outExpo","duration":1000,"target":{"selector":".loading-text._8","selectorGuids":["722a5b08-ed55-4e31-0fc8-4f6afb82eec7","8c227294-cc05-8110-7b16-500a057fd6db"]},"xValue":1.1,"yValue":1.1,"locked":true}},{"id":"a-110-n-27","actionTypeId":"TRANSFORM_SCALE","config":{"delay":500,"easing":"outExpo","duration":1000,"target":{"selector":".loading-text._7","selectorGuids":["722a5b08-ed55-4e31-0fc8-4f6afb82eec7","b0b0eab2-3997-b22c-9bac-04ce03eaff98"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686824346030},"a-111":{"id":"a-111","title":"PRO-FEATURE","actionItemGroups":[{"actionItems":[{"id":"a-111-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".primary-button.book-a-call-btn","selectorGuids":["ceb0f0d4-02c9-a28d-0553-ef569b624fe5","4f6c5085-8a96-f3a6-77ae-884f831bc9ef"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-111-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".primary-button.book-a-call-btn","selectorGuids":["ceb0f0d4-02c9-a28d-0553-ef569b624fe5","4f6c5085-8a96-f3a6-77ae-884f831bc9ef"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686830379350},"a-112":{"id":"a-112","title":"PRO-FEATURE 2","actionItemGroups":[{"actionItems":[{"id":"a-112-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".primary-button.book-a-call-btn","selectorGuids":["ceb0f0d4-02c9-a28d-0553-ef569b624fe5","4f6c5085-8a96-f3a6-77ae-884f831bc9ef"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686830379350}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function OnboardingMain({
  as: _Component = _Builtin.Block,
  onClickAccept = {},
  isTermsvisible = true,
  onClickFormSubmit = {},
  onClickLogout = {},
  slotOnboardingForm,
  isLoading = true,
  isOnboarding = true,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "onboarding-main")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "onboarding-nav")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "container-1360")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "onboarding-nav-wrap")}
            tag="div"
          >
            <_Builtin.HtmlEmbed value="%3Csvg%20width%3D%22140%22%20height%3D%2240%22%20viewBox%3D%220%200%20140%2040%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.408%2030.888C14.448%2030.888%2013.552%2030.7173%2012.72%2030.376C11.9093%2030.0133%2011.248%2029.4907%2010.736%2028.808C10.2453%2028.104%2010%2027.2293%2010%2026.184C10%2024.6907%2010.5227%2023.496%2011.568%2022.6C12.6347%2021.704%2014.2027%2021.256%2016.272%2021.256H20.752V20.84C20.752%2019.9013%2020.4853%2019.24%2019.952%2018.856C19.44%2018.472%2018.3947%2018.28%2016.816%2018.28C15.088%2018.28%2013.424%2018.5467%2011.824%2019.08V16.04C12.528%2015.7627%2013.3813%2015.5387%2014.384%2015.368C15.408%2015.176%2016.5173%2015.08%2017.712%2015.08C19.9947%2015.08%2021.7547%2015.5493%2022.992%2016.488C24.2507%2017.4053%2024.88%2018.888%2024.88%2020.936V30.568H21.136L20.912%2029.192C20.3147%2029.7253%2019.5787%2030.1413%2018.704%2030.44C17.8293%2030.7387%2016.7307%2030.888%2015.408%2030.888ZM16.592%2028.04C17.552%2028.04%2018.384%2027.88%2019.088%2027.56C19.792%2027.24%2020.3467%2026.8347%2020.752%2026.344V23.944H16.368C14.6827%2023.944%2013.84%2024.6373%2013.84%2026.024C13.84%2027.368%2014.7573%2028.04%2016.592%2028.04Z%22%20fill%3D%22black%22%2F%3E%0A%3Cpath%20d%3D%22M35.0788%2036.2C33.9481%2036.2%2032.7854%2036.1253%2031.5907%2035.976C30.4174%2035.8267%2029.4254%2035.6133%2028.6147%2035.336V32.104C29.4681%2032.3813%2030.4707%2032.5947%2031.6227%2032.744C32.7747%2032.9147%2033.8521%2033%2034.8547%2033C36.3267%2033%2037.3934%2032.9147%2038.0548%2032.744C38.7161%2032.5947%2039.0467%2032.3173%2039.0467%2031.912C39.0467%2031.5707%2038.8974%2031.336%2038.5988%2031.208C38.3214%2031.08%2037.7241%2031.016%2036.8068%2031.016H32.6787C29.9694%2031.016%2028.6147%2030.0133%2028.6147%2028.008C28.6147%2027.3893%2028.7854%2026.824%2029.1267%2026.312C29.4681%2025.8%2030.0121%2025.3947%2030.7588%2025.096C29.0308%2024.2213%2028.1667%2022.7493%2028.1667%2020.68C28.1667%2018.7173%2028.7747%2017.2987%2029.9907%2016.424C31.2067%2015.528%2033.0094%2015.08%2035.3988%2015.08C35.8894%2015.08%2036.4227%2015.1227%2036.9987%2015.208C37.5961%2015.272%2038.0441%2015.336%2038.3428%2015.4H44.0387L43.9427%2018.12H41.5428C42.2041%2018.7387%2042.5348%2019.6027%2042.5348%2020.712C42.5348%2022.2693%2042.0441%2023.5173%2041.0628%2024.456C40.0814%2025.3733%2038.6308%2025.832%2036.7108%2025.832C36.3694%2025.832%2036.0387%2025.8213%2035.7188%2025.8C35.4201%2025.7573%2035.1108%2025.7147%2034.7908%2025.672C34.1508%2025.7573%2033.6068%2025.9067%2033.1588%2026.12C32.7321%2026.3333%2032.5187%2026.6213%2032.5187%2026.984C32.5187%2027.4747%2032.9561%2027.72%2033.8307%2027.72H38.1188C39.6548%2027.72%2040.8387%2028.072%2041.6707%2028.776C42.5028%2029.4587%2042.9188%2030.4613%2042.9188%2031.784C42.9188%2033.2773%2042.2467%2034.3867%2040.9028%2035.112C39.5588%2035.8373%2037.6174%2036.2%2035.0788%2036.2ZM35.4307%2023.4C36.7108%2023.4%2037.5961%2023.1867%2038.0868%2022.76C38.5988%2022.312%2038.8548%2021.5653%2038.8548%2020.52C38.8548%2019.4747%2038.5988%2018.7173%2038.0868%2018.248C37.5961%2017.7787%2036.7108%2017.544%2035.4307%2017.544C34.2148%2017.544%2033.3401%2017.7787%2032.8067%2018.248C32.2734%2018.696%2032.0068%2019.4533%2032.0068%2020.52C32.0068%2021.5013%2032.2521%2022.2267%2032.7428%2022.696C33.2547%2023.1653%2034.1507%2023.4%2035.4307%2023.4Z%22%20fill%3D%22black%22%2F%3E%0A%3Cpath%20d%3D%22M51.1915%2030.888C49.7195%2030.888%2048.6422%2030.5467%2047.9595%2029.864C47.2982%2029.1813%2046.9675%2028.0933%2046.9675%2026.6V9H51.2875V26.248C51.2875%2026.7813%2051.3942%2027.1547%2051.6075%2027.368C51.8208%2027.56%2052.1302%2027.656%2052.5355%2027.656C53.0902%2027.656%2053.5915%2027.5813%2054.0395%2027.432V30.408C53.2288%2030.728%2052.2795%2030.888%2051.1915%2030.888Z%22%20fill%3D%22black%22%2F%3E%0A%3Cpath%20d%3D%22M56.7497%2012.616V9.224H61.4538V12.616H56.7497ZM57.1017%2030.568V18.6H54.8298L55.2137%2015.4H61.4217V30.568H57.1017Z%22%20fill%3D%22black%22%2F%3E%0A%3Cpath%20d%3D%22M65.42%2030.568V15.4H69.42L69.58%2016.84C70.1987%2016.3707%2070.9773%2015.9653%2071.916%2015.624C72.876%2015.2613%2073.8787%2015.08%2074.924%2015.08C76.9293%2015.08%2078.3907%2015.5493%2079.308%2016.488C80.2253%2017.4267%2080.684%2018.8773%2080.684%2020.84V30.568H76.364V21.064C76.364%2020.04%2076.1507%2019.3147%2075.724%2018.888C75.3187%2018.4613%2074.5507%2018.248%2073.42%2018.248C72.7587%2018.248%2072.0867%2018.3973%2071.404%2018.696C70.7427%2018.9947%2070.188%2019.368%2069.74%2019.816V30.568H65.42Z%22%20fill%3D%22black%22%2F%3E%0A%3Cpath%20d%3D%22M90.5372%2030.888C88.7879%2030.888%2087.4866%2030.4293%2086.6332%2029.512C85.8012%2028.5947%2085.3852%2027.3467%2085.3852%2025.768V18.728H83.2412V15.4H85.3852V12.136L89.7052%2010.856V15.4H93.5452L93.2892%2018.728H89.7052V25.48C89.7052%2026.312%2089.8972%2026.888%2090.2812%2027.208C90.6653%2027.5067%2091.2626%2027.656%2092.0732%2027.656C92.6706%2027.656%2093.2892%2027.5493%2093.9292%2027.336V30.312C93.4599%2030.504%2092.9479%2030.6427%2092.3932%2030.728C91.8386%2030.8347%2091.2199%2030.888%2090.5372%2030.888Z%22%20fill%3D%22black%22%2F%3E%0A%3Crect%20x%3D%2298.9292%22%20y%3D%229%22%20width%3D%2230%22%20height%3D%2214%22%20rx%3D%227%22%20fill%3D%22%23FF6224%22%2F%3E%0A%3Cpath%20d%3D%22M106.074%2019V18.2852H107.777C108.173%2018.2852%20108.472%2018.2057%20108.675%2018.0469C108.878%2017.888%20108.98%2017.6576%20108.98%2017.3555V17.3477C108.98%2017.1445%20108.933%2016.9753%20108.839%2016.8398C108.746%2016.7044%20108.605%2016.6029%20108.418%2016.5352C108.233%2016.4648%20108.002%2016.4297%20107.726%2016.4297H106.074V15.7617H107.55C107.938%2015.7617%20108.231%2015.6914%20108.429%2015.5508C108.627%2015.4076%20108.726%2015.1992%20108.726%2014.9258V14.918C108.726%2014.6523%20108.636%2014.4466%20108.457%2014.3008C108.277%2014.1523%20108.024%2014.0781%20107.699%2014.0781H106.074V13.3633H107.906C108.257%2013.3633%20108.559%2013.4206%20108.812%2013.5352C109.067%2013.6497%20109.263%2013.8125%20109.398%2014.0234C109.533%2014.2318%20109.601%2014.4792%20109.601%2014.7656V14.7734C109.601%2014.9714%20109.557%2015.1562%20109.468%2015.3281C109.38%2015.4974%20109.261%2015.6406%20109.113%2015.7578C108.964%2015.875%20108.796%2015.9492%20108.609%2015.9805V16.0469C108.864%2016.0729%20109.087%2016.1471%20109.277%2016.2695C109.467%2016.3919%20109.615%2016.5508%20109.722%2016.7461C109.829%2016.9388%20109.882%2017.1576%20109.882%2017.4023V17.4102C109.882%2017.7383%20109.804%2018.0221%20109.648%2018.2617C109.494%2018.4987%20109.274%2018.681%20108.988%2018.8086C108.701%2018.9362%20108.358%2019%20107.957%2019H106.074ZM105.636%2019V13.3633H106.511V19H105.636ZM112.687%2019.082C112.273%2019.082%20111.918%2018.9935%20111.621%2018.8164C111.324%2018.6367%20111.095%2018.3828%20110.933%2018.0547C110.774%2017.7266%20110.695%2017.3385%20110.695%2016.8906V16.8867C110.695%2016.444%20110.774%2016.0573%20110.933%2015.7266C111.095%2015.3958%20111.321%2015.138%20111.613%2014.9531C111.907%2014.7682%20112.251%2014.6758%20112.644%2014.6758C113.04%2014.6758%20113.38%2014.7643%20113.664%2014.9414C113.95%2015.1185%20114.17%2015.3672%20114.324%2015.6875C114.477%2016.0052%20114.554%2016.3776%20114.554%2016.8047V17.1016H111.125V16.4961H114.132L113.726%2017.0586V16.7188C113.726%2016.4167%20113.679%2016.1667%20113.585%2015.9688C113.494%2015.7682%20113.368%2015.6185%20113.207%2015.5195C113.045%2015.4206%20112.859%2015.3711%20112.648%2015.3711C112.437%2015.3711%20112.248%2015.4232%20112.082%2015.5273C111.918%2015.6289%20111.787%2015.7799%20111.691%2015.9805C111.597%2016.181%20111.55%2016.4271%20111.55%2016.7188V17.0586C111.55%2017.3372%20111.597%2017.5755%20111.691%2017.7734C111.785%2017.9714%20111.918%2018.1224%20112.089%2018.2266C112.264%2018.3307%20112.47%2018.3828%20112.707%2018.3828C112.889%2018.3828%20113.045%2018.3581%20113.175%2018.3086C113.308%2018.2565%20113.416%2018.1927%20113.5%2018.1172C113.585%2018.0417%20113.644%2017.9674%20113.675%2017.8945L113.691%2017.8633H114.511L114.503%2017.8984C114.467%2018.0391%20114.403%2018.1797%20114.312%2018.3203C114.221%2018.4583%20114.1%2018.5846%20113.949%2018.6992C113.8%2018.8138%20113.621%2018.9062%20113.41%2018.9766C113.201%2019.0469%20112.96%2019.082%20112.687%2019.082ZM117.164%2019.0273C116.7%2019.0273%20116.364%2018.9388%20116.156%2018.7617C115.95%2018.582%20115.847%2018.2891%20115.847%2017.8828V15.4258H115.183V14.7578H115.847V13.6875H116.714V14.7578H117.625V15.4258H116.714V17.6758C116.714%2017.9049%20116.76%2018.0703%20116.851%2018.1719C116.942%2018.2708%20117.093%2018.3203%20117.304%2018.3203C117.367%2018.3203%20117.42%2018.319%20117.464%2018.3164C117.511%2018.3138%20117.565%2018.3099%20117.625%2018.3047V18.9844C117.557%2018.9948%20117.484%2019.0039%20117.406%2019.0117C117.328%2019.0221%20117.247%2019.0273%20117.164%2019.0273ZM119.781%2019.0703C119.513%2019.0703%20119.272%2019.0195%20119.058%2018.918C118.847%2018.8138%20118.681%2018.6667%20118.558%2018.4766C118.436%2018.2865%20118.375%2018.0638%20118.375%2017.8086V17.8008C118.375%2017.5456%20118.436%2017.3281%20118.558%2017.1484C118.683%2016.9688%20118.863%2016.8281%20119.097%2016.7266C119.334%2016.6224%20119.621%2016.5599%20119.957%2016.5391L121.523%2016.4453V17.043L120.074%2017.1367C119.782%2017.1549%20119.567%2017.2174%20119.429%2017.3242C119.291%2017.4284%20119.222%2017.5755%20119.222%2017.7656V17.7734C119.222%2017.9661%20119.296%2018.1185%20119.445%2018.2305C119.593%2018.3398%20119.781%2018.3945%20120.007%2018.3945C120.218%2018.3945%20120.406%2018.3529%20120.57%2018.2695C120.737%2018.1836%20120.867%2018.069%20120.96%2017.9258C121.054%2017.7799%20121.101%2017.6159%20121.101%2017.4336V16.0977C121.101%2015.8633%20121.028%2015.6849%20120.882%2015.5625C120.739%2015.4375%20120.526%2015.375%20120.242%2015.375C120.005%2015.375%20119.811%2015.4167%20119.66%2015.5C119.511%2015.5833%20119.412%2015.7005%20119.363%2015.8516L119.355%2015.8633H118.539L118.543%2015.8359C118.576%2015.6016%20118.669%2015.3984%20118.82%2015.2266C118.974%2015.0521%20119.174%2014.9167%20119.421%2014.8203C119.671%2014.724%20119.957%2014.6758%20120.277%2014.6758C120.634%2014.6758%20120.936%2014.7331%20121.183%2014.8477C121.433%2014.9596%20121.622%2015.1224%20121.75%2015.3359C121.88%2015.5469%20121.945%2015.8008%20121.945%2016.0977V19H121.101V18.3984H121.039C120.955%2018.5417%20120.851%2018.6641%20120.726%2018.7656C120.601%2018.8646%20120.459%2018.9401%20120.3%2018.9922C120.141%2019.0443%20119.968%2019.0703%20119.781%2019.0703Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E" />
            <_Builtin.Block
              className={_utils.cx(_styles, "logout-btn")}
              tag="div"
              {...onClickLogout}
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "embed-flex")}
                value="%3Csvg%20width%3D%2212%22%20height%3D%2214%22%20viewBox%3D%220%200%2012%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M6%207.00003H11M11%207.00003L8.85714%209.14289M11%207.00003L8.85714%204.85718%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.07143%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3Cpath%20d%3D%22M11%202.71427V1.99998C11%201.211%2010.3604%200.571411%209.57143%200.571411H2.42857C1.63959%200.571411%201%201.211%201%201.99998V12C1%2012.789%201.63959%2013.4286%202.42857%2013.4286H9.57143C10.3604%2013.4286%2011%2012.789%2011%2012V11.2857%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.07143%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block tag="div">{"Logout"}</_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      {isOnboarding ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "onboarding-form")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "container-1280", "flex-center")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "onboarding-form-wrapper")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "onboarding-row")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "onboarding-title-wrapper")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "onboarding-title")}
                    tag="div"
                  >
                    {"Enter your basic information"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "onboarding-description")}
                    tag="div"
                  >
                    {
                      "Help us create a personalized and professional resume for you. By providing this information, we can ensure that your resume is tailored to your specific needs and stands out to potential employers."
                    }
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Image
                  className={_utils.cx(_styles, "onboarding-imaahe")}
                  loading="lazy"
                  width={153.3333282470703}
                  height={120}
                  src="https://uploads-ssl.webflow.com/647ff5fb374a40bef3d73aed/6485e5d072c765b773723a10_Vectors-Wrapper.svg"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "onboarding-form-slot")}
                tag="div"
              >
                {slotOnboardingForm}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "primary-button")}
              data-w-id="b71ab539-ff00-25f1-0397-6f363b03ee79"
              tag="div"
              {...onClickFormSubmit}
            >
              <_Builtin.Block tag="div">
                {"Start your career transition"}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
      {isTermsvisible ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "terms-modal-wrapper")}
          tag="div"
        >
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
            <_Builtin.Block
              className={_utils.cx(_styles, "primary-button")}
              tag="div"
              {...onClickAccept}
            >
              <_Builtin.Block tag="div">{"Accept and Continue"}</_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "overlay-black")}
            tag="div"
          />
        </_Builtin.Block>
      ) : null}
      {isLoading ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "loader-fixed")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "default-loader")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "onboarding-loder")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "loading-text-container")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "loading-text-clipper")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "loading-text-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "loading-text", "_1")}
                      tag="div"
                    >
                      {"Generating personalized resume for you..."}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "loading-text", "_2")}
                      tag="div"
                    >
                      {"Analyzing your skills and qualifications..."}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "loading-text", "_3")}
                      tag="div"
                    >
                      {
                        "Matching your profile with suitable job opportunities..."
                      }
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "loading-text", "_4")}
                      tag="div"
                    >
                      {"Preparing a curated list of potential job openings..."}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "loading-text", "_5")}
                      tag="div"
                    >
                      {"Fetching job details and requirements..."}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "loading-text", "_6")}
                      tag="div"
                    >
                      {
                        "Organizing job recommendations based on your preferences..."
                      }
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "loading-text", "_7")}
                      tag="div"
                    >
                      {"Creating a tailored resume to enhance your chances..."}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "loading-text", "_8")}
                      tag="div"
                    >
                      {
                        "Please hold on while we craft the perfect matches for you..."
                      }
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "shdow-top")}
                  tag="div"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "shdow-bottom")}
                  tag="div"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "default-loader",
                  "on-onboarding"
                )}
                tag="div"
              >
                <LoaderSvg />
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
    </_Component>
  );
}
