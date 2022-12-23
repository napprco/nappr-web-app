import { useContext } from 'react';
import { AppContext } from '../../appContext/appContext';

import './napprHome.css';
import NapprHeader from '../../components/NapprHeader/NapprHeader';
import NapprMenu from '../../components/NapprMenu/NapprMenu';

const NapprHome: React.FC = () => {
  return (
    <section className='nappr-home'>
      <NapprHeader />
      <NapprMenu />
    </section>
  );
};

export default NapprHome;
