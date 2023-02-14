import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ShippingOptionInput from '../ShippingOptionInput/ShippingOptionInput';
import ShippingOption from '../ShippingOption/ShippingOption';
import PaymentAside from '../PaymentAside/PaymentAside';
import PaymentSelect from '../PaymentSelect/PaymentSelect';
import PaymentCompleted from '../PaymentCompleted/PaymentCompleted';
import Disabled from '../Disabled/Disabled';
import './MemberPayment.scss';

const MemberPayment = () => {
  const [userData, setUserData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    province: '',
    city: '',
    zip_code: '',
  });
  const [isFilled, setIsFilled] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const onChangeInput = event => {
    const { name, value } = event.target;
    setUserData(prev => {
      return { ...prev, [name]: value };
    });
  };

  const onClickToSelect = e => {
    setIsFilled(true);
  };

  const onClickToComplete = e => {
    e.preventDefault();
    setIsSelected(true);
  };

  return (
    <div className="memberPayment">
      <p className="paymentParagraph">결제하기</p>
      <div className="memberPaymentWrapper">
        <div>
          <ShippingOptionInput
            userData={userData}
            onChangeInput={onChangeInput}
            onClickToSelect={onClickToSelect}
          />
          {isFilled ? (
            <>
              <ShippingOption userData={userData} />
              <hr />
              <PaymentSelect onClickToComplete={onClickToComplete} />
              {isSelected && (
                <>
                  <hr />
                  <PaymentCompleted />
                </>
              )}
            </>
          ) : (
            <>
              <hr />
              <Disabled />
            </>
          )}
        </div>
        <div>
          <PaymentAside />
        </div>
      </div>
    </div>
  );
};

export default MemberPayment;
