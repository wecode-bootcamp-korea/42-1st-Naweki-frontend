import React, { useState } from 'react';
import { PROVINCE_DATA } from './data/provinceData';
import './ShippingOptionInput.scss';

const ShippingOptionInput = ({
  userData,
  onChangeInput,
  onClickToSelect,
  isFilled,
}) => {
  const [isShown, setIsShown] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(false);
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

  const onFocusOut = e => {
    if (e.target.value === '') {
      setIsShown(true);
    }
  };

  return (
    <div className={isFilled ? 'none' : 'shippingOptionInput'}>
      <div className="titleWrapper">
        <div className="paymentTitle">배송 옵션</div>
        <div className="edit">편집</div>
      </div>

      <div className="infoWrapper">
        <div>
          <input
            className={isShown ? 'requiredInfo' : 'infoInput'}
            name="last_name"
            type="text"
            placeholder="성*"
            onChange={onChangeInput}
            value={userData.last_name}
            onBlur={onFocusOut}
          />
          {isShown && <div className="required">성을 입력하세요.</div>}
        </div>

        <div>
          <input
            className={isShown ? 'requiredInfo' : 'infoInput'}
            name="first_name"
            type="text"
            placeholder="이름*"
            onChange={onChangeInput}
            value={userData.first_name}
          />
          {isShown && <div className="required">이름을 입력하세요.</div>}
        </div>
      </div>

      <div>
        <input
          className={isShown ? 'requiredPayment' : 'paymentInput'}
          type="text"
          placeholder="도로명 주소*"
          onChange={onChangeInput}
          value={userData.address}
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

      <div>
        <input
          className={isShown ? 'requiredPayment' : 'paymentInput'}
          type="text"
          placeholder="도/광역시*"
          onChange={onChangeInput}
          value={userData.address}
        />
        {isShown && <div className="required">도/광역시를 입력하세요.</div>}
      </div>

      <div>
        <input
          className={isShown ? 'requiredPayment' : 'paymentInput'}
          name="city"
          type="text"
          placeholder="시/구/군*"
          onChange={onChangeInput}
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
          className={isShown ? 'requiredPayment' : 'paymentInput'}
          name="zip_code"
          type="text"
          placeholder="우편번호*"
          onChange={onChangeInput}
          value={userData.zip_code}
        />
        {isShown && <div className="required">구를 입력하세요.</div>}
      </div>

      <div className="infoWrapper">
        <div>
          <input
            className={isShown ? 'requiredInfo' : 'infoInput'}
            name="phone_number"
            type="text"
            placeholder="전화번호* (- 포함 작성)"
            onChange={onChangeInput}
            value={userData.phone_number}
          />
          {isShown && <div className="required">전화번호를 입력하세요.</div>}
        </div>

        <div>
          <input
            className={isShown ? 'requiredInfo' : 'infoInput'}
            name="email"
            type="text"
            placeholder="이메일*"
            onChange={onChangeInput}
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
