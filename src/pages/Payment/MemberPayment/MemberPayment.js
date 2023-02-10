import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MemberShippingOption from './MemberShippingOption/MemberShippingOption';
import PaymentSelect from '../PaymentSelect/PaymentSelect';
import PaymentCompleted from '../PaymentCompleted/PaymentCompleted';
import PaymentAside from '../PaymentAside/PaymentAside';
import './MemberPayment.scss';

const MemberPayment = () => {
  const [memberData, setMemberData] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch('data/memberData.json');
      const data = await res.json();
      setMemberData(data);
    })();
  }, []);

  const [isSelected, setIsSelected] = useState(false);

  const navigate = useNavigate();

  const onClickToComplete = e => {
    e.preventDefault();
    setIsSelected(true);
  };

  const onClickToMain = () => navigate('/main');

  return (
    <div className="memberPayment">
      <p className="paymentParagraph">결제하기</p>
      <div className="memberPaymentWrapper">
        <div>
          <MemberShippingOption memberData={memberData} />
          <hr />
          <PaymentSelect onClickToComplete={onClickToComplete} />
          {isSelected ? (
            <>
              <hr />
              <PaymentCompleted onClickToMain={onClickToMain} />
            </>
          ) : null}
        </div>
        <div>
          <PaymentAside />
        </div>
      </div>
    </div>
  );
};

export default MemberPayment;
