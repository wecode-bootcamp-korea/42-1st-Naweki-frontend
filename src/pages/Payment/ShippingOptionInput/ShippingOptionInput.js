import React, { useState } from 'react';
import { PROVINCE_DATA } from './data/provinceData';
import './ShippingOptionInput.scss';

const ShippingOptionInput = ({ userData, onChangeInput, onClickToSelect }) => {
  const [isShown, setIsShown] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const {
    first_name,
    last_name,
    email,
    phone_number,
    province,
    city,
    zip_code,
    address,
  } = userData;

  const onKeyUpRequiredInput = () => {
    setIsShown(true);
  };

  return (
    <div className="shippingOptionInput">
      <div className="titleWrapper">
        <div className="paymentTitle">배송 옵션</div>
        <div className="edit">편집</div>
      </div>

      <div className="infoWrapper">
        <div>
          <input
            className={isShown ? 'requiredInput' : 'infoInput'}
            name="last_name"
            type="text"
            placeholder="성*"
            onChange={onChangeInput}
            onKeyUp={onKeyUpRequiredInput}
            value={userData.last_name}
          />
          {isShown && <div className="required">성을 입력하세요.</div>}
        </div>

        <div>
          <input
            className={isShown ? 'requiredInput' : 'infoInput'}
            name="first_name"
            type="text"
            placeholder="이름*"
            onChange={onChangeInput}
            onKeyUp={onKeyUpRequiredInput}
            value={userData.first_name}
          />
          {isShown && <div className="required">이름을 입력하세요.</div>}
        </div>
      </div>

      <div>
        <input
          className={isShown ? 'requiredInput' : 'infoInput'}
          type="text"
          placeholder="도로명 주소*"
        />
        {isShown && <div className="required">도로명 주소를 입력하세요.</div>}
      </div>

      <div>
        <input
          className="paymentInput"
          type="text"
          placeholder="건물/아파트, 층, 호수"
        />
        <div className="notRequired">선택사항</div>
      </div>

      <select className="paymentInput">
        {PROVINCE_DATA.map(province => (
          <option
            className="provinceOption"
            name={province}
            key={province.id}
            onChange={onChangeInput}
            onKeyUp={onKeyUpRequiredInput}
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
          onKeyUp={onKeyUpRequiredInput}
          value={userData.city}
        />
        {isShown && <div className="required">구를 입력하세요.</div>}
      </div>

      <div>
        <input className="paymentInput" type="text" placeholder="읍/면/동" />
        <div className="notRequired">선택사항</div>
      </div>

      <div>
        <input
          className="paymentInput"
          name="zip_code"
          type="text"
          placeholder="우편번호*"
          onChange={onChangeInput}
          onKeyUp={onKeyUpRequiredInput}
          value={userData.zip_code}
        />
        {isShown && <div className="required">구를 입력하세요.</div>}
      </div>

      <div className="infoWrapper">
        <div>
          <input
            className="infoInput"
            name="phone_number"
            type="text"
            placeholder="전화번호* (- 포함 작성)"
            onChange={onChangeInput}
            onKeyUp={onKeyUpRequiredInput}
            value={userData.phone_number}
          />
          {isShown && <div className="required">전화번호를 입력하세요.</div>}
        </div>

        <div>
          <input
            className="infoInput"
            name="email"
            type="text"
            placeholder="이메일*"
            onChange={onChangeInput}
            onKeyUp={onKeyUpRequiredInput}
            value={userData.email}
          />
          {isShown && <div className="required">이메일 주소를 입력하세요.</div>}
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
