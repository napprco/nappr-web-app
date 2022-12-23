import NapprFooter from '../../components/NapprFooter/NapprFooter';

import './napprHome.css';
import NapprHeader from '../../components/NapprHeader/NapprHeader';
import NapprMenu from '../../components/NapprMenu/NapprMenu';

const NapprHome: React.FC = () => {
  return (
    <section className='nappr-home'>
      <NapprHeader />
      <NapprMenu />
      <NapprFooter imageSource='../../assets/images/Referee Jersey.png' />
    </section>
  );
};

export default NapprHome;
