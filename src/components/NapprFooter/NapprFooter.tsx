import './napprFooter.css';
import inboxIcon from '../../assets/images/inbox-icon.png';
import referralIcon from '../../assets/images/Referee Jersey.png';
import napsIcon from '../../assets/images/Sleeping in Bed.png';
import exploreIcon from '../../assets/images/explore-icon.png';

import { NapprFooterProps } from '../../utils/types';

const NapprFooter: React.FC<NapprFooterProps> = ({ imageSource }) => {
  return (
    <section className='nappr-footer'>
      <article className='footer-single-icon'>
        <img src={exploreIcon} alt='' />
      </article>
      <article className='footer-single-icon'>
        <img src={referralIcon} alt='' />
      </article>
      <article className='footer-single-icon'>
        <img src={napsIcon} alt='' />
      </article>
      <article className='footer-single-icon'>
        <img src={inboxIcon} alt='' />
      </article>
    </section>
  );
};

export default NapprFooter;
