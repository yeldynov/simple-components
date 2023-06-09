import { GoBell, GoGlobe, GoHeart } from 'react-icons/go';

import Button from '../components/Button';

function ButtonPage() {
  return (
    <div className='m-5'>
      <div>
        <Button secondary rounded className='mb-5'>
          <GoBell />
          Buy Now
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoGlobe />
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary>
          <GoHeart />
          MEEEEEE!
        </Button>
      </div>
      <div>
        <Button warning>Click ME!</Button>
      </div>
      <div>
        <Button secondary outline rounded>
          SOMENTHIS!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
