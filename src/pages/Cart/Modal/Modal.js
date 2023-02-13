import './Modal.scss';

export const Modal = () => {
  return (
    <div className="modalBox">
      <div className="pointer" />
      <div className="modalPara">
        상품 금액은 프로모션 코드 적용 전, 배송비를 제외한 총 주문 금액입니다.
      </div>
    </div>
  );
};
