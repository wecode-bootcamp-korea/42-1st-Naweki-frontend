import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const onChange = e => {
    setUserEmail(e.target.value);
  };
  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate();

  const sendEmail = () => {
    fetch('http://10.58.52.165:3000/users/lookup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ email: userEmail }),
    })
      .then(res => res.json())
      .then(response => {
        if (response.message === 'EAMIL_IS_VERIFIED') {
          navigate('/newuser');
        }
      });
  };

  return (
    <div className="login">
      <div className="loginBox">
        <header className="header">
          <div className="logoBox">
            <img
              className="swooshLogo"
              src="./images/swoosh-logo.jpg"
              alt="swoosh logo"
            />
          </div>
          <h1 className="loginGuide">
            가입 또는 로그인을 위해 이메일을 입력하세요.
          </h1>
        </header>
        <div className="loginInputBox">
          <div className="regionBox">
            <span className="selectedRegion">대한민국</span>
            <select className="changeRegion">
              <option value="first" className="changeRegionDefault">
                변경
              </option>
            </select>
          </div>
          <form className="emailInputBox">
            <input
              type="text"
              className="emailInput"
              id="email"
              placeholder="이메일"
              onChange={onChange}
            />
            <label htmlFor="email" />
          </form>
          <div className="agreementBox">
            <div className="agreement">
              계속 진행하면 나이키의{' '}
              <Link
                to="https://agreementservice.svs.nike.com/rest/agreement?agreementType=privacyPolicy&country=KR&language=ko&requestType=redirect&uxId=4fd2d5e7db76e0f85a6bb56721bd51df"
                className="personalInfoAgreement"
              >
                개인 정보 처리 방침
              </Link>
              및{' '}
              <Link
                to="https://agreementservice.svs.nike.com/rest/agreement?agreementType=termsOfUse&country=KR&language=ko&requestType=redirect&uxId=4fd2d5e7db76e0f85a6bb56721bd51df"
                className="usingAgreement"
              >
                {' '}
                이용약관
              </Link>
              에 동의하게 됩니다.
            </div>
          </div>
          <div className="continueBtnBox">
            <button onClick={sendEmail} type="submit" className="continueBtn">
              계속
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
