import React from 'react';
import './MemberShippingOption.scss';

const MemberShippingOption = ({ memberData }) => {
  return (
    <div className="memberShippingOption">
      <div className="shippingWrapper">
        <div className="nameWrapper">
          <p>
            <span name="last_name">{memberData.last_name}</span>
            <span name="first)name">{memberData.first_name}</span>
          </p>
        </div>
        <p>
          <span name="province">{memberData.province}</span>
          <span name="city">{memberData.city}</span>
        </p>
        <p name="zip_code">{memberData.zip_code}</p>
        <p name="email">{memberData.email}</p>
        <p name="phone_number">{memberData.phone_number}</p>
      </div>

      <div className="shippingWrapper">
        <p>배송 방법</p>
        <p>무료</p>
        <p>도착예정일: 2월 27일 (월) - 3월 3일 (금)</p>
      </div>
    </div>
  );
};

export default MemberShippingOption;
