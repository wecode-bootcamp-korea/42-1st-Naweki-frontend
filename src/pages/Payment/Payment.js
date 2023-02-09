import React, { useState, useEffect } from 'react';
import Guest from './Guest/Guest';
import PaymentOption from './PaymentOption/PaymentOption';
import PaymentOptionInput from './PaymentOptionInput/PaymentOptionInput';
import PaymentAside from './PaymentAside/PaymentAside';
import PaymentBox from './PaymentBox/PaymentBox';
import CompletedOrder from './CompletedOrder/CompletedOrder';
import './Payment.scss';

const Payment = () => {
  const [showData, setShowData] = useState(false);
  const [userData, setUserData] = useState([]);
  const [clickPayment, setClickPayment] = useState(true);
  const [clickOrder, setClickOrder] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await fetch('data/userData.json');
      const data = await res.json();
      setShowData(true);
      setUserData(data);
    })();
  }, []);

  return (
    <div className="payment">
      {/* <Guest /> */}
      <p className="paymentParagraph">결제하기</p>
      <div className="contentWrapper">
        <div>
          <div className="titleWrapper">
            <p className="paymentTitle">배송 옵션</p>
            <p className="edit">편집</p>
          </div>
          {showData ? (
            <PaymentOption data={userData} />
          ) : (
            <PaymentOptionInput />
          )}
          {/* <PaymentOptionInput /> */}
          <hr />
          <PaymentBox />
          <hr />
          <CompletedOrder />
        </div>
        <PaymentAside />
      </div>
    </div>
  );
};

export default Payment;
