import './homeDetails.css';
import homeBgImg from '../../assets/images/home-bg.png';

const HomeDetails: React.FC = () => {
  return (
    <div className='home-details'>
      <div className='banner-item'>
        <img src={homeBgImg} alt='' />
        <p>Let your choice do the booking</p>
      </div>
    </div>
  );
};

export default HomeDetails;
