import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartList } from './CartList/CartList';
import './Cart.scss';

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  useEffect(() => {
    fetch('/data/cartData.json')
      .then(res => res.json())
      .then(data => setCartList(data));
  }, []);

  return (
    <main className="cart">
      <section className="cartContainer">
        <div className="freeShipping">
          <h1 className="freeShip">멤버에게 제공되는 무료 배송 서비스</h1>
          <h3 className="freeShipDescript">
            나이키 멤버가 되어 무료배송 서비스를 비롯한 다양한 혜택을
            누려보세요.{' '}
            <Link to="#" className="signup">
              가입하기
            </Link>{' '}
            또는{' '}
            <Link to="#" className="login">
              로그인
            </Link>
          </h3>
        </div>
        <div className="cartTitle">장바구니</div>
        {cartList.map(list => {
          return <CartList key={list.id} list={list} />;
        })}
        <div className="wishListBox">
          <div className="wishList">위시리스트</div>
          <div className="wishListDescript">
            위시리스트 상품을 보시겠습니까?{' '}
            <Link to="#" className="signup">
              가입하기
            </Link>{' '}
            또는{' '}
            <Link to="#" className="login">
              로그인
            </Link>{' '}
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
          <img
            src="images/circle-question-solid.png"
            alt="?"
            className="questionIcon"
          />
          <div className="productPriceNumber">479,400원</div>
        </div>
        <div className="shipPriceBox">
          <div className="shipPrice">배송비</div>
          <div className="shipPriceNumber">무료</div>
        </div>
        <div className="totalPriceBox">
          <div className="totalPrice">총 결제 금액</div>
          <div className="totalPriceNumber">479,400원</div>
        </div>
        <div className="btnWrapper">
          <button className="paymentBtn">주문결제</button>
        </div>
      </section>
    </main>
  );
};

export default Cart;
