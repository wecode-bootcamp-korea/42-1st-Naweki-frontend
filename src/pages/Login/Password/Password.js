import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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

  const location = useLocation();
  const userEmail = location?.state?.title;

  const getToken = () => {
    fetch('http://10.58.52.119:3000/users/login', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: userEmail, password: userPw }),
    })
      .then(res => {
        if (res.ok === true) {
          return res.json();
        } else {
          throw new Error('에러 발생!');
        }
      })
      .then(data => {
        if (data.JWT) {
          localStorage.setItem('USERTOKEN', data.JWT);
          alert('로그인 성공! :)');
          navigate('/main');
        } else {
          alert('로그인 실패 :(');
        }
      });
  };

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
            <span className="userEmail">{userEmail}</span>
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
            <button onClick={getToken} className="loginBtn">
              로그인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Password;
