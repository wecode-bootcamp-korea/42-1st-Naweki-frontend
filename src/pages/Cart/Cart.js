import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { CartList } from './CartList/CartList';
import { Modal } from './Modal/Modal';
import './Cart.scss';

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  // mock data용 fetch
  // useEffect(() => {
  //   fetch('/data/cartData.json')
  //     .then(res => res.json())
  //     .then(data => setCartList(data));
  // }, []);

  // cart API 전달 받으면 데이터 조회용으로 사용 예정인 코드
  useEffect(() => {
    fetch('http://10.58.52.243:8000/cart/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('userToken'),
      },
    })
      .then(res => res.json())
      .then(data => setCartList(data));
  }, []);
  console.log(cartList);

  const price = cartList
    .map(product => product.discountPrice)
    .reduce((prev, curr) => prev + curr, 0);
  const totalPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const [modal, setModal] = useState(false);

  // mock data용 handleDelete
  // const handleDelete = targetId => {
  //   const newCartList = cartList.filter(data => data.cartItemId !== targetId);
  //   setCartList(newCartList);
  // };
  // cart API 전달 받으면 데이터 삭제용으로 사용 예정인 코드
  const handleDelete = targetId => {
    fetch(`http://10.58.52.243:8000/cart/${targetId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('userToken'),
      },
    });
    setCartList(cartList.filter(cart => cart.cartItemId !== targetId));
  };

  const [size, setSize] = useState('');
  const [howMany, setHowMany] = useState('');

  const sendProductSize = () => {
    fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('userToken'),
      },
      body: JSON.stringify({ size: size }),
    }).then(res => res.json());
  };

  const sendProductStock = () => {
    fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('userToken'),
      },
      body: JSON.stringify({ stock: howMany }),
    }).then(res => res.json());
  };

  return (
    <main className="cart">
      <section className="cartContainer">
        <div className="freeShipping">
          <h1 className="freeShip">멤버에게 제공되는 무료 배송 서비스</h1>
          <h3 className="freeShipDescript">
            나이키 멤버가 되어 무료배송 서비스를 비롯한 다양한 혜택을
            누려보세요.{' '}
            <NavLink to="#" className="linkSignup">
              가입하기
            </NavLink>{' '}
            또는{' '}
            <NavLink to="#" className="linkLogin">
              로그인
            </NavLink>
          </h3>
        </div>
        <div className="cartTitle">장바구니</div>
        {cartList.map(list => {
          return (
            <CartList
              key={list.id}
              list={list}
              handleDelete={handleDelete}
              setSize={setSize}
              setHowMany={setHowMany}
              sendProductSize={sendProductSize}
              sendProductStock={sendProductStock}
            />
          );
        })}
        <div className="wishListBox">
          <div className="wishList">위시리스트</div>
          <div className="wishListDescript">
            위시리스트 상품을 보시겠습니까?{' '}
            <NavLink to="#" className="linkSignup">
              가입하기
            </NavLink>{' '}
            또는{' '}
            <NavLink to="#" className="linkLogin">
              로그인
            </NavLink>{' '}
          </div>
        </div>
      </section>
      <section className="payment">
        <h1 className="payList">주문 내역</h1>
        <div className="promotionSelect">프로모션 코드가 있으신가요?</div>
        <div className="selectWrapper">
          <input type="text" className="promotionInput" />
          <button className="promotionBtn">적용</button>
        </div>
        <div className="productPriceBox">
          <div className="productPrice">상품 금액</div>
          <button
            onClick={() => {
              setModal(true);
            }}
            type="button"
            className="questionIconBtn"
          >
            <img
              src="images/circle-question-solid.png"
              alt="?"
              className="questionIcon"
            />
          </button>
          <div className="productPriceNumber">{totalPrice}원</div>
        </div>
        {modal === true ? <Modal /> : null}
        <div className="shipPriceBox">
          <div className="shipPrice">배송비</div>
          <div className="shipPriceNumber">무료</div>
        </div>
        <div className="totalPriceBox">
          <div className="totalPrice">총 결제 금액</div>
          <div className="totalPriceNumber">{totalPrice}원</div>
        </div>
        <div className="btnWrapper">
          <button className="paymentBtn">주문결제</button>
        </div>
      </section>
    </main>
  );
};

export default Cart;
