import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GuestStart from './GuestStart/GuestStart';
import ShippingOptionInput from '../ShippingOptionInput/ShippingOptionInput';
import ShippingOption from '../ShippingOption/ShippingOption';
import PaymentAside from '../PaymentAside/PaymentAside';
import PaymentSelect from '../PaymentSelect/PaymentSelect';
import PaymentCompleted from '../PaymentCompleted/PaymentCompleted';
import './GuestPayment.scss';

const GuestPayment = () => {
  const [toShippingOption, setToShippingOption] = useState(false);
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

  const onClickToPayment = () => {
    setToShippingOption(true);
  };

  const onChangeInput = event => {
    const { name, value } = event.target;
    setUserData(prev => {
      return { ...prev, [name]: value };
    });
  };

  const navigate = useNavigate();

  const onClickToSelect = e => {
    setIsFilled(true);
  };

  const onClickToComplete = e => {
    e.preventDefault();
    setIsSelected(true);
  };

  const onClickToMain = () => navigate('/main');

  return (
    <div className="guestPayment">
      {toShippingOption === false ? (
        <GuestStart onClickToPayment={onClickToPayment} />
      ) : (
        <>
          <p className="paymentParagraph">결제하기</p>
          <div className="guestPaymentWrapper">
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
                  {isSelected ? (
                    <>
                      <hr />
                      <PaymentCompleted onClickToMain={onClickToMain} />
                    </>
                  ) : null}
                </>
              ) : null}
            </div>
            <div>
              <PaymentAside />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default GuestPayment;
