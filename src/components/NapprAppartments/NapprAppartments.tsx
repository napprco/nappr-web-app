import './napprAppartments.css';
import appartmentOne from '../../assets/images/appartment-1.png';
import appartmentTwo from '../../assets/images/appartment-2.png';

const NapprAppartments: React.FC = () => {
  return (
    <div className='nappr-appartments'>
      <h1 className='appartments-header'>Nearest best recommended to you</h1>
      <section className='appartments'>
        <article className='single-appartment'>
          <img src={appartmentOne} alt='' />
          <div className='arrow-icon-container'>
            <i className='fa fa-angle-right' aria-hidden='true'></i>
          </div>
          <div className='single-appartment-contents'>
            <h3>NH Collection Madison Avenue</h3>
            <p>2 minute walking distance</p>
          </div>
        </article>
        <article className='single-appartment'>
          <img src={appartmentTwo} alt='' />
          <div className='arrow-icon-container'>
            <i className='fa fa-angle-right' aria-hidden='true'></i>
          </div>
          <div className='single-appartment-contents'>
            <h3>Studio Apartment</h3>
            <p>5 minutes drive</p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default NapprAppartments;
