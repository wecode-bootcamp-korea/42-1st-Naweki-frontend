import React from 'react';
import { provinceData } from '../data/provinceData';
import './PaymentOptionInput.scss';

const PaymentOption = () => {
  return (
    <div className="paymentOptionInput">
      <div className="infoWrapper">
        <div>
          <input className="infoInput" type="text" placeholder="성*" required />
          <p className="required">성을 입력하세요.</p>
        </div>
        <div>
          <input
            className="infoInput"
            type="text"
            placeholder="이름*"
            required
          />
          <p className="required">이름을 입력하세요.</p>
        </div>
      </div>
      <div>
        <input
          className="paymentInput"
          type="text"
          placeholder="도로명 주소*"
          required
        />
        <p className="required">유효한 주소를 입력하세요.</p>
      </div>

      <div>
        <input
          className="paymentInput"
          type="text"
          placeholder="건물/아파트, 층, 호수"
        />
        <p className="notRequired">선택사항</p>
      </div>

      <select className="paymentInput">
        {provinceData.map(province => (
          <option className="provinceOption" key={province.id}>
            {province.name}
          </option>
        ))}
      </select>

      <div>
        <input
          className="paymentInput"
          type="text"
          placeholder="시/구/군*"
          required
        />
        <p className="required">구를 입력하세요.</p>
      </div>

      <div>
        <input className="paymentInput" type="text" placeholder="읍/면/동" />
        <p className="notRequired">선택사항</p>
      </div>

      <input
        className="paymentInput"
        type="number"
        placeholder="우편번호*"
        required
      />
      <div className="infoWrapper">
        <div>
          <input
            className="infoInput"
            type="number"
            placeholder="전화번호* (- 포함 작성)"
            required
          />
          <p className="required">필수 작성 항목입니다.</p>
        </div>

        <div>
          <input
            className="infoInput"
            type="text"
            placeholder="이메일*"
            required
          />
          <p className="required">유효한 이메일 주소를 입력하세요.</p>
        </div>
      </div>

      <div className="btnWrapper">
        <button className="paymentOptionBtn">저장 및 계속</button>
      </div>
    </div>
  );
};

export default PaymentOption;
