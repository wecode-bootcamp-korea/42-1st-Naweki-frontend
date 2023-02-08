import React from 'react';
import './SignUp.scss';
import Benefits from './Benefits/Benefits';
import MoreBenefits from './Benefits/MoreBenefits';
import Community from './Benefits/Community';

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
        <video
          src="images/nike_signup.mp4"
          autoplay="autoplay"
          muted="muted"
          loop
          className="nikeVideo"
        />
      </div>
      <div className="memBenefit">
        <div className="memBenefitTitle">나이키 멤버 혜택</div>
        <span className="benefitsBoxes">
          <Benefits />
        </span>
      </div>
      <div className="moreBenefit">
        <div className="moreBenefitTitle">더 많은 혜택</div>
        <div className="moreBenefitBoxes">
          <MoreBenefits />
        </div>
      </div>
      <div className="shopInfo">
        <h1 className="shopInfoTitle">주요 매장 서비스 안내</h1>
        <div className="shopInfoBoxes">
          <div className="shopInfoTexts">
            <p className="shopInfoPara">
              제품 커스텀부터 스타일링까지. <br /> 나이키 매장에서 제공하는
              특별하고 <br /> 다양한 서비스를 만나보세요.
            </p>
            <button className="shopInfoBtn">자세히 보기</button>
          </div>
          <div className="shopInfoImage" />
        </div>
      </div>
      <div className="community">
        <h1 className="communityTitle">나이키 커뮤니티와 함께하기</h1>
        <p className="communityPara">
          NRC, NTC 앱을 통해 커뮤니티에 함께하세요.
        </p>
        <div className="communityBoxes">
          <Community />
        </div>
      </div>
      <div className="joinMemebership">
        <div className="joinMembershipImage" />
        <button className="joinBtn">멤버 가입하기</button>
      </div>
    </div>
  );
};

export default SignUp;
