import React from 'react';
import './ShippingOption.scss';

const ShippingOption = ({ userData }) => {
  return (
    <div className="shippingOption">
      <div className="shippingWrapper">
        <div className="nameWrapper">
          <p>
            <span name="last_name">{userData.last_name}</span>
            <span name="first)name">{userData.first_name}</span>
          </p>
        </div>
        <p>
          <span name="province">{userData.province}</span>
          <span name="city">{userData.city}</span>
        </p>
        <p name="zip_code">{userData.zip_code}</p>
        <p name="email">{userData.email}</p>
        <p name="phone_number">{userData.phone_number}</p>
      </div>

      <div className="shippingWrapper">
        <p>배송 방법</p>
        <p>무료</p>
        <p>도착예정일: 2월 27일 (월) - 3월 3일 (금)</p>
      </div>
    </div>
  );
};

export default ShippingOption;
