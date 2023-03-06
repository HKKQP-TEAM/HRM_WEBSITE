import { ReactNode, useEffect } from 'react';

import { useLocales } from '~/hooks';

const LocalesProvider = ({ children }: { children: ReactNode }) => {
  const { onChangeLanguage } = useLocales();

  useEffect(() => {
    const localeValue = localStorage.getItem('i18n') || 'en';

    onChangeLanguage(localeValue);
  }, []);

  return <>{children}</>;
};

export { LocalesProvider };
