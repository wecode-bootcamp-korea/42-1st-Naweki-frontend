import React, { useState } from 'react';
import './ShippingOptionInput.scss';

const ShippingOptionInput = ({
  userData,
  onChangeInput,
  onClickToSelect,
  isFilled,
}) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    province,
    city,
    postalCode,
  } = userData;

  return (
    <div className="shippingOptionInput">
      <div className="titleWrapper">
        <div className="paymentTitle">배송 옵션</div>
        <div className="edit">편집</div>
      </div>

      <div className="infoWrapper">
        <div>
          <input
            className="infoInput"
            name="lastName"
            type="text"
            placeholder="성*"
            onChange={onChangeInput}
            value={lastName}
          />
        </div>

        <div>
          <input
            className="infoInput"
            name="firstName"
            type="text"
            placeholder="이름*"
            onChange={onChangeInput}
            value={firstName}
          />
        </div>
      </div>

      <div>
        <input
          className="paymentInput"
          name="province"
          type="text"
          placeholder="도/광역시*"
          onChange={onChangeInput}
          value={province}
        />
      </div>

      <div>
        <input
          className="paymentInput"
          name="city"
          type="text"
          placeholder="시/구/군*"
          onChange={onChangeInput}
          value={city}
        />
      </div>

      <div>
        <input
          className="paymentInput"
          name="postalCode"
          type="text"
          placeholder="우편번호*"
          onChange={onChangeInput}
          value={postalCode}
        />
      </div>

      <div className="infoWrapper">
        <div>
          <input
            className="infoInput"
            name="phoneNumber"
            type="text"
            placeholder="전화번호* (- 포함 작성)"
            onChange={onChangeInput}
            value={phoneNumber}
          />
        </div>

        <div>
          <input
            className="infoInput"
            name="email"
            type="text"
            placeholder="이메일*"
            onChange={onChangeInput}
            value={email}
          />
        </div>
      </div>

      <div className="btnWrapper">
        <button className="paymentOptionBtn" onClick={onClickToSelect}>
          저장 및 계속
        </button>
      </div>
    </div>
  );
};

export default ShippingOptionInput;
