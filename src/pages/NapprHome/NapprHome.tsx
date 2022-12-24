import NapprFooter from '../../components/NapprFooter/NapprFooter';

import './napprHome.css';
import NapprHeader from '../../components/NapprHeader/NapprHeader';
import NapprMenu from '../../components/NapprMenu/NapprMenu';
import HomeDetails from '../../components/HomeDetails/HomeDetails';
import Button from '../../components/Button/Button';
import NapprAppartments from '../../components/NapprAppartments/NapprAppartments';

const NapprHome: React.FC = () => {
  return (
    <section className='nappr-home'>
      <NapprHeader />
      <NapprMenu />
      <HomeDetails />
      <NapprFooter />
      <Button text='I am Flexible' />
      <NapprAppartments />
    </section>
  );
};

export default NapprHome;
