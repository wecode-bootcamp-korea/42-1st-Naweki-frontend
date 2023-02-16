import { useState } from 'react';
import './Input.scss';

export const Input = ({ list, inputHandler }) => {
  const [user, setUser] = useState('');
  const onChange = e => {
    setUser(e.target.value);
    inputHandler(e);
  };
  const [isValid, setIsValid] = useState(true);

  const isName = () => {
    return user.length > 0 ? setIsValid(true) : setIsValid(false);
  };

  return (
    <div className="inputBox">
      <input
        type="text"
        className={isValid ? 'inputValid' : 'inputInvalid'}
        placeholder={list.placeholder}
        onChange={onChange}
        onKeyUp={isName}
        name={list.name}
      />
      <label htmlFor="newUser" />
      <div className={isValid ? 'none' : 'warning'}>필수</div>
    </div>
  );
};
