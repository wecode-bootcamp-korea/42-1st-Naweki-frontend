import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { CartList } from './CartList/CartList';
import { Modal } from './Modal/Modal';
import '../../components/RecommendItem/RecommendItem';
import './Cart.scss';
import RecommendItem from '../../components/RecommendItem/RecommendItem';

const Cart = () => {
  const [cartList, setCartList] = useState([]);
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

  const price = cartList
    .map(product => product.discountPrice)
    .reduce((prev, curr) => prev + curr, 0);
  const totalPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const [modal, setModal] = useState(false);

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
  const navigate = useNavigate();
  const goToPayment = () => {
    navigate('/payment');
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
    <>
      <main className="cart">
        <section className="cartContainer">
          <div className="freeShipping">
            <h1 className="freeShip">???????????? ???????????? ?????? ?????? ?????????</h1>
            <h3 className="freeShipDescript">
              ????????? ????????? ?????? ???????????? ???????????? ????????? ????????? ?????????
              ???????????????.{' '}
              <NavLink to="#" className="linkSignup">
                ????????????
              </NavLink>{' '}
              ??????{' '}
              <NavLink to="#" className="linkLogin">
                ?????????
              </NavLink>
            </h3>
          </div>
          <div className="cartTitle">????????????</div>
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
            <div className="wishList">???????????????</div>
            <div className="wishListDescript">
              ??????????????? ????????? ???????????????????{' '}
              <NavLink to="#" className="linkSignup">
                ????????????
              </NavLink>{' '}
              ??????{' '}
              <NavLink to="#" className="linkLogin">
                ?????????
              </NavLink>{' '}
            </div>
          </div>
        </section>
        <section className="payment">
          <h1 className="payList">?????? ??????</h1>
          <div className="promotionSelect">???????????? ????????? ????????????????</div>
          <div className="selectWrapper">
            <input type="text" className="promotionInput" />
            <button className="promotionBtn">??????</button>
          </div>
          <div className="productPriceBox">
            <div className="productPrice">?????? ??????</div>
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
            <div className="productPriceNumber">{totalPrice}???</div>
          </div>
          {modal === true ? <Modal /> : null}
          <div className="shipPriceBox">
            <div className="shipPrice">?????????</div>
            <div className="shipPriceNumber">??????</div>
          </div>
          <div className="totalPriceBox">
            <div className="totalPrice">??? ?????? ??????</div>
            <div className="totalPriceNumber">{totalPrice}???</div>
          </div>
          <div className="btnWrapper">
            <button onClick={goToPayment} className="paymentBtn">
              ????????????
            </button>
          </div>
        </section>
      </main>
      <div className="recommendBox">
        <RecommendItem />
      </div>
    </>
  );
};

export default Cart;
