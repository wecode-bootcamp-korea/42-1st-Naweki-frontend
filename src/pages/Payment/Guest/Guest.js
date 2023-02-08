import React from 'react';
import './Guest.scss';

const Guest = () => {
  return (
    <div className="guest">
      <h1>결제 수단 선택</h1>
      <div className="select">
        <div className="memberWrapper">
          <p className="guestTitle">멤버로서 무료 배송 결제</p>
          <p className="desc">나위키 앱에서 나위키 멤버 로그인을 사용하세요.</p>
          <div className="btnWrapper">
            <button className="guestBtn">로그인</button>
            <button className="guestBtn">등록하기</button>
          </div>
        </div>
        <div className="guestWrapper">
          <p className="guestTitle">게스트로 결제</p>
          <p className="desc">
            주문 결제 프로세스 중 언제든지 무료 나위키 멤버 프로필을 생성할 수
            있습니다.
          </p>
          <button className="guestBtn">로그인</button>
        </div>
      </div>
    </div>
  );
};

export default Guest;
