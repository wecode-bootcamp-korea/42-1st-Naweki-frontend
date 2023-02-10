import React from 'react';
import { ICON_DATA } from './data/iconData';
import './Footer.scss';

function Footer() {
  return (
    <div className="footer">
      <div className="footerTextBox">
        <div className="footerLeftBox">
          <div className="newsTopLeft">새로운 소식</div>
          <div className="membership">멤버 가입</div>
          <div className="storeInfo">매장 안내</div>
          <div className="journal">나이키 저널</div>
        </div>
        <ul className="footerMiddleBox">
          <li className="help">도움말</li>
          <li>주문 배송 조회</li>
          <li>반품 정책</li>
          <li>결제 방법</li>
          <li>공지사항</li>
          <li>문의하기</li>
        </ul>
        <ul className="footerRightBox">
          <li className="aboutNike">ABOUT Naweki</li>
          <li className="news">소식</li>
          <li className="require">채용</li>
          <li className="investor">투자자</li>
          <li className="sustainability">지속가능성</li>
        </ul>
      </div>
      <div className="iconBox">
        {/* {ICON_DATA.map(icon => {
          return <Footer key={icon.id} {...icon}
        })} */}
        {/* <img
          className="twitter"
          src="https://cdn-icons-png.flaticon.com/128/3670/3670151.png"
          alt="트위터 바로가기"
        />
        <img
          className="facebook"
          src="https://cdn-icons-png.flaticon.com/128/145/145802.png"
          alt="페이스북 바로가기"
        />
        <img
          className="youtube"
          src="https://cdn-icons-png.flaticon.com/128/3670/3670147.png"
          alt="유튜브 바로가기"
        />
        <img
          className="instagram"
          src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png"
          alt="인스타그램 바로가기"
        /> */}
      </div>
      <div className="footerRow">
        <div className="countryBox">
          <div className="country">
            <img
              className="mapIcon"
              src="https://cdn-icons-png.flaticon.com/128/2642/2642502.png"
              alt="위치"
            />
            <div className="korea">대한민국</div>
          </div>
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
      <div className="footerInfoSectionFirst">
        <div className="footerBusinessInfo">
          (유)나위키코리아 대표 Yujinlee, 유진리 | 서울 강남구 나위키로 137
          강남파이낸셜센터 26층 | 통신판매업신고번호 2008-서울강남-03761 |
          등록번호 123-45-6789
          <span className="proprietorInfo">사업자 정보 확인</span>
        </div>
        <div className="footerPaymentInfo">
          현금 등으로 결제 시 안전 거래를 위해 나위키 쇼핑몰에서 가입하신
          한국결제네트웍스 유한회사의 구매안전 서비스(
          <span className="deposit">결제대금예치</span>
          )를 이용하실 수 있습니다.
        </div>
      </div>
      <div className="footerInfoSectionSecond">
        <div className="footerServiceInfo">
          고객센터 전화 문의 <span className="serviceNum">010-123-4567</span>
          FAX 01-2345-6789 | 이메일 service@naweki.co.kr | 호스팅서비스사업자
          (유)나위키코리아
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
