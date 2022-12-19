import { Link } from 'react-router-dom';

import subscribeIcon from '../../assets/images/Subscribe to podcast.png';
import starIcon from '../../assets/images/Vector.png';

const ChoosePlan: React.FC = () => {
  return (
    <div className='choose-plan'>
      <h1>Choose Your Plan</h1>
      <div className='subscribe-image-container'>
        <img src={subscribeIcon} alt='' className='subscribe-img' />
      </div>
      <section className='plans-container'>
        <article className='single-plan'>
          <h3 className='plan-header'>$99/month</h3>
          <p>10% discount on every nap booking plus some extra features</p>
        </article>
        <article className='single-plan best-plan'>
          <div className='best-plan-flag'>
            <div>
              <img src={starIcon} alt='' />
            </div>
            <p>Best price</p>
          </div>
          <h3 className='plan-header'>$999/year</h3>
          <p>10% discount on every nap booking plus some extra features</p>
        </article>
        <div className='cancel-link-container'>
          <Link to='/' className='cancel-link'>
            Cancel any time
          </Link>
        </div>
        <div className='trial-link-container'>
          <Link to='/signin' className='trial-link'>
            Start Free Trial
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ChoosePlan;
