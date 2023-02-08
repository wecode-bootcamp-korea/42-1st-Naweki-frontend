import './Community.scss';
import { communityData } from './data/communityData';

const Community = () => {
  return (
    <>
      {communityData.map(community => (
        <section key={community.id} className="communityBox">
          <img
            url={community.image}
            alt="something"
            className="communityImage"
          />
          <div className="communityInfo">
            <h2 className="communityTitle">{community.title}</h2>
            <p className="communityPara">{community.paragraph}</p>
            <button className="communityBtn">{community.btn}</button>
          </div>
        </section>
      ))}
    </>
  );
};

export default Community;
