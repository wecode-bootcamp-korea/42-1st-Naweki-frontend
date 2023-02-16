// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Container from './components/Container/Container';
// import Main from './pages/Main/Main';
// import SignUp from './pages/SignUp/SignUp';
// import ProductList from './pages/ProductList/ProductList';
// import ProductDetail from './pages/ProductDetail/ProductDetail';
// import Cart from './pages/Cart/Cart';
// import Payment from './pages/Payment/Payment';
// import Login from './pages/Login/Login/Login';
// import NewUser from './pages/Login/NewUser/NewUser';
// import Password from './pages/Login/Password/Password';

// const Router = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route element={<Container />}>
//           <Route path="/" element={<Main />} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/product-list" element={<ProductList />} />
//           <Route path="/product-detail" element={<ProductDetail />} />
//           <Route path="/cart" element={<Cart />} />
//         </Route>
//         <Route path="/payment" element={<Payment />} />
//         {/* TODO: 추후에 추가예정; Nav 변경, Footer는 포함 */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/newuser" element={<NewUser />} />
//         <Route path="/password" element={<Password />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default Router;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from './components/Container/Container';
import Main from './pages/Main/Main';
import SignUp from './pages/SignUp/SignUp';
import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Cart from './pages/Cart/Cart';
import PaymentContainer from './components/Container/PaymentContainer';
import Payment from './pages/Payment/Payment';
import Login from './pages/Login/Login/Login';
import NewUser from './pages/Login/NewUser/NewUser';
import Password from './pages/Login/Password/Password';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Container />}>
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product-detail" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route element={<PaymentContainer />}>
          <Route path="/payment" element={<Payment />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/newuser" element={<NewUser />} />
        <Route path="/password" element={<Password />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
