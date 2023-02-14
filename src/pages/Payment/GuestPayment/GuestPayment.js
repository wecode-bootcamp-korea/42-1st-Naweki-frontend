import React, { useState } from 'react';
import GuestStart from './GuestStart/GuestStart';
import ShippingOptionInput from '../ShippingOptionInput/ShippingOptionInput';
import ShippingOption from '../ShippingOption/ShippingOption';
import PaymentAside from '../PaymentAside/PaymentAside';
import PaymentSelect from '../PaymentSelect/PaymentSelect';
import PaymentSelected from '../PaymentSelected/PaymentSelected';
import PaymentCompleted from '../PaymentCompleted/PaymentCompleted';
import Disabled from '../Disabled/Disabled';
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
  const [selectedRadio, setIsSelectedRadio] = useState('');

  const onClickToPayment = () => {
    setToShippingOption(true);
  };

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

  const onChangeSelectedRadio = e => {
    const { value } = e.target;
    setIsSelectedRadio(value);
  };

  return (
    <div className="guestPayment">
      {toShippingOption === false ? (
        <GuestStart onClickToPayment={onClickToPayment} />
      ) : (
        <>
          <div className="paymentParagraph">결제하기</div>
          <div className="guestPaymentWrapper">
            <div>
              {isFilled === false ? (
                <>
                  <ShippingOptionInput
                    userData={userData}
                    onChangeInput={onChangeInput}
                    onClickToSelect={onClickToSelect}
                  />
                  <hr />
                  <Disabled />
                </>
              ) : (
                <>
                  <ShippingOption userData={userData} />
                  <hr />
                  {isSelected === false ? (
                    <>
                      <PaymentSelect
                        onClickToComplete={onClickToComplete}
                        selectedRadio={selectedRadio}
                        onChangeSelectedRadio={onChangeSelectedRadio}
                      />
                      <hr />
                      <div className="disabledTitle">주문 완료</div>
                    </>
                  ) : (
                    <>
                      <PaymentSelected selectedRadio={selectedRadio} />
                      <hr />
                      <PaymentCompleted />
                    </>
                  )}
                </>
              )}
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
