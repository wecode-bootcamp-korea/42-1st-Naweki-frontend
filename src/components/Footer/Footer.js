import React from 'react';
import { HELP_DATA } from './data/helpData';
import { ICON_DATA } from './data/iconData';
import { ABOUT_NAWEKI_DATA } from './data/aboutNawekiData';
import './Footer.scss';

function Footer() {
  return (
    <div className="footer">
      <div className="menu-wrapper">
        <div className="footerTextBox">
          <div className="footerNewsBox">
            <div className>새로운 소식</div>
            <div className>멤버 가입</div>
            <div className>매장 안내</div>
            <div className>나이키 저널</div>
          </div>
          <ul className="footerHelpBox">
            <li className="help">도움말</li>
            {HELP_DATA.map(title => (
              <li className="helpDetail" key={title.id}>
                {title.title}
              </li>
            ))}
          </ul>
          <ul className="nawekiInfoBox">
            <li className="aboutNawekiContainer">ABOUT Naweki</li>
            {ABOUT_NAWEKI_DATA.map(data => (
              <li className="aboutNaweki" key={data.id}>
                {data.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="iconBox">
          {ICON_DATA.map(icon => (
            <img className="icon" key={icon.id} src={icon.src} alt={icon.alt} />
          ))}
        </div>
      </div>
      <div className="footerRow">
        <div className="countryBox">
          <button className="country">
            <img
              className="mapIcon"
              src="https://cdn-icons-png.flaticon.com/128/2642/2642502.png"
              alt="위치"
            />
            <div className="korea">대한민국</div>
          </button>
          <div className="copyright">
            © 2023 Naweki, Inc. All Rights Reserved
          </div>
        </div>

        <div className="service">
          <div className="termsOfService">이용약관</div>
          <div className="privacyPolicy">개인정보처리방침</div>
        </div>
      </div>
      <hr className="line" />
      <div className="footerInfoSection">
        <div className="footerBusinessInfo">
          (유)나위키코리아 대표 Yujinlee, 유진리 | 서울 강남구 나위키로 137
          강남파이낸셜센터 26층 | 통신판매업신고번호 2008-서울강남-03721 |
          등록번호 123-45-6789
          <span className="proprietorInfo">사업자 정보 확인</span>
        </div>
        <div className="footerPaymentInfo">
          현금 등으로 결제 시 안전 거래를 위해 나위키 쇼핑몰에서 가입하신
          한국결제네트웍스 유한회사의 구매안전 서비스(
          <span className="deposit">결제대금예치</span>)를 이용하실 수 있습니다.
        </div>
      </div>
      <div className="footerServiceInfo">
        <div className="ServiceInfo">
          고객센터 전화 문의 <span className="serviceNum">010-123-4567</span>
          FAX 01-2345-6789 | 이메일
          <span className="serviceEmail">service@naweki.co.kr </span>|
          호스팅서비스사업자 (유)나위키코리아
        </div>
        <div className="footerLegalInfo">
          콘텐츠산업진흥법에 의한 콘텐츠 보호 안내
        </div>
        <span className="seeDetails">자세히 보기</span>
      </div>
    </div>
  );
}

export default Footer;
