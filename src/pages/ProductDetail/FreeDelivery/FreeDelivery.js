import React from 'react';

function FreeDelivery() {
  return (
    <div className="freeDelivery">
      <div className="deliveryInfo">
        <p className="delivery">일반 배송</p>
        <p>• 배송지역: 전국 (일부 지역 제외)</p>
        <p>• 배송비: 무료배송</p>
        <p>
          • 제품 수령일로부터 14일 이내 제품에 대해서만 무료 반품 서비스가
          가능합니다.
        </p>
        <p>일반 배송</p>
        <button>자세히 알아보기</button>
        <p>반품</p>
        <button>자세히 알아보기</button>
      </div>
      <div className="todayService">
        오늘도착 서비스 • 이용시간: 낮 12시까지 결제 시, 당일 도착 (일요일,
        공휴일 제외) • 서비스지역: 서울∙과천∙의왕∙군포∙수원∙성남∙안양시 전체,
        용인시 수지구∙기흥구, 부천시 중동∙상동∙심곡동 • 서비스비용: 5,000원
        자세히 알아보기
      </div>
      <div className="afterService">
        A/S 안내 • 나이키 온라인에서 구매하신 제품에 대한 A/S 는 나이키코리아
        고객센터(080-022-0182)에서 유선으로만 접수 가능합니다. 자세히 알아보기
      </div>
    </div>
  );
}

export default FreeDelivery;
