import React from 'react';
import { provinceData } from '../data/provinceData';
import './PaymentOptionInput.scss';

const PaymentOption = () => {
  return (
    <div className="paymentOptionInput">
      <div className="infoWrapper">
        <input className="infoInput" type="text" placeholder="성*"></input>
        <input className="infoInput" type="text" placeholder="이름*"></input>
      </div>
      <input
        className="paymentInput"
        type="text"
        placeholder="도로명 주소*"
      ></input>

      <div>
        <input
          className="paymentInput"
          type="text"
          placeholder="건물/아파트, 층, 호수"
        ></input>
        <p className="notRequired">선택사항</p>
      </div>

      <select className="paymentInput">
        {provinceData.map(province => (
          <option className="provinceOption" key={province.id}>
            {province.name}
          </option>
        ))}
      </select>

      <input
        className="paymentInput"
        type="text"
        placeholder="시/구/군*"
      ></input>

      <div>
        <input
          className="paymentInput"
          type="text"
          placeholder="읍/면/동"
        ></input>
        <p className="notRequired">선택사항</p>
      </div>

      <input
        className="paymentInput"
        type="number"
        placeholder="우편번호*"
      ></input>
      <div className="infoWrapper">
        <input
          className="infoInput"
          type="number"
          placeholder="전화번호* (-없이 작성)"
        ></input>
        <input className="infoInput" type="text" placeholder="이메일*"></input>
      </div>

      <div className="btnWrapper">
        <button className="paymentOptionBtn">저장 및 계속</button>
      </div>
    </div>
  );
};

export default PaymentOption;
