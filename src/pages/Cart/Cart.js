import './Cart.scss';
import { CartList } from './CartList/CartList';

const Cart = () => {
  return (
    <main className="cartPage">
      <section className="cart">
        <div className="freeShipping">
          <h1 className="freeShip">멤버에게 제공되는 무료 배송 서비스</h1>
          <h3 className="freeShipDescript">
            나이키 멤버가 되어 무료배송 서비스를 비롯한 다양한 혜택을
            누려보세요.{' '}
            <a href="#" className="signup">
              가입하기
            </a>{' '}
            또는{' '}
            <a href="#" className="login">
              로그인
            </a>
          </h3>
        </div>
        <div className="cartTitle">장바구니</div>
        <CartList />
        <div className="wishListBox">
          <div className="wishList">위시리스트</div>
          <div className="wishListDescript">
            위시리스트 상품을 보시겠습니까?{' '}
            <a href="#" className="signup">
              가입하기
            </a>{' '}
            또는{' '}
            <a href="#" className="login">
              로그인
            </a>{' '}
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
