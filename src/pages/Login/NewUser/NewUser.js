import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Input } from '../Input/Input.js';
import { INPUT_DATA } from '../Input/InputData/InputData.js';
import './NewUser.scss';

const NewUser = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/login');
  };
  const location = useLocation();
  const userEmail = location?.state?.title;

  const [userInfo, setUserInfo] = useState({
    lastName: '',
    firstName: '',
    userPw: '',
    userPreference: '',
    userBday: '',
  });
  const inputHandler = e => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const sendInfo = () => {
    fetch('http://10.58.52.69:3000/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        email: userEmail,
        password: userInfo.userPw,
        shoppingPreference: userInfo.userPreference,
        birthday: userInfo.userBday,
      }),
    })
      .then(res => res.json())
      .then(response => {
        if (response.message === 'SIGNUP_SUCCESS') {
          alert('회원가입 완료! :)');
          navigate('/main');
        }
      });
  };

  return (
    <div className="newUser">
      <div className="newUserBox">
        <header className="header">
          <div className="logoBox">
            <img
              className="swooshLogo"
              src="./images/swoosh-logo.jpg"
              alt="swoosh logo"
            />
          </div>
          <h1 className="newUserGuide">이제 나이키 멤버가 되어볼까요?</h1>
          <div className="codeSent">인증코드를 전송했습니다.</div>
        </header>
        <div className="newUserEmailBox">
          <div className="newUserEmail">{userEmail}</div>
          <button onClick={goToLogin} className="edit">
            편집
          </button>
        </div>
        <div className="signupContainer">
          <div className="nameBox">
            {INPUT_DATA.map(list => {
              return (
                <Input key={list.id} list={list} inputHandler={inputHandler} />
              );
            })}
          </div>
          <div className="newUserPwdBox">
            <form className="pwdInputBox">
              <input
                name="userPw"
                onChange={inputHandler}
                type="text"
                className="pwdInput"
                placeholder="비밀번호"
              />
              <label htmlFor="newUserPwd" />
            </form>
            <div className="pwdRules">
              <ul className="numbers">X 최소 8자</ul>
              <ul className="characters">
                X 알파벳 대문자 및 소문자 조합, 최소 1개 이상의 숫자
              </ul>
            </div>
          </div>
          <div className="defaultShopping">
            <select name="userPreference" onChange={inputHandler}>
              <option value="">쇼핑 기본 설정</option>
              <option value="men">남성용</option>
              <option value="women">여성용</option>
            </select>
          </div>
          <div className="newUserBirth">
            <input
              onChange={inputHandler}
              name="userBday"
              type="date"
              className="newUserBirthInput"
              placeholder="생년월일"
            />
            <div className="getReward">
              생일에 나이키 멤버 리워드를 받으세요.
            </div>
          </div>
          <section className="agreeCheckBox">
            <input type="checkbox" className="agreeCheck" />
            <span className="agreeGuide">
              나이키의{' '}
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
              에 동의합니다.
            </span>
          </section>
          <div className="createUserBtnBox">
            <button onClick={sendInfo} className="createUserBtn">
              계정 만들기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
