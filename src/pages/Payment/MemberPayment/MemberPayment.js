import React, { useEffect, useState } from 'react';
import ShippingOptionInput from '../ShippingOptionInput/ShippingOptionInput';
import ShippingOption from '../ShippingOption/ShippingOption';
import PaymentAside from '../PaymentAside/PaymentAside';
import PaymentSelect from '../PaymentSelect/PaymentSelect';
import PaymentCompleted from '../PaymentCompleted/PaymentCompleted';
import Disabled from '../Disabled/Disabled';
import './MemberPayment.scss';
import { useNavigate } from 'react-router-dom';

const MemberPayment = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    primary: '',
    province: '',
    city: '',
    postalCode: '',
  });

  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    primary,
    province,
    city,
    postalCode,
  } = userData;

  const [isFilled, setIsFilled] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [cartList, setCartList] = useState([]);
  const [paymentData, setPaymentData] = useState([]);

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

  useEffect(() => {
    fetch('http://10.58.52.243:8000/cart/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('userToken'),
      },
    })
      .then(res => res.json())
      .then(data => {
        setCartList(data);
      });
  }, []);

  const {
    cartItemId,
    userId,
    styleCode,
    size,
    productId,
    quantity,
    price,
    productName,
    stock,
  } = cartList;

  const navigate = useNavigate();

  const onClickPayment = () => {
    fetch('http://10.58.52.214:3000/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('userToken'),
      },
      body: JSON.stringify({
        cart: cartList,
        shippingAddress: [
          {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
            primary: primary,
            province: province,
            city: city,
            postalCode: postalCode,
          },
        ],
      }),
    })
      .then(res => res.json())
      .then(data => {
        setPaymentData(data);
        navigate('/main');
      });
  };

  return (
    <div className="memberPayment">
      <p className="paymentParagraph">결제하기</p>
      <div className="memberPaymentWrapper">
        <div>
          <ShippingOptionInput
            className={isFilled && 'none'}
            isFilled={isFilled}
            userData={userData}
            onChangeInput={onChangeInput}
            onClickToSelect={onClickToSelect}
          />
          {isFilled ? (
            <>
              <ShippingOption userData={userData} />
              <hr />
              <PaymentSelect onClickToComplete={onClickToComplete} />
              <div className={isSelected && 'none'}>
                <hr />
                <div className="disabledTitle">주문 완료</div>
              </div>
              {isSelected && (
                <>
                  <hr />
                  <PaymentCompleted onClickPayment={onClickPayment} />
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
          <PaymentAside cartList={cartList} />
        </div>
      </div>
    </div>
  );
};

export default MemberPayment;
