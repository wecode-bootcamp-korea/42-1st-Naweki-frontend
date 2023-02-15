import React from 'react';
import { Link } from 'react-router-dom';
import './PaymentNav.scss';

const PaymentNav = () => {
  return (
    <nav className="paymentNav">
      <div className="logoWrapper">
        <Link className="toMain" to="/">
          <img className="logo" alt="Logo Img" src="images/logo.jpg" />
        </Link>
      </div>

      <div className="paymentProfileWrapper">
        <img
          className="profileImg"
          alt="Profile Img"
          src="/images/profile.png"
        />
        <p>김코딩님</p>
      </div>
    </nav>
  );
};

export default PaymentNav;
