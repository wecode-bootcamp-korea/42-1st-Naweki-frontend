import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Password.scss';

const Password = () => {
  const onChange = e => {
    setUserPw(e.target.value);
  };
  const [userPw, setUserPw] = useState('');
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/login');
  };

  // const getToken = () => {
  //   fetch('http://:3000/users/login')
  // }

  return (
    <div className="password">
      <div className="passwordBox">
        <header className="header">
          <div className="logoBox">
            <img
              className="swooshLogo"
              src="./images/swoosh-logo.jpg"
              alt="swoosh logo"
            />
          </div>
          <h1 className="passwordGuide">비밀번호를 입력하세요.</h1>
        </header>
        <div className="userEmailContainer">
          <div className="userEmailBox">
            <span className="userEmail">wecode@naver.com</span>
            <button onClick={goToLogin} className="edit">
              편집
            </button>
          </div>
          <div className="passwordInputBox">
            <input
              onChange={onChange}
              type="text"
              className="passwordInput"
              id="password"
              placeholder="비밀번호"
            />
            <label htmlFor="password" />
          </div>
          <div className="findPwdBox">
            <button className="findPwd">비밀번호 찾기</button>
          </div>
          <div className="loginBtnBox">
            <button className="loginBtn">로그인</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Password;
