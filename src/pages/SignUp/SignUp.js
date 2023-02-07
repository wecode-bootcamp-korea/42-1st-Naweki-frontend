import React from 'react';
import './SignUp.scss';

const SignUp = () => {
  return (
    <div className="signupContainer">
      <div className="membershipBox">
        <h6 className="membership">나이키 멤버십</h6>
      </div>
      <div className="titleBox">
        <h1 className="title">우리 모두 선수로서 하나되는 곳</h1>
        <p className="titlePara">
          나이키와 함께 새로운 미래를 만들어 보세요.
          <br />
          나이키 멤버가 되어 최고의 제품을 가장 먼저 만나보고,
          <br />
          새롭게 도전하는 다양한 커뮤니티와 함께 일상 속 영감을 받아보세요.
        </p>
        <div className="joinMembershipBtnBox">
          <button className="joinMembershipBtn">멤버 가입하기</button>
        </div>
      </div>
      <div className="videoBox">
        <div className="video" />
      </div>
      <div className="memBenefitBox">
        <div className="memBenefit">나이키 멤버 혜택</div>
        <section className="welcomeCoupon">
          <div className="welcomeImage" /> {/* TODO: img로 변경 */}
          <div className="welcomeInfo">
            <h2 className="welcomeTitle">웰컴 쿠폰</h2>
            <p className="welcomePara">
              나이키 신규 멤버에게 문자로 발급되는 웰컴 쿠폰(1만원 할인코드)을
              통해 <br /> 첫 구매부터 할인 혜택까지 만나보세요.
            </p>
            <button className="welcomeDetailBtn">자세히 보기</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SignUp;
