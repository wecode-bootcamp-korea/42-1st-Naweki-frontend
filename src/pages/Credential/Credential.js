import React from 'react';
import './Credential.scss';
import Email from './Email/Email';
import NewUser from './NewUser/NewUser';
import Password from './Password/Password';

function Credential() {
  return (
    <div>
      {/* <Email /> */}
      <NewUser />
      {/* <Password /> */}
    </div>
  );
}

export default Credential;
