import React from 'react';
import { PROVINCE_DATA } from './data/provinceData';
import './ShippingOptionInput.scss';

const ShippingOptionInput = ({ userData, onChangeInput, onClickToSelect }) => {
  return (
    <div className="shippingOptionInput">
      <div className="titleWrapper">
        <p className="paymentTitle">배송 옵션</p>
        <p className="edit">편집</p>
      </div>

      <div className="infoWrapper">
        <div>
          <input
            className="infoInput"
            name="last_name"
            type="text"
            placeholder="성*"
            onChange={onChangeInput}
            value={userData.last_name}
          />
          <p className="required">성을 입력하세요.</p>
        </div>

        <div>
          <input
            className="infoInput"
            name="first_name"
            type="text"
            placeholder="이름*"
            onChange={onChangeInput}
            value={userData.first_name}
          />
          <p className="required">이름을 입력하세요.</p>
        </div>
      </div>
      <div>
        <input
          className="paymentInput"
          type="text"
          placeholder="도로명 주소*"
          onChange={onChangeInput}
        />
        <p className="required">유효한 주소를 입력하세요.</p>
      </div>

      <div>
        <input
          className="paymentInput"
          type="text"
          placeholder="건물/아파트, 층, 호수"
          onChange={onChangeInput}
        />
        <p className="notRequired">선택사항</p>
      </div>

      <select className="paymentInput">
        {PROVINCE_DATA.map(province => (
          <option
            className="provinceOption"
            name={province}
            key={province.id}
            onChange={onChangeInput}
            value={userData.province}
          >
            {province.name}
          </option>
        ))}
      </select>

      <div>
        <input
          className="paymentInput"
          name="city"
          type="text"
          placeholder="시/구/군*"
          onChange={onChangeInput}
          value={userData.city}
        />
        <p className="required">구를 입력하세요.</p>
      </div>

      <div>
        <input className="paymentInput" type="text" placeholder="읍/면/동" />
        <p className="notRequired">선택사항</p>
      </div>

      <input
        className="paymentInput"
        name="zip_code"
        type="text"
        placeholder="우편번호*"
        onChange={onChangeInput}
        value={userData.zip_code}
      />
      <div className="infoWrapper">
        <div>
          <input
            className="infoInput"
            name="phone_number"
            type="text"
            placeholder="전화번호* (- 포함 작성)"
            onChange={onChangeInput}
            value={userData.phone_number}
          />
          <p className="required">필수 작성 항목입니다.</p>
        </div>

        <div>
          <input
            className="infoInput"
            name="email"
            type="text"
            placeholder="이메일*"
            onChange={onChangeInput}
            value={userData.email}
          />
          <p className="required">유효한 이메일 주소를 입력하세요.</p>
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
