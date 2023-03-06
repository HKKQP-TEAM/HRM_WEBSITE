import { FC } from 'react';

import { useLocales } from '~/hooks';

const Home: FC = () => {
  const { translate } = useLocales();
  return <div>{translate('Homepage')}</div>;
};

export default Home;
