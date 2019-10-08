import React from "react";
import Imgfunction from "../common/images";
import CommonTitle from "../components/title";
import { useTranslation } from "react-i18next";

const MessageCeo = () => {
  const { t, i18n } = useTranslation();
  console.log(i18n.languages[0]);
  const renderlang = () => {
    if (i18n.languages[0] === "en") {
      return (
        <>
          <p className="message-sub-para">
          The valuable company that shares value with the
            <span>employees, customers</span>, and society based on{" "}
            <span>trust</span>
          </p>
          <p>
            Fewm has continued to make efforts to develop new products and
            satisfy consumers by making them the business policy of the highest
            priority until now since it was established. These efforts have
            resulted in a lot of certificates and patents. It has made efforts
            to satisfy customers’ needs having a responsibility through high and
            good quality by obtaining the certificates and patents and{" "}
            <span>increasing the value of the company.</span>
          </p>
          <p>
            And it has made efforts to{" "}
            <span>increase the value of customers </span>through more practical
            and safer products required for a society based on the experience
            and skills accumulated for many years.
          </p>
          <p>
            Now, the importance of ‘men’ in management has been emphasized to be
            no match for any sources. Especially, the importance has been more
            emphasized over time because it’s now the knowledge and customer
            economy.
          </p>
          <p>
            <span>Individual values </span> are very important. We will take the
            initiative in supporting the active colleagues who make efforts to
            have skills and make them happy by keeping a balance between the
            company and families in the period of time that a balance between
            Work and Life is emphasized.
          </p>
          <p>
            Please be with the company which makes efforts and developments in
            the future. And we will appreciate your help and encouragement.
          </p>
          <p>
            Fewm Co., Ltd. is taking a leap as the company which creates value
            and grows with customers.
          </p>
          <span className="message-footer">C.E.O Jaeberm, Song</span>
        </>
      );
    } else {
      return (
        <>
          <p className="message-sub-para">
            <span>신뢰를</span> 바탕으로 <span>직원</span>과 <span>고객과</span>
            사회와 가치를 함께 하는 가치있는 회사
          </p>
          <p>
            퓨엠은 창립 이후 지금까지 신제품 개발과 소비자 만족 최우선의
            영업방침으로 지속적으로 노력해 왔으며, 이러한 노력의 결과 다수의
            인증과, 다수의 특허를 취득하여 회사의 가치를 높여, 양질의 품질로서
            고객의 요구에 책임을 다해 노력하고 있습니다. 또한 다년간의 축적해 온
            경험과 기술을 바탕으로, 사회에 필요로 하고, 보다 실용적이며, 안전한
            제품으로 고객의 가치를 증대시키기 위하여 노력하고 있습니다.
          </p>
          <p>
            이제 경영에 있어서 '사람'의 중요성은 그 어떤 자원과도 견줄 수 없을
            정도로 강조 되고 있습니다. 특히 지식경제 사회, 고객경제 사회로
            들어와 있는 지금, 그 중요성은 시간이 지나면서 더욱 강하게 부각되고
            있습니다. 개인의 가치는 중요한 부분이 아닐수 없습니다. 스스로 실력을
            갖추려고 노력하는 능동적인 동료를 위하여 아낌없이 지원하고, WORK AND
            LIFE BALANCE가 강조되는 시기에 회사와 가정이 균형을 이루어 행복할 수
            있도록 앞장서겠습니다.
          </p>
          <p>
            앞으로도 더욱 노력하고 발전하는 저희 회사의 모습을 함께해 주시고
            더욱 많은 지도 편달 부탁드립니다.
          </p>
          <div><span className="message-footer">C.E.O 송 재 범</span></div>
          <p>
            ㈜퓨엠은 고객과 함께 성장하는 가치 창조의 기업으로 도약하고 있습니다
          </p>
        </>
      );
    }
  };
  return (
    <>
      <div>
        <CommonTitle title={"MessagefromCEO"} />
      </div>
      <div className="message-container">
        <div>{Imgfunction("greetBanner")}</div>
        <div className="vertical-line">{Imgfunction("greetLine")}</div>
        {renderlang()}
      </div>
    </>
  );
};
export default MessageCeo;
