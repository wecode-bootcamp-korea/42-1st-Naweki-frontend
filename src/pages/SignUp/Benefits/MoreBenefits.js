import './MoreBenefits.scss';
import { moreBenefitData } from './data/moreBenefitData';

const moreBenefits = () => {
  return (
    <>
      {moreBenefitData.map(moreBenefit => (
        <section key={moreBenefit.id} className="moreBenefitBox">
          <img
            url={moreBenefit.image}
            alt="something"
            className="moreBenefitImage"
          />
          <div className="moreBenefitInfo">
            <h2 className="moreBenefitTitle">{moreBenefit.title}</h2>
            <p className="moreBenefitPara">{moreBenefit.paragraph}</p>
            <button className="moreBenefitBtn">{moreBenefit.btn}</button>
          </div>
        </section>
      ))}
    </>
  );
};

export default moreBenefits;
