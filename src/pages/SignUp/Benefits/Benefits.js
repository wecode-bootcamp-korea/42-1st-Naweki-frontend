import './Benefits.scss';
import { benefitData } from './data/benefitData';

const Benefits = () => {
  return (
    <>
      {benefitData.map(benefit => (
        <span className="benefitBox" key={benefit.id}>
          <img className="benefitImage" url={benefit.image} alt="something" />
          <div className="benefitInfo">
            <h2 className="benefitTitle">{benefit.title}</h2>
            <p className="benefitPara">{benefit.paragraph}</p>
            <button className="benefitBtn">{benefit.btn}</button>
          </div>
        </span>
      ))}
    </>
  );
};

export default Benefits;
