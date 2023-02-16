import React, { useEffect, useState } from 'react';
import FreeDelivery from './FreeDelivery/FreeDelivery';
import Modal from 'react-modal';
import './ProductDetail.scss';

Modal.setAppElement('#root');

function ProductDetail() {
  const [visible, setVisible] = useState(false);
  const [heart, setHeart] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  // const [thumbnailImage, setThumbnailImage] = useState('');
  const [productData, setProductData] = useState(null);
  // const [addToCart, setAddToCart] = useState(false);
  const [size, setSize] = useState()

  const onClickBtn = () => {
    setHeart(!heart);
    setIsModalOpen(true);
    setIsActive(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // const addToCart = () => {
  //   setAddToCart(true);
  // };

  // setThumbnailImage(data.product.thumbnailImage

  useEffect(() => {
    fetch('http://10.58.52.243:8000/products/1', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProductData(data);
      });
  }, []);

  if (productData === null) {
    return <div>Data Loding...</div>;
  }

  const product = productData.product;

  return (
    <>
    <div>
      <div className="productDetail">
        <div className="productDetailImges">
          <div className="detailImgVideo">
            <div className="detailImgsRow">
              <img
                className="productImgRowTop"
                src={product.thumbnailImage}
                // src="https://cdn.pixabay.com/photo/2020/07/15/18/31/sneakers-5408669_1280.png"
                alt="제품 상세 이미지"
                // onClick={colorClick}
              />
              <img
                className="productImgRowBottom"
                src={product.imageUrl}
                // src="/images/상세3.jpg"
                alt="제품 상세 이미지"
              />
            </div>

            <video
              className="productVideo"
              autoplay="autoplay"
              muted="muted"
              loop=""
            >
              <source src="images/downdetail.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="detailImgsColumn">
            <img
              className="detailImgColumnLeft"
              src={product.imageUrl}
              // src="/images/상세1.jpg"
              alt="제품 상세 이미지"
            />
            <img
              className="detailImgColumnRight"
              src={product.imageUrl}
              // src="/images/상세2.jpg"
              alt="제품 상세 이미지"
            />
          </div>
        </div>
        <div className="productInfoContainer">
          <div className="productInfoContainer">
            <div className="productInfo">
              <div className="productName">{product.name}</div>
              {/* <div className="productName">나위키 에얼 포스 1 '03</div> */}
              <div className="productCategory">{product.subName}</div>
              {/* <div className="productCategory">여성 신발</div> */}
              <div className="priceContainer">
                <div className="productPrice">{product.price}원</div>
                {/* <div className="productPrice">125,100 원</div> */}
                <div className="originalPrice">139,000 원</div>
              </div>
            </div>
            <div className="otherColorContainer">
              <img
                className="otherColorBlack"
                // src={product.thumbnailImage}
                src="/images/에얼포스블랙.jpg"
                alt="나위키 에얼 포스 1 '03 블랙"
                // onClick={colorClick}
              />
              <img
                className="otherColorPink"
                // src={product.thumbnailImage}
                src="https://images.unsplash.com/photo-1608667508764-33cf0726b13a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNuZWFrZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                alt="나위키 에얼 포스 1 '03 핑크"
                // onClick={colorClick}
              />
              <img
                className="otherColorBlue"
                // src={product.thumbnailImage}
                src="https://cdn.pixabay.com/photo/2020/07/15/18/32/sneakers-5408674_1280.png"
                alt="나위키 에얼 포스 1 '03 블루"
                // onClick={colorClick}
              />
            </div>
            <div className="sizeInfo">
              <div className="sizeHeader">
                <div className="sizeChoice">사이즈 선택</div>
                <div className="sizeGuide">사이즈 가이드</div>
              </div>

              <div className="sizeContainer">
                <div className="sizeBox">
                  {product.stock.map(size => (
                    <div key={size.id} className="size">
                      {size.size}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="btnContainer">
              <button
                className={`cartBtn ${isActive ? 'avtice' : ''}`}
                disabled={!isActive}
                onClick={
                  fetch('http://10.58.52.243:8000/products/1', {
                    method: 'POST',
                    body: JSON.stringify({
                      currentColor : product.currentColor,
                      size:
                  })
                  .then(res => res.json())
                  .then(data => )
                }
              >
                장바구니
              </button>
              <button className="wishListBtn" onClick={onClickBtn}>
                위시리스트 &nbsp;
                <img
                  className="emptyHeartImg"
                  src={
                    heart
                      ? 'https://cdn-icons-png.flaticon.com/128/1077/1077035.png'
                      : 'https://cdn-icons-png.flaticon.com/128/1077/1077086.png'
                  }
                  alt="빈 하트"
                />
              </button>
            </div>
            <div className="description">
              <span className="descriptionTop">
                빛이 그대로 살아 있는 나위키 에얼 포스 1 '03은 농구 아이콘의
                익숙한 디자인을 신선하게 재해석합니다. 산뜻한 가죽과 과감한
                컬러, 딱 완벽할 만큼의 화려함으로 빛나는 존재감을 발휘해 보세요.
              </span>
              <ul className="descriptionBottom">
                <li className="colorDescription">
                  현재 컬러 : {product.currentColor}
                </li>
                <li className="styleDescription">
                  스타일 : {product.styleCode}
                </li>
              </ul>
              <div className="detailDescription">상품 상세 정보 보기</div>
              <div className="detailService">
                <button
                  className="freeDelivery"
                  onClick={() => {
                    setVisible(!visible);
                  }}
                >
                  {visible
                    ? '무료 배송 및 반품 위쪽 화살표'
                    : '무료 배송 및 반품 아래 화살표'}
                  {visible && <FreeDelivery />}
                </button>
                <button className="review">리뷰 (3712) </button>
                <button className="moreInfo">추가 정보</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestclose={() => setIsModalOpen(false)}
        contentLabel="Example Modal"
        className="cart-modal-wrapper"
      >
        <div className="modal">
          <div className="modalBody">
            <div className="location">위시리스트에 추가되었습니다</div>
            <button className="modalClose" onClick={closeModal}>
              X
            </button>

            <img
              className="wishListImg"
              src="../../../images/에얼포스블랙.jpg"
              alt="에얼포스 블랙"
            />
            <div className="wishListProduct">나위키 에얼포스 블랙</div>
            <div className="wishlistCategory">남성 신발</div>
            <div className="wishlistPrice">149,000원</div>
            <button className="seeWishlist">위시리스트 보기</button>
          </div>
        </div>
      </Modal>
    </>
  );
}
// const product = productData.product;

// 장바구니 담기
// const addProductToCart = () => {
//   if (!!token) {
//     fetch(API.cart, {
//       method : 'POST',
//       headers : {

//       },
//       body: JSON.stringify({
//         id:
//         name :
//         subName:
//         price:
//         currentColor:
//       }),
//     })
//       .then (res => res.json())
//       .then (res => {

//       })
//   }
// };

export default ProductDetail;
