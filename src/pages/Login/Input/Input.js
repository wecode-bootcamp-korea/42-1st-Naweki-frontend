import { useState } from 'react';
import { INPUT_DATA } from './InputData/InputData.js';
import './Input.scss';

export const Input = () => {
  const [user, setUser] = useState('');
  const onChange = e => {
    setUser(e.target.value);
  };
  const [Error, setError] = useState(true);

  const is = () => {
    return user.length > 0 ? setError(true) : setError(false);
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
            onKeyUp={is}
          />
        );
      })}
      <label htmlFor="newUser" />
      <div className={Error ? 'None' : 'warning'}>필수</div>
    </form>
  );
};
