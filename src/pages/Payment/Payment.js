// import React, { useState, useEffect } from 'react';
// import Guest from './GuestPayment/GuestStart/GuestStart';
// import PaymentOption from './PaymentOption/PaymentOption';
// import PaymentOptionInput from './GuestPayment/GuestDeliveryOptionInput/GusetDeliveryOptionInput';
// import PaymentAside from './PaymentAside/PaymentAside';
// import PaymentBox from './PaymentSelect/PaymentSelect';
// import PaymentCompleted from './GuestPayment/PaymentCompleted/PaymentCompleted';
// import './Payment.scss';

// const Payment = () => {
//   const [showData, setShowData] = useState(false);
//   const [userData, setUserData] = useState([]);
//   const [clickPayment, setClickPayment] = useState(true);
//   const [clickOrder, setClickOrder] = useState(true);

//   useEffect(() => {
//     (async () => {
//       const res = await fetch('data/userData.json');
//       const data = await res.json();
//       setUserData(data);
//     })();
//   }, []);

//   const [userData, setUserData] = useState({
//     first_name: '',
//     last_name: '',
//     email: '',
//     phone_number: '',
//     province: '',
//     city: '',
//     zip_code: '',
//   });

//   const onChangePaymentInput = event => {
//     const { name, value } = event.target;
//     setUserData(prev => {
//       return { ...prev, [name]: value };
//     });
//   };

//   return (
//     <div className="payment">
//       {userData.id === null ? (
//         <Guest />
//       ) : (
//         <>
//           <p className="paymentParagraph">결제하기</p>
//           <div className="contentWrapper">
//               {showData ? (
//                 <PaymentOption data={userData} />
//               ) : (
//                 <PaymentOptionInput setShowData={setShowData} />
//               )}
//               <hr />
//               <PaymentBox />
//               <hr />
//               <PaymentCompleted />
//             </div>
//             <PaymentAside />
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Payment;

import React from 'react';
import GuestPayment from './GuestPayment/GuestPayment';
import MemberPayment from './MemberPayment/MemberPayment';

const Payment = () => {
  return (
    <div className="payment">
      {/* <GuestPayment /> */}
      <MemberPayment />
    </div>
  );
};

export default Payment;
