import { useState } from 'react';
import { INPUT_DATA } from './InputData/InputData.js';
import './Input.scss';

export const Input = () => {
  const [user, setUser] = useState('');
  const onChange = e => {
    setUser(e.target.value);
  };
  const [isValid, setIsValid] = useState(true);

  const isName = () => {
    return user.length > 0 ? setIsValid(true) : setIsValid(false);
  };

  return (
    <form className="inputBox">
      {INPUT_DATA.map(list => {
        return (
          <input
            key={list.id}
            type="text"
            className={Error ? 'newUserInputValid' : 'newUserInputInvalid'}
            placeholder={list.placeholder}
            onChange={onChange}
            onKeyUp={isName}
          />
        );
      })}
      <label htmlFor="newUser" />
      <div className={isValid ? 'none' : 'warning'}>필수</div>
    </form>
  );
};
