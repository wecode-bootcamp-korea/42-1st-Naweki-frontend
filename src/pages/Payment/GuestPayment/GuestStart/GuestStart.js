import React from 'react';
import { Link } from 'react-router-dom';
import './GuestStart.scss';

const GuestStart = ({ onClickToPayment }) => {
  return (
    <div className="guestStart">
      <h1>결제 수단 선택</h1>
      <div className="select">
        <div className="memberWrapper">
          <div className="guestTitle">멤버로서 무료 배송 결제</div>
          <div className="guestDesc">
            나위키 앱에서 나위키 멤버 로그인을 사용하세요.
          </div>
          <div className="btnWrapper">
            <Link to="/login">
              <button className="guestBtn">로그인</button>
              <button className="guestBtn">등록하기</button>
            </Link>
          </div>
        </div>
        <div className="guestWrapper">
          <div className="guestTitle">게스트로 결제</div>
          <div className="guestDesc">
            주문 결제 프로세스 중 언제든지 무료 나위키 멤버 프로필을 생성할 수
            있습니다.
          </div>
          <button className="guestBtn" onClick={onClickToPayment}>
            비회원 결제
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuestStart;
