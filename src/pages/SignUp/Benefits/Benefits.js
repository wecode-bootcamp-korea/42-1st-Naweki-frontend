import './Benefits.scss';
import { BENEFIT_DATA } from './data/benefitData';

const Benefits = () => {
  return (
    <>
      {BENEFIT_DATA.map(benefit => (
        <article className="benefitBox" key={benefit.id}>
          <div className="imageWrapper">
            <img className="benefitImage" src={benefit.image} alt="something" />
          </div>
          <div className="benefitInfo">
            <h2 className="benefitTitle">{benefit.title}</h2>
            <p className="benefitPara">{benefit.paragraph}</p>
            <button className="benefitBtn">{benefit.btn}</button>
          </div>
        </article>
      ))}
    </>
  );
};

export default Benefits;
