import React from 'react';
import './ShippingOption.scss';

const ShippingOption = ({ userData }) => {
  return (
    <div className="shippingOption">
      <div className="titleWrapper">
        <div className="paymentTitle">배송 옵션</div>
        <img
          className="checkImg"
          alt="Check Img"
          src="images/payment/check.png"
        />
      </div>

      <div className="shippingWrapper">
        <div>배송 주소</div>
        <div className="nameWrapper">
          <div>
            <span className="result" name="last_name">
              {userData.last_name}
            </span>
            <span className="result" name="first)name">
              {userData.first_name}
            </span>
          </div>
        </div>
        <div>
          <span className="result" name="province">
            {userData.province}
          </span>
          <span className="result" name="city">
            {userData.city}
          </span>
        </div>
        <div className="result" name="zip_code">
          {userData.zip_code}
        </div>
        <div className="result" name="email">
          {userData.email}
        </div>
        <div className="result" name="phone_number">
          {userData.phone_number}
        </div>
      </div>

      <div className="shippingWrapper">
        <div>배송 방법</div>
        <div>무료</div>
        <div>도착예정일: 2월 27일 (월) - 3월 3일 (금)</div>
      </div>
    </div>
  );
};

export default ShippingOption;
